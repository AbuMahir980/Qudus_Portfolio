/* eslint-disable no-unused-vars */
import React from 'react'
import { experiences, resume} from '../constants'
import { download } from '../constants/images'

const Experiences = () => {
    return (
        <div className='space-y-8 rounded-tr-[100px] rounded-bl-[80px] p-5 bg-gray-900 lg:p-10'>
            <div>
                <p className='text-gray-500 text-sm font-semibold xl:text-lg'>WHAT I&#39;VE DONE SO FAR</p>
                <h2 className='font-black text-white text-2xl xl:text-4xl'>EXPERIENCES.</h2>
            </div>

            <div className="gap-6 grid grid-cols-1 justify-between items-center px-5 md:grid-cols-2 xl:justify-center">
            
                {experiences.map((experience, i) => (
                    <div
                    key={i}
                    className="flex flex-col justify-center items-center rounded-lg drop-shadow-2xl bg-white px-5 py-5 lg:flex-row transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-blue-950 hover:text-white">
                    {/* Company Image */}
                        <div className="w-16 h-16 md:w-28 md:h-28 flex-shrink-0 mb-4 md:mb-0 md:mr-8 self-start">
                            <img src={experience.logo} alt={experience.company} className="w-full h-full object-contain rounded-full" />
                        </div>

                    {/* Experience Details */}
                        <div className="text-left h-28">
                            <h3 className="text-xl font-bold">{experience.role}</h3>
                            <p className="text-gray-500">{experience.company} – {experience.location}</p>
                            <p className="text-gray-400 mb-2">{experience.dateRange}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='bg-white px-10 py-5 rounded-xl ml-8  w-[70%] md:w-[40%] lg:w-[20%]'>
                <div className='bg-gray-700 flex justify-around items-center p-3 rounded-md'>
                    <a href={`${resume[0].link}`} target='_blank' className="text-white font-semibold text-sm hover:text-gray-500">MY RESUME </a>
                    <img src={download} alt="" className='w-5 h-5 hover:opacity-75'/>
                </div>
            </div>
        </div>
    )
}


export default Experiences