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
import { IoLogoJavascript } from "react-icons/io";
import { TbBinaryTree } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Skills({ mode }) {
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
      <div className="md:w-[75%] px-3 w-full h-full flex flex-col gap-y-5 justify-center items-center">
        {/* <div className="w-fit flex flex-col mt-8 gap-10 md:gap-20 items-center">
          
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
        </div> */}

        {/* frontend */}
        <div className=" p-2 bg-gray-300 dark:bg-gray-500 dark:bg-opacity-80 transition-all duration-200 text-black rounded-md">
          <h1 className="w-full  uppercase text-center text-xl underline font-bold">
            Frontend
          </h1>

          <ul
            className={`flex w-full gap-3 flex-wrap justify-center transition-all duration-500 md:px-5 py-3 rounded-md`}
          >
            <li className="flex skill-box dark:text-[#E34F26] bg-[#E34F26] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md  items-center flex-col gap-1">
              <FaHtml5 className=" h-10 w-10" />
              <h1 className="text-bold md:text-[20px] ">Html</h1>
            </li>
            <li className="flex skill-box dark:text-[#264DE4] bg-[#264DE4] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <FaCss3Alt className="  h-10 w-10" />
              <h1 className="text-bold md:text-[20px] ">CSS</h1>
            </li>
            <li className="flex skill-box dark:text-[#F7DF1E] bg-[#F7DF1E] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <IoLogoJavascript className=" h-10 w-10" />
              <h1 className="text-boldmd:text-[20px] ">JS</h1>
            </li>
            <li className="flex skill-box dark:text-[#61DBFB] bg-[#61DBFB] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <FaReact className=" h-10 w-10" />
              <h1 className="text-boldmd:text-[20px] ">React.js</h1>
            </li>
            <li className="flex skill-box h-15 w-15 dark:text-[#0077cc] bg-[#0077cc] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <SiTailwindcss className=" h-10 w-10" />
              <h1 className="text-boldmd:text-[20px] ">TailwindCSS</h1>
            </li>
            <li className="flex skill-box h-15 w-15 dark:text-[#7952B3] bg-[#7952B3] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <FaBootstrap className=" h-10 w-10" />
              <h1 className="text-boldmd:text-[20px] ">Bootstrap</h1>
            </li>
          </ul>
        </div>

        {/* backend */}
        <div className=" p-2 bg-gray-300 dark:bg-gray-500 dark:bg-opacity-80 transition-all duration-200 text-black rounded-md">
          <h1 className="w-full uppercase text-center text-xl underline font-bold">
            Backend
          </h1>

          <ul
            className={`flex w-full gap-3 flex-wrap justify-center transition-all duration-500 px-5 py-3 rounded-md`}
          >
            <li className="flex skill-box dark:text-[#68a063] bg-[#68a063] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md  items-center flex-col gap-1">
              <FaNode className=" h-10 w-10" />
              <h1 className="text-bold md:text-[20px] ">Node.js</h1>
            </li>
            <li className="flex skill-box dark:text-[#FF7F2A] bg-[#FF7F2A] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <SiExpress className="  h-10 w-10" />
              <h1 className="text-bold md:text-[20px] ">Express.js</h1>
            </li>
            <li className="flex skill-box dark:text-[#3FA037] bg-[#3FA037] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <SiMongodb className=" h-10 w-10" />
              <h1 className="text-boldmd:text-[20px] ">MongoDB</h1>
            </li>
            <li className="flex skill-box dark:text-[white] bg-[white] justify-center dark:bg-[black] transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <SiSocketdotio className=" h-10 w-10" />
              <h1 className="text-boldmd:text-[20px] ">Socket.io</h1>
            </li>
          </ul>
        </div>
        {/* programming languages */}
        <div className=" p-2 bg-gray-300 dark:bg-gray-500 dark:bg-opacity-80 transition-all duration-200 text-black rounded-md">
          <h1 className="w-full uppercase text-center text-xl underline font-bold">
            Progamming Languages
          </h1>

          <ul
            className={`flex w-full gap-3 flex-wrap justify-center transition-all duration-500 px-5 py-3 rounded-md`}
          >
            <li className="flex skill-box dark:text-[#f89820] bg-[#f89820] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md  items-center flex-col gap-1">
              <FaJava className=" h-10 w-10" />
              <h1 className="text-bold md:text-[20px] ">Java</h1>
            </li>
            <li className="flex skill-box dark:text-[#5e97d0] bg-yellow-200 justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <TbBrandCpp className="  h-10 w-10" />
              <h1 className="text-bold md:text-[20px] ">Cpp</h1>
            </li>
            <li className="flex skill-box dark:text-[white] bg-[white] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <TbBinaryTree className=" h-10 w-10" />
              <h1 className="text-boldmd:text-[20px] ">DS&A</h1>
            </li>
            <li className="flex skill-box h-15 w-15 dark:text-[#3776AB] bg-[#3776AB] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <FaPython className=" h-10 w-10" />
              <h1 className="text-boldmd:text-[20px] ">Python</h1>
            </li>
            <li className="flex skill-box dark:text-[#F7DF1E] bg-[#F7DF1E] justify-center dark:bg-black transition-all duration-500 px-2 py-1 rounded-md items-center flex-col gap-1">
              <IoLogoJavascript className=" h-10 w-10" />
              <h1 className="text-boldmd:text-[20px] ">JS</h1>
            </li>
          </ul>
        </div>

        {/* Tools */}

       
        {/* end */}
      </div>
    </div>
  );
}
