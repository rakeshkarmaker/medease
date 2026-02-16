import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// To use React Router, we need to wrap our App component with BrowserRouter in the main entry file (index.jsx or main.jsx) 
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
)
