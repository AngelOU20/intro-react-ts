import logo from '../02-component-patterns/assets/react.svg';
import { NavLink } from 'react-router-dom';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <nav>
      <a href="#">
        <img src={logo} className="logo react" alt="React logo" />
      </a>

      <ul>
        {routes.map((route) => (
          <li key={route.to}>
            <NavLink
              to={route.to}
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
