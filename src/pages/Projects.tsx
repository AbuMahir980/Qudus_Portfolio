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

    const productionProjects = projects.filter(p => p.category === 'production');
    const sandboxProjects = projects.filter(p => p.category === 'sandbox');

    return (
        <div className="pt-4 overflow-x-hidden">
            <SEOHead {...seoConfig.home} title="Solutions | Qudus Lawal" />

            <SectionContainer id="projects-header" className="pt-8 md:pt-16">
                <div className="space-y-12 mb-10 md:mb-8">
                    {/* Navigation Row */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-between items-center border-b border-zinc-900/30 pb-6"
                    >
                        <Link
                            to="/"
                            className={cn(
                                "flex items-center gap-2 text-[8px] md:text-sm font-bold uppercase tracking-[0.2em] transition-all group",
                                theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                            )}
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-cyan-500" />
                            <span>127.0.0.1 NO PLACE LIKE HOME</span>
                        </Link>

                        <Link
                            to="/contact"
                            className={cn(
                                "flex items-center gap-2 text-[8px] md:text-sm font-bold uppercase tracking-[0.2em] transition-all group text-right",
                                theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                            )}
                        >
                            <span>Get in touch</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-cyan-500" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                        {/* Left Side: Heading */}
                        <div className="md:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="flex items-baseline gap-3 md:gap-4 border-b border-zinc-900/50 pb-4 md:pb-8 flex-nowrap"
                            >
                                <span className="text-cyan-500 font-black text-sm md:text-xl tracking-tighter whitespace-nowrap">03 /</span>
                                <h2 className="text-xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter whitespace-nowrap mix-blend-difference">
                                    SOLUTIONS
                                </h2>
                            </motion.div>
                        </div>

                        {/* Right Side: Intro */}
                        <div className="md:col-span-8 md:pt-8 lg:pt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="max-w-2xl"
                            >
                                <p className={cn(
                                    "text-sm md:text-base font-medium leading-relaxed uppercase tracking-wider",
                                    theme === 'dark' ? "text-zinc-500" : "text-zinc-500"
                                )}>
                                    Turning 'what if' into 'it works.' Exploring the intersection of human-centric design and scalable frontend architecture.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* Production Lab Category */}
            <div className="relative mt-8">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-zinc-900/50"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-black px-6 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-cyan-500/80">
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
            <div className="relative mt-8 md:mt-20">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-zinc-900/50"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-black px-6 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-zinc-600">
                        Category 02: THE Sandbox
                    </span>
                </div>
            </div>

            <div className="space-y-0 pb-20">
                {sandboxProjects.map((project, index) => (
                    <ProjectSlice
                        key={project.id}
                        project={project}
                        reverse={index % 2 === 0}
                    />
                ))}
            </div>

            {/* Page Footer: Back to Home */}
            <SectionContainer id="projects-footer" className="pb-24">
                <div className="pt-12 border-t border-zinc-900/30 flex justify-center">
                    <Link
                        to="/"
                        className={cn(
                            "flex items-center gap-3 text-[9px] md:text-sm font-black uppercase tracking-[0.3em] transition-all group",
                            theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                        )}
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform text-cyan-500" />
                        <span>127.0.0.1 No Place like Home</span>
                    </Link>
                </div>
            </SectionContainer>
        </div>
    );
};

export default Projects;
