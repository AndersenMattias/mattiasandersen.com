import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import profilePic from '../../assets/profilepic.png';
import '../../styles/components/_heroBlock.scss';

const HeroBlock = () => {
  return (
    <div className='hero-wrapper'>
      <h1 className='hero-header'>
        <div>Hi,</div>
        <div>I’m</div>
        <div>Mattias</div>
        <div>|</div>
        <div className='highlight'>
          <div>Frontend</div>
          <div></div>
        </div>
        <div className='highlight'>
          <div>Developer</div>
          <div></div>
        </div>
      </h1>
      <div className='socialIcons-wrapper'>
        <div>
          <Link
            to={'https://github.com/AndersenMattias'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='socialIcon'>
              <FaGithub size={30} />
            </span>
          </Link>
        </div>
        <div>
          <Link
            to={'www.linkedin.com/in/mattias-andersen'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='socialIcon'>
              <FaLinkedin size={30} />
            </span>
          </Link>
        </div>
        <div>
          <Link to='mailto: andersenmattias.1@gmail.com'>
            <span className='socialIcon'>
              <FaEnvelope size={30} />
            </span>
          </Link>
        </div>
      </div>
      <p className='heroSummary'>
        I love exploring and creating 🚀 I'm a lifelong learner 🎓
      </p>
    </div>
  );
};

export default HeroBlock;
