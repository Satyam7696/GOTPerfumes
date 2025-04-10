import React, { useEffect, useState } from "react";

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const userEmail = "customer@example.com"; // Replace with logged-in user's email

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${userEmail}`)
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">Order History</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map((order) => (
                    <div key={order._id} className="border p-4 rounded-lg mb-4 shadow">
                        <p><strong>Order ID:</strong> {order.orderId}</p>
                        <p><strong>Payment ID:</strong> {order.paymentId}</p>
                        <p><strong>Amount:</strong> ₹{order.amount}</p>
                        <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                        <p><strong>Items:</strong></p>
                        <ul>
                            {order.items.map((item, index) => (
                                <li key={index}>{item.title} - ₹{item.price}</li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
};

export default OrderHistory;
