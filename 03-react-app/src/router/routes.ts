import { lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

// type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.FC;
  // Component: LazyExoticComponent<JSXComponent> | React.FC | JSXComponent;
  name: string;
}

/* LazyLoad */
const lazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));
// const lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
// const lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
// const lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: '/lazyload',
    path: '/lazyload/*',
    Component: lazyLayout,
    name: 'LazyLayout',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No lazy',
  },

  /* Rutas independientes */
  // {
  //   to: '/lazy1',
  //   path: 'lazy1',
  //   Component: lazy1,
  //   name: 'lazy-1',
  // },
  // {
  //   to: '/lazy2',
  //   path: 'lazy2',
  //   Component: lazy2,
  //   name: 'lazy-2',
  // },
  // {
  //   to: '/lazy3',
  //   path: 'lazy3',
  //   Component: lazy3,
  //   name: 'lazy-3',
  // },
];
