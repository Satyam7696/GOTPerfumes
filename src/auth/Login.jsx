// import React from 'react'
// import Footer from '../components/Footer';
// const Login = () => {
//   return (
//     <div>
//         <div className="w-[100%] items-center justify-center mt-[3px]">
        
//         <div className="w-[35%] items-center justify-center shadow-lg flex flex-col pb-[2rem] translate-x-[24rem]">
//                 <div className="items-center justify-center">
//                     <img src="https://www.asianfootwears.com/_next/image?url=https%3A%2F%2Fcdn.asianlive.in%2Fdigital-website%2FCoupon-banner_26874718888615670254.jpg&w=1080&q=75" alt=""/>
//                 </div>
//                 <div className="p-3 pl-5">
//                     <p>Login/SignUp</p>
//                     <div className="flex border border-gray-400 mt-2 rounded-md h-[2.5rem] items-center gap-3 w-[56%]">
//                          <p className="ml-2">+91</p>
//                         <input type="text" placeholder="Mobile Number" className="h-[2.4rem] rounded-md"/>
//                     </div>
//                     <p className="text-[12px] mt-2 pr-[1rem]">By logging in, you agree to Asian Footwears T&C and Shiprocket's T&C and Privacy Policy</p>
//                 </div>
//                 <div className="rounded-md bg-blue-500 mt-[10px] p-2 w-[90%] ml-[12px] cursor-pointer">
//                     <p className="text-white font-bold text-[1.2rem] text-center">SEND OTP</p>
//                 </div>
//                 <p className="text-center text-[12px] pt-6 items-center justify-center">Powered by Razorpay</p>
//         </div>
//         </div>

//         <div className="w-[100%] ">
//             <Footer/>
//         </div>
//     </div>
//   )
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom

const Login = () => {
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const navigate = useNavigate(); // Initialize navigate hook

    // Function to Send OTP
    const handleSendOtp = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/send-otp", {
                mobile: mobileNumber,
            });
            setMessage(response.data.message);
            setOtpSent(true); // Show OTP input field
        } catch (error) {
            setMessage(error.response?.data?.message || "Failed to send OTP. Please try again.");
        }
    };

    // Function to Verify OTP
    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/verify-otp", {
                mobile: mobileNumber,
                otp: otp,
            });
            setMessage(response.data.message);
            // If OTP is verified successfully, wait 2 seconds before redirecting
            if (response.data.success) {
                setTimeout(() => {
                    navigate("/");  // Redirect to home page after 2 seconds
                }, 2000);
            }
        } catch (error) {
            setMessage(error.response?.data?.message || "Invalid OTP. Please try again.");
        }
        
    };

    return (
        <div>
            <div className="w-full flex items-center justify-center mt-3">
                <div className="w-[35%] shadow-lg flex flex-col pb-6 px-6 translate-x-[1rem]">
                    <div className="items-center justify-center">
                        <img src="https://www.asianfootwears.com/_next/image?url=https%3A%2F%2Fcdn.asianlive.in%2Fdigital-website%2FCoupon-banner_26874718888615670254.jpg&w=1080&q=75" alt=""/>
                    </div>
                    <p className="text-[18px] font-normal mb-4 pt-2 ">Login/SignUp</p>
                    
                    {/* Mobile Input */}
                    <div className="flex border border-gray-400 rounded-md h-[2.5rem] items-center gap-3 px-3">
                        <p>+91</p>
                        <input 
                            type="text"
                            placeholder="Enter Mobile Number"
                            className="w-full outline-none"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                    </div>

                    {/* Send OTP Button */}
                    <button
                        className="bg-blue-500 text-white font-bold py-2 mt-4 rounded-md w-full"
                        onClick={handleSendOtp}
                    >
                        SEND OTP
                    </button>

                    {/* OTP Input Field (Only Visible After OTP is Sent) */}
                    {otpSent && (
                        <>
                            <div className="flex border border-gray-400 rounded-md h-[2.5rem] items-center gap-3 px-3 mt-3">
                                <input 
                                    type="text"
                                    placeholder="Enter OTP"
                                    className="w-full outline-none"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>

                            {/* Verify OTP Button */}
                            <button
                                className="bg-green-500 text-white font-bold py-2 mt-4 rounded-md w-full"
                                onClick={handleVerifyOtp}
                            >
                                VERIFY OTP
                            </button>
                        </>
                    )}

                    {/* Message Display */}
                    {message && <p className="text-red-500 text-center mt-3">{message}</p>}
                    <p className="text-center text-[12px] pt-6 items-center justify-center">Powered by Twilio</p>
                </div>
                
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Login;

