import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      id
      name
      summary
      description
      tech
      githubUrl
      demoUrl
      images {
        id
        url
      }
    }
  }
`;
