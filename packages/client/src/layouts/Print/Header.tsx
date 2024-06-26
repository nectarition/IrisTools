import styled from 'styled-components'

import LogotypeSVG from '../../assets/logotype.svg'
import { Link } from 'react-router-dom'

const HeaderComponent: React.FC = () => {
  return (
    <HeaderContainer>
      <BrandSection>
        <Link to="/">IrisTools</Link>
      </BrandSection>
      <NavSection></NavSection>
    </HeaderContainer>
  )
}

export default HeaderComponent

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 10px 12%;
  background-color: #ba3651;
  color: #ffffff;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
  
  @media print {
    display: none;
  }
`
const BrandSection = styled.section`
  a {
    color: #ffffff;
    text-decoration: none;
  }
`
const NavSection = styled.nav`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
`
const Logotype = styled.img`
  width: auto;
  height: 18px;
  vertical-align: bottom;
`
