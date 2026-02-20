import React from 'react';
import ProjectSlice from './ProjectSlice';
import { projects } from '../../data';

const PerformanceRefactorSection: React.FC = () => {
    const project = projects.find(p => p.id === 'arc-kitchen');
    if (!project) return null;
    return <ProjectSlice project={project} />;
};

export default PerformanceRefactorSection;
