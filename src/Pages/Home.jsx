import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Shop from '../components/Shop';
import Festive from '../components/Festive';
import Deals from '../components/Deals';
import ShoeStyle from '../components/PerfumeCollection';
import NewArrival from '../components/NewArrival';
import CardSlider4 from '../components/Slider/CardSlider4';
import CardSlider from '../components/Slider/CardSlider';
import Whyquick from '../components/WhyGot';
import insta from '../assets/instagram.jpg';
import im111 from '../assets/perfumesrg.png';
import art from '../assets/Art.jpg';
import bann1 from '../assets/alpha.jpg';
import bann2 from '../assets/r3.jpg';
import bann3 from '../assets/r4.jpg';
import bann4 from '../assets/bann4.jpeg';
import PerfumeCollection from '../components/PerfumeCollection';
import WhyGot from '../components/WhyGot';

const images = [
  art,
  bann1,
  bann2,
  bann3
];

// const video=[
//   "https://cdn.shopify.com/videos/c/o/v/478dfd30e1114a6a9fe7a4c4d1b1ffa4.mp4"
// ]

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full mx-auto flex items-center justify-center overflow-x-hidden ">

      <div className="w-[100%] flex flex-col items-center justify-center overflow-x-hidden">

        {/* hero section */}
        <div className="w-[100%] flex flex-col items-center justify-center bg-orange-100 mt-[100px]" id="up1">
          <div className="bg-black w-[100%] p-[3px]" id="hero2">
            <p className="text-white font-normal text-[14px] text-center ">Winter Sale Upto 60% Off  and  Buy 2 get extra discount instantly!</p>
          </div>
          <div id="hero1" className="w-[100%]">
            <img src={images[currentIndex]} alt="slider image" className="w-[100%] h-[500px] transition-all duration-500 ease-in-out cursor-pointer " />
          </div>
          {/* <video src={video[0]} autoPlay loop muted className="w-full h-auto transition-all duration-500 ease-in-out cursor-pointer" /> */}
        </div>

        <div className="w-[100%]">
          <Shop/>
        </div>

        <div className="w-[100%]">
          <Festive/>
        </div>

        <div className="w-[100%]">
          <Deals/>
        </div>

        <div className="w-[100%]" >
            <div className="h-[25rem] w-[100%] relative" id="vid1">
              <video
                className="rounded-sm shadow-lg w-[100%] h-[25rem] object-cover"
                playsinline
                autoPlay
                muted
                loop
              >
                <source src="https://cdn.shopify.com/videos/c/o/v/478dfd30e1114a6a9fe7a4c4d1b1ffa4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 items-center justify-center" id="dis1">
                  <h3 className="text-white items-center justify-center font-medium text-[70px] text-center p-[6rem]">DISCOVER THE ART OF PERFUMERY</h3>
              </div>
            </div>
        </div>

        <div className="w-[100%]">
          <PerfumeCollection/>
        </div>

        {/* <div className="w-[100%]">
          <NewArrival/>
        </div> */}

        <div className="w-[100%]">
          <CardSlider4/>
        </div>

        <div className="w-[100%]" >
            <div className="h-[25rem] w-[100%] relative" id="vid1">
              <video
                className="rounded-sm shadow-lg w-[100%] h-[25rem] object-cover opacity-80"
                playsinline
                autoPlay
                muted
                loop
              >
                <source src="https://videos.pexels.com/video-files/4154241/4154241-uhd_2732_1440_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 items-center justify-center" id="dis2">
                  <h3 className="text-white items-center justify-center font-medium text-[70px] text-center p-[9rem]">UNLEASH THE ESSENCE WITHIN</h3>
              </div>
            </div>
        </div>

        <div className="w-[100%]">
          <CardSlider/>
        </div>

        <div className="w-[100%] ">
          <WhyGot/>
        </div>

        <div className="w-[100%] items-center justify-center bg-gray-50" id="j1">
            <h3 className="text-center p-5 text-[1.5rem] font-medium">Join Our GOT Community</h3>
            <div className="flex w-[60%] items-center justify-center translate-x-[15rem] mb-[2rem]" id="join1">
                 <div className=" w-[40%] h-[25rem] items-center justify-center shadow-xl rounded-lg" id="join2">
                    <img src={im111} alt="" className="p-[1rem] text-center translate-y-[3.8rem] "/>
                 </div>
                 <div className="justify-center items-center shadow-xl rounded-lg w-[40%] h-[25rem] flex flex-col bg-gray-100" id="join3">
                    <img src={insta} alt="" className="text-center w-[2.5rem] h-[2.5rem]"/>
                    <p className="mt-2 text-[14px]">Follow us on Instagram </p>
                    <a href="https://www.instagram.com/gotperfumes/">
                        <span className="text-blue-500 text-[14px]">@gotperfumes</span>
                    </a>
                    <p className="text-[14px]">for more info about product release</p>
                    <button className="w-[30%] bg-blue-500 text-center text-[15px] font-normal rounded-md text-white mt-4 p-[2px]"> <a href="https://www.instagram.com/gotperfumes/">Follow</a></button>
                 </div>
            </div>

        </div>

        {/* <div className="w-[100%]">
          <CardSlider/>
        </div>

        <div className="w-[100%] mb-6">
          <CardSlider/>
        </div> */}

        {/* footer section */}
        <div className="w-[100%] ">
          <Footer/>
        </div>
    </div>
    </div>
  );
};

export default Home;

