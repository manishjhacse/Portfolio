import React from 'react'

export default function Education() {
    return (
        <div className='w-full flex flex-col gap-2'>
            <h1 className='text-4xl font-bold text-violet-500 mb-3 md:text-start text-center'>Education</h1>
            {/* Education */}
            {/* Education Container B.tech */}
            <div className='relative flex gap-8'>
                {/* Line */}
                <div className='h-full border-l-2 border-slate-500'></div>

                {/* Education Details */}
                <div className='text-slate-400 flex items-center gap-4'>
                    {/* <img className="rounded-full w-[80px]" src="https://res.cloudinary.com/dfrcswf0n/image/upload/v1730802945/WhatsApp_Image_2024-11-05_at_16.04.31_304d3cb3_wliijk.jpg" alt="BPMCE" /> */}
                    <div className='flex flex-col'>
                        <h1 className='text-2xl text-white font-bold'>B.Tech (CSE)</h1>
                        <h3 className='text-[18px]'>B. P. Mandal college of engineering</h3>
                        <h4 className='text-sm'>December 2021 - Present</h4>
                        <h4 className='text-sm'>7.95 CGPA</h4>
                    </div>
                </div>
            </div>
            {/* Education Container Intermediate */}
            <div className='relative flex gap-8 mt-8'>
                {/* Line */}
                <div className='h-full border-l-2 border-slate-500'></div>

                {/* Education Details */}
                <div className='text-slate-400 flex items-center gap-4'>
                    {/* <img className="rounded-full w-[80px]" src="https://res.cloudinary.com/dfrcswf0n/image/upload/v1730803500/WhatsApp_Image_2024-11-05_at_16.14.19_759661b7_nwsc51.jpg" alt="BPMCE" /> */}
                    <div className='flex flex-col'>
                        <h1 className='text-2xl text-white font-bold'>12<sup>th</sup> (PCM)</h1>
                        <h3 className='text-[18px]'>Bihar School Examination Board</h3>
                        <h4 className='text-sm'>May 2018 - March 2020</h4>
                        <h4 className='text-sm'>79.2%</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
