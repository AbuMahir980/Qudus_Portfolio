import React from 'react';
import { usePage } from '../../context/PageContext';
import { cn } from '../../lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Footer: React.FC = () => {
    const { theme } = usePage();
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <footer className={cn(
            'py-12 px-6 border-t',
            theme === 'dark' ? 'border-zinc-900 bg-[#09090b]' : 'border-zinc-100 bg-white'
        )}>
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Global Back to Home Link - only on internal pages */}
                {!isHome && (
                    <div className="mb-16">
                        <Link
                            to="/"
                            className={cn(
                                "flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-[0.3em] transition-all group",
                                theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                            )}
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform text-cyan-500" />
                            <span>127.0.0.1 No Place like Home</span>
                        </Link>
                    </div>
                )}

                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className={cn(
                        "text-sm font-medium",
                        theme === 'dark' ? "text-zinc-500" : "text-zinc-400"
                    )}>
                        © {new Date().getFullYear()} Qudus Lawal. All rights reserved.
                    </div>

                    <div className="flex space-x-12 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                        <a
                            href="https://linkedin.com/in/qudus-lawal-adebola"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "transition-colors",
                                theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                            )}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/AbuMahir980"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "transition-colors",
                                theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                            )}
                        >
                            GitHub
                        </a>
                        <a
                            href="https://x.com/abu_maahir980"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "transition-colors",
                                theme === 'dark' ? "text-zinc-500 hover:text-cyan-500" : "text-zinc-400 hover:text-cyan-600"
                            )}
                        >
                            X
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
