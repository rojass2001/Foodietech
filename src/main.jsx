import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Store } from './redux/Store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <ToastContainer/>
    <App />
  </Provider>,
)
