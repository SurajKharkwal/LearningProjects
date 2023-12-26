'use client'
import React from 'react'
import { FaArrowCircleDown } from "react-icons/fa";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
const Slide1 = () => {  
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div id='slide1' className='flex justify-center items-center relative h-full'>
      <div className='absolute bottom-16 z-10 text-yellow-200 text-4xl bg-black rounded-full animate-bounce ' ><FaArrowCircleDown /></div>
      <ul className='absolute flex space-x-2 max-lg:z-10 bottom-4'>
        <li className='w-2 h-2 rounded-full bg-yellow-200 scale-125 border-2 border-yellow-200 ' ></li>
        <li className='w-2 h-2 rounded-full border-2 border-yellow-200 ' ></li>
        <li className='w-2 h-2 rounded-full border-2 border-yellow-200 ' ></li>
      </ul>
      <div className='w-[50vw] max-sm:w-full max-sm:p-2 flex z-10 flex-col justify-center items-center'>
        <h1 className="text-yellow-200 max-sm:text-[8vh] text-[8vw] font-extrabold">Beauty</h1>
        <h1 className="text-white text-[8vw] max-sm:text-[8vh] font-extrabold">Products</h1>
        <h2 className='text-white max-sm:ml-8 max-sm:mr-8 text-center text-xl font-extralight'>
          Discover top-quality casual clothing options available in the market at highly competitive prices. Act now and seize the best deals.
          <p className='text-yellow-200'>Hurry up!!</p>
        </h2>
        <br />
        <div className=' text-black font-semibold bg-yellow-200 rounded-md' >
          <ToggleButtonGroup value={alignment} exclusive onChange={handleChange} aria-label="Platform">
            <ToggleButton className='text-black font-semibold'  value="web"><a href="#">Buy Now</a></ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className=' max-sm:w-full w-[50vw] h-full z-0 max-sm:absolute flex justify-center items-center overflow-hidden relative'>
        <img src="./images/beautyProduct.jpg" className=' max-sm:absolute opacity-60 -translate-y-18 z-0 max-sm:opacity-40 absolute  ' alt="" />
      </div>
    </div>
  )
}

export default Slide1