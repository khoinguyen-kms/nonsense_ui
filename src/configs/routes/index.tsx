import { createElement } from "react";
import { RouteConfig } from "./types";
import { LoginForm } from "../../components/Login";
import { HomePage } from "../../components/Home";

const routes: RouteConfig[] = [
  {
    path: '/',
    element: createElement(HomePage)
  },
  {
    path: '/login',
    element: createElement(LoginForm)
  }
]

export default routes;
