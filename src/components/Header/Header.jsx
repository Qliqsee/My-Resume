import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div className={menuOpen ? 'header active' : 'header'}>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>Qliqsee.</Link>
          </div>
          <div onClick={toggleMenu} className='hamburger'>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
