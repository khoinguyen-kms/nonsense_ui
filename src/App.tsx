import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouteFactory from './configs/routes/RouteFactory'
import routes from './configs/routes'

function App() {
  return (
    <BrowserRouter>
      <RouteFactory routeConfig={routes} />
    </BrowserRouter>
  )
}

export default App
