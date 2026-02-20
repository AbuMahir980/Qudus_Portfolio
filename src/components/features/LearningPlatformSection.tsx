import React from 'react';
import ProjectSlice from './ProjectSlice';
import { projects } from '../../data';

const LearningPlatformSection: React.FC = () => {
    const project = projects.find(p => p.id === 'stem-mets');
    if (!project) return null;
    return <ProjectSlice project={project} reverse />;
};

export default LearningPlatformSection;
