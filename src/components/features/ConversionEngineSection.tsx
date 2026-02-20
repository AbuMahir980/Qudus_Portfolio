import React from 'react';
import ProjectSlice from './ProjectSlice';
import { projects } from '../../data';

const ConversionEngineSection: React.FC = () => {
    const project = projects.find(p => p.id === 'remsy');
    if (!project) return null;
    return <ProjectSlice project={project} reverse />;
};

export default ConversionEngineSection;
