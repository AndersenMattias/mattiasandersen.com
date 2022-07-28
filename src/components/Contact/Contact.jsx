import React from 'react';

import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../../styles/components/_contact.scss';

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <h3 className='contact-header'>Get in Touch</h3>
      <div className='contact-link contact-link--mail'>
        <Link to='mailto: andersenmattias.1@gmail.com'>
          <h3>andersenmattias.1@gmail.com</h3>
        </Link>{' '}
        <span className='email-icon'>
          <FaEnvelope />
        </span>
      </div>

      <div className='contact-links-wrapper'>
        <Link
          className='contact-link'
          to={'https://github.com/AndersenMattias'}
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
          <span className='social-github'>
            <FaGithub size={20} />{' '}
          </span>
        </Link>
        <Link
          className='contact-link'
          to={'www.linkedin.com/in/mattias-andersen'}
          target='_blank'
          rel='noopener noreferrer'
        >
          <p>Linkedin</p>{' '}
          <span className='social-linkedin'>
            <FaLinkedin size={20} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
