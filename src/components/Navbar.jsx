import React, { useState } from 'react';
import logosss from "../assets/Perfumes.jpg";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useCart } from "./context/CartContext"; // Import Cart Context
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "./context/WishlistContext";

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
//   const [isMenDropdownOpen, setIsMenDropdownOpen] = useState(false);
//   const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);
//   const [isKidDropdownOpen, setIsKidDropdownOpen] = useState(false);
  return (
    <div className="w-[100%] mx-auto items-center justify-center flex bg-white flex-col shadow-lg fixed top-0 left-0 z-50">
        
        <div className="justify-between flex w-[100%] ">
            <div className="bg-gray-100 items-start justify-start flex p-[5px] text-[12px] cursor-pointer w-[100%]" id="nav2">
                <p className="ml-[10rem]">Find a store |</p>
                <p className="ml-[1rem]">Help</p>
            </div>
            <div className="p-[5px] text-[12px] cursor-pointer bg-gray-100 " id="nav3">
                <a href="/auth">
                    <p className="mr-[8rem]">Login/SignUp</p>
                </a>
            </div>
        </div>

        <div className="w-[100%] mx-auto items-center justify-evenly flex p-[5px] gap-3 relative bg-white " id="nav7">

            <div className="" id="nav1">
                <Link to="/">
                    <img src={logosss} alt="" className="w-[6rem] h-[5.5rem] " />
                </Link>
            </div>

            <div className="flex relative " id="nav4">
                <ul className="flex justify-center items-center gap-[2rem]">
                <li
                    className="relative cursor-pointer"
                    // onMouseEnter={() => setIsMenDropdownOpen(true)}
                    // onMouseLeave={() => setIsMenDropdownOpen(false)}
                >
                    <Link to="/mens-perfumes">
                        Mens
                    </Link>
                    {/* {isMenDropdownOpen && (
                    <div className="absolute top-full w-[60vw] bg-white shadow-lg rounded-lg flex justify-center items-center mt-[1px] translate-x-[-4rem] z-50">
                        <div className="flex gap-6 w-[100%]">
                            <div className="p-2 w-[30%] ml-2">
                                <h3 className="font-bold text-[14px]">SHOES</h3>
                                <ul className="text-[14px] mt-2">
                                    <Link to="/mens/casual-shoes" >
                                        <li>Casual Shoes</li>
                                    </Link>
                                    <Link to="/mens/sports-shoes" >
                                        <li>Sports Shoes</li>
                                    </Link>
                                    <Link to="/mens/sneakers" >
                                        <li>Sneakers</li>
                                    </Link>
                                </ul>
                            </div>
                            <div className="p-2 w-[30%]">
                                <h3 className="font-bold text-[14px]">SANDALS & FLOATERS</h3>
                                <ul className="text-[14px] mt-2">
                                    <li>Slippers</li>
                                    <li>Sports Sandals</li>
                                </ul>
                            </div>
                            <div className="p-2">
                                <h3 className="font-bold text-[14px]">FEATURED COLLECTIONS</h3>
                                <ul className="text-[14px] mt-2">
                                <li>Limited Edition Sneakers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    )} */}
                </li>
                <li
                    className="relative cursor-pointer"
                    // onMouseEnter={() => setIsWomenDropdownOpen(true)}
                    // onMouseLeave={() => setIsWomenDropdownOpen(false)}
                >
                    <Link to="/womens-perfumes" >
                        Womens
                    </Link>
                    {/* {isWomenDropdownOpen && (
                    <div className="absolute top-full w-[60vw] bg-white shadow-xl rounded-lg flex justify-center items-center mt-[1px] translate-x-[-4rem] z-50">
                        <div className="flex gap-6 w-[100%]">
                            <div className="p-2 w-[30%] ml-2">
                                <h3 className="font-bold text-[14px]">SHOES</h3>
                                <ul className="text-[14px] mt-2">
                                    <li>Casual Shoes</li>
                                    <li>Sports Shoes</li>
                                    <li>Sneakers</li>
                                </ul>
                            </div>
                            <div className="p-2 w-[30%]">
                                <h3 className="font-bold text-[14px]">SANDALS & FLOATERS</h3>
                                <ul className="text-[14px] mt-2">
                                    <li>Slippers</li>
                                    <li>Sports Sandals</li>
                                </ul>
                            </div>
                            <div className="p-2">
                                <h3 className="font-bold text-[14px]">FEATURED COLLECTIONS</h3>
                                <ul className="text-[14px] mt-2">
                                <li>Limited Edition Sneakers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    )} */}
                </li>
                <li
                    className="relative cursor-pointer"
                    // onMouseEnter={() => setIsKidDropdownOpen(true)}
                    // onMouseLeave={() => setIsKidDropdownOpen(false)}
                >
                    <Link to="/unisex-perfumes" >
                        Unisex
                    </Link>
                    {/* {isKidDropdownOpen && (
                    <div className="absolute top-full w-[60vw] bg-white shadow-lg rounded-lg flex justify-center items-center mt-[1px] translate-x-[-10rem] z-50">
                        <div className="flex gap-6 w-[100%]">
                            <div className="p-2 w-[30%] ml-2">
                                <h3 className="font-bold text-[14px]">SHOES</h3>
                                <ul className="text-[14px] mt-2">
                                    <li>Casual Shoes</li>
                                    <li>Sports Shoes</li>
                                    <li>Sneakers</li>
                                </ul>
                            </div>
                            <div className="p-2 w-[30%]">
                                <h3 className="font-bold text-[14px]">SANDALS & FLOATERS</h3>
                                <ul className="text-[14px] mt-2">
                                    <li>Slippers</li>
                                    <li>Sports Sandals</li>
                                </ul>
                            </div>
                            <div className="p-2">
                                <h3 className="font-bold text-[14px]">FEATURED COLLECTIONS</h3>
                                <ul className="text-[14px] mt-2">
                                <li>Limited Edition Sneakers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    )} */}
                </li>
                <Link to="/collections-perfumes" >
                    <li className="cursor-pointer">Collections</li>
                </Link>
                </ul>
            </div>

            <div className="flex items-center justify-center gap-4 cursor-pointer" id="nav6">
                <CiSearch className="w-[2rem] h-[1.8rem]" id="nav5"/>
                <div className="relative">
                    <Link to="/wishlist" className=" text-lg flex items-center">
                        <CiHeart className=" w-[2rem] h-[1.8rem]" id="nav5" />
                        {wishlist.length > 0 && (
                            <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-3">
                                {wishlist.length}
                            </span>
                        )}
                    </Link>
                </div>
                <div className="relative">
                    <Link to="/cart" className=" text-lg flex items-center" >
                        {/* 🛒 */}<PiShoppingCartThin className="w-[2rem] h-[1.8rem]" id="nav5"/>
                        {cart.length > 0 && (
                            <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-3">
                                {cart.length}
                            </span>
                        )}
                    </Link>
                </div>
                {/* <Link to="/cart">
                    <PiShoppingCartThin className="w-[2rem] h-[1.8rem]" />
                </Link> */}
            </div>
        </div>

    </div>
  );
};

export default Navbar;

