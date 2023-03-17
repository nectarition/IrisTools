import styled from 'styled-components'

import HeadHelper from '../../../libs/Helmet'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
  title?: string
}

const DefaultLayout: React.FC<Props> = (props) => (
  <LayoutContainer>
    <HeadHelper title={props.title} />
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
