import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom'
import ResetStyle from '../styles/ResetStyle'
import GlobalStyle from '../styles/GlobalStyle'
import { HelmetProvider } from 'react-helmet-async'
import MarkdownFormatPage from './MarkdownFormatPage/MarkdownFormatPage'
import IndexPage from './IndexPage/IndexPage'

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
        element: <IndexPage />
      },
      {
        path: 'tools',
        children: [
          {
            path: 'format-markdown',
            element: <MarkdownFormatPage />
          }
        ]
      }
    ]
  }
])

const App: React.FC = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  )
}

export default App
