import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import HelloProvider from './context/HelloContext.jsx'
import { BioProvider } from './context/BioContext.jsx'

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelloProvider>
      <BioProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BioProvider>
    </HelloProvider>
  </AuthProvider>,
);
