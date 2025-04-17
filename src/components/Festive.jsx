import React from 'react'
import { Link } from 'react-router-dom';
import clog from '../assets/Sigmamale.jpg';
import shoe1 from '../assets/Alphafemale.jpg';
import shoe from '../assets/ii31.png';
import shoe2 from '../assets/ii2.png';
const Festive = () => {
  return (
        <div className="w-[100%] items-center justify-center flex flex-col p-[3rem] pl-[2rem] pr-[2rem]">
          
          <div className="translate-y-[-2rem]" id="fest1">
            <h3 className="text-center font-medium text-[1.3rem]" >Festive Picks ⚡</h3>
            <p>Find The Perfect & Affordable Perfumes for your budget</p>
          </div>
    
          <div className="translate-y-[-10px] items-center justify-between gap-3 flex rounded-md ml-[3rem] mr-[3rem] pr-[3rem] pl-[3rem]" id="shop3">
    
            <div className="w-[25%] rounded-md cursor-pointer" id="shop4">
              <Link to="/mens-perfumes">
                <img src={clog} alt="" className="rounded-lg h-[15rem]"/>
              </Link>
            </div>
            <div className="w-[25%] rounded-md cursor-pointer" id="shop4">
              <Link to="/womens-perfumes">
                <img src={shoe1} alt="" className="rounded-lg h-[15rem]"/>
              </Link>
            </div>
            <div className="w-[25%] rounded-md cursor-pointer" id="shop4">
              <Link to="/womens-perfumes">
                <img src={shoe} alt="" className="rounded-lg h-[15rem]"/>
              </Link>
            </div>
            <div className="w-[25%] rounded-md cursor-pointer" id="shop4">
              <Link to="/womens-perfumes">
                <img src={shoe2} alt="" className="rounded-lg h-[15rem]"/>
              </Link>
            </div>
    
          </div>
        </div>
  )
}

export default Festive
