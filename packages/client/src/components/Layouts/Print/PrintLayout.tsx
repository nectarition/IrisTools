import styled from 'styled-components'

import Footer from '../Print/Footer'
import Header from '../Print/Header'
import Main from '../Print/Main'

interface Props {
  children: React.ReactNode
}

const PrintLayout: React.FC<Props> = (props) => (
  <LayoutContainer>
    <Header />
    <Main>
      {props.children}
    </Main>
    <Footer />
  </LayoutContainer>
)

export default PrintLayout

const LayoutContainer = styled.div`
  height: 100%;
  
  display: grid;
  grid-template-rows: auto 1fr auto;

  @media print {
    grid-template-rows: auto;
  }
`
