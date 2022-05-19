import React from 'react';
import { Link } from 'react-router-dom';

import { projectsData } from '../../content/projects';
import { Icon, IconContainer } from '../Icon/Icon';

import '../../styles/projectList.scss';

const Project = () => {
  return (
    <div className='projects-wrapper'>
      {projectsData.map((project, index) => {
        return (
          <div key={index} className='projectList-container'>
            <div className='projectList-inner'>
              <Link to={`/projects/${project.id}`}>
                <img
                  className='project-image'
                  src={project.image}
                  alt='project'
                />
              </Link>
            </div>

            <div className='project-title'>
              <Link
                className='project-title--link'
                to={`/projects/${project.id}`}
              >
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
                    <Icon key={tech.key} title={tech.value} />
                  </IconContainer>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
