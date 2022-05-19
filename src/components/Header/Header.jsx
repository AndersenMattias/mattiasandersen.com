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
        <ul>
          <li>
            <h3 className='header-item'>
              <Link
                to={'/projects'}
                activeclassname='header-item--active'
                partiallyactive='true'
              >
                Projects
              </Link>
            </h3>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
