import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: system-ui, sans-serif;
  }

  html, body, #root {
    height: 100%;
  }
  
  p, table,
  ul, ol,
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }
  
  ul, ol {
    padding-left: 2em;
  }
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.75em;
  }
  h3 {
    font-size: 1.5em;
  }
  h4 {
    font-size: 1.25em;
  }
  h5 {
    font-size: 1em;
  }
  h6 {
    font-size: 0.9em;
  }

  table {
    text-align: left;
    border-collapse: collapse;

    thead {
      tr {
        border-bottom: 1px dotted #000000;
      }
    }

    tbody {
      border-bottom: 1px solid #808080;
    }

    th, td {
      padding: 5px 10px;
    }
  }

  img {
    width: 100%;
  }
`

export default GlobalStyle
