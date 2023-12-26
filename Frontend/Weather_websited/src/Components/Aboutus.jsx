import React from 'react'

const Aboutus = () => {
  return (
    <div id='aboutus' className='w-[100vw] p-[2vw]' >
      <div className="part1 flex p-[8vh] justify-center items-center ">

        <div className="w-[50vw] mr-[8vw] flex flex-col justify-center items-center ">
          <h1 className='text-3xl overflow-hidden '>Suraj kharkwal</h1><br />
          <p className='text-gray-400 '>I'm pleased to meet you! It's great to hear about your aspirations to become a full-stack developer, and your enthusiasm for showcasing your skills through basic projects. Pursuing a B.Tech from Jaypee University Himachal is a significant step towards achieving your goals. If you ever have any questions or need assistance with anything related to your journey in becoming a full-stack developer, feel free to ask. Best of luck with your studies and projects!</p>
        </div>
        <img src="./images/source.jpg" width="300vw" className='hover:scale-110' alt="" />
      </div>

      <div className="part2 p-[8vw] flex justify-center items-center ">
        <img src="./images/webimg.jpg" className='hover:scale-110' width="300vw" alt="" />
        <div className="text w-[50vw] ml-[8vw]">
          <h1 className='text-3xl overflow-hidden'>"Explore the Project: Dive into its Code and Architecture"</h1><br />
          <p className='text-gray-400' >"If you have a keen interest in delving deeper into the project or exploring its source code,      you're in for a treat. I've thoughtfully supplied a link for your convenience. By clicking on this link, you'll have the chance to delve into the project's inner workings, peruse the codebase, and acquire a more thorough grasp of its architecture and implementation. Please feel free to navigate to the link and explore the project at your leisure, whether it's for educational purposes or to potentially contribute to its advancement. We genuinely value your curiosity and active involvement!"
          </p>
          <a className='p-[1vw] m-[1vw] bg-blue-600 flex justify-center items-center w-[10vw]'  href="#">Get Code</a>
        </div>
      </div>
    </div>
  )
}

export default Aboutus