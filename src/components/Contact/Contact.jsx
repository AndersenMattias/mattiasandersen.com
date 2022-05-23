import React from 'react';

import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

import '../../styles/components/_contact.scss';

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <h3 className='contact-header'>Get in Touch</h3>
      <div className='contact-link contact-link--mail'>
        <a href='mailto: andersenmattias.1@gmail.com'>
          <h3>andersenmattias.1@gmail.com</h3>
        </a>{' '}
        <span className='email-icon'>
          <FaEnvelope />
        </span>
      </div>

      <div className='contact-links-wrapper'>
        <a
          className='contact-link'
          href='https://github.com/AndersenMattias'
          target='_blank'
          rel='noreferrer'
        >
          <p>Github</p>{' '}
          <span className='social-github'>
            <FaGithub size={20} />{' '}
          </span>
        </a>
        <a
          className='contact-link'
          href='www.linkedin.com/in/mattias-andersen'
          target='_blank'
          rel='noreferrer'
        >
          <p>Linkedin</p>{' '}
          <span className='social-linkedin'>
            <FaLinkedin size={20} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
