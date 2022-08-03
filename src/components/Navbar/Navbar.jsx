import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoReorderThree } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';

import '../../styles/components/_navBar.scss';

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const hamburgerIcon = (
    <div className='hamburger'>
      <IoReorderThree
        size={40}
        color='white'
        onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}
      />
    </div>
  );

  const closeIcon = (
    <div className='closeMenu'>
      <AiOutlineClose
        size={20}
        color='white'
        onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}
      />
    </div>
  );

  return (
    <nav id='navbar'>
      <div className='navbarContainer'>
        <Link to='/'>
          <div className=''>Mattias Andersen</div>
        </Link>
        {expandNavbar ? closeIcon : hamburgerIcon}
      </div>

      <ul className={expandNavbar ? 'open' : 'close'}>
        <Link to='/about'>
          <li>about</li>
        </Link>
        <Link to='/blog'>
          <li>blog</li>
        </Link>
        <Link to='/projects'>
          <li>projects</li>
        </Link>
        <Link to='/contact'>
          <li>contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
