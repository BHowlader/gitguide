import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { inject } from '@vercel/analytics'
import './index.css'
import App from './App.tsx'

injectSpeedInsights()
inject()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
