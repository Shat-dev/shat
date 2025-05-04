import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ✅ fixed import
import './index.css'
import App from './App.jsx'

// ✅ Handle GitHub Pages redirect workaround from 404.html
const redirect = new URLSearchParams(window.location.search).get("redirect");
if (redirect) {
  window.history.replaceState({}, "", redirect);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
