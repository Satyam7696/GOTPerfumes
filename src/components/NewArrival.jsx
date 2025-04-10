import React from 'react'
import sh1 from '../assets/Honeyoud.jpg';
import sh2 from '../assets/Alphafemale.jpg';
import sh3 from '../assets/Sigmamale.jpg';
import sh4 from '../assets/Alphafemale.jpg';
import sh5 from '../assets/Honeyoud.jpg';
import sh6 from '../assets/Sigmamale.jpg';
const NewArrival = () => {
  return (
                <div className="w-[100%] items-center justify-center flex flex-col p-[3rem] pl-[2rem] pr-[2rem]">
                  
                  <div className="translate-y-[-2rem]">
                    <h3 className="text-center font-medium text-[1.3rem]" >New Arrivals ⚡</h3>
                  </div>
            
                  <div className="translate-y-[-10px] items-center justify-center w-full overflow-scroll scroll-smooth gap-3 flex rounded-md border border-red-600">
            
                    <div className=" rounded-md cursor-pointer">
                        <img src={sh1} alt="" className="rounded-lg"/>
                    </div>
                    <div className=" rounded-md cursor-pointer">
                        <img src={sh2} alt="" className="rounded-lg"/>
                    </div>
                    <div className=" rounded-md cursor-pointer">
                        <img src={sh3} alt="" className="rounded-lg"/>
                    </div>
                    <div className=" rounded-md cursor-pointer">
                        <img src={sh4} alt="" className="rounded-lg"/>
                    </div>
                    <div className=" rounded-md cursor-pointer">
                        <img src={sh5} alt="" className="rounded-lg"/>
                    </div>
                    <div className=" rounded-md cursor-pointer">
                        <img src={sh6} alt="" className="rounded-lg"/>
                    </div>
            
                  </div>
                </div>
  )
}

export default NewArrival
