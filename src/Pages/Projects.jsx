import React from 'react';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import { projectsData } from '../content/projects';

const Projects = () => {
  return (
    <div>
      {projectsData.projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
