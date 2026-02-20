import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PageProvider } from './context/PageContext';
import RootLayout from './components/layout/RootLayout';
import ScrollToTop from './lib/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SEOHead from './lib/SEOHead';

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <PageProvider>
                <Router>
                    <ScrollToTop />
                    <SEOHead
                        title="Systems-Driven Frontend Engineer"
                        description="Qudus Lawal - Specialist in transforming complex business logic into performance-first React architecture."
                        keywords={['Frontend Engineer', 'React Architect', 'TypeScript Specialist', 'UI/UX Design']}
                    />
                    <RootLayout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </RootLayout>
                </Router>
            </PageProvider>
        </HelmetProvider>
    );
};

export default App;
