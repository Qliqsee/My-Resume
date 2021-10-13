import { Link } from 'react-router-dom';
import './Button.scss';

export default function Button({ children, to }) {
  return (
    <Link to={to} passHref>
      <div className='button'>{children}</div>
    </Link>
  );
}
