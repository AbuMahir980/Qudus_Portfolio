import React from 'react';
import ProjectSlice from './ProjectSlice';
import { projects } from '../../data';

const PowerHopSection: React.FC = () => {
    const project = projects.find(p => p.id === 'powerhop');
    if (!project) return null;
    return <ProjectSlice project={project} />;
};

export default PowerHopSection;
