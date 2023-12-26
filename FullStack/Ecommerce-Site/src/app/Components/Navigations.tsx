'use client'
import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Navigations = () => {

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
    ) => {
      setAlignment(newAlignment);
    };

  return (
    <div className=" w-full " >
        <ul className="flex justify-center mr-[4vw] ml-[2vw] items-center ">
            <li className="mr-auto" >
                <a href=""><img src="./images/logo.png" className=" max-w-[15vh] max-sm:w-[12vh] " alt="" /></a>
            </li>
            <li className="flex items-center relative mr-auto " >
                <img src="./images/search.png" className="absolute w-[4vh] left-1 "  alt="" />
                <input type="text" placeholder="Search" className="w-[50vw] max-sm:w-[55vw] max-md:w-[40vw] bg-slate-600 h-[5.5vh] rounded-lg pl-12 text-slate-200 text-xl p-2  " />
            </li>
            <li className="flex max-sm:hidden justify-center text-xl space-x-2 items-center" >
            <div className=' text-black border-2 border-yellow-200 font-semibold  rounded-md' >
                <ToggleButtonGroup value={alignment} exclusive onChange={handleChange} aria-label="Platform">
                    <ToggleButton className='text-black font-semibold'  value="web"><a href="#">Sign-in</a></ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className=' text-black font-semibold bg-yellow-200 rounded-md' >
                <ToggleButtonGroup value={alignment} exclusive onChange={handleChange} aria-label="Platform">
                    <ToggleButton className='text-black font-semibold'  value="web"><a href="#">Log-in</a></ToggleButton>
                </ToggleButtonGroup>
            </div>

            </li>
        </ul>
    </div>
  )
}

export default Navigations