// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api', otpRoutes);

// app.listen(5000, () => console.log('Server running on port 5000'));

require("dotenv").config();
const express = require("express");
const fs = require("fs");
const PDFDocument = require("pdfkit");
const cors = require("cors");
const otpRoutes = require('./routes/otpRoutes');
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const Payment = require("./models/Payment");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', otpRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

// Razorpay Instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create Order API
app.post("/create-order", async (req, res) => {
    const { amount, currency, receipt } = req.body;

    try {
        const options = {
            amount: amount * 100, // Razorpay works in paise
            currency,
            receipt
        };
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Order creation failed" });
    }
});

// Store Payment in DB & Send Email
const Order = require("./models/Order");

app.post("/payment-success", async (req, res) => {
    const { orderId, paymentId, email, amount, items } = req.body;

    try {
        const order = new Order({ orderId, paymentId, email, amount, items });
        await order.save();

        sendConfirmationEmail(email, paymentId, amount);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Order storing failed" });
    }
});

app.get("/orders/:email", async (req, res) => {
    try {
        const orders = await Order.find({ email: req.params.email }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch orders" });
    }
});


// Send Confirmation Email
const sendConfirmationEmail = async (email, paymentId, amount) => {
    const doc = new PDFDocument();
    const invoicePath = `invoices/invoice_${paymentId}.pdf`;

    // Ensure invoices folder exists
    if (!fs.existsSync("invoices")) {
        fs.mkdirSync("invoices");
    }

    // Generate Invoice PDF
    doc.pipe(fs.createWriteStream(invoicePath));
    doc.fontSize(20).text("Invoice", { align: "center" });
    doc.moveDown();
    doc.fontSize(14).text(`Payment ID: ${paymentId}`);
    doc.text(`Amount: ₹${amount}`);
    doc.text(`Email: ${email}`);
    doc.text(`Date: ${new Date().toLocaleString()}`);
    doc.end();

    // Send Email with PDF Attachment
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Payment Successful - Invoice Attached",
        text: `Your payment of ₹${amount} was successful. Payment ID: ${paymentId}`,
        attachments: [{ filename: `invoice_${paymentId}.pdf`, path: invoicePath }]
    };

    await transporter.sendMail(mailOptions);
};

// Server Start
app.listen(5000, () => console.log("Server running on port 5000"));
