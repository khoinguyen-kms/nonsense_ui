import { FC } from "react";
import { RouteConfig } from "./types";
import { Route, Routes } from "react-router-dom";

interface RouteFactoryProps {
  routeConfig: RouteConfig[];
}


const RouteFactory: FC<RouteFactoryProps> = ({ routeConfig }) => (
  <Routes>
    {routeConfig.map((route, idx) => (
      <Route key={idx} path={route.path} element={route.element} />
    ))}
  </Routes>
)

export default RouteFactory;
