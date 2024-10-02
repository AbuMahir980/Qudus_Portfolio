/* eslint-disable no-unused-vars */
import React from 'react'
import { experiences } from '../constants'
import { download } from '../constants/images'

const Experiences = () => {
    return (
        <div className='space-y-8 rounded-tr-[100px] rounded-bl-[80px] p-5 bg-gray-900 lg:p-10'>
            <div>
                <p className='text-gray-500 text-sm font-semibold xl:text-lg'>WHAT I&#39;VE DONE SO FAR</p>
                <h2 className='font-black text-white text-2xl xl:text-4xl'>EXPERIENCES.</h2>
            </div>

            <div className="gap-6 flex flex-col justify-between items-center px-5 md:flex-row xl:justify-center">
            
                {experiences.map((experience, i) => (
                    <div
                    key={i}
                    className="flex flex-col justify-center items-center rounded-lg drop-shadow-2xl bg-white px-5 py-5 lg:flex-row">
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
            <div className='bg-white px-10 py-5 rounded-xl ml-8 md:ml-20 w-[70%] md:w-[20%]'>
                <div className='bg-gray-700 flex justify-around items-center p-3 rounded-md hover:text-gray-500'>
                    <a href="https://drive.google.com/file/d/1ZOLeETJGxipb50jGH71E_9KCquq_euBN/view?usp=sharing" target='_blank' className="text-white font-semibold text-sm hover:text-gray-500">MY RESUME </a>
                    <img src={download} alt="" className='w-5 h-5 hover:text-gray-500'/>
                </div>
            </div>
        </div>
    )
}


export default Experiences