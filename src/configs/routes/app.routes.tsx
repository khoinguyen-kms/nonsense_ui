import { FC, useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import { isTokenEmpty } from "../../utils/localStorageUtils";

const AppRoutes: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isTokenEmpty() && window.location.pathname !== '/login') {
      navigate('/login');
    }
  }, [navigate]);

  return useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> }
  ])
}

export { AppRoutes };
