import { ReactNode } from 'react';
import { usePage } from '../../context/PageContext';
import NavBar from './NavBar';
import Footer from './Footer';
import { cn } from '../../lib/utils';
import { useLocation } from 'react-router-dom';

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { theme } = usePage();

    return (
        <div className="relative min-h-screen flex flex-col selection:bg-cyan-500/30 overflow-x-hidden">
            {/* Background Layer */}
            <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
                {theme === 'dark' ? (
                    <div className="absolute inset-0 bg-[#09090b]">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
                        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
                            <filter id="noise">
                                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                            </filter>
                            <rect width="100%" height="100%" filter="url(#noise)" />
                        </svg>
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-white" />
                )}
            </div>

            <NavBar />
            <main className="relative flex-1 flex flex-col pt-12">
                {children}
            </main>

            {/* <Footer /> */}
        </div>
    );
};

export default RootLayout;
