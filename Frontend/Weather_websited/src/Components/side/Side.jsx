import React from 'react'
import {AiFillHome, AiFillPieChart} from "react-icons/ai"
import {RiContactsFill, RiSendPlane2Fill} from "react-icons/ri"
import './style.css'

const Side = () => {

  const handleClick = (ids) => {
    ids.scrollIntoView({ behavior: 'smooth'})
}


  return (
    <div id='sidetab' className=' absolute z-60 h-full sidebar flex justify-center items-start p-8 text-xl text-centre flex-col h-[10 0vh] '>
      <div>
          <h6 onClick={()=>{handleClick(home)}} className='cursor-pointer hover:scale-110 hover:text-white pl-4 pr-8 text-gray-400 ' > <AiFillHome className='inline-block icon cursor-pointer' /> <span  className=' show w-full '>Home</span>  </h6><br />
          <h6 onClick={()=>{handleClick(anyalatics)}} className='cursor-pointer hover:scale-110 hover:text-white pl-4 pr-8 text-gray-400 ' > <AiFillPieChart className='inline-block icon cursor-pointer' /> <span  className=' show '>Anyalatics</span>  </h6><br />
          <h6 onClick={()=>{handleClick(aboutus)}} className='cursor-pointer hover:scale-110 hover:text-white pl-4 pr-8 text-gray-400 ' > <RiContactsFill className='inline-block icon cursor-pointer' /> <span  className=' show  ' >About us</span>  </h6><br />
          <h6 onClick={()=>{handleClick(other)}} className='cursor-pointer hover:scale-110 hover:text-white pl-4 pr-8 text-gray-400 ' > <RiSendPlane2Fill className='inline-block icon cursor-pointer' /> <span  className=' show' >Others</span>  </h6><br />
        </div>
        
    </div>
  )
}

export default Side 