import React from 'react';
import SEOHead from '../lib/SEOHead';
import { seoConfig } from '../data/seo';
import AboutSection from '../components/sections/AboutSection';

const About: React.FC = () => {
    return (
        <div className="pt-4">
            <SEOHead {...seoConfig.home} title="About | Qudus Lawal" />
            <AboutSection />
        </div>
    );
};

export default About;
