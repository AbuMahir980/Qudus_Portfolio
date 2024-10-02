/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { navContents } from '../constants/index';
import { socialLinks } from '../constants/index';
import { ql } from '../constants/images';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 shadow-md z-50 ">
            <div className="container mx-auto flex justify-between items-center p-5">
                {/* Logo and Name */}
                <div className="flex items-center space-x-2">
                <div className="logo w-12 h-12">
                    <img src={ql} alt="Logo" className="w-full h-full object-contain bg-gray-950 rounded-lg " />
                </div>
                <div className="text-xl font-bold text-gray-800">
                    Qudus Lawal
                </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-700 font-bold">
                {navContents.map((link, i) => (
                    <li key={i}>
                    <a href={link.id} className="hover:text-black transition-colors duration-300">
                        {link.title}
                    </a>
                    </li>
                ))}
                </ul>

                {/* Social Links for Desktop */}
                <div className="hidden md:flex space-x-4">
                {socialLinks.map((social, i) => {
                    const Icon = FaGithub; // Default fallback icon, you'll update this below
                    switch (social.icon) {
                    case "FaGithub":
                        return <a href={social.url} target="_blank" rel="noopener noreferrer" key={i}>
                        <FaGithub className="w-6 h-6 text-gray-700 hover:text-black transition-colors duration-300" />
                        </a>;
                    case "FaInstagram":
                        return <a href={social.url} target="_blank" rel="noopener noreferrer" key={i}>
                        <FaInstagram className="w-6 h-6 text-gray-700 hover:text-black transition-colors duration-300" />
                        </a>;
                    case "FaLinkedin":
                        return <a href={social.url} target="_blank" rel="noopener noreferrer" key={i}>
                        <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-black transition-colors duration-300" />
                        </a>;
                    case "FaXTwitter":
                        return <a href={social.url} target="_blank" rel="noopener noreferrer" key={i}>
                        <FaXTwitter className="w-6 h-6 text-gray-700 hover:text-black transition-colors duration-300" />
                        </a>;
                    default:
                        return <Icon key={i} className="w-6 h-6 text-gray-700 hover:text-black transition-colors duration-300" />;
                    }
                })}
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? <FaTimes className="text-gray-700 w-6 h-6" /> : <FaBars className="text-gray-700 w-6 h-6" />}
                </button>
                </div>
            </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white bg-opacity-90 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col items-center space-y-4 py-4">
            {navContents.map((link, i) => (
                <li key={i}>
                <a href={link.id} className="hover:text-black text-gray-700 transition-colors duration-300" onClick={toggleMenu}>
                    {link.title}
                </a>
                </li>
            ))}
            </ul>

            {/* Social Links for Mobile */}
            <div className="flex justify-center space-x-4 py-4">
            {socialLinks.map((social, i) => {
                const Icon = FaGithub; // Default fallback icon, you'll update this below
                switch (social.icon) {
                case "FaGithub":
                    return <a href={social.url} target="_blank" rel="noopener noreferrer" key={i}>
                    <FaGithub className="w-6 h-6 text-gray-700 hover:text-black transition-colors duration-300" />
                    </a>;
                case "FaInstagram":
                    return <a href={social.url} target="_blank" rel="noopener noreferrer" key={i}>
                    <FaInstagram className="w-6 h-6 text-gray-700 hover:text-black transition-colors duration-300" />
                    </a>;
                case "FaLinkedin":
                    return <a href={social.url} target="_blank" rel="noopener noreferrer" key={i}>
                    <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-black transition-colors duration-300" />
                    </a>;
                default:
                    return <Icon key={i} className="w-6 h-6 text-gray-700 hover:text-black transition-colors duration-300" />;
                }
            })}
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
