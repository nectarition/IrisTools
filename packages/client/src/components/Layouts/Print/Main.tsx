import styled from 'styled-components'

const Main = styled.main`
  padding: 40px 12%;
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
  @media print {
    margin-top: 0.5cm;
    padding: 0;
    padding-top: 0.25cm;
    border-top: 1px solid #000000;

    * {
      color: #000000;
    }
  }
`
export default Main
