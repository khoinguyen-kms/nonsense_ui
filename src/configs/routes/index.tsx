import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./app.routes"

const RoutesFactory = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default RoutesFactory;
