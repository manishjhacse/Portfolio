import React, { useEffect } from "react";
import "./skills.css";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { TbBrandCpp } from "react-icons/tb";
import { FaArrowDown } from "react-icons/fa6";
import { TbBinaryTree } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Skills({mode}) {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div 
    data-aos="fade-down"
      id="skills"
      className="relative min-h-[90vh] flex flex-col items-center w-screen"
    >
      <div className="flex-col mb-10 w-fit items-center flex">
        <h1 className="text-3xl font-bold">MY SKILLS</h1>
        <div className="w-[90%] rounded-md h-1 bg-[#4070f4]"></div>
      </div>
      <div className="md:w-[75%] w-full h-full flex justify-center items-center">
        <div className="w-fit flex flex-col mt-8 gap-10 md:gap-20 items-center">
          {/* skill box */}
          <ul
            className={`flex w-fit  gap-x-10 gap-y-5 flex-wrap justify-center transition-all duration-500 px-5 py-3 rounded-md ${mode!=="dark"?"skill-boxes":""}`}
          >
            <li className="flex skill-box dark:text-[#3FA037] bg-[#3FA037] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md  items-center flex-col gap-1">
              <SiMongodb className="md:h-20 md:w-20 h-10 w-10" />
              <h1 className="text-bold  md:text-xl ">MongoDB</h1>
            </li>
            <li className="flex skill-box dark:text-yellow-200 bg-yellow-200 justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <SiExpress className="md:h-20 md:w-20 h-10 w-10" />
              <h1 className="text-bold md:text-xl ">Express.js</h1>
            </li>
            <li className="flex skill-box dark:text-[#61DBFB] bg-[#61DBFB] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <FaReact className="md:h-20 md:w-20 h-10 w-10" />
              <h1 className="text-bold md:text-xl ">React.js</h1>
            </li>
            <li className="flex skill-box dark:text-[#68a063] bg-[#68a063] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <FaNode className="md:h-20 md:w-20 h-10 w-10" />
              <h1 className="text-bold md:text-xl ">Node.js</h1>
            </li>
            <li className="flex skill-box justify-center dark:text-[#0077cc] bg-[#0077cc] dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <SiTailwindcss className="md:h-20 md:w-20 h-10 w-10" />
              <h1 className="text-bold md:text-xl ">Tailwind CSS</h1>
            </li>
          </ul>

          {/* skill box */}
          <ul
            className={`flex w-fit  gap-x-10 gap-y-5 flex-wrap justify-center transition-all duration-500 px-5 py-3 rounded-md ${mode!=="dark"?"skill-boxes":""}`}
          >
            <li className="flex skill-box dark:text-[#f89820] bg-[#f89820] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md  items-center flex-col gap-1">
              <FaJava className="md:h-20 md:w-20 h-10 w-10" />
              <h1 className="text-bold  md:text-xl ">Java</h1>
            </li>
            <li className="flex skill-box dark:text-[#5e97d0] bg-yellow-200 justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <TbBrandCpp className="md:h-20 md:w-20 h-10 w-10" />
              <h1 className="text-bold md:text-xl ">C++</h1>
            </li>
            <li className="flex skill-box dark:text-[white] bg-[white] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <TbBinaryTree className="md:h-20 md:w-20 h-10 w-10" />
              <h1 className="text-bold md:text-xl ">DS&A</h1>
            </li>
          </ul>
        </div>
      </div>
      <a className="md:block hidden  cursor-pointer z-50" href="#projects">
        <button className="text-xl arrow-button bott absolute z-10 md:block hidden bottom-[130px] left-[48%]   duration-500 transition-all animate-bounce">
          <FaArrowDown />
        </button>
      </a>
    </div>
  );
}
