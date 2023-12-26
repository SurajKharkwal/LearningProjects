import React, { useRef } from 'react'

const Home = () => {

  const handleClick = () => {
    anyalatics.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <div id='home' className='   h-[100vh] grid grid-cols-[1fr_1fr] overflow-hidden  bg-[#181A1B]  '>
        <div className=" flex flex-col justify-center items-center " >
            <h1 className='text-5xl text-center font-extrabold overflow-y-hidden mb-20 '>Wether Report</h1>
            <p className=' w-4/5 text-2xl text-gray-400 text-center font-extralight' >Your on one of the best destination for weather information.</p>
            <a onClick={handleClick} className='bg-blue-700 border-none rounded-sm p-4 mt-8  ' href="#">Get Started</a>
        </div>
        <div className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-8'>
          <img className='rounded-full  ded-full shadow-lg shadow-gray-200/80 ' src="./images/pie.png" width="100%" height="%" alt="" />
        </div>
    </div>
  )
}

export default Home