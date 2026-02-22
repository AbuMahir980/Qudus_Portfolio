import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePage } from '../../context/PageContext';
import { cn } from '../../lib/utils';
import SectionContainer from '../layout/SectionContainer';

const ContactSection: React.FC = () => {
    const { theme } = usePage();
    const borderColor = theme === 'dark' ? "border-zinc-800" : "border-zinc-200";

    return (
        <SectionContainer id="contact" className={cn("py-8 md:pt-16")}>
            <div className="flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-12"
                >
                    <div className="space-y-4">
                        <span className="text-[#A9792B] font-black text-xl md:text-2xl tracking-tighter uppercase whitespace-nowrap">04 / COLLABORATION</span>
                        <h2 className={cn(
                            "text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]",
                            theme === 'dark' ? "text-white" : "text-[#364153]"
                        )}>
                            Ready to architect your <br />
                            <span className="text-[#A9792B] italic">next solution?</span>
                        </h2>
                    </div>

                    <div className="pt-8">
                        <a
                            href="mailto:lawalqudus980@gmail.com"
                            className={cn(
                                "group relative inline-block text-2xl md:text-4xl font-black tracking-tighter uppercase overflow-hidden",
                                theme === 'dark' ? "text-white" : "text-[#364153]"
                            )}
                        >
                            <span className="relative z-10 transition-colors group-hover:text-[#A9792B]">Get in touch</span>
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A9792B] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                        </a>
                    </div>
                </motion.div>

                {/* Section Footer: Back to Home */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className={cn("w-full pt-8 border-t flex justify-center", borderColor)}
                >
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
                </motion.div> */}
            </div>
        </SectionContainer>
    );
};

export default ContactSection;
