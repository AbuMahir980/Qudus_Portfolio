/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaGithub, FaLink } from "react-icons/fa";


const ProjectCard = ({ project }) => {
    return (
        <div className="relative group bg-black text-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105">
        {/* Project Image */}
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-60 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Overlay with gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 z-10"></div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
            <div>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-sm mt-2">{project.description}</p>
            </div>

            {/* Tools Used */}
            <div className="flex space-x-4 mt-4">
            {project.tools.map((tool, i) => (
                <img key={i} src={tool.icon} alt={tool.name} className="w-6 h-6" />
            ))}
            </div>

            {/* Links */}
            <div className="flex space-x-4 mt-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FaLink className="w-6 h-6 hover:text-gray-400" />
            </a>
            </div>
        </div>
        </div>
    );
};

export default ProjectCard;
