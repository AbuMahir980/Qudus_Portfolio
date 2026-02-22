import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionContainer from '../layout/SectionContainer';
import EditorialButton from '../ui/EditorialButton';
import LazyImage from '../ui/LazyImage';
import { Project } from '../../types';
import { fadeIn, slideInLeft, slideInRight } from '../../lib/animations';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
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

    return (
        <SectionContainer alternate={reverse} className="py-8 md:py-12">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${reverse ? 'lg:direction-rtl' : ''}`}>
                {/* Visual Content: Image Carousel */}
                <motion.div
                    variants={reverse ? slideInRight : slideInLeft}
                    className={`${reverse ? 'lg:order-2' : ''}`}
                >
                    <div className="relative group overflow-hidden rounded-xl border border-zinc-800/50 shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="relative aspect-[16/10]"
                            >
                                <LazyImage
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} - ${currentImageIndex + 1}`}
                                    className="object-cover w-full h-full"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Navigation */}
                        {project.images.length > 1 && (
                            <>
                                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                    <button
                                        onClick={prevImage}
                                        className="p-2 rounded-full bg-black/50 text-white hover:bg-cyan-500/50 transition-colors"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="p-2 rounded-full bg-black/50 text-white hover:bg-cyan-500/50 transition-colors"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>

                                {/* Indicators */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                    {project.images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentImageIndex(i)}
                                            className={cn(
                                                "w-1.5 h-1.5 rounded-full transition-all",
                                                currentImageIndex === i ? "w-4 bg-cyan-500" : "bg-white/30"
                                            )}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        <div className="absolute -inset-4 bg-cyan-500/5 rounded-2xl blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100 -z-10" />
                    </div>
                </motion.div>

                {/* Textual Content Slices */}
                <motion.div
                    variants={fadeIn}
                    className={`flex flex-col ${reverse ? 'lg:order-1' : ''}`}
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 w-fit">
                        Case Study / 0{project.id === 'powerhop' ? 1 : project.id === 'stem-mets' ? 2 : project.id === 'arc-kitchen' ? 3 : project.id === 'remsy' ? 4 : 5}
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
                                            layoutId={`${project.id}-activeTab`}
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
                            className={cn(
                                "text-zinc-400 leading-relaxed text-lg min-h-[120px] text-justify",
                                theme === 'dark' ? "text-zinc-400" : "text-zinc-600"
                            )}
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
                    <div className="flex items-center gap-6 mt-auto">
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-500 hover:text-cyan-400 transition-colors"
                            >
                                <ExternalLink size={16} />
                                <span>Launch Experience</span>
                            </a>
                        )}

                        {!project.github ? (
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                                [ Private Repository ]
                            </span>
                        ) : (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 hover:text-zinc-400 transition-colors"
                            >
                                [ Repository Restricted ]
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default ProjectSlice;
