import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import './Mode.scss';

const Mode = ({ mode, setMode, layoutStyle }) => {
  const activeMode = async () => {
    setMode(!mode);
    if (mode === false) {
      layoutStyle.classList.add('light');
      await localStorage.setItem('theme', 'lightTheme');
    }
    if (mode === true) {
      layoutStyle.classList.remove('light');
      await localStorage.setItem('theme', 'darkTheme');
    }
  };

  useEffect(() => {
    // if (localStorage.getItem('theme') === 'darkTheme') {
    //   layoutStyle.classList.remove('light');
    // } else if (localStorage.getItem('theme') === 'lightTheme') {
    //   layoutStyle.classList.add('light');
    // }
    console.log(layoutStyle);
  }, []);

  return (
    <div className='mode' onClick={activeMode}>
      <div className='icon'>
        {mode ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </div>
    </div>
  );
};

export default Mode;
