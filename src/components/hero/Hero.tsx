import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../lib/animations';
import { usePage } from '../../context/PageContext';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Github, Linkedin, Twitter, X } from 'lucide-react';
import EditorialButton from '../ui/EditorialButton';

const TYPE_SPEED = 100;
const DELETE_SPEED = 50;
const WAIT_TIME = 2000;

const Hero: React.FC = () => {
    const { theme } = usePage();
    const phrases = ["Building Systems.", "Refining Pixels.", "Engineering Impact."];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typewriter logic
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (subIndex < phrases[index].length) {
                    setSubIndex(prev => prev + 1);
                } else {
                    // Phrase complete, wait and start deleting
                    setTimeout(() => setIsDeleting(true), WAIT_TIME);
                }
            } else {
                if (subIndex > 0) {
                    setSubIndex(prev => prev - 1);
                } else {
                    // Back to start, next phrase (looping)
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, isDeleting ? DELETE_SPEED : TYPE_SPEED);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, phrases]);

    return (
        <section className="flex-1 flex items-center justify-center px-6 min-h-[70vh] md:min-h-0">
            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="max-w-5xl text-center"
            >
                <motion.h1
                    variants={fadeIn}
                    className={cn(
                        'text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6',
                        theme === 'dark' ? 'text-white' : 'text-zinc-950'
                    )}
                >
                    Hi, I'm <span className="text-cyan-500">Qudus Lawal.</span>
                </motion.h1>

                <div className="h-10 md:h-12 mb-4 overflow-hidden">
                    <motion.p
                        variants={fadeIn}
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-500 tracking-tight"
                    >
                        {phrases[index].substring(0, subIndex)}
                        <span className="inline-block w-[2px] h-[0.8em] bg-cyan-500 ml-1 animate-pulse" />
                    </motion.p>
                </div>

                <div className="mb-12 space-y-8">
                    <motion.p
                        variants={fadeIn}
                        className={cn(
                            'text-base md:text-lg font-medium tracking-wider uppercase',
                            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                        )}
                    >
                        Frontend Architecture. Data Integrity. Human-Centric Design.
                    </motion.p>

                    <motion.div variants={fadeIn}>
                        <Link
                            to="/about"
                            className="group flex items-center justify-center gap-2 text-sm font-semibold text-cyan-500 hover:text-cyan-400 transition-colors"
                        >
                            Learn about me
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
                >
                    <EditorialButton
                        variant="solid"
                        href="/resume.pdf"
                        download
                    >
                        Download Resume <Download size={18} />
                    </EditorialButton>
                    <EditorialButton
                        variant="outline"
                        onClick={() => window.location.href = 'mailto:lawalqudus980@gmail.com'}
                    >
                        Get in Touch <ArrowRight size={18} />
                    </EditorialButton>
                </motion.div>

                {/* Social Icons Below Buttons */}
                <motion.div
                    variants={fadeIn}
                    className="flex items-center justify-center gap-6"
                >
                    <a href="https://github.com/AbuMahir980" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-500 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/qudus-lawal-adebola" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-500 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://x.com/abu_maahir980" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-500 transition-colors">
                        <Twitter size={20} />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
