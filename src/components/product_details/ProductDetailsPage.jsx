// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useParams } from "react-router-dom";

// const AirFlow = () => {

//     const [loading, setLoading] = useState(false);
//     const location = useLocation();

    // const ProductData = [
    //     { id: 1, img: 'https://cdn.asianlive.in/product_assets/airflow-01/cream-black/primary-photo/primary%20photo_88592537651110123511.jpg', title: 'Airflow 01', description: 'Clerance', price: 999, gender: 'Mens', type: 'Casual Shoes' },
    //     { id: 2, img: 'https://cdn.asianlive.in/product_assets/airweave-02/navy-slate-pgreen/primary-photo/primary%20photo_76113891999114865438.jpg', title: 'Airwave 02', description: 'Superhit', price: 999, gender: 'Womens', type: 'Sports Shoes' },
    //     { id: 3, img: 'https://cdn.asianlive.in/product_assets/hypercushion-01/white-slate/primary-photo/primary%20photo_20493539032504791275.jpg', title: 'Hypercushion 01', description: 'Superhit', price: 1199, gender: 'Mens', type: 'Running Shoes' },
    //     { id: 4, img: 'https://cdn.asianlive.in/product_assets/metacushion-02/white-orange-blend/primary-photo/primary%20photo_67703698272358630152.jpg', title: 'Metacushion 02', description: 'Running', price: 999, gender: 'Womens', type: 'Sports Shoes' },
    //     { id: 5, img: 'https://cdn.asianlive.in/product_assets/twinspring-02/white-pista/primary-photo/primary%20photo_88711252959650388016.jpg', title: 'Twinspring 02', description: 'SuperHit', price: 899, gender: 'Kids', type: 'Casual Shoes' },
    //     { id: 6, img: 'https://cdn.asianlive.in/product_assets/superstar-01/black/primary-photo/primary%20photo_38468568250429343540.jpg', title: 'Superstar 01', description: 'SuperHit', price: 899, gender: 'Mens', type: 'Casual Shoes' },
    //     { id: 7, img: 'https://cdn.asianlive.in/product_assets/carbon-02/black/primary-photo/primary%20photo_14204848291849555119.jpg', title: 'Carbon 02', description: 'Running', price: 1199, gender: 'Mens', type: 'Casual Shoes' },
    //     { id: 8, img: 'https://cdn.asianlive.in/product_assets/universe-01/white-mint/primary-photo/primary%20photo_3680796952931366979.jpg', title: 'Universe 01', description: 'Running', price: 899, gender: 'Mens', type: 'Running Shoes' },
    //     { id: 9, img: 'https://cdn.asianlive.in/product_assets/superkick-02/dark-grey/primary-photo/primary%20photo_39810834419038815955.jpg', title: 'SuperKick 02', description: 'Running', price: 999, gender: 'Kids', type: 'Casual Shoes' },
    //     { id: 10, img: 'https://cdn.asianlive.in/product_assets/chrome-01/light-green/primary-photo/primary%20photo_39954232989280695893.jpg', title: 'Chrome 01', description: 'Running', price: 999, gender: 'Kids', type: 'Casual Shoes' },
    // ];

//     const { id } = useParams();
//     const product = ProductData.find((item) => item.id === parseInt(id));

//     if (!product) {
//         return <p className="text-center text-red-500 text-lg font-semibold mt-10">Product not found.</p>;
//     }

//     return (
//         <div className="w-[100%] flex items-center justify-center mx-auto p-3 border border-red-600">
//             {loading ? (
//                 <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
//                     <div className="flex items-center space-x-3">
//                         <svg aria-hidden="true" className="w-6 h-6 text-gray-500 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591..." fill="#E5E7EB" />
//                             <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116..." fill="currentColor" />
//                         </svg>
//                         <span className="text-gray-600 text-lg font-medium">Loading...</span>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="w-[90%] flex flex-wrap justify-center mx-auto border border-blue-700">
//                     {ProductData.map((product) => (
//                         <div key={product.id} className="w-[100%] border border-green-600 flex p-3">
//                             {/* left div */}
//                             <div className="w-[80%] flex flex-col">
//                                 <div className="grid grid-cols-2 gap-2">
//                                     <img src={product.img} alt="" className="w-full h-40 object-cover" />
//                                     <img src={product.img} alt="" className="w-full h-40 object-cover" />
//                                 </div>

