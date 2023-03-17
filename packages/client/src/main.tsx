import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom'

import './main.css'

import ResetStyle from './ResetStyle'
import GlobalStyle from './GlobalStyle'

import App from './containers/App'
import FormatMarkdown from './containers/tools/FormatMarkdown'

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
      },
      {
        path: 'tools',
        children: [
          {
            path: 'format-markdown',
            element: <FormatMarkdown />
          }
        ]
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
