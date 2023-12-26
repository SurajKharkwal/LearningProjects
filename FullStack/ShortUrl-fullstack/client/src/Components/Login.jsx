import React from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

const login = () => {


    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailValue = email.value;
        const passwordValue = password.value;
        Axios.post('http://localhost:4367/Login', {
            email: emailValue,
            password: passwordValue
        })
    }
    
  return (
    <div className='min-w-[100vw] min-h-[100vh] flex justify-center items-center bg-slate-200 '>
        <div className='max-w-[50vw] min-h-[35vw] grid grid-cols-[1fr_1fr] justify-center items-center border-l-4 bg-slate-100 shadow-lg shadow-gray-500 rounded-lg'>
            <div className=' border-r-2 grid grid-rows-[0.5fr_0.3fr_2fr_0.2fr] h-full w-[24vw]'>
                <h1 className='flex text-blue-800 justify-start text-xl font-bold mb-2 pl-[2vw] items-end'>Login</h1>
                <p className=' text-blue-400 font-extralight pl-6 '>If you have an account please login</p>
                <form className='flex justify-center items-start mt-[5vh] flex-col' onSubmit={handleSubmit} >
                    <div className=' pl-[2vw] flex justify-center items-start flex-col'>
                        <label htmlFor='email'  className='text-xl p-1' >Email Address: </label>
                        <input type="email" className='p-2 text-[1.2vw] w-[20vw] bg-slate-300 rounded-lg' name="email" placeholder=' Enter the Email Address' required id="email" />
                    </div><br />
                    <div className=' pl-[2vw] flex justify-center items-start flex-col'>
                        <label htmlFor='passward' className='text-xl p-1'>Password:</label>
                        <input type="password" className='p-2 text-[1.2vw] w-[20vw] bg-slate-300 rounded-lg' placeholder='Enter passward' name="password" id="password" />
                    </div>
                    <button className='flex justify-center items-center text-center first-letter text-white rounded-md  m-8 p-1 text-[1.1vw] w-[4vw] ml-[43%] h-auto bg-blue-500 ' type="submit">Login</button>
                </form>
                <div className='flex p-[1vw] items-center'>
                    <p className='p-2'>If do't have an account?</p>
                    <Link className='ml-[20%] border-4 rounded-lg bg-white p-1 border-blue-500' to="/sigin" >Register</Link>
                </div>
            </div>
            <div className="bg-[url('../images/code.jpg')] w-full h-full bg-cover bg-center rounded-lg bg-no-repeat"></div>
        </div>
    </div>
  )
}

export default login