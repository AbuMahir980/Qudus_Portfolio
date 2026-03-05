import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';
import { ExternalLink, Github, Lock, Shield } from 'lucide-react';
import { Project } from '../../types';
import ArchitectureDiagram from './ArchitectureDiagram';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.article
      variants={fadeIn}
      className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-dark-card overflow-hidden"
    >
      {/* Visual area */}
      {project.hasDiagram ? (
        <div className="p-4 sm:p-5 bg-zinc-50 dark:bg-dark-bg">
          <ArchitectureDiagram />
        </div>
      ) : project.images && project.images.length > 0 ? (
        <div className="p-4 sm:p-5 bg-zinc-50 dark:bg-dark-bg">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-dark-bg">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      ) : null}

      {/* Content */}
      <div className="p-5 sm:p-6 space-y-4">
        {/* Header: title + badge */}
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-navy dark:text-white">
            {project.title}
          </h3>
          <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20">
            {project.badge}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Highlights (Ops Dashboard only) */}
        {project.highlights && (
          <ul className="space-y-1.5">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="text-xs leading-relaxed text-gray-500 dark:text-gray-500 pl-3 relative before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:rounded-full before:bg-gold"
              >
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 border border-zinc-200 dark:border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-green dark:text-emerald-400 hover:text-gold dark:hover:text-gold transition-colors"
            >
              <ExternalLink size={14} /> Live Site
            </a>
          )}
          {project.isInternal && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 dark:text-gray-600">
              <Shield size={14} /> Internal — no public access
            </span>
          )}
          {project.isPrivate && !project.isInternal && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 dark:text-gray-600">
              <Lock size={14} /> Private repository
            </span>
          )}
          {project.contributionsUrl && (
            <a
              href={project.contributionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-navy dark:hover:text-gray-300 transition-colors"
            >
              <Github size={14} /> Contributions
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
