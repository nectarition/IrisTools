import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

interface Props {
  data: string | undefined
  openAsText: (file: File) => void
}
const FormatMarkdown: React.FC<Props> = (props) => {
  const [file, setFile] = useState<File>()
  const onChangeFile = () => {
    if (!file) return
    props.openAsText(file)
  }
  useEffect(onChangeFile, [file])

  return (<>
    <NotPrintArea>
      <h1>Format Markdown</h1>

      <p>
        Markdownをいい感じに整形します。
      </p>
      <p>
        <input
          type="file" accept=".md"
          onChange={e => setFile(e.target.files?.[0])} />
      </p>

      <h2>Output</h2>
    </NotPrintArea>
    <PrintArea>
      {props.data && <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
        {props.data}
      </ReactMarkdown>}
    </PrintArea>
  </>)
}
export default FormatMarkdown

const NotPrintArea = styled.section`
  margin-bottom: 20px;
  @media print {
    display: none;
  }
`
const PrintArea = styled.section`
  font-family: 'Noto Sans JP';
  
  @media print {
    img {
      max-width: 100%;
    }
  }
`
