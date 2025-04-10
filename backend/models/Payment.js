const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    orderId: String,
    paymentId: String,
    email: String,
    amount: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Payment", PaymentSchema);
