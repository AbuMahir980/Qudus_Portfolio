import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { usePage } from '../../context/PageContext';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
    const { theme, toggleTheme, isMenuOpen, setIsMenuOpen } = usePage();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Experience', href: '/experience' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b',
                    isScrolled
                        ? theme === 'dark'
                            ? 'bg-[#101828]/90 border-[#ffffff] backdrop-blur-md py-2'
                            : 'bg-white/95 border-[#364153] backdrop-blur-md py-2'
                        : 'bg-transparent border-[#364153] py-4'
                )}
            >
                <div className="relative z-[210] max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    <Link to="/" className="text-xl font-black tracking-tighter hover:text-[#A9792B] transition-colors">
                        QL<span className="text-[#A9792B]">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-[#A9792B]',
                                    location.pathname === item.href
                                        ? 'text-[#A9792B]'
                                        : theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className={cn(
                                'p-2 rounded-full transition-colors',
                                theme === 'dark' ? 'hover:bg-zinc-800 text-gray-400' : 'hover:bg-zinc-100 text-gray-600'
                            )}
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className={cn(
                                'p-2 rounded-full transition-colors',
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            )}
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={cn(
                                'p-2 rounded-full transition-colors',
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
                                isMenuOpen && "text-[#A9792B]"
                            )}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Modal — outside nav to avoid stacking context issues */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "fixed inset-0 z-[150] flex flex-col items-center justify-center",
                            theme === 'dark' ? "bg-[#101828]" : "bg-white"
                        )}
                    >
                        <div className="flex flex-col items-center space-y-8">
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    "text-5xl font-black uppercase tracking-tighter hover:text-[#A9792B] transition-colors",
                                    location.pathname === '/' ? "text-[#A9792B]" : (theme === 'dark' ? "text-white" : "text-[#364153]")
                                )}
                            >
                                Home
                            </Link>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                        "text-5xl font-black uppercase tracking-tighter hover:text-[#A9792B] transition-colors",
                                        location.pathname === item.href ? "text-[#A9792B]" : (theme === 'dark' ? "text-gray-400" : "text-gray-700")
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;
