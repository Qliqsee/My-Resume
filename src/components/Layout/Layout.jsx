import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Mode from '../Mode/Mode';
import './Layout.scss';
import { useState } from 'react';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState(false);
  return (
    <div className={mode ? 'layout light' : 'layout'}>
      {menuOpen ? <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : null}

      <div className='main1'>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      {menuOpen ? null : (
        <div>
          <div className='main2'>
            <div className='mode'>
              <Mode mode={mode} setMode={setMode} />
            </div>
          </div>
          <div className='section-3'>{children}</div>
        </div>
      )}
    </div>
  );
}
