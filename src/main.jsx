//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BiayaKuliahProvider } from './Context/BiayaKuliahProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import DanaProvider from './Context/DanaProvider.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DanaProvider>
      <BiayaKuliahProvider>
        <App />
      </BiayaKuliahProvider>
    </DanaProvider>
  </BrowserRouter>



)
