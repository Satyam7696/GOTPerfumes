import { useEffect, useState } from "react";
import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import cas1 from '../../../assets/Sigmamale.jpg';
import cas2 from '../../../assets/Alphafemale.jpg';
import cas3 from '../../../assets/Honeyoud.jpg';
import cas4 from '../../../assets/Sigmamale.jpg';
import cas5 from '../../../assets/Honeyoud.jpg';
import cas6 from '../../../assets/Alphafemale.jpg';
import cas7 from '../../../assets/Honeyoud.jpg';
import cas8 from '../../../assets/Sigmamale.jpg';
import cas9 from '../../../assets/Alphafemale.jpg';
import cas10 from '../../../assets/Honeyoud.jpg';
import cas11 from '../../../assets/Alphafemale.jpg';
import cas12 from '../../../assets/Sigmamale.jpg';
import { CiHeart } from "react-icons/ci"; // Default (not in wishlist)
// import { FaHeart } from "react-icons/fa"; // Filled (in wishlist)


// Move the card data outside of the component for optimization
const cardsData = [
    { id: 1, img: cas1, title: 'SIGMA MALE', price: 449 , strike:'₹ 799', off:'(30% off)', gender: 'Mens' },
    { id: 2, img: cas2, title: 'ALPHA FEMALE', strike:'₹ 799', off:'(30% off)', price: 449, gender: 'Womens' },
    { id: 3, img: cas3, title: 'HONEY OUD', price: 449,strike:'₹ 799', off:'(30% off)', gender: 'Unisex' },
    { id: 4, img: cas4, title: 'SIGMA MALE', price: 449,strike:'₹ 799', off:'(30% off)', gender: 'Mens' },
    { id: 5, img: cas5, title: 'HONEY OUD', price: 449, strike:'₹ 799', off:'(30% off)',gender: 'Unisex' },
    { id: 6, img: cas6, title: 'ALPHA FEMALE', price: 449, strike:'₹ 799', off:'(30% off)', gender: 'Womens'},
    { id: 7, img: cas7, title: 'HONEY OUD', price: 449, strike:'₹ 799', off:'(30% off)', gender: 'Unisex'},
    { id: 8, img: cas8, title: 'SIGMA MALE', price: 449, strike:'₹ 799', off:'(30% off)', gender: 'Mens'},
    { id: 9, img: cas9, title: 'ALPHA FEMALE', price: 449, strike:'₹ 799', off:'(30% off)', gender: 'Woems'},
    { id: 10, img: cas10, title: 'HONEY OUD', price: 449, strike:'₹ 799', off:'(30% off)', gender: 'Unisex' },
    { id: 11, img: cas11, title: 'ALPHA FEMALE', price: 449, strike:'₹ 799', off:'(30% off)', gender: 'Womens' },
    { id: 12, img: cas12, title: 'SIGMA MALE', price: 449, strike:'₹ 799', off:'(30% off)',gender: 'Mens' },
];

const Perfumes1 = ({ sortOption, selectedGenders, selectedPrice }) => {
    const [loading, setLoading] = useState(false);
    const [wishlist, setWishlist] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist);
    }, []);

    const toggleWishlist = (product) => {
        let updatedWishlist;
        if (wishlist.some((item) => item.id === product.id)) {
            updatedWishlist = wishlist.filter((item) => item.id !== product.id);
        } else {
            updatedWishlist = [...wishlist, product];
        }

        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Reduced to 1.5 seconds for better UX

        return () => clearTimeout(timer);
    }, [location, sortOption, selectedGenders, selectedPrice]);

    const filterAndSortCards = () => {
        let filteredCards = [...cardsData];

        if (selectedGenders.length > 0) {
            filteredCards = filteredCards.filter(card => selectedGenders.includes(card.gender));
        }

        if (selectedPrice) {
            switch (selectedPrice) {
                case 'Under 1000':
                    filteredCards = filteredCards.filter(card => card.price < 1000);
                    break;
                case '1001-1500':
                    filteredCards = filteredCards.filter(card => card.price >= 1001 && card.price <= 1500);
                    break;
                case '1500-2000':
                    filteredCards = filteredCards.filter(card => card.price >= 1500 && card.price <= 2000);
                    break;
                case 'Above 2000':
                    filteredCards = filteredCards.filter(card => card.price > 2000);
                    break;
                default:
                    break;
            }
        }

        if (sortOption === 'highToLow') {
            filteredCards.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'lowToHigh') {
            filteredCards.sort((a, b) => a.price - b.price);
        }

        return filteredCards;
    };

    return (
        <div className="w-full mx-auto my-2 pl-4 pb-8 mt-[8rem]" id="up2">
            {loading ? (
                <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50 ">
                    <div className="flex items-center space-x-3">
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-500 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591..." fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116..." fill="currentColor" />
                        </svg>
                        <span className="text-gray-600 text-lg font-medium">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filterAndSortCards().map((card) => (
                    <div key={card.id} className="rounded-lg overflow-hidden shadow-lg p-3 border border-gray-300 
                        hover:shadow-xl transition-transform transform hover:scale-105" id="men4">
                        
                        <Link to={`/product-details-page/${card.id}`}>
                            <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
                        </Link>

                        {/* Wishlist Icon - Prevent Page Redirect */}
                        <p 
                            className="absolute top-2 right-2 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent opening details page
                                toggleWishlist(card);
                            }}
                        >
                            <CiHeart 
                                className={`w-[1.5rem] h-[1.5rem] ${wishlist.some(item => item.id === card.id) ? 'text-red-500' : 'text-gray-800'}`} 
                            />
                        </p>

                        <div className="p-4 flex flex-col" id="men11">
                            <h2 className="text-gray-700 text-[14px] font-semibold">{card.title}</h2>
                            <div className="flex space-x-1" id="men12">
                                <p className="text-black font-semibold text-[14px]">₹ {card.price}</p>
                                <p className="text-gray-400 font-medium text-[14px]"><strike>{card.strike}</strike></p>
                                <p className="text-red-500 font-medium text-[14px]"> {card.off}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            )}
        </div>
    );
};

export default Perfumes1;
