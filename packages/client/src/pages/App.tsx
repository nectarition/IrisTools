import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom'
import ResetStyle from '../styles/ResetStyle'
import GlobalStyle from '../styles/GlobalStyle'
import { HelmetProvider } from 'react-helmet-async'
import IndexPage from './IndexPage/IndexPage'
import MarkdownFormatPage from './MarkdownFormatPage/MarkdownFormatPage'
import CircleCutGeneratePage from './CircleCutGeneratePage/CircleCutGeneratePage'

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
          },
          {
            path: 'generate-circlecut',
            element: <CircleCutGeneratePage />
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
