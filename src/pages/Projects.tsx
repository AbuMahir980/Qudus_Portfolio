import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { usePage } from '../context/PageContext';
import SectionContainer from '../components/layout/SectionContainer';
import ProjectSlice from '../components/features/ProjectSlice';
import SEOHead from '../lib/SEOHead';
import { seoConfig } from '../data/seo';
import { projects } from '../data';

const Projects: React.FC = () => {
    const { theme } = usePage();

    const borderColor = theme === 'dark' ? "border-white" : "border-[#364153]";

    const productionProjects = projects.filter(p => p.category === 'production');
    const sandboxProjects = projects.filter(p => p.category === 'sandbox');

    return (
        <div className="pt-4 overflow-x-hidden">
            <SEOHead {...seoConfig.home} title="Solutions | Qudus Lawal" />

            <SectionContainer id="projects-header" className="pt-4 md:pt-8 pb-0">
                <div className="space-y-8 py-8 mb-6">

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        {/* Left Side: Heading */}
                        <div className="md:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="flex items-baseline gap-3 md:gap-4 pb-2 flex-nowrap"
                            >
                                <span className="text-[#A9792B] font-black text-xs md:text-xl tracking-tighter whitespace-nowrap">03 /</span>
                                <h2 className={cn(
                                    "text-xl md:text-2xl font-black uppercase tracking-tighter whitespace-nowrap",
                                    theme === 'dark' ? "text-white" : "text-[#364153]"
                                )}>
                                    SOLUTIONS
                                </h2>
                            </motion.div>
                        </div>

                        {/* Right Side: Intro */}
                        <div className="md:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="max-w-2xl"
                            >
                                <q className={cn(
                                    "text-xs md:text-sm font-medium italic leading-loose tracking-tighter",
                                    theme === 'dark' ? "text-gray-300" : "text-[#364153]"
                                )}>
                                    Turning 'what if' into 'it works.' Exploring the intersection of human-centric design and scalable frontend architecture.
                                </q>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* Production Lab Category */}
            <div className="relative mt-4 mb-4">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className={cn("w-full", theme === 'dark' ? "border-t border-white/95" : "border-t border-[#364153]")}></div>
                </div>
                <div className="relative flex justify-center">
                    <span className={cn(
                        "px-6 text-[10px] font-black uppercase tracking-[0.5em]",
                        theme === 'dark' ? "bg-[#101828] text-[#A9792B]" : "bg-white text-[#A9792B]"
                    )}>
                        Category 01: Production Lab
                    </span>
                </div>
            </div>

            <div className="space-y-0">
                {productionProjects.map((project, index) => (
                    <ProjectSlice
                        key={project.id}
                        project={project}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </div>

            {/* Sandbox Category */}
            <div className="relative mt-12 mb-4">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className={cn("w-full", theme === 'dark' ? "border-t border-white/95" : "border-t border-[#364153]")}></div>
                </div>
                <div className="relative flex justify-center">
                    <span className={cn(
                        "px-6 text-[10px] font-black uppercase tracking-[0.5em]",
                        theme === 'dark' ? "bg-[#101828] text-[#A9792B]" : "bg-white text-[#A9792B]"
                    )}>
                        Category 02: THE Sandbox
                    </span>
                </div>
            </div>

            <div className="space-y-0 pb-12">
                {sandboxProjects.map((project, index) => (
                    <ProjectSlice
                        key={project.id}
                        project={project}
                        reverse={index % 2 === 0}
                    />
                ))}
            </div>

            {/* Page Footer: Back to Home */}
            <SectionContainer id="projects-footer">
                <div className={cn("mt-10 pt-8 border-t flex justify-center", borderColor)}>
                <Link
                    to="/"
                    className={cn(
                        "flex items-center gap-3 text-[9px] md:text-xs font-black uppercase tracking-[0.3em] transition-all group",
                        theme === 'dark' ? "text-white hover:text-[#A9792B]" : "text-[#364153] hover:text-[#A9792B]"
                    )}
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform text-[#A9792B]" />
                    <span>127.0.0.1 HOME</span>
                </Link>
            </div>
            </SectionContainer>
        </div>
    );
};

export default Projects;
