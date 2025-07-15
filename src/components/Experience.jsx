import React from 'react';

export default function Experience() {
    return (
        <div className='w-full flex flex-col gap-2'>
            <h1 className='text-4xl font-bold text-violet-500 mb-3 md:text-start text-center'>Experience</h1>

            {/* Company Block */}
            <div className='relative flex md:px-0 px-3 text-justify gap-8'>
                {/* Timeline Line */}
                <div className='h-full border-l-2 md:block hidden border-slate-500'></div>

                <div className='flex flex-col gap-5'>
                    {/* Company Info */}
                    <div className='text-slate-400 flex items-center gap-4'>
                        <img
                            className="rounded-full w-[80px] shadow-sm shadow-white"
                            src="https://res.cloudinary.com/dfrcswf0n/image/upload/v1730799984/aero2astrologo_qqdm04.png"
                            alt="Aero2Astro"
                        />
                        <div className='flex flex-col'>
                            <h1 className='text-2xl text-white'>Aero2Astro</h1>
                            <h3 className='text-[18px] font-semibold'>Full Stack Developer</h3>
                            <h4 className='text-base text-green-400'>Full Time | June 2025 – Present</h4>
                            <h3 className='text-[16px] text-slate-400 italic font-medium'>Intern | Sept 2024 – May 2025</h3>
                        </div>
                    </div>

                    {/* Full-Time Role */}
                    <div>
                        <h4 className='text-white font-semibold'>Full-Time Role:</h4>
                        <ul className='list-disc text-slate-300 pl-5 mb-4'>
                            <li className='mb-2'>
                                Leading the development of the <strong>Mission Planning Module</strong> that enables drone operators to create custom missions and download automated flight plans, directly executable by drones.
                            </li>
                            <li className='mb-2'>
                                Mentoring and overseeing a team of three junior developers, ensuring timely delivery of features and maintaining code quality through regular reviews and guidance.   </li>
                            <li className='mb-2'>
                                Continuously enhancing the <strong>Drone Pilot Management System</strong> by adding features like pilot performance tracking, flight history logs, and role-based access controls.
                            </li>
                            <li>
                                Collaborating with cross-functional teams to improve UX and ensure seamless integration with drone firmware and front-end systems.
                            </li>
                        </ul>
                    </div>


                    {/* Internship Role */}
                    <div>
                        <h4 className='text-white font-semibold'>Internship Role:</h4>
                        <ul className='list-disc text-slate-300 pl-5 mb-4'>
                            <li className='mb-2'>
                                Contributed to the core development of the <strong>Drone Pilot Management System</strong> using <strong>Next.js, Node.js, Express, and MongoDB</strong>.
                            </li>
                            <li className='mb-2'>
                                Improved onboarding by <strong>30%</strong> through a streamlined registration and verification process.
                            </li>
                            <li>
                                Boosted platform SEO by <strong>25%</strong>, driving increased organic reach and visibility.
                            </li>
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        {[
                            "React.js",
                            "Next.js",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "Leaflet.js",
                            "Turf.js",
                            "Tailwind CSS",
                            "JavaScript"
                        ].map((tech) => (
                            <span
                                key={tech}
                                className='inline-block bg-green-500 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-green-500 mb-2 mr-2 rounded-full'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
