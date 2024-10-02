/* eslint-disable no-unused-vars */
import React from 'react'
import Services from './Services'

const About = () => {
    return (
        <div className='space-y-8'>
            <div>
                <p className='text-gray-500 text-sm font-semibold xl:text-lg'>Introduction</p>
                <h2 className='font-black text-gray-950 text-2xl xl:text-4xl'>Overview.</h2>
            </div>
            <p className='text-justify lg:text-left text-gray-400 leading-6 text-wrap text-xs md:text-sm lg:text-lg lg:w-[70%]'>
            As a FullStack Developer, I specialize in crafting dynamic, scalable web applications using modern technologies like React, Node.js, MongoDB, and SQL. I have led teams in building a SaaS platform, ensuring seamless integration of frontend and backend systems. I thrive in Agile environments, bringing innovation, precision, and a passion for problem-solving to every project. I’m always looking for opportunities to create impactful digital experiences and collaborate with forward-thinking teams. Let’s connect!
            </p>
            <div className='flex flex-col justify-between gap-5 py-5 px-3 items-center md:flex-row lg:space-x-8'>
                <Services />
            </div>
            
        </div>
    )
}

export default About