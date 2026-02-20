import React from 'react';
import SEOHead from '../lib/SEOHead';
import { seoConfig } from '../data/seo';
import ExperienceSection from '../components/sections/ExperienceSection';

const Experience: React.FC = () => {
    return (
        <div className="pt-4">
            <SEOHead {...seoConfig.home} title="Experience | Qudus Lawal" />
            <ExperienceSection />
        </div>
    );
};

export default Experience;
