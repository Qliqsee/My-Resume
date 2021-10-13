import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Mode.scss';

const Mode = ({ mode, setMode }) => {
  const toggleMode = () => {
    setMode(!mode);
  };
  return (
    <div className='mode' onClick={toggleMode}>
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
