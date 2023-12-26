'use client'
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const rightSliderBtn = () => {
    const [alignment, setAlignment] = React.useState('web');

    function ScrollHandler() {
      const main = document.getElementById('page1');
      if (main) {
        const scrollAmount = window.innerWidth;
        main.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
    ) => {
      setAlignment(newAlignment);
    };

  return (
    <div onClick={ScrollHandler} className='absolute cursor-pointer top-[50%] right-0 z-20 rotate-180 bg-yellow-200  ' >
        <ToggleButtonGroup value={alignment} exclusive onChange={handleChange} aria-label="Platform">
            <ToggleButton className=' text-3xl '  value="web"><IoIosArrowBack  /></ToggleButton>
        </ToggleButtonGroup>
    </div>
  )
}

export default rightSliderBtn