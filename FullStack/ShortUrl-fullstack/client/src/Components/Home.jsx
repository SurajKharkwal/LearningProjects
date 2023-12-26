import React, { useState } from 'react';
import {RiTwitterXFill} from 'react-icons/ri';
import {BiLogoLinkedin} from 'react-icons/bi';
import {BsGithub, BsDiscord } from 'react-icons/bs';
import { AiFillInstagram} from 'react-icons/ai';
import { redirect, Link } from 'react-router-dom';
import shortid from 'shortid';


const home = (props) => {

    const handleSubmmit = (e)=> {
        e.preventDefault();
        props.full(url.value);   
        props.short(shortid.generate());
    }

  return (
    <div className='relative w-full'>
        <nav className=' bg-slate-900 text-white flex justify-end items-center'>
            <Link  to="/" className='first:mr-auto' ><img src="../images/logo1.png" width="120px" alt="logo" /></Link>
            <h1 className='mr-[25%] font-bold text-5xl ' >Url-Shortner</h1>
            <Link to="/sigin" className='p-[0.5vw]  text-white bg-blue-500 rounded-lg shadow-lg' >Sign-in</Link>
            <div className='w-1 h-12 m-4 rounded-lg bg-white'></div>
            <Link to="/login" className='p-[0.5vw] text-xl border-blue-500 border-2 mr-4 rounded-lg shadow-lg' >Logn-in</Link>
        </nav>
        <div className='p-[2vw] bg-slate-900 flex flex-col justify-center items-center'>
            <h2 className=' text-white text-3xl' >Enter the link and receive a shortened URL for it</h2><br />
            <form onSubmit={handleSubmmit} >
                <input type="url"className='p-[2vh] text-[1.2vw] w-[35vw] bg-slate-300 rounded-lg' placeholder='www.https://url.com' name="url" id="url" />
                <button className=' text-white rounded-md -translate-x-4 text-[1.2vw] w-[7vw] p-[2vh] bg-blue-500 ' type="submit">Shrink</button>
            </form><br />
            <Link to={`/${props.shortUrl}`} className="ans w-auto h-[4vh] text-slate-400 text-xl font-extralight">{`${props.shortUrl}`}</Link>
        </div>
        <div className='relative w-full  justify-center items-center  grid grid-cols-[1fr_1fr] '>
            <div className='flex justify-center items-center flex-col' >
                <h1 className='text-3xl font-bold p-[3vw]'>"Simplify URL Management"</h1>
                <p className='text-xl text-center w-[75%] p[2vw]'>This is a straightforward short URL service that takes your input URL and generates a concise, easy-to-share shortened URL for it</p>
                < p className='text-xl text-center w-[75%] p[2vw]' >or</p><br />
                <p className='text-xl text-center w-[75%] p[2vw]'>Our user-friendly platform streamlines the process of converting lengthy web addresses into compact, easy-to-share links, enhancing your online experience."</p>
                <div className=' w-full m-16 h-full flex justify-end items-end'>
                    <div clas sName=' border-black relative border-2 w-12 h-20 rounded-[2vw] shadow-lg after:shadow-[5vw] after:contents-[""] after:absolute after:w-3 after:h-3 after:rounded-[100%] after:bg-black after:left-[30%] after:m-1 after:duration-1500 after:animate-[wiggle_1s_ease-in-out_infinite]' >
                    </div>
                </div>
            </div>
           <div className=' w-full h-full flex justify-center items-center '>
                <img src="../images/rimg.png" width='80%'  alt="" />
           </div>
        </div>
        <div>
             
        </div>
        <div className='flex justify-center items-center]  flex-col'>
            <div className='flex ml-16 justify-center items-center'>
                <img src="../images/img3.jpg" width='30%' alt="" />
                <div className='p-[8vw] ml-8'>
                    <h1 className='text-3xl font-bold p-[3vw]'>Here's a helpful suggestion for you.</h1>
                    <p className='text-xl text-center w-[75%] p[2vw]'> Upon logging into the portal, you have the option to store your links indefinitely. You can then use them at your convenience whenever needed.</p>
                </div>
            </div>
            <footer className='w-full h-[20vh] rounded-t-[2vw] p-[4vw] flex justify-center items-center bg-slate-900 text-white'>
                <table>
                    <thead>
                        <tr>
                            <th><a href=""><AiFillInstagram className='m-[2vw] text-4xl'/></a></th>
                            <th><a href=""><BsGithub className='m-[2vw] text-4xl'/></a></th>
                            <th><a href=""><BsDiscord className='m-[2vw] text-4xl'/></a></th>
                            <th><a href=""><BiLogoLinkedin className='m-[2vw] text-4xl'/></a></th>
                            <th><a href=""><RiTwitterXFill className='m-[2vw] text-4xl'/></a></th>
                        </tr>
                    </thead>
                </table>
            </footer>
            <div className='bg-black h-[3vh]'>
                <h1 className='text-white text-center bg-black text-xl p-[1vw]'>Created by FlyingHawk...</h1>
            </div>
        </div>
    </div>
  )
}

export default home;
