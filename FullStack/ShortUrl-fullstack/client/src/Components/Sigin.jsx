import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';

const sigin = () => {

    const handleSubmit = async (e)=> {
        e.preventDefault();
        Axios.post('http://localhost:4367/Sigin', {
            email: email.value,
            userName: userName.value,
            password: password.value
        })
    }

  return (
    <div className='min-w-[100vw] min-h-[100vh] flex justify-center items-center bg-slate-200 '>
        <div className='max-w-[50vw] min-h-[35vw] grid grid-cols-[1fr_1fr] justify-center items-center border-l-4  bg-slate-100 shadow-lg shadow-gray-500 rounded-lg'>
            <div className=' border-r-2 grid grid-rows-[0.7fr_0.3fr_4fr_0.2fr] h-full w-[24vw]'>
                <h1 className='flex text-blue-800 justify-start text-3xl font-bold mb-2 pl-[2vw] items-end'>Sign-up</h1>
                <p className=' text-blue-400 font-extralight pl-6 '>Please enter the follwing details</p>
                <form className='flex justify-center items-start mt-[5vh] flex-col' onSubmit={handleSubmit} >
                    <div className=' pl-[2vw] flex justify-center items-start flex-col'>
                        <label htmlFor='email' className='text-xl p-1' >Email Address: </label>
                        <input type="email" className='p-2 text-[1.2vw] w-[20vw] bg-slate-300 rounded-lg' name="email" placeholder=' Enter the Email Address' id='email' required  />
                    </div><br />                   
                     <div className=' pl-[2vw] flex justify-center items-start flex-col'>
                        <label htmlFor='UserName' className='text-xl p-1' >UserName: </label>
                        <input type="text" aria-required className='p-2 text-[1.2vw] w-[20vw] bg-slate-300 rounded-lg' name="userName" placeholder=' Enter the UserName' id='userName' required  />
                    </div><br />
                    <div className=' pl-[2vw] flex justify-center items-start flex-col'>
                        <label htmlFor='passward' className='text-xl p-1'>Password:</label>
                        <input type="password"className='p-2 text-[1.2vw] w-[20vw] bg-slate-300 rounded-lg' placeholder='Enter passward' name="password" id="password" />
                    </div>
                    <button className='flex justify-center items-center text-center first-letter text-white rounded-md  m-8 p-1 text-[1.1vw] w-[6vw]  ml-[43%] h-[5vh] bg-blue-500 ' type="submit">Sign-up</button>
                </form>
                <div className='flex p-[1vw] items-center'>
                    <p className='p-2'>If you are already an useer?</p>
                    <Link className='ml-[10%] border-4 rounded-lg bg-white p-1 border-blue-500' to='/login' >Log-in </Link>
                </div>
            </div>
            <div className="bg-[url('../images/code.jpg')] w-full h-full bg-cover bg-center rounded-lg bg-no-repeat"></div>
        </div>
    </div>
  )
}

export default sigin