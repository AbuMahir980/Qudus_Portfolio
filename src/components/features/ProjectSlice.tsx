import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionContainer from '../layout/SectionContainer';
import LazyImage from '../ui/LazyImage';
import { Project } from '../../types';
import { fadeIn, slideInLeft, slideInRight } from '../../lib/animations';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePage } from '../../context/PageContext';

interface ProjectSliceProps {
    project: Project;
    reverse?: boolean;
}

const ProjectSlice: React.FC<ProjectSliceProps> = ({ project, reverse }) => {
    const { theme } = usePage();
    const [activeTab, setActiveTab] = useState<'overview' | 'challenge' | 'solution'>('overview');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    // Auto-play carousel
    useEffect(() => {
        if (project.images.length <= 1) return;
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, [project.images.length]);

    const formatText = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <strong key={i} className="font-bold text-[#A9792B]">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            return part;
        });
    };

    // Theme-aware tokens
    const cardBg = theme === 'dark' ? 'bg-[#1E2939] shadow-2xl' : 'bg-white shadow-md border border-zinc-200';
    const headingColor = theme === 'dark' ? 'text-white' : 'text-[#364153]';
    const bodyColor = theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600';
    const tabBorder = theme === 'dark' ? 'border-zinc-700' : 'border-zinc-200';
    const tagBg = theme === 'dark' ? 'bg-[#101828] text-zinc-300 border border-zinc-700' : 'bg-zinc-100 text-[#364153] border border-zinc-200';

    return (
        <SectionContainer alternate={false} className="py-4 md:py-6">
            <div className={cn("rounded-2xl overflow-hidden transition-all duration-500", cardBg)}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-center ${reverse ? 'lg:direction-rtl' : ''}`}>
                    {/* Visual Content: Image Carousel */}
                    <motion.div
                        variants={reverse ? slideInRight : slideInLeft}
                        className={cn("relative aspect-[16/10] overflow-hidden", reverse ? 'lg:order-2' : '')}
                    >
                        <div className="absolute top-4 left-4 z-30">
                            <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#A9792B] animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-white">
                                    Status: {project.status}
                                </span>
                            </div>
                        </div>

                        {project.category === 'production' && (
                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileHover={{ scale: 1, opacity: 1 }}
                                    className="px-6 py-2 bg-[#A9792B] text-white font-black uppercase tracking-[0.4em] text-xs transform -rotate-12 shadow-[0_0_30px_rgba(169,121,43,0.5)]"
                                >
                                    Commercial
                                </motion.div>
                            </div>
                        )}

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="w-full h-full"
                                >
                                    <LazyImage
                                        src={project.images[currentImageIndex]}
                                        alt={`${project.title} - ${currentImageIndex + 1}`}
                                        className="object-contain w-full h-full p-6 bg-zinc-900/5"
                                    />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Navigation */}
                        {project.images.length > 1 && (
                            <>
                                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                                    <button
                                        onClick={prevImage}
                                        className="p-2 rounded-full bg-black/60 text-white hover:bg-[#A9792B]/70 transition-colors pointer-events-auto"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="p-2 rounded-full bg-black/60 text-white hover:bg-[#A9792B]/70 transition-colors pointer-events-auto"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </>
                        )}
                    </motion.div>

                    {/* Textual Content */}
                    <div className={cn("p-8 flex flex-col h-full", reverse ? 'lg:order-1' : '')}>

                        {/* Category badge */}
                        <div className="inline-block px-3 py-1 rounded-full bg-[#A9792B]/10 text-[#A9792B] text-[10px] uppercase tracking-[0.2em] font-bold mb-5 w-fit">
                            {project.category === 'production' ? 'Production Lab' : 'The Sandbox'} / 0{project.id === 'powerhop' ? 1 : project.id === 'stem-mets' ? 2 : project.id === 'arc-kitchen' ? 3 : project.id === 'remsy' ? 4 : 5}
                        </div>

                        {/* Project Title */}
                        <h2 className={cn("text-2xl md:text-3xl font-bold mb-5", headingColor)}>
                            {project.title}
                        </h2>

                        {/* Tabs */}
                        <div className="mb-5">
                            <div className={cn("flex gap-6 border-b mb-5", tabBorder)}>
                                {(['overview', 'challenge', 'solution'] as const).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={cn(
                                            "pb-3 text-[10px] uppercase tracking-widest transition-all relative font-bold",
                                            activeTab === tab
                                                ? 'text-[#A9792B]'
                                                : theme === 'dark' ? 'text-zinc-500 hover:text-zinc-200' : 'text-zinc-400 hover:text-[#364153]'
                                        )}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <motion.div
                                                layoutId={`${project.id}-activeTab`}
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A9792B]"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <motion.p
                                key={activeTab}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={cn("leading-loose text-xs min-h-[90px] whitespace-pre-line", bodyColor)}
                            >
                                {formatText(project.specs[activeTab])}
                            </motion.p>
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-7">
                            {project.tools.map((tool) => (
                                <span
                                    key={tool.name}
                                    className={cn("px-2.5 py-1 rounded text-[9px] font-semibold uppercase tracking-wider transition-colors", tagBg)}
                                >
                                    {tool.name}
                                </span>
                            ))}
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center gap-6 mt-auto">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#005F5A] hover:text-[#005F5A]/70 transition-colors border border-[#005F5A]/40 hover:border-[#005F5A] rounded-full px-4 py-2"
                                >
                                    <ExternalLink size={12} />
                                    <span>Launch Site</span>
                                </a>
                            )}

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors",
                                        theme === 'dark' ? "text-zinc-400 hover:text-[#A9792B]" : "text-zinc-500 hover:text-[#A9792B]"
                                    )}
                                >
                                    <Github size={12} />
                                    <span>{project.category === 'sandbox' ? 'View Source' : 'Restricted'}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default ProjectSlice;
