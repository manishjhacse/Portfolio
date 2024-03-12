import React from "react";
import "./home.css";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import manishProfile from "../../images/manishProfile.jpg";
import Manish_Kumar_Jha from '../../images/Manish_Kumar_Jha.pdf'
export default function Home() {
  const handleScroll = () => {};

  return (
    <div
      id="home"
      className="w-screen h-[95vh] overflow-hidden flex md:justify-center  items-center  transition-all duration-200 dark:text-white"
    >
      <div className="md:w-[75%] w-full  px-5 md:px-0 md:flex-row  gap-y-14 flex-col-reverse flex items-center md:justify-between">
        {/* Hero section text */}
        <div className="text-sec md:text-[64px] w-full flex flex-col items-center md:items-start md:w-[60%] text-[24px] font-bold ">
          <div className="flex md:flex-col gap-x-3 flex-row">
            <h1 className=" transition-all duration-200 dark:text-white">
              Hi,
            </h1>
            <h2 className=" transition-all duration-200 dark:text-white">
              I am <span className="text-[#4070f4]">Manish</span>
            </h2>
          </div>
          <h1 className=" transition-all duration-200 dark:text-white">
            <Typewriter
              words={["MERN Developer.", "CS Student."]}
              cursor
              loop={false}
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </h1>
          <a target="_blankx" href={Manish_Kumar_Jha}>
          <button className="hover:bg-[#2d4481] group bg-[#4070f4] flex items-center gap-3 mt-8 transition-all duration-200 text-white text-xl font-bold px-4 py-2 rounded-md">
            Download CV <FaDownload className="group-hover:animate-bounce" />
          </button>
          </a>
          <div className="flex text-xl md:text-2xl text-black bg-transparent dark:text-white duration-500 transition-all gap-x-10 mt-10">
            <a
              target="_blank"
              href="http://instagram.com/manish_j21"
              className="hover:scale-125 transition-all duration-200"
            >
              <FaInstagram />
            </a>
            <a
              className="hover:scale-125 transition-all duration-200"
              target="_blank"
              href="https://linkedin.com/in/manish02"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="hover:scale-125 transition-all duration-200"
              target="_blank"
              href="https://github.com/manishjhacse/"
            >
              <FaGithub />
            </a>
            <a
              className="hover:scale-125 transition-all duration-200"
              target="_blank"
              href="https://twitter.com/manish_jha02"
            >
              <FaXTwitter />
            </a>
          </div>
          <a className="cursor-pointer z-50" href="#about">
            <button className="text-xl md:block hidden arrow-button absolute bottom-[54px] md:bottom-14 left-[48%] text-black dark:text-white duration-500 transition-all animate-bounce">
              <FaArrowDown />
            </button>
          </a>
        </div>
        {/* Hero section image */}
        <div className=" cursor-pointer justify-start items-start md:w-[40%] flex">
          <div className="dp">
            <img src={manishProfile} alt="" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
