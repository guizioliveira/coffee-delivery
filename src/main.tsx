import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import { makeServer } from './services/api.ts'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
