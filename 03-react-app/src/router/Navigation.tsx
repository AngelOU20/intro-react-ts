import { NavLink } from 'react-router-dom';
import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <nav>
      <a href="#">
        <img src={logo} className="logo react" alt="React logo" />
      </a>

      <ul>
        <li>
          <NavLink
            to="lazy1"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Lazy 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="lazy2"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Lazy 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="lazy3"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Lazy 3
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
