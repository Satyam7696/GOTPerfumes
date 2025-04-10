import React from 'react'
import art from '../assets/a1.jpg';
import art1 from '../assets/a2.png';
import art2 from '../assets/a3.png';

const WhyGot = () => {
  return (
    <div className="w-[100%] items-center justify-center mx-auto flex flex-col bg-gray-100 mt-[2rem]">
      
      <div className="items-center justify-center flex flex-col mt-[2.5rem]" id="got3">
        <h2 className="text-center text-[1.2rem] font-bold ">Why GOT ?</h2>
        <p className="text-center text-gray-500">We are India's affordable and high quality Perfume brand.</p>
      </div>

      <div className="flex p-3 items-center justify-center gap-[3rem] translate-y-[-2rem]" id="got1">
         <div className="w-[22%] flex flex-col p-[2rem] gap-[2rem]" id="got2">
            <img src={art} alt=""/>
            <p className="text-center translate-y-[-2rem]">FRAGRANCE FORWARD</p>
         </div>
         <div className="w-[22%] flex flex-col p-[2rem] gap-[2rem]" id="got2">
            <img src={art1} alt=""/>
            <p className="text-center translate-y-[-2rem]">AFFORDABLE LUXURY.</p>
         </div>
         <div className="w-[22%] flex flex-col p-[2rem] gap-[2rem]" id="got2">
            <img src={art2} alt=""/>
            <p className="text-center translate-y-[-2rem]">GENDER NEUTRAL</p>
         </div>
      </div>
    </div>
  )
}

export default WhyGot;
