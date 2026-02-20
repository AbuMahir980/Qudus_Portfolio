import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ReactNode } from 'react';

interface EditorialButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'solid' | 'outline';
    className?: string;
    href?: string;
    download?: boolean;
}

const EditorialButton: React.FC<EditorialButtonProps> = ({
    children,
    onClick,
    variant = 'solid',
    className,
    href,
    download
}) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-widest";
    const variants = {
        solid: "bg-cyan-600 text-white hover:bg-cyan-500 shadow-lg shadow-cyan-900/20 active:scale-95",
        outline: "border border-zinc-700 text-zinc-300 hover:border-cyan-500 hover:text-cyan-400 active:scale-95"
    };

    const content = (
        <motion.div
            whileHover={{ y: -2 }}
            className={cn(baseStyles, variants[variant], className)}
        >
            {children}
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} onClick={onClick} download={download} className="inline-block">
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className="inline-block">
            {content}
        </button>
    );
};

export default EditorialButton;
