import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOData } from '../types';

const SEOHead: React.FC<SEOData> = ({ title, description, keywords, ogImage }) => {
    return (
        <Helmet>
            <title>{`${title} | Qudus Lawal`}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEOHead;
