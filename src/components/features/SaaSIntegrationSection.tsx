import React from 'react';
import ProjectSlice from './ProjectSlice';
import { projects } from '../../data';

const SaaSIntegrationSection: React.FC = () => {
    const project = projects.find(p => p.id === 'zulfah');
    if (!project) return null;
    return <ProjectSlice project={project} />;
};

export default SaaSIntegrationSection;
