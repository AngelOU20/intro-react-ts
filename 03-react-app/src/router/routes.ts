import { lazy } from "react";

interface Route {
  to: string;
  path: string;
  Component: React.FC;
  // Component: LazyExoticComponent<JSXComponent> | React.FC | JSXComponent;
  name: string;
}

/* LazyLoad */
const lazy1 = lazy(() => import("../02-component-patterns/pages/ShoppingPage"));

export const routes: Route[] = [
  {
    to: "/",
    path: "",
    Component: lazy1,
    name: "Shopping",
  },
];
