import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutesFactory from './configs/routes';

function App() {
  return (
    <>
      <RoutesFactory />
      <ToastContainer autoClose={1500} />
    </>
  )
}

export default App
