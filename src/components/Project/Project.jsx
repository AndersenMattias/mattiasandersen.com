import React from 'react';
import { Link } from 'react-router-dom';

import { projectsData } from '../../content/projects';
import { Icon, IconContainer } from '../Icon/Icon';

import '../../styles/projectList.scss';

const Project = () => {
  return (
    <div className='projects-wrapper'>
      {projectsData.map((project) => {
        return (
          <div key={project.id} className='projectList-container'>
            <Link to={`/projects/${project.id}`}>
              <div className='projectList-inner'>
                <div className='project-imageContainer'>
                  <img
                    className='project-image'
                    src={project.image}
                    alt='project'
                  />
                </div>
                <div>
                  <h4 className='project-title'>{project.title}</h4>
                </div>
              </div>
            </Link>

            <div className='projectList-intro'>
              <div className='intro-txt'>
                <p>{project.intro}</p>
              </div>
              <div className='tech-container'>
                {project.tech.map((tech) => (
                  <IconContainer>
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