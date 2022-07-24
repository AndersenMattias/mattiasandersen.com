import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  // eslint-disable-next-line
  // let project = projectsData.find((x) => x.id == id);

  return (
    <div className='projects-wrapper'>
      <div>project details</div>
    </div>
  );
};

export default ProjectDetails;
