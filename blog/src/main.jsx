import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Posts from './second.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Posts />
  </StrictMode>,
)
