import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// A refresh always lands on the homepage: drop any #section from the
// URL and start at the top instead of the browser's restored position.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
if (window.location.hash && !window.location.hash.startsWith('#invite_token') && !window.location.hash.startsWith('#recovery_token') && !window.location.hash.startsWith('#confirmation_token')) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
}
window.scrollTo(0, 0)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
