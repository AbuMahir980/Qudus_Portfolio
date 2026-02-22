import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={cn('relative overflow-hidden bg-zinc-900/50', className)}>
            <motion.img
                src={src}
                alt={alt}
                className={cn(
                    'w-full h-full transition-opacity duration-700',
                    !className?.includes('object-') && 'object-cover',
                    isLoaded ? 'opacity-100' : 'opacity-0'
                )}
                onLoad={() => setIsLoaded(true)}
                initial={{ scale: 1.1 }}
                animate={{ scale: isLoaded ? 1 : 1.1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        className="absolute inset-0 bg-zinc-900 animate-pulse"
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default LazyImage;
