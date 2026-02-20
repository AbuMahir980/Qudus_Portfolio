import React from 'react';
import SEOHead from '../lib/SEOHead';
import { seoConfig } from '../data/seo';
import ContactSection from '../components/sections/ContactSection';

const Contact: React.FC = () => {
    return (
        <div className="pt-4">
            <SEOHead {...seoConfig.home} title="Contact | Qudus Lawal" />
            <ContactSection />
        </div>
    );
};

export default Contact;
