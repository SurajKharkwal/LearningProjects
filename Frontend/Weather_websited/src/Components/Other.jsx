import React, { useRef } from 'react'
import {  AiFillGithub, AiFillLinkedin  } from 'react-icons/ai'
import { BsInstagram, BsDiscord } from 'react-icons/bs'
<script src="https://smtpjs.com/v3/smtp.js">
</script>


const Other = () => {
    const feedbackRef = useRef(null);

    function sendEmail () {
        const inputFeedback = feedbackRef.current.value;

        Email.send({
            SecureToken : "ed74ef9e-1aad-4768-a228-9338bb43256b",
            To : "surajkharkwal768@gmail.com",
            From : "surajkharkwal768@gmail.com",
            Subject : "Regardding Weather application",
            Body : `${inputFeedback}`
        }).then(
          message => alert(message)
        );

    }

  return (
    <div id='other' className='overflow-y-hidden relative ' >
        <div className=" flex flex-col justify-center items-center main h-[70vh]">
            <h1 className='text-left text-2xl w-[70vw] text-gray-300 '>"If you like to offer feedback on aspects that are commendable and areas where there is room for improvement."</h1><br />
            <form onSubmit={(event)=>{event.preventDefault(); sendEmail()}} className='relative flex flex-col    '>
                <textarea placeholder='Enter the feedback . . .' ref={feedbackRef} name="text" className='bg-gray-500 w-[55vw] p-[2vw] relative h-[15vw] ' ></textarea>
                <button type="submit" className='bg-blue-700 absolute bottom-[1vw] right-[1vw] z-40 rounded-sm p p-[1vw]' >Submit</button>
            </form>

        </div>
        <div className=' bottom-[25%] left-[25%] z-20 absolute w-[50vw] flex justify-center items-center   bg-purple-300' >  
                <h1 className='text-2xl font-extrabold text-center p-[1vw] '>Ready for next project?</h1>
                <a className='bg-blue-600 m-[2vw] p-[1vw] text-center ' href="#">Let's Begain</a>
        </div>
        <footer className='bg-purple-600 h-[30vh]  flex justify-center items-center '>
            <table>
                <thead>
                    <tr>
                        <th>Contact me</th>
                        <th>Foollow me on </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Email : kharkwalsuraj13@gmail.coom</td>
                        <td className='flex ml-[2vw]  justify-center items-center space-x-[2vw]'>
                            <a href="https://github.com/SurajKharkwal"><AiFillGithub className='text-2xl' /></a>
                            <a href="https://www.linkedin.com/in/suraj-kharkwal-358268285/"><AiFillLinkedin className='text-2xl'/></a>
                            <a href="https://www.instagram.com/_suraj_kharkwal_/"><BsInstagram className='text-2xl'/></a>
                            <a href="#"><BsDiscord className='text-2xl'/></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Instagram : _suraj_kharkwal_</td>

                    </tr>
                </tbody>

            </table>
        </footer>
    </div>
  )
}

export default Other