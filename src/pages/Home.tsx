import React from 'react';
import Hero from '../components/hero/Hero';
import SEOHead from '../lib/SEOHead';
import { seoConfig } from '../data/seo';

const Home: React.FC = () => {
    return (
        <div className="bg-transparent md:h-[calc(100vh-80px)] md:flex md:flex-col md:overflow-hidden">
            <SEOHead {...seoConfig.home} />

            <div className="min-h-[calc(100vh-80px)] md:min-h-0 md:flex-1 flex flex-col justify-center">
                <Hero />
            </div>
        </div>
    );
};

export default Home;
