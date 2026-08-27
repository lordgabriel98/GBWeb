import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.tsx'

import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
    <GoogleReCaptchaProvider  reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
        <App />
      </GoogleReCaptchaProvider>
    </BrowserRouter>
  </StrictMode>,

)

