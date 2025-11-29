
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Projects from "../pages/projects/page";
import AuthFlow from "../pages/auth/page";
import FounderNote from "../pages/foundersNote/page";
import Research from "../pages/research/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthFlow />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/founders-note",
    element: <FounderNote />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
