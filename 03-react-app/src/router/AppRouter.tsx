import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation';
import { routes } from './routes';

export const AppRouter = () => {
  return (
    <div className="main-layout">
      <Navigation />

      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </div>
  );
};
