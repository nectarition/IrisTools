import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './pages/App'
import { getFirebaseApp } from './libs/FirebaseApp'

getFirebaseApp()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registered:', registration)
    })
    .catch(err => {
      console.error('Service Worker registration failed:', err)
    })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
