import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom'

import ResetStyle from './ResetStyle'
import GlobalStyle from './GlobalStyle'

import App from './containers/App'

const Root: React.FC = () => (<>
  <Outlet />
  <ScrollRestoration />
</>)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
