/* eslint-disable no-unused-vars */
import React from 'react'
// import Timeline from './Timeline'
import { experiences } from '../constants'

const Experiences = () => {
    return (
        <div className="experience-container space-y-6 flex flex-col md:flex-row">
        {experiences.map((experience, i) => (
            <div
            key={i}
            className="experience-card flex flex-col md:flex-col items-center bg-white drop-shadow-lg p-5 rounded-lg">
            {/* Company Image */}
            <div className="company-logo w-24 h-24 md:w-36 md:h-36 flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                <img src={experience.logo} alt={experience.company} className="w-full h-full object-contain rounded-full" />
            </div>

            {/* Experience Details */}
            <div className="experience-details text-left">
                <h3 className="text-xl font-bold">{experience.role}</h3>
                <p className="text-gray-500">{experience.company} – {experience.location}</p>
                <p className="text-gray-400 mb-2">{experience.dateRange}</p>
                {/* <ul className="list-disc pl-5 space-y-1">
                {experience.responsibilities.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600">{item}</li>
                ))}
                </ul> */}
            </div>
            </div>
        ))}
        </div>
    )
}


export default Experiences