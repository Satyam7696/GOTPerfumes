import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load cart from localStorage when the app starts
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        toast.success(`${product.title} added to cart! 🛒`);
    };

    const removeFromCart = (productId) => {
        const product = cart.find((item) => item.id === productId);
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
        if (product) {
            toast.error(`${product.title} removed from cart! ❌`);
        }
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
        toast.success("Cart cleared successfully! 🛒");
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);




