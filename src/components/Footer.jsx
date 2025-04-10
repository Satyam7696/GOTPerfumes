import React , {useState} from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import img1 from '../assets/Perfumes.jpg';
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Footer = () => {

    const gradients = [
        "bg-[radial-gradient(circle_at_center,_rgba(238,174,202,1)_0%,_rgba(148,187,233,1)_100%)]",
        "bg-[radial-gradient(circle_at_center,_rgba(255,223,186,1)_0%,_rgba(255,159,159,1)_100%)]",
        "bg-[radial-gradient(circle_at_center,_rgba(144,238,144,1)_0%,_rgba(30,144,255,1)_100%)]",
        "bg-[radial-gradient(circle_at_center,_rgba(173,216,230,1)_0%,_rgba(75,0,130,1)_100%)]",
      ];
    
      const [hoverGradient, setHoverGradient] = useState("");
    
      const handleMouseEnter = () => {
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        setHoverGradient(randomGradient);
      };
    
      const handleMouseLeave = () => {
        setHoverGradient("");
      };

  return (
    <div className="w-[100%] items-center justify-center mx-auto flex bg-[#252525] text-[#FFFFFF] flex-col pl-[3rem] pr-[3rem]" id="foot0">

        <div className="w-[100%] items-center justify-center mx-auto flex bg-[#252525] text-[#FFFFFF]" id="foot1">
            
            <div className="w-[33%] items-start justify-start mx-auto flex flex-col translate-y-[-28px]" id="foot2">
                <div className={`relative ml-[2rem] shadow-md transition-all duration-300 
                    bg-white rounded-full hover:opacity-1 items-center justify-center`}
                id="foot5">
                    <Link to="/">
                        <img src={img1} alt="" className="w-[5.5rem] h-[4.5rem] rounded-xl p-1" />
                    </Link>
                </div>
                <div className="mt-[1rem] ml-[2rem]" id="foot6">
                    <p className="text-[14px]">
                    GOT is one of the fastest growing and Affordable Perfume brand in India. 
                    Check out our incredible quality and become an GOT today.
                    </p>
                </div>
                <div className="flex gap-3 mt-[1rem] ml-[2rem]" id="foot7">
                    <a href="#">
                        <BsLinkedin className="w-[1.5rem] h-[1.5rem]" id="foot8"/>
                    </a>
                    <a href="#">
                        <FaInstagramSquare className="w-[1.5rem] h-[1.5rem]" id="foot8"/>
                    </a>
                    <a href="#">
                        <IoLogoYoutube className="w-[1.5rem] h-[1.5rem]" id="foot8"/>
                    </a>
                    <a href="#">
                        <FaXTwitter className="w-[1.5rem] h-[1.5rem]" id="foot8"/>
                    </a>
                </div>
            </div>

            <div className="w-[33%] items-center justify-start mx-auto flex flex-col mt-[16px] p-[2rem]" id="foot3">
                <p className="text-[1.1rem] font-normal">
                    For inquiries about refunds, order issues,
                    please reach out to us at:
                </p>
                <div className="flex flex-col mt-[1rem] gap-1">
                    <div className="flex gap-5  items-center">
                        <FaPhoneAlt className="text-center" id="foot10"/>
                        <p>+91-7696198105</p>
                    </div>
                    <div className="flex gap-5  items-center">
                        <TfiEmail id="foot10"/>
                        <p>gotperfumes@gmail.com</p>
                    </div>
                    <div className="flex gap-5 items-center ">
                        <IoLocationOutline className="w-[1.5rem] h-[1.5rem]" id="foot10"/>
                        <p className="text-[14px]">B-9,540/1 New SantokhPura, Jalandhar City, Punjab-144001</p>
                    </div>
                    <div className="flex gap-3 flex-col mt-[14px]">
                        <p>For inquiries about corporate/bulk purchases,
                        please reach out to us at:</p>
                        <div className="flex gap-5 items-center pb-[1rem]">
                            <FaPhoneAlt className="text-center" id="foot10"/>
                            <p>+91-7696198105</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[33%] items-center justify-start mx-auto flex flex-col" id="foot4">
                
                <div className="items-start translate-x-[-20px]" id="foot91">
                    <p className="font-semibold text-[20px]">QUICK LINKS</p>
                </div>
                <div className="flex flex-col items-start mt-[10px] font-normal gap-3" id="foot9">
                    <p>Privacy Policy</p>
                    <p>Refund Policy</p>
                    <p>Shipping Policy</p>
                    <p>Terms of Services</p>
                    <p>Corporate/Bulk Order</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                </div>
            </div>

        </div>

        <div>
            <p className="text-center text-gray-300">___________________________________________________________________________________________________________________________________________________________________________</p>
        </div>

        <div className=" p-6">
           <p className="text-[12px]">All Rights Reserved by GOT Perfumes Pvt. Ltd.</p>
            <p className="text-center text-[12px]">2025 © Copyright</p>
        </div>

    </div>
  )
}

export default Footer
