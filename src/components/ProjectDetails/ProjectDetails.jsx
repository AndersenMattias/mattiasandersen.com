import React from 'react';
import { useParams } from 'react-router-dom';

import { projectsData } from '../../content/projects';
import { Icon, IconContainer } from '../Icon/Icon';

const ProjectDetails = () => {
  const { id } = useParams();

  let project = projectsData.find((x) => x.id == id);
  console.log(id);
  console.log(project);

  return (
    <div>
      <h5
        variant='h5'
        style={{
          color: 'rgb(255, 165, 0)',
          textAlign: 'center',
          paddingTop: '0.5em',
        }}
      >
        {project.title}
      </h5>

      <div>
        <img src={project.image} alt='Test' />
      </div>
      <p style={{ color: 'black' }}>{project.description}</p>
      <div className='icons-wrapper'>
        {project.tech.map((tech) => (
          <IconContainer>
            <Icon key={tech.key} title={tech.value} />
          </IconContainer>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
