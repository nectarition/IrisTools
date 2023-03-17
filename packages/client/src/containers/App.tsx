import App from '../components/App'
import DefaultLayout from '../components/Layouts/Default/DefaultLayout'

const AppContainer: React.FC = () => {
  return (
    <DefaultLayout>
      <App />
    </DefaultLayout>
  )
}

export default AppContainer
