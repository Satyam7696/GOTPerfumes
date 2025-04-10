// import { useEffect, useState } from "react";
// import React from 'react';
// import { useLocation } from "react-router-dom";

// const CasualShoes1 = ({ sortOption, selectedGenders, selectedPrice }) => {
//     const [loading, setLoading] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         setLoading(true);
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, [location, sortOption, selectedGenders, selectedPrice]);

//     const cards = [
//         { id: 1, img: 'https://cdn.asianlive.in/product_assets/airflow-01/cream-black/primary-photo/primary%20photo_88592537651110123511.jpg', title: 'Airflow 01', description: 'Clerance', price: 999, gender: 'Mens', type: 'Casual Shoes' },
//     { id: 2, img: 'https://cdn.asianlive.in/product_assets/airweave-02/navy-slate-pgreen/primary-photo/primary%20photo_76113891999114865438.jpg', title: 'Airwave 02', description: 'Superhit', price: 999, gender: 'Womens', type: 'Sports Shoes' },
//     { id: 3, img: 'https://cdn.asianlive.in/product_assets/hypercushion-01/white-slate/primary-photo/primary%20photo_20493539032504791275.jpg', title: 'Hypercushion 01', description: 'Superhit', price: 899, gender: 'Mens', type: 'Running Shoes' },
//     { id: 4, img: 'https://cdn.asianlive.in/product_assets/metacushion-02/white-orange-blend/primary-photo/primary%20photo_67703698272358630152.jpg', title: 'Metacushion 02', description: 'Running', price: 999, gender: 'Womens', type: 'Sports Shoes' },
//     { id: 5, img: 'https://cdn.asianlive.in/product_assets/twinspring-02/white-pista/primary-photo/primary%20photo_88711252959650388016.jpg', title: 'Twinspring 02', description: 'SuperHit', price: 899, gender: 'Kids', type: 'Casual Shoes' },
    //     { id: 6, img: 'https://cdn.asianlive.in/product_assets/superstar-01/black/primary-photo/primary%20photo_38468568250429343540.jpg', title: 'Superstar 01', description: 'SuperHit', price: 899 },
    //     { id: 7, img: 'https://cdn.asianlive.in/product_assets/carbon-02/black/primary-photo/primary%20photo_14204848291849555119.jpg', title: 'Carbon 02', description: 'Running', price: 999 },
    //     { id: 8, img: 'https://cdn.asianlive.in/product_assets/universe-01/white-mint/primary-photo/primary%20photo_3680796952931366979.jpg', title: 'Universe 01', description: 'Running', price: 899 },
    //     { id: 9, img: 'https://cdn.asianlive.in/product_assets/superkick-02/dark-grey/primary-photo/primary%20photo_39810834419038815955.jpg', title: 'SuperKick 02', description: 'Running', price: 999 },
    //     { id: 10, img: 'https://cdn.asianlive.in/product_assets/chrome-01/light-green/primary-photo/primary%20photo_39954232989280695893.jpg', title: 'Chrome 01', description: 'Running', price: 999 },
    // ];

//     const filterAndSortCards = () => {
//         let filteredCards = [...cards];

//         if (selectedGenders.length > 0) {
//             filteredCards = filteredCards.filter(card => selectedGenders.includes(card.description));
//         }

//         if (selectedPrice) {
//             switch (selectedPrice) {
//                 case 'Under 1000':
//                     filteredCards = filteredCards.filter(card => card.price < 1000);
//                     break;
//                 case '1001-1500':
//                     filteredCards = filteredCards.filter(card => card.price >= 1001 && card.price <= 1500);
//                     break;
//                 case '1500-2000':
//                     filteredCards = filteredCards.filter(card => card.price >= 1500 && card.price <= 2000);
//                     break;
//                 case 'Above 2000':
//                     filteredCards = filteredCards.filter(card => card.price > 2000);
//                     break;
//                 default:
//                     break;
//             }
//         }

//         if (sortOption === 'highToLow') {
//             filteredCards.sort((a, b) => b.price - a.price);
//         } else if (sortOption === 'lowToHigh') {
//             filteredCards.sort((a, b) => a.price - b.price);
//         }

//         return filteredCards;
//     };

//     return (
//         <div className="w-[100%] mx-auto my-2 mt-[10px] pl-4">
//             {loading ? (
//                 <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
//                     <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
//                         <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
//                             <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
//                         </svg>
//                         Loading...
//                     </button>
//                 </div>
//             ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     {filterAndSortCards().map((card) => (
//                         <div key={card.id} className="rounded-lg overflow-hidden shadow-lg p-3 border border-gray-300">
//                             <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
//                             <div className="p-4 mt-[2rem]">
//                                 <h2 className="text-gray-600 text-[12px]">{card.title}</h2>
//                                 <p className="text-[12px] font-medium text-black mt-2">{card.description}</p>
//                                 <p className="text-black font-bold mt-2">₹ {card.price}.00</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CasualShoes1;
//<div key={card.id} className="rounded-lg overflow-hidden shadow-lg p-3 border border-gray-300 
                           // hover:shadow-xl transition-transform transform hover:scale-105"></div> */}

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
import { FaHeart } from "react-icons/fa"; // Filled (in wishlist)


// Move the card data outside of the component for optimization
const cardsData = [
    { id: 1, img: cas1, title: 'SIGMA MALE', price: 299 , strike:'₹ 499', off:'(39% off)', gender: 'Mens', type: 'Casual Shoes' },
    { id: 2, img: cas2, title: 'ALPHA FEMALE', strike:'₹ 499', off:'(39% off)', price: 299, gender: 'Womens', type: 'Casual Shoes' },
    { id: 3, img: cas3, title: 'HONEY OUD', price: 299,strike:'₹ 499', off:'(39% off)', gender: 'Unisex', type: 'Casual Shoes' },
    { id: 4, img: cas4, title: 'SIGMA MALE', price: 299,strike:'₹ 499', off:'(39% off)', gender: 'Mens', type: 'Casual Shoes' },
    { id: 5, img: cas5, title: 'HONEY OUD', price: 299, strike:'₹ 499', off:'(39% off)',gender: 'Unisex', type: 'Casual Shoes' },
    { id: 6, img: cas6, title: 'ALPHA FEMALE', price: 299, strike:'₹ 499', off:'(39% off)', gender: 'Womens', type: 'Casual Shoes' },
    { id: 7, img: cas7, title: 'HONEY OUD', price: 299, strike:'₹ 499', off:'(39% off)', gender: 'Unisex', type: 'Casual Shoes' },
    { id: 8, img: cas8, title: 'SIGMA MALE', price: 299, strike:'₹ 499', off:'(39% off)', gender: 'Mens', type: 'Casual Shoes' },
    { id: 9, img: cas9, title: 'ALPHA FEMALE', price: 299, strike:'₹ 499', off:'(39% off)', gender: 'Woems', type: 'Casual Shoes' },
    { id: 10, img: cas10, title: 'HONEY OUD', price: 299, strike:'₹ 499', off:'(39% off)', gender: 'Unisex', type: 'Casual Shoes' },
    { id: 11, img: cas11, title: 'ALPHA FEMALE', price: 299, strike:'₹ 499', off:'(39% off)', gender: 'Womens', type: 'Casual Shoes' },
    { id: 12, img: cas12, title: 'SIGMA MALE', price: 299, strike:'₹ 499', off:'(39% off)',gender: 'Mens', type: 'Casual Shoes' },
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
