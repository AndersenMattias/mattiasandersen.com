import React from 'react';
import { Link } from 'react-router-dom';

import { projectsData } from '../../content/projects';
import { Icon, IconContainer } from '../Icon/Icon';

import '../../styles/components/_projectList.scss';

const Project = ({ project }) => {
  console.log(project);
  return (
    <div className='projects-wrapper'>
      <div className='projectList-container'>
        <div className='projectList-inner'>
          <Link to={`/projects/${project.id}`}>
            {project.images.map((image) => (
              <img
                key={image.id}
                className='project-image'
                src={image.url}
                alt='project'
              />
            ))}
          </Link>
        </div>

        <div className='project-title'>
          <Link className='project-title--link' to={`/projects/${project.id}`}>
            <h4>{project.title}</h4>
          </Link>
        </div>

        <div className='projectList-intro'>
          <div className='intro-txt'>
            <p>{project.intro}</p>
          </div>
          <div className='tech-container'>
            {project.tech.map((tech, index) => (
              <IconContainer key={index}>
                <Icon key={tech} title={tech} />
              </IconContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
