import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom'
import ResetStyle from '../styles/ResetStyle'
import GlobalStyle from '../styles/GlobalStyle'
import { HelmetProvider } from 'react-helmet-async'
import IndexPage from './IndexPage/IndexPage'
import MarkdownFormatPage from './MarkdownFormatPage/MarkdownFormatPage'
import CircleCutGeneratePage from './CircleCutGeneratePage/CircleCutGeneratePage'
import { useCallback, useEffect, useState } from 'react'
import { getMessaging } from '../libs/FirebaseApp'
import { getToken } from 'firebase/messaging'

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
  const [isProcess, setIsProcess] = useState(false)
  const [token, setToken] = useState('')

  const handleGetToken = useCallback(() => {
    if (Notification.permission !== 'granted') return

    const messaging = getMessaging()
    getToken(messaging, { vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY })
      .then((token) => {
        if (token) {
          setToken(token)
        } else {
          alert('Token not available')
        }
      })
  }, [])

  const handleEnable = useCallback(() => {
    Notification.requestPermission()
      .then(permission => {
        if (permission !== 'granted') {
          throw new Error('Permission denied')
        }
        handleGetToken()
      })
      .catch(err => {
        console.error('Error requesting permissions:', err)
      })
      .finally(() => setIsProcess(false))
  }, [])

  useEffect(() => handleGetToken, [])

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      <button onClick={handleEnable} disabled={isProcess}>購読</button>
      <p>
        {token}
      </p>
    </>
  )
}

export default App
