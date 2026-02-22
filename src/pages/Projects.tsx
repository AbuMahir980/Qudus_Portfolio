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

            <SectionContainer id="projects-header" className="pt-4 md:pt-8 pb-0">
                <div className="space-y-8 mb-6">
                    {/* Navigation Row */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={cn(
                            "flex justify-between items-center pb-4",
                            theme === 'dark' ? "border-b border-zinc-800" : "border-b border-zinc-100"
                        )}
                    >
                        <Link
                            to="/"
                            className={cn(
                                "flex items-center gap-2 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all group",
                                theme === 'dark' ? "text-zinc-500 hover:text-[#A9792B]" : "text-zinc-400 hover:text-[#364153]"
                            )}
                        >
                            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform text-[#A9792B]" />
                            <span>127.0.0.1 HOME</span>
                        </Link>

                        <Link
                            to="/contact"
                            className={cn(
                                "flex items-center gap-2 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all group text-right",
                                theme === 'dark' ? "text-zinc-500 hover:text-[#A9792B]" : "text-zinc-400 hover:text-[#364153]"
                            )}
                        >
                            <span>Inquiry</span>
                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform text-[#A9792B]" />
                        </Link>
                    </motion.div>

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
                                <p className={cn(
                                    "text-xs md:text-sm font-medium leading-loose uppercase tracking-wider",
                                    theme === 'dark' ? "text-zinc-500" : "text-zinc-600"
                                )}>
                                    Turning 'what if' into 'it works.' Exploring the intersection of human-centric design and scalable frontend architecture.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* Production Lab Category */}
            <div className="relative mt-4 mb-4">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className={cn("w-full", theme === 'dark' ? "border-t border-zinc-800" : "border-t border-zinc-200")}></div>
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
                    <div className={cn("w-full", theme === 'dark' ? "border-t border-zinc-800" : "border-t border-zinc-200")}></div>
                </div>
                <div className="relative flex justify-center">
                    <span className={cn(
                        "px-6 text-[10px] font-black uppercase tracking-[0.5em]",
                        theme === 'dark' ? "bg-[#101828] text-zinc-500" : "bg-white text-zinc-500"
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
            <SectionContainer id="projects-footer" className="pb-16 pt-0">
                <div className={cn(
                    "pt-8 flex justify-center",
                    theme === 'dark' ? "border-t border-zinc-800" : "border-t border-zinc-200"
                )}>
                    <Link
                        to="/"
                        className={cn(
                            "flex items-center gap-3 text-[9px] md:text-xs font-black uppercase tracking-[0.3em] transition-all group",
                            theme === 'dark' ? "text-zinc-500 hover:text-[#A9792B]" : "text-zinc-400 hover:text-[#364153]"
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
