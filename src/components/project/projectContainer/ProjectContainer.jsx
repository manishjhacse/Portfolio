import React, { useEffect } from "react";
import "./projectcontainer.css";
import Aos from "aos";
import "aos/dist/aos.css";
export default function ProjectContainer({ data, mode }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { videoSource, name, previewLink, githubLink, technologies } = data;
  return (
    <div data-aos="fade-down">
      <div
        className={`flex bg-white text-black ${
          mode !== "dark" ? "projectDark" : "projectLight"
        } text-white flex-col items-center w-[250px] md:w-[350px] transition-all duration-200 gap-2 rounded-md md:h-[330px] py-2 border border-black dark:border-white overflow-hidden dark:bg-black dark:text-white`}
      >
        <h1 className="text-xl text-black w-full text-center dark:text-white font-bold">{name}</h1>
        <a href={previewLink} target="_black">
        <video autoPlay muted loop>
          <source src={videoSource} />
        </video>
        </a>
        <div className="w-full justify-between flex items-start">
          <div className="md:gap-5 gap-2 px-2 md:px-5 flex">
            <a className="w-full transition-all duration-200 h-full text-xs dark:bg-white bg-black text-white   hover:bg-black hover:text-white dark:text-black border border-white  px-2 py-1 rounded-md" target="_blank" href={githubLink}>
              <button >
                Github
              </button>
            </a>
            <a className="w-full transition-all duration-200 h-full text-xs dark:bg-white bg-black text-white   hover:bg-black hover:text-white dark:text-black border border-white  px-2 py-1 rounded-md" target="_blank" href={previewLink}>
              <button >
                Preview
              </button>
            </a>
          </div>
        </div>
        <div className="w-full flex text-black dark:text-white flex-wrap gap-x-2 px-2 md:px-5">
          {technologies.map((technology, i) => {
            return (
              <span className="text-xs py-0.5 rounded-full" key={i}>
                #{technology}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
