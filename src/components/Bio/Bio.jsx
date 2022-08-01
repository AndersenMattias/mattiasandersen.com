import React from 'react';
import { Link } from 'react-router-dom';
import { profilePic } from '../../assets';

import '../../styles/components/_bio.scss';

const Bio = () => {
  return (
    <section className='bio-wrapper'>
      <h2>
        <div>My</div>
        <div className='highlight'>
          <div>Skills</div>
          <div></div>
        </div>
      </h2>
      <div className='bioImage'>
        <div className='image-container'>
          <img src={profilePic} alt='avatar' />
        </div>
      </div>

      <div className='bioSkills'>
        <div className='skills-wrapper'>
          <ul className='skills-container'>
            <li>Typescript</li>
            <li>Javascript</li>
            <li className='frontend'>React</li>
            <li className='backend'>Node.js</li>
            <li className='devOps'>AWS</li>
            <li className='frontend'>Next.js</li>
            <li className='frontend'>Sass</li>
            <li className='db'>MongoDB</li>
            <li className='backend'>GraphQL</li>
            <li className='backend'>Apollo GraphQL</li>
            <li className='db'>PostgreSQL</li>
            <li className='backend'>Firebase</li>
            <li className='cms'>Umbraco</li>
          </ul>
        </div>
      </div>

      <div className='bioText'>
        <h3>About Me</h3>
        <p>
          My interest in software development started back in 2019 when I
          decided to figure out what I wanted to study.
        </p>

        <Link className='' to='/about'>
          Keep reading my bio
        </Link>
      </div>
    </section>
  );
};

export default Bio;
