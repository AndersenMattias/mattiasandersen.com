import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/header.scss';

const Header = () => {
  return (
    <header className='header-wrapper'>
      <h1>
        <Link className='header-title' to={'/'}>
          Mattias Andersen
        </Link>
      </h1>
      <nav className='header-menu'>
        <h3>
          <Link
            className='header-projects'
            to={'/projects'}
            activeclassname='header-item--active'
            partiallyactive='true'
          >
            Projects
          </Link>
        </h3>
      </nav>
    </header>
  );
};

export default Header;
