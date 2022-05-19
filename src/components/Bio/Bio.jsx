import React from 'react';

import profilePic from '../../content/assets/profilepic.png';
import '../../styles/bio.scss';

const Bio = () => {
  return (
    <div className='bio-wrapper'>
      <div className='bio-avatar-container'>
        <img className='bio-avatar' src={profilePic} alt='jag' />
      </div>

      <div className='bio-textContainer'>
        <h1 className='bio-header'>Hello. I'm Mattias Andersen.</h1>
        <div className='bio-text'>
          <p>
            I'm a <span style={{ color: '#e47911' }}>software developer</span>{' '}
            based in Malmö, Sweden. I mostly focus on the frontend of the web.
            Welcome to my site, where i share projects I've been working on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
