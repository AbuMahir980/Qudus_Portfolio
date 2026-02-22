import React from 'react';
import SEOHead from '../lib/SEOHead';
import { seoConfig } from '../data/seo';
import ContactSection from '../components/sections/ContactSection';

const Contact: React.FC = () => {
    return (
        <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center">
            <SEOHead {...seoConfig.home} title="Contact | Qudus Lawal" />
            <ContactSection />
        </div>
    );
};

export default Contact;
