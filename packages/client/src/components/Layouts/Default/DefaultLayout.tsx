import styled from 'styled-components'

import Footer from './Footer'
import Header from './Header'

interface Props {
  children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = (props) => (
  <LayoutContainer>
    <Header />
    <MainContainer>
      {props.children}
    </MainContainer>
    <Footer />
  </LayoutContainer>
)

export default DefaultLayout

const LayoutContainer = styled.div`
  height: 100%;
  
  display: grid;
  grid-template-rows: auto 1fr auto;
`
const MainContainer = styled.main`
  padding: 40px 12%;
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`