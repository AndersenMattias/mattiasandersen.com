import React from 'react';
import { useParams } from 'react-router-dom';

import { projectsData } from '../../content/projects';
import { Icon, IconContainer } from '../Icon/Icon';

import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();

  // eslint-disable-next-line
  let project = projectsData.find((x) => x.id == id);

  return (
    <div className='projects-wrapper'>
      <div key={project.id} className='projectList-container'>
        <div className='projectList-inner'>
          <div className='project-imageContainer'>
            <img className='project-image' src={project.image} alt='project' />
          </div>
          <div>
            <h4 className='project-title'>{project.title}</h4>
          </div>
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

        <div className='project__links'>
          <a
            className='project__link'
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub /> <p>View source</p>
          </a>
          <a
            className='project__link'
            href={project.hostUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='url-container'>
              <p className='url-txt'>Live demo:</p>
              <div>
                <p>{project.hostUrl ? project.hostUrl : 'Ingen Url'}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
