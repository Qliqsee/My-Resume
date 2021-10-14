import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Layout.scss';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState(false);
  // const layoutStyle = document.getElementById('layout');

  const activeMode = async () => {
    setMode(!mode);
    if (mode === false) {
      document.body.classList.add('light');
      await localStorage.setItem('theme', 'lightTheme');
    }
    if (mode === true) {
      document.body.classList.remove('light');
      await localStorage.setItem('theme', 'darkTheme');
    }
  };
  // let modeIcon;
  // if (localStorage.getItem('theme') === 'darkTheme') {
  //   modeIcon = <FontAwesomeIcon icon={faSun} />;
  // } else if (localStorage.getItem('theme') === 'lightTheme') {
  //   modeIcon = <FontAwesomeIcon icon={faMoon} />;
  // }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'darkTheme') {
      document.body.classList.remove('light');
    } else if (localStorage.getItem('theme') === 'lightTheme') {
      document.body.classList.add('light');
    }

    console.log(document.body);
  }, []);

  return (
    <div id='layout' className='layout'>
      {menuOpen ? <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : null}

      <div className='main1'>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      {menuOpen ? null : (
        <div>
          <div className='main2'>
            <div className='mode' onClick={activeMode}>
              <div className='icon'>
                {mode ? (
                  <FontAwesomeIcon icon={faMoon} />
                ) : (
                  <FontAwesomeIcon icon={faSun} />
                )}
              </div>
            </div>
          </div>
          <div className='section-3'>{children}</div>
        </div>
      )}
    </div>
  );
}
