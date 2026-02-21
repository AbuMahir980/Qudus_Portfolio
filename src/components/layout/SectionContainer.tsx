import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { staggerContainer } from '../../lib/animations';

interface SectionContainerProps {
    children: ReactNode;
    className?: string;
    id?: string;
    alternate?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
    children,
    className,
    id,
    alternate = false
}) => {
    return (
        <section
            id={id}
            className={cn(
                "py-16 overflow-hidden",
                alternate ? "bg-zinc-900/10" : "bg-transparent",
                className
            )}
        >
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-7xl mx-auto px-6"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionContainer;
