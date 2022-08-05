import React from 'react';
import { Bio, Contact, HeroBlock } from '../components';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <HeroBlock />
      <Bio />
      <ProjectsList />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
