/* eslint-disable no-unused-vars */
import React from 'react'
import Technologies from './Technologies'

const Skills = () => {
    return (
        <div className='space-y-8'>
            <div>
                <p className='text-gray-500 text-sm font-semibold xl:text-lg'>MY SKILLS</p>
                <h2 className='font-black text-black text-2xl xl:text-4xl'>TECHNOLOGIES.</h2>
            </div>
            <div className='grid grid-cols-2 place-content-center md:grid-cols-4 lg:grid-cols-6 gap-4 items-center px-6 py-5'>
                <Technologies />
            </div>
        </div>
    )
}

export default Skills