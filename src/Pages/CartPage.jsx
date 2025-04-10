import React from "react";
import { useCart } from "../components/context/CartContext"; // Import Cart Context
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Add some products before checking out! 🛒");
            return;
        }
        navigate("/checkout");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-2 translate-y-[-4rem]">Your Cart</h1>

            {cart.length === 0 ? (
                <p className="text-gray-500 text-center translate-y-[-4rem] ">Your cart is empty.
                <img src="https://www.asianfootwears.com/_next/image?url=https%3A%2F%2Fs3-ap-southeast-1.amazonaws.com%2Fasianapp%2Fdigital-website%2FEmpty%20Cart_46339935680432126925.png&w=828&q=75" className="w-[30rem] h-[20rem]"/></p>
            ) : (
                <div className="w-full max-w-2xl">
                    {cart.map((product, index) => (
                        <div key={index} className="border p-4 mb-4 rounded-lg shadow-md flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={product.img1} alt={product.title} className="w-20 h-20 object-cover rounded-md" />
                                <div className="ml-4">
                                    <h2 className="text-lg font-medium">{product.title}</h2>
                                    <p className="text-gray-500">{product.description}</p>
                                    <p className="text-black font-semibold">₹ {product.price}.00</p>
                                </div>
                            </div>
                            <button
                                className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                                onClick={() => removeFromCart(product.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={clearCart}
                            className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-900"
                        >
                            Clear Cart
                        </button>

                        <button
                            onClick={handleCheckout}
                            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-800"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;


