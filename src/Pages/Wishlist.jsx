import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist);
    }, []);

    const removeFromWishlist = (id) => {
        const updatedWishlist = wishlist.filter(item => item.id !== id);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    return (
        <div className="w-full mx-auto my-2 mt-4 pl-4 pb-8">
            <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
            {wishlist.length === 0 ? (
                <p className="text-gray-600">No items in your wishlist.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {wishlist.map((item) => (
                        <div key={item.id} className="rounded-lg overflow-hidden shadow-lg p-3 border border-gray-300 hover:shadow-xl">
                            <Link to={`/product-details-page/${item.id}`}>
                                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                            </Link>
                            <div className="p-4">
                                <h2 className="text-gray-700 text-[14px] font-semibold">{item.title}</h2>
                                <button onClick={() => removeFromWishlist(item.id)} className="text-red-500 text-sm">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;

