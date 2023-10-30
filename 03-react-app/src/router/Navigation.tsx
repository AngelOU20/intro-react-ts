import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <div className="main-layout">
      <nav>
        <a href="#">
          <img src={logo} className="logo react" alt="React logo" />
        </a>

        <ul>
          <li>
            <NavLink
              to="home"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="users"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              User
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="home" element={<h1>Home Page</h1>} />
        <Route path="about" element={<h1>About Page</h1>} />
        <Route path="users" element={<h1>Users Page</h1>} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
};