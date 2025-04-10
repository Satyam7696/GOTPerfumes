import React from 'react'
import { Link } from 'react-router-dom';
import off from '../assets/Honeyoud.jpg';
import off1 from '../assets/Alphafemale.jpg';
import off2 from '../assets/Sigmamale.jpg';
import sale from '../assets/Honeyoud.jpg';
const Deals = () => {
  return (
            <div className="w-[100%] items-center justify-center flex flex-col p-[3rem] pl-[2rem] pr-[2rem]">
              
              <div className="translate-y-[-2rem]" id="deal1">
                <h3 className="text-center font-medium text-[1.3rem]" >Unbeatable Deals: Discounted Sale ⚡</h3>
                <p className="text-center">Grab your favorites at slashed prices</p>
              </div>
        
              <div className="translate-y-[-10px] items-center justify-between gap-3 flex rounded-md ml-[3rem] mr-[3rem] pr-[3rem] pl-[3rem]" id="shop3">
        
                <div className="w-[25%] rounded-md cursor-pointer" id="shop4">
                  <Link to="/unisex-perfumes">
                    <img src={off} alt="" className="rounded-lg"/>
                  </Link>
                </div>
                <div className="w-[25%] rounded-md cursor-pointer" id="shop4">
                  <Link to="/womens-perfumes">
                    <img src={off1} alt="" className="rounded-lg"/>
                  </Link>
                </div>
                <div className="w-[25%] rounded-md cursor-pointer" id="shop4">
                  <Link to="/mens-perfumes">
                    <img src={off2} alt="" className="rounded-lg"/>
                  </Link>
                </div>
                <div className="w-[25%] rounded-md cursor-pointer" id="shop4">
                  <Link to="/unisex-perfumes">
                    <img src={sale} alt="" className="rounded-lg"/>
                  </Link>
                </div>
        
              </div>
            </div>
  )
}

export default Deals
