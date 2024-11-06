import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import Manish_Kumar_Jha from "../images/Manish_Kumar_Jha.pdf"
import { FaFileDownload, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Connect from './Connect';
export default function Details() {
    const [showConnect, setShowConnect] = useState(false)
    return (
        <div className='md:w-[30%] md:h-screen pt-14'>
            {showConnect && <Connect setShowConnect={setShowConnect} />}
            <div className='flex flex-col md:items-start items-center gap-y-3'>
                {/* profile Image */}
                <img className=' rounded-full h-48 w-48' src="https://res.cloudinary.com/dfrcswf0n/image/upload/v1730778977/WhatsApp_Image_2024-09-14_at_22.02.06_480fc9df_huhrur.jpg" alt="Manish Image" />
                {/* Brief Intro */}
                <h1 className='text-4xl font-bold'>Manish Kumar Jha</h1>
                <div className='text-slate-400'>Full Stack Web Developer</div>
                <div className='text-slate-400 flex items-center gap-2'><IoLocationSharp className='text-red-500' /> <span>New Delhi, India</span></div>
                <div className='md:w-[68%] md:text-start text-center text-slate-400'>Passionate MERN Stack Developer creating seamless, user-focused web applications that blend innovation and functionality.</div>
                {/* Resume and Links */}
                <div className='flex w-fit py-1 gap-6 items-center'>
                    <a className='flex items-center px-2 py-1 rounded-md gap-2 border-white border w-fit hover:bg-white hover:text-black transition-all duration-200' href="https://drive.google.com/drive/u/0/folders/1T6GMJ1EELFSf7HxGs-DtxHo-6fWA3V2a" target='_blank'><FaFileDownload /><span>Resume</span></a>
                    <ul className='flex gap-4 items-center'>
                        <li className='text-2xl text-slate-400 hover:text-white transition-all duration-200' ><a href="https://github.com/manishjhacse" target='_blank'><FaGithub /></a></li>
                        <li className='text-2xl text-slate-400 hover:text-white transition-all duration-200' ><a href="https://www.linkedin.com/in/manish02" target='_blank'><FaLinkedin /></a></li>
                        <li className='text-3xl text-slate-400 hover:text-white transition-all duration-200' ><a href="mailto:jhamanish.cse25@gmail.com" target='_blank'><MdEmail /></a></li>
                        <li className='text-[26px] text-slate-400 hover:text-white transition-all duration-200' ><a href="https://www.instagram.com/manish_j21" target='_blank'><FaInstagram /></a></li>
                    </ul>
                </div>
                <div className=' flex flex-col md:items-start items-center text-3xl gap-5 font-bold'>
                    <h1 className=' md:text-start text-center'>Want to work Together?</h1>
                    <button onClick={() => {
                        setShowConnect(true)
                    }} className='bg-violet-600 hover:bg-violet-800 transition-all duration-200 hover:text-slate-300 hover:scale-110 text-base w-fit px-4 py-2 rounded-md'>click here to connect</button>
                </div>
            </div>
        </div>
    )
}
