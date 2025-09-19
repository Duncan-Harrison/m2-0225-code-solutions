import { Outlet, Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <div className="top">
      <nav className="header-text text-white bg-gray-900">
        <ul className="flexor">
          <li className="inline-block py-2 px-4">
            <Link to="About" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="text-white">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
      {<Outlet />}
    </div>
  );
}
