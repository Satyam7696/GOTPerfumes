import React from 'react'
import men from '../assets/Sigmamale.jpg';
import women from '../assets/Alphafemale.jpg';
import unisex from '../assets/Honeyoud.jpg';
import { Link } from 'react-router-dom';
const Shop = () => {
  return (
    <div className="w-[100%] items-center justify-center flex flex-col p-[3rem] pl-[2rem] pr-[2rem]" id="shop1">
      
      <div id="shop2"> 
        <h3 className="text-center font-medium text-[1.3rem]" >SHOP FOR</h3>
      </div>

      <div className="mt-4 items-center justify-between gap-1 flex rounded-md ml-[3rem] mr-[3rem] pr-[3rem] pl-[3rem]" id="shop3">

        <div className="w-[30%] rounded-md cursor-pointer" id="shop4">
          <Link to="/mens-perfumes">
            <img src={men} alt="" className="rounded-lg"/>
          </Link>
        </div>
        <div className="w-[30%] rounded-md cursor-pointer" id="shop4">
        <Link to="/womens-perfumes">
            <img src={women} alt="" className="rounded-lg"/>
        </Link>
        </div>
        <div className="w-[30%] rounded-md cursor-pointer" id="shop4">
        <Link to="/unisex-perfumes">
            <img src={unisex} alt="" className="rounded-lg"/>
        </Link>
        </div>

      </div>
    </div>
  )
}

export default Shop