//                                 <div className="grid grid-cols-2 gap-2">
//                                     <img src={product.img} alt="" className="w-full h-40 object-cover" />
//                                     <img src={product.img} alt="" className="w-full h-40 object-cover" />
//                                 </div>
//                             </div>

//                             {/* right div */}
//                             <div className="w-[20%] items-center justify-start p-3">
//                                 <div className="">
//                                     <h2 className="text-gray-700 text-[14px] font-semibold">{product.title}</h2>
//                                     <p className="text-[12px] text-gray-500 mt-1">{product.description}</p>
//                                     <p className="text-black font-bold mt-2">₹ {product.price}.00</p>
//                                 </div>
//                             </div>

//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AirFlow;

import { useParams } from "react-router-dom";
import React, {useState} from "react";
import { useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import Cart Context
import cas1d from '../../assets/cas1d.jpg';
import cas1d1 from '../../assets/cas1d1.jpg';
import cas1d2 from '../../assets/cas1d2.jpg';
import cas1d3 from '../../assets/cas1d3.jpg';
import cas1d4 from '../../assets/cas1d4.jpg';
import cas2d from '../../assets/cas2d.jpg';
import cas2d1 from '../../assets/cas2d1.jpg';
import cas2d2 from '../../assets/cas2d2.jpg';
import cas2d3 from '../../assets/cas2d3.jpg';
import cas2d4 from '../../assets/cas2d4.jpg';
import cas3d from '../../assets/cas3d.jpg';
import cas3d1 from '../../assets/cas3d1.jpg';
import cas3d2 from '../../assets/cas3d2.jpg';
import cas3d3 from '../../assets/cas3d3.jpg';
import cas3d4 from '../../assets/cas3d4.jpg';
// import { useState } from "react";

const cardsData = [
    { id: 1, img1: cas1d, 
             img2: cas1d1,
             img3: cas1d2,
             img4: cas1d3,
             img5: cas1d4,
             title: 'BOSTON 01', description: 'Asian BOSTON-01 For Mens ', 
             price: '1' , strike: '₹ 1499', off:'(99% off)' , gender: 'Mens', type: 'Casual Shoes' 
    },
    { id: 2, img1: cas2d, 
             img2: cas2d1,
             img3: cas2d2,
             img4: cas2d3,
             img5: cas2d4, 
             title: 'TAEZEN 11', description: 'Superhit', price: 999, gender: 'Mens', type: 'Casual Shoes' 
    },
    { id: 3, img1: cas3d, 
             img2: cas3d1,
             img3: cas3d2,
             img4: cas3d3,
             img5: cas3d4, 
             title: 'MEXICO 11', description: 'Superhit', price: 1199, gender: 'Mens', type: 'Running Shoes' },
    { id: 4, img: 'https://cdn.asianlive.in/product_assets/metacushion-02/white-orange-blend/primary-photo/primary%20photo_67703698272358630152.jpg', title: 'Metacushion 02', description: 'Running', price: 999, gender: 'Womens', type: 'Sports Shoes' },
    { id: 5, img: 'https://cdn.asianlive.in/product_assets/twinspring-02/white-pista/primary-photo/primary%20photo_88711252959650388016.jpg', title: 'Twinspring 02', description: 'SuperHit', price: 899, gender: 'Kids', type: 'Casual Shoes' },
    { id: 6, img: 'https://cdn.asianlive.in/product_assets/superstar-01/black/primary-photo/primary%20photo_38468568250429343540.jpg', title: 'Superstar 01', description: 'SuperHit', price: 899, gender: 'Mens', type: 'Casual Shoes' },
    { id: 7, img: 'https://cdn.asianlive.in/product_assets/carbon-02/black/primary-photo/primary%20photo_14204848291849555119.jpg', title: 'Carbon 02', description: 'Running', price: 1199, gender: 'Mens', type: 'Casual Shoes' },
    { id: 8, img: 'https://cdn.asianlive.in/product_assets/universe-01/white-mint/primary-photo/primary%20photo_3680796952931366979.jpg', title: 'Universe 01', description: 'Running', price: 899, gender: 'Mens', type: 'Running Shoes' },
    { id: 9, img: 'https://cdn.asianlive.in/product_assets/superkick-02/dark-grey/primary-photo/primary%20photo_39810834419038815955.jpg', title: 'SuperKick 02', description: 'Running', price: 999, gender: 'Kids', type: 'Casual Shoes' },
    { id: 10, img: 'https://cdn.asianlive.in/product_assets/chrome-01/light-green/primary-photo/primary%20photo_39954232989280695893.jpg', title: 'Chrome 01', description: 'Running', price: 999, gender: 'Kids', type: 'Casual Shoes' },
];

const ProductDetailsPage = () => {

    const { addToCart } = useCart(); // Get addToCart function
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Reduced to 1.5 seconds for better UX

        return () => clearTimeout(timer);
    }, [location]);
    const { id } = useParams();
    const product = cardsData.find((item) => item.id === parseInt(id));

    if (!product) {
        return <p className="text-center text-red-500 text-lg font-semibold mt-10">Product not found.</p>;
    }

    const handleAddToCart = () => {
        addToCart(product); // Add product to cart
        navigate("/cart"); // Navigate to Cart Page
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 w-[100%]">
            {loading ? (
                <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
                    <div className="flex items-center space-x-3">
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-500 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591..." fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116..." fill="currentColor" />
                        </svg>
                        <span className="text-gray-600 text-lg font-medium">Loading...</span>
                    </div>
                </div>
            ) : (
            <div className="w-[90%] items-start justify-center flex ">
                {/* left div */}
                <div className="w-[70%] border p-4 shadow-lg rounded-lg flex flex-col">
                    <div className="flex p-2">
                        <img src={product.img1} alt="" className="w-full h-[18rem] object-cover rounded-md" />
                        <img src={product.img2} alt="" className="w-full h-[18rem] object-cover rounded-md" />
                    </div>
                    <div className="flex p-2">
                        <img src={product.img3} alt="" className="w-full h-[18rem] object-cover rounded-md" />
                        <img src={product.img4} alt="" className="w-full h-[18rem] object-cover rounded-md" />
                    </div>
                    <div className="flex p-2">
                        <img src={product.img2} alt="" className="w-full h-[18rem] object-cover rounded-md" />
                        <img src={product.img1} alt="" className="w-full h-[18rem] object-cover rounded-md" />
                    </div>
                </div>
                
                {/* right div */}
                <div className="w-[30%] items-center justify-center flex flex-col p-6 ">
                    <div className="pb-4 space-y-[2px]">
                        <div className="space-y-[-5px] flex flex-col">
                            <h2 className="text-xl font-medium p-2">{product.title}</h2>
                            <p className="text-gray-500 text-justify text-[12px] p-2">{product.description}</p>
                        </div>
                        <div className="flex space-x-[10px] p-2">
                            <p className="text-black font-semibold text-[18px]">₹ {product.price}.00</p>
                            <p className="text-gray-400 font-normal text-[18px] gap-2">MRP<strike>{product.strike}</strike></p>
                            <p className="text-green-600 font-normal text-[18px]">{product.off}</p>
                        </div>
                        <div className="space-y-[-10px]">
                            <p className="text-black font-medium p-2">{product.type}</p>
                            <p className="text-gray-400 font-normal p-2">Inclusive of all taxes</p>
                        </div>
                    </div>

                    <button className="bg-blue-600 text-[18px] p-3 items-center justify-center pl-3 pr-3 text-white w-full rounded-lg"
                        onClick={handleAddToCart}>
                        Add To Cart
                    </button>
                </div>
            </div>
            )}
        </div>
    );
};

export default ProductDetailsPage;

