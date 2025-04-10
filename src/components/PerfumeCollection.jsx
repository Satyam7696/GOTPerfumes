import React from 'react'
import { Link } from 'react-router-dom';
import run from '../assets/Alphafemale.jpg';
import scatt from '../assets/Honeyoud.jpg';
import snek from '../assets/Sigmamale.jpg';
import kidsho from '../assets/Alphafemale.jpg';
const PerfumeCollection = () => {
  return (
                <div className="w-[100%] items-center justify-center flex flex-col p-[3rem] pl-[2rem] pr-[2rem] mt-2">
                  
                  <div className="translate-y-[-2rem]" id="per1">
                    <h3 className="text-center font-medium text-[1.3rem]" >GOT Perfumes Collection ⚡</h3>
                  </div>
            
                  <div className="translate-y-[10px] items-center justify-between gap-5 flex rounded-md ml-[3rem] mr-[3rem] pr-[3rem] pl-[3rem]" id="per2">
            
                    <div className="w-[25%] rounded-md cursor-pointer flex flex-col gap-5" id="per3">
                      <Link to="/womens-perfumes">
                        <img src={run} alt="" className="rounded-lg"/>
                        <p className="text-center">Women Perfumes</p>
                      </Link>
                    </div>
                    <div className="w-[25%] rounded-md cursor-pointer flex flex-col gap-5" id="per3">
                      <Link to="/unisex-perfumes">
                        <img src={scatt} alt="" className="rounded-lg"/>
                        <p className="text-center">Unisex Perfumes</p>
                      </Link>
                    </div>
                    <div className="w-[25%] rounded-md cursor-pointer flex flex-col gap-5" id="per3">
                      <Link to="/mens-perfumes">
                        <img src={snek} alt="" className="rounded-lg"/>
                        <p className="text-center">Men Perfumes</p>
                      </Link>
                    </div>
                    <div className="w-[25%] rounded-md cursor-pointer flex flex-col gap-5" id="per3">
                      <Link to="/collection-perfumes">
                        <img src={kidsho} alt="" className="rounded-lg"/>
                        <p className="text-center">Customized Perfumes</p>
                      </Link>
                    </div>
            
                  </div>
                </div>
  )
}

export default PerfumeCollection
