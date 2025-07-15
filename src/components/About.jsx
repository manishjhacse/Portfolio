import React from 'react'

export default function About() {
    return (
        <div className='w-full md:text-start text-center max-w-3xl mx-auto'>
            <h1 className='text-4xl font-bold text-violet-500 mb-2'>About Me</h1>

            <p className='text-slate-300 my-2'>
                I'm a <span className="font-bold">Computer Science and Engineering graduate</span> with a strong passion for building
                <span className="font-bold"> scalable</span>, <span className="font-bold"> modern</span>, and
                <span className="font-bold"> user-centric web applications</span>. My core expertise lies in the
                <span className="font-bold"> MERN stack</span> — <span className="font-bold">MongoDB, Express.js, React, and Node.js</span> —
                through which I’ve developed dynamic and production-ready projects.
            </p>

            <p className='text-slate-300 my-2 hidden md:block'>
                In addition to full-stack development, I’m also skilled in <span className="font-bold">Java</span> and
                <span className="font-bold"> object-oriented programming</span>. I have a sharp eye for
                <span className="font-bold"> UI/UX design</span> and enjoy crafting <span className="font-bold">clean</span>,
                <span className="font-bold"> intuitive interfaces</span> that elevate the user experience.
            </p>

            <p className='text-slate-300 my-2 hidden md:block'>
                I’ve worked on <span className="font-bold">diverse projects</span> — both independently and in teams — and participated in
                several <span className="font-bold">hackathons</span> and <span className="font-bold">coding challenges</span>.
                I'm now actively seeking opportunities where I can <span className="font-bold">contribute my skills</span>,
                <span className="font-bold"> keep learning</span>, and <span className="font-bold">build impactful digital solutions</span>.
            </p>

            <p className='text-slate-300 mt-4 font-semibold'>
                I'm excited to bring my energy and creativity into a role where I can make a real difference. Let’s build something amazing together!
            </p>
        </div>
    )
}
