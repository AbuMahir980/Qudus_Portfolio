import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ReactNode } from 'react';
import { usePage } from '../../context/PageContext';

interface EditorialButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'solid' | 'outline';
    className?: string;
    href?: string;
    target?: string;
    download?: boolean;
}

const EditorialButton: React.FC<EditorialButtonProps> = ({
    children,
    onClick,
    variant = 'solid',
    className,
    href,
    target,
    download
}) => {
    const { theme } = usePage();
    const baseStyles = "px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-widest";

    const solidStyles = "bg-[#005F5A] text-white hover:bg-[#005F5A]/90 shadow-lg shadow-black/10 active:scale-95";
    const outlineStyles = theme === 'dark'
        ? "border border-zinc-600 text-gray-300 hover:border-[#A9792B] hover:text-[#A9792B] active:scale-95"
        : "border border-[#364153] text-[#364153] hover:border-[#A9792B] hover:text-[#A9792B] active:scale-95";

    const variants = {
        solid: solidStyles,
        outline: outlineStyles,
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
            <a href={href} target={target} onClick={onClick} download={download} className="inline-block">
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
