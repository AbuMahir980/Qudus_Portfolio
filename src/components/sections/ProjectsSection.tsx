import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../lib/animations';
import { projects } from '../../data';
import ProjectCard from '../features/ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 px-6">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeIn}
          className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-10"
        >
          Selected Work
        </motion.h2>

        <div className="grid gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
