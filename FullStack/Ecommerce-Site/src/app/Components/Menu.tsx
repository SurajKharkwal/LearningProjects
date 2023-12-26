'use client'
import React, { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FcClearFilters } from "react-icons/fc";
import { IoSettings } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const Menu: React.FC = () => {

  const [menuEffect, setMenuEffect] = useState(true);
  const [closeEffect, setCloseEffect] = useState(false);
  const [dropEffect, setDropEffect] = useState(false);
  
  return (
    <div> 
      <div className=" bg-gray-200/30 circle max-md:p-2 max-sm:p-1 border-slate-400 flex justify-center items-center flex-col gap-y-4 border-4 p-3 rounded-3xl " >
        <div title='Home' className={` ${(!dropEffect)?'hidden':''} bg-black animate-[Menu_1.3s] text-cyan-300 text-[4vh] cursor-pointer rounded-full p-2`}><FaHome /></div>
        <div title='Settings' className={` ${(!dropEffect)?'hidden':''} bg-black animate-[Menu_1s] text-gray-200 text-[4vh] cursor-pointer rounded-full p-2`}><IoSettings /></div>
        <div title='Filter' className={` ${(!dropEffect)?'hidden':''} bg-black animate-[Menu_0.7s] text-yellow-200 text-[4vh] cursor-pointer rounded-full p-2`}><FcClearFilters /></div>
        <div title='Cart' className={` ${(!dropEffect)?'hidden':''} bg-black animate-[Menu_0.4s] text-pink-200 text-[4vh] cursor-pointer rounded-full p-2`}><IoMdCart /></div>
        <div title='Orders' className={` ${(!dropEffect)?'hidden':''} bg-black animate-[Menu_0.1s] text-blue-300 text-[4vh] cursor-pointer rounded-full p-2`}><HiMiniShoppingBag /></div>
        <div className={` ${(menuEffect)?'-rotate-180 duration-500 ':' rotate-0'} ${(closeEffect)?'rotate-180 duration-500 ':' rotate-0'} bg-black  text-yellow-200 text-[4vh] cursor-pointer rounded-full p-2 `} >
          {(menuEffect)?<div title='Menu' onClick={()=>{setCloseEffect(true);setMenuEffect(false);setDropEffect(true)}} ><IoMdMenu /></div>:''}
          {(closeEffect)?<div title='Close' onClick={()=>{setMenuEffect(true);setCloseEffect(false);setDropEffect(false)}} ><CgClose /></div>:''}
        </div>
      </div>
    </div>
  )
}

export default Menu