import React from 'react';
import { useQuery } from '@apollo/client';
import Project from '../../components/Project/Project';
import { GET_PROJECTS } from '../../queries/project';

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  console.log(data);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Something went wrong..</p>;

  return (
    <div>
      {data.projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
