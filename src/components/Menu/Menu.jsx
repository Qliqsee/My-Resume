import React from 'react';
import './Menu.scss';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Menu = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const history = useHistory();

  const toggleMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='menu'>
      <div className='space'></div>
      <div className='menuItems'>
        <div className='menuItem1'>
          <ul>
            <li>
              <span
                className={location.pathname === '/' ? 'active' : ''}
                onClick={toggleMenu}
              >
                <Link to='/'>Home </Link>
              </span>
            </li>
            <li>
              <span
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={toggleMenu}
              >
                <Link to='/about'>About</Link>
              </span>
            </li>
            <li>
              <span
                className={location.pathname === '/portfolio' ? 'active' : ''}
                onClick={toggleMenu}
              >
                <Link to='/portfolio'>Portfolio</Link>
              </span>
            </li>
            <li>
              <span
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={toggleMenu}
              >
                <Link to='/contact'>Contact</Link>
              </span>
            </li>
          </ul>
        </div>
        <div className='menuItem2'>
          <div className='menuItem2-social-text'>
            <span>Connect with me</span>
          </div>
          <div className='menuItem2-social-icons'>
            <span className='twitter' onClick={toggleMenu}>
              <a
                target='_blank'
                href='https://twitter.com/agboola_iyanu'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </span>
            <span className='linkedin' onClick={toggleMenu}>
              <a
                target='_blank'
                href='https://linkedin.com/in/iyanu-agboola-314488214'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </span>
            <span className='github' onClick={toggleMenu}>
              <a
                target='_blank'
                href='https://github.com/Qliqsee'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
