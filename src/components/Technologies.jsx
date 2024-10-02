/* eslint-disable no-unused-vars */
import React from 'react'
import {technologies} from '../constants/index'

const Technologies = () => {
    return (
        <>
            {
                technologies.map((item, i) => (
                    <div 
                        key={i} 
                        className='bg-gray-800 drop-shadow-xl rounded-full w-24 h-24 p-5 flex justify-center items-center transform transition-all duration-500 ease-in-out hover:scale-125 hover:bg-blue-950'>
                        <img src={item.image} alt={item.name} className='w-12 h-12 object-contain' />
                    </div>
                ))
            }
        </>
        
    )
}

export default Technologies