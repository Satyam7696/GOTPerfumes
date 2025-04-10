const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    orderId: String,
    paymentId: String,
    email: String,
    amount: Number,
    items: Array, // Store cart items
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
