// import React from 'react';
// import Navbar from './Navbar';
import { bgImage, profilePics } from '../constants/images';

const Hero = () => {
    return (
        <div className="relative h-screen bg-black">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        ></div>

        {/* Black Overlay to make content visible */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Main content: Text and Intro */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">HI, I&#39;M Qudus Lawal</h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-4">
            A FullStack Developer
            </p>
            <p className="w-1/2 text-md sm:text-lg lg:text-xl text-white">
            Welcome to my Portfolio, where creativity meets technology by turning ideas into Reality through code and design
            </p>
        </div>

        {/* Profile Picture at the bottom right */}
        <div className="absolute bottom-5 right-10 z-10">
            <img
                src={profilePics}
                alt="Qudus Lawal"
                className="w-32 h-32 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-white"
            />
        </div>
        </div>
    );
};

export default Hero;
