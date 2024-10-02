import { projects } from "../constants";
import ProjectCard from "./ProjectCard";
const Projects = () => {
    return (
        <div className="space-y-8">
            <div>
                <p className='text-gray-500 text-sm font-semibold xl:text-lg'>CASE STUDY</p>
                <h2 className='font-black text-gray-950 text-2xl xl:text-4xl'>PROJECTS.</h2>
            </div>
            <p className='text-justify lg:text-left text-gray-400 leading-6 text-wrap text-xs md:text-sm lg:text-lg lg:w-[70%]'>
                These projects show my hands-on experience with different technologies and my ability to build practical solutions. Each project includes a brief description along with links to the live demos and code. They highlight my journey as a developer and how I approach solving problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            </div>
        </div>
    );
};

export default Projects;