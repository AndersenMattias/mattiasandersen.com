import React from 'react';
import {
  FaReact,
  FaJsSquare,
  FaCog,
  FaNodeJs,
  FaAws,
  FaSass,
} from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiHtml5, SiCss3 } from 'react-icons/si';
import { AiFillCloud } from 'react-icons/ai';

import '../../styles/icons.scss';

export const IconContainer = ({ children }) => {
  return <div className='icon-container'>{children}</div>;
};

const IconOptions = ({ title }) => {
  switch (title) {
    case 'React':
      return <FaReact />;
    case 'HTML':
      return <SiHtml5 />;
    case 'CSS':
      return <SiCss3 />;
    case 'Javascript':
      return <FaJsSquare />;
    case 'Typescript':
      return <SiTypescript />;
    case 'Node':
      return <FaNodeJs />;
    case 'REST':
      return <AiFillCloud />;
    case 'MongoDB':
      return <SiMongodb />;
    case 'S3':
      return <FaAws />;
    case 'Sass':
      return <FaSass />;
    default:
      return <FaCog />;
  }
};

export const Icon = ({ title }) => {
  return (
    <div className={`icon icon--${title}`}>
      <IconOptions title={title} /> <span className='icon-title'>{title}</span>
    </div>
  );
};
