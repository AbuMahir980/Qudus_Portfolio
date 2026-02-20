import React from 'react';
import { usePage } from '../../context/PageContext';
import { cn } from '../../lib/utils';

const Footer: React.FC = () => {
    const { theme } = usePage();

    return (
        <footer className={cn(
            'py-10 px-6 border-t',
            theme === 'dark' ? 'border-zinc-800 text-zinc-500' : 'border-zinc-200 text-zinc-400'
        )}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-sm">
                    © {new Date().getFullYear()} Qudus Lawal. All rights reserved.
                </div>
                <div className="flex space-x-8 text-sm">
                    <a href="#" className="hover:text-cyan-500 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-cyan-500 transition-colors">GitHub</a>
                    <a href="#" className="hover:text-cyan-500 transition-colors">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
