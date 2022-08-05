import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

import '../../styles/components/_footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div class='copyRight-container'>
          <p>Mattias Andersen</p>
          <div>© 2022, Built and designed by Mattias Andersen</div>
        </div>
        <div>
          <div class='footer-header'>Links</div>
          <div class='footer-gridContainer'>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
        <div class='footer-headerTwo'>Get in touch</div>
        <div class='css-lgj0h8'>
          <div className='socialIcons-footer'>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
