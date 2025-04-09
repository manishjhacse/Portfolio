import React from 'react';

export default function Experience() {
    return (
        <div className='w-full flex flex-col gap-2'>
            <h1 className='text-4xl font-bold text-violet-500 mb-3 md:text-start text-center'>Experience</h1>
            {/* Experience */}
            {/* Work Container */}
            <div className='relative flex md:px-0 px-3 text-justify gap-8'>
                {/* Line */}
                <div className='h-full border-l-2 md:block hidden border-slate-500'></div>
                <div className='flex flex-col gap-5'>
                    {/* Company Details */}
                    <div className='text-slate-400 flex items-center gap-4'>
                        <img className="rounded-full w-[80px] shadow-sm shadow-white" src="https://res.cloudinary.com/dfrcswf0n/image/upload/v1730799984/aero2astrologo_qqdm04.png" alt="Aero2Astro" />
                        <div className='flex flex-col'>
                            <h1 className='text-2xl text-white'>Aero2Astro</h1>
                            <h3 className='text-[18px]'>Full Stack Developer</h3>
                            <h4 className='text-base'>September 2024 - Present</h4>
                        </div>
                    </div>
                    {/* Works */}
                    <ul className='list-disc list-outside text-slate-300 pl-3'>
                        <li className='mb-2 '> Currently working with a team to develop and implement a Drone Pilot Management System using Next.js,
                            Node.js, Express, and MongoDB to efficiently manage drone pilots' profiles, geolocation, and
                            experience data, enhancing operational efficiency and task allocation.</li>
                        <li className='mb-2'>Increased drone pilot onboarding by 30% by streamlining the registration and verification process,
                            reducing friction, and enhancing user experience.</li>
                        <li>Improved website SEO by 25%, enhancing search engine visibility and driving higher organic traffic. </li>
                    </ul>
                    <div>{["React.js", "Next.js", "Express.js", "Node.js", "MongoDb", "TailwindCSS", "JavaScript"].map((lang) => {
                        return <span key={lang} className='inline-block bg-green-500 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-500 mb-2 mr-2 rounded-full'>{lang}</span>
                    })}</div>
                </div>
            </div>
        </div>
    );
}
