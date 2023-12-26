import React, { useRef } from 'react'
import { AiOutlineSearch, AiFillGithub, AiFillLinkedin  } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'


const Nav = (props) => {

  const inputRef = useRef(null);
  let count = 1;

  const handelEvent = () => {

    let inputValue = inputRef.current.value;

    props.location(inputValue)
    props.loading(count)

    

  }

  const enterKey = event => {

    if (event.key == 'Enter') {
      event.preventDefault();
      anyalatics.scrollIntoView({ behavior: 'smooth'})

      handelEvent();
    }

  }

  return (
    <div>
        <nav className='flex item-center bg-gradient-to-r from-black via-gray-700 to-gray-900 fixed min-w-[100%] -translate-x-14 justify-center  border-b-2'>
            <form className='flex flex-cols m-4 pl-16 '>
                <input onKeyDown={enterKey} ref={inputRef} type="text" placeholder='Search' className='inline-block w-3.5/4 border-none bg-gray-500 p-2' /><AiOutlineSearch onClick={handelEvent} className='bg-blue-700 h-10 p-2 text-[3.5vw]'/>
            </form>
            <div className="right w-full flex justify-end items-center p-4 pr-16 gap-8 ">
                <a href='https://www.instagram.com/_suraj_kharkwal_/' className='text-right'><BsInstagram className='w-8 h-8 flex justify-center items-center cursor-pointer ' /></a>
                <a href='https://www.linkedin.com/in/suraj-kharkwal-358268285/' className='text-right'><AiFillLinkedin className='w-8 h-8 flex justify-center items-center cursor-pointer ' /></a>
                <a href='https://github.com/SurajKharkwal' className='text-right'><AiFillGithub className='w-8 h-8 flex justify-center items-center cursor-pointer ' /></a>
            </div>
        </nav>
    </div>
  )
}

export default Nav