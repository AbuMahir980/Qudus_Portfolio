import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../layout/SectionContainer';
import BlueprintTerminal from '../ui/BlueprintTerminal';
import EditorialButton from '../ui/EditorialButton';
import LazyImage from '../ui/LazyImage';
import { Project } from '../../types';
import { fadeIn, slideInLeft, slideInRight } from '../../lib/animations';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

interface ProjectSliceProps {
    project: Project;
    reverse?: boolean;
}

const ProjectSlice: React.FC<ProjectSliceProps> = ({ project, reverse }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'challenge' | 'solution'>('overview');

    return (
        <SectionContainer alternate={reverse}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${reverse ? 'lg:direction-rtl' : ''}`}>
                {/* Visual Content Slices */}
                <motion.div
                    variants={reverse ? slideInRight : slideInLeft}
                    className={`${reverse ? 'lg:order-2' : ''}`}
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-cyan-500/10 rounded-2xl blur-2xl group-hover:bg-cyan-500/20 transition-all duration-700 opacity-0 group-hover:opacity-100" />
                        <LazyImage
                            src={project.image}
                            alt={project.title}
                            className="rounded-xl border border-zinc-800/50 shadow-2xl relative z-10"
                        />

                        {/* Blueprint Overlay/Trigger */}
                        <div className="mt-8">
                            <BlueprintTerminal blueprint={project.blueprint} className="opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </motion.div>

                {/* Textual Content Slices */}
                <motion.div
                    variants={fadeIn}
                    className={`flex flex-col ${reverse ? 'lg:order-1' : ''}`}
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 w-fit">
                        Case Study / 0{project.id === 'powerhop' ? 1 : project.id === 'stem-mets' ? 2 : project.id === 'arc-kitchen' ? 3 : 4}
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 mb-8">
                        {project.title}.
                    </h2>

                    {/* Specs Interaction */}
                    <div className="mb-8">
                        <div className="flex gap-8 border-b border-zinc-900 mb-6">
                            {(['overview', 'challenge', 'solution'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-4 text-xs uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-cyan-400' : 'text-zinc-500 hover:text-zinc-300'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <motion.p
                            key={activeTab}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-zinc-400 leading-relaxed text-lg min-h-[120px]"
                        >
                            {project.specs[activeTab]}
                        </motion.p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {project.tools.map((tool) => (
                            <span key={tool.name} className="px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded text-[10px] text-zinc-500 uppercase tracking-tighter">
                                {tool.name}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 mt-auto">
                        {project.live && (
                            <EditorialButton href={project.live} className="h-12">
                                Launch Site <ExternalLink size={14} />
                            </EditorialButton>
                        )}
                        {project.github && (
                            <EditorialButton variant="outline" href={project.github} className="h-12 border-none px-4">
                                <Github size={18} />
                            </EditorialButton>
                        )}
                    </div>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default ProjectSlice;
