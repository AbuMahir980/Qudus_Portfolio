import React from 'react';
import { usePage } from '../../context/PageContext';
import { cn } from '../../lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Footer: React.FC = () => {
    const { theme } = usePage();
    const location = useLocation();
    const isHome = location.pathname === '/';
    const borderColor = theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200';

    return (
        <footer className={cn(
            'py-12 px-6 border-t',
            borderColor,
            theme === 'dark' ? 'bg-[#101828]' : 'bg-white'
        )}>
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Global Back to Home Link - only on internal pages */}
                {!isHome && (
                    <div className="mb-16">
                        <Link
                            to="/"
                            className={cn(
                                "flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] transition-all group",
                                theme === 'dark' ? "text-gray-500 hover:text-[#A9792B]" : "text-gray-400 hover:text-[#364153]"
                            )}
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform text-[#A9792B]" />
                            <span>127.0.0.1 HOME</span>
                        </Link>
                    </div>
                )}

                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className={cn(
                        "text-xs font-medium",
                        theme === 'dark' ? "text-gray-500" : "text-gray-600"
                    )}>
                        © {new Date().getFullYear()} Qudus Lawal. All rights reserved.
                    </div>

                    <div className="flex space-x-12 text-[10px] font-black uppercase tracking-[0.2em]">
                        <a
                            href="https://linkedin.com/in/qudus-lawal-adebola"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "transition-colors",
                                theme === 'dark' ? "text-gray-500 hover:text-[#A9792B]" : "text-gray-600 hover:text-[#A9792B]"
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
                                theme === 'dark' ? "text-gray-500 hover:text-[#A9792B]" : "text-gray-600 hover:text-[#A9792B]"
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
                                theme === 'dark' ? "text-gray-500 hover:text-[#A9792B]" : "text-gray-600 hover:text-[#A9792B]"
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
