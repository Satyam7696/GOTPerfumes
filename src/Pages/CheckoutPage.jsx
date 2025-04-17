import React from "react";
import { useCart } from "../components/context/CartContext";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const CheckoutPage = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const totalAmount = cart.reduce((total, item) => total + item.price, 0);

    const handlePayment = async () => {
        const orderData = await fetch("http://localhost:5000/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                amount: totalAmount,
                currency: "INR",
                receipt: `order_rcptid_${Date.now()}`
            })
        }).then(res => res.json());
    
        const options = {
            key: "rzp_test_7w7QCKpVUR09nK",
            amount: orderData.amount,
            currency: orderData.currency,
            order_id: orderData.id,
            name: "Quick Footwears",
            description: "Order Payment",
            handler: async function (response) {
                alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
    
                await fetch("http://localhost:5000/payment-success", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        orderId: response.razorpay_order_id,
                        paymentId: response.razorpay_payment_id,
                        email: "ss8440652@gmail.com",
                        amount: totalAmount
                    })
                });
    
                clearCart();
                navigate("/");
            },
            prefill: {
                name: "Satyam Singh",
                email: "ss8440652@gmail.com",
                contact: "7696198105"
            },
            theme: {
                color: "#3399cc"
            },
            method: {
            upi: true, // Ensure UPI is enabled
            },
        };
    
        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.open();
    };
    

    return (
        <div>
        <div className="p-6 mt-[7rem] w-[50%] mb-4" id="check1">
            <h2 className="text-2xl font-bold mb-4 ">Checkout</h2>

            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty. Add some products before checking out! 🛒</p>
            ) : (
                <div className="border p-4 rounded-lg" id="che1">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b py-2">
                            <p>{item.title}</p>
                            <p>₹ {item.price}.00</p>
                        </div>
                    ))}

                    <div className="flex justify-between font-semibold text-lg mt-4">
                        <p>Total:</p>
                        <p>₹ {totalAmount}.00</p>
                    </div>

                    <button
                        onClick={handlePayment}
                        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 w-[30%] justify-end items-end"
                        id="check2">
                        Pay Now
                    </button>
                </div>
            )}
        </div>

        <div>
            <Footer/>
        </div>
        </div>
    );
};

export default CheckoutPage;
