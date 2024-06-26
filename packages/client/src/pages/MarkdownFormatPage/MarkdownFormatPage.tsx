import styled from 'styled-components'
import { useEffect, useState } from 'react'
import useFile from '../../hooks/useFile'
import PrintLayout from '../../layouts/Print/PrintLayout'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

const MarkdownFormatPage: React.FC = () => {
  const { data, openAsText } = useFile()

  const [fileName, setFileName] = useState<string>()
  const [file, setFile] = useState<File>()

  const [content, setContent] = useState<string>()

  useEffect(() => {
    if (!file) return
    setFileName(file.name)
    openAsText(file)
  }, [file])

  useEffect(() => {
    setContent(data)
  }, [data])

  return (
    <PrintLayout title={fileName}>
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
        <p>
          <MarkdownDirectInput
            placeHolder="## Markdown content ..."
            onChange={e => setContent(e.target.value)} />
        </p>

        <h2>Output</h2>
      </NotPrintArea>
      <PrintArea>
        {content && <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
          {content}
        </ReactMarkdown>}
      </PrintArea>
    </PrintLayout>
  )
}

export default MarkdownFormatPage

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

const MarkdownDirectInput = styled.textarea`
  width: 100%;
  resize: vertical;
  min-height: 10em;
`