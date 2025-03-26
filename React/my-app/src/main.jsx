import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './assets/Form.jsx';
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Form/> */}
    <BrowserRouter>
    <App /> 
    </BrowserRouter>
  
  </StrictMode>,
)
