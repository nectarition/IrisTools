import styled from 'styled-components'

const Main = styled.main`
  padding: 40px 12%;
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
  @media print {
    margin: 0;
    padding: 0;
  }
`
export default Main
