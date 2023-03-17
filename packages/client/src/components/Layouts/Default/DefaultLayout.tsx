import styled from 'styled-components'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = (props) => (
  <LayoutContainer>
    <Header />
    <Main>
      {props.children}
    </Main>
    <Footer />
  </LayoutContainer>
)

export default DefaultLayout

const LayoutContainer = styled.div`
  height: 100%;
  
  display: grid;
  grid-template-rows: auto 1fr auto;
`
