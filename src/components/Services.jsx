/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {services} from '../constants/index'

const Services = ({ image, name }) => {
    return (
        <>
            {services.map((item, i) => (
                <div key={i} className='rounded-lg bg-white drop-shadow-2xl w-60 h-64 lg:h-72 lg:w-72 flex justify-center items-center text-black font-bold flex-col space-y-2 md:w-[80%] transform transition-all duration-500 ease-in-out hover:scale-105 '>
                    <img src={item.image} alt={item.name} />
                    <p className='xl:text-xl'>{item.name}</p>
                </div>
            ))}
        </>
    );
};

export default Services