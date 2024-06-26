import styled from 'styled-components'

const FooterComponent: React.FC = () => {
  return (
    <FooterContainer>
      &copy; 2023 Nectarition
    </FooterContainer>
  )
}

export default FooterComponent

const FooterContainer = styled.footer`
  padding: 20px 12%;
  background-color: #f0f0f0;

  @media screen and (max-width: 480px) {
    padding: 10px;
    text-align: center;
  }

  @media print {
    display: none;
  }
`