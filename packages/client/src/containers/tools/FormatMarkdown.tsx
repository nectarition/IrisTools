import { useEffect, useState } from 'react'

import useFile from '../../hooks/useFile'

import PrintLayout from '../../components/Layouts/Print/PrintLayout'
import FormatMarkdown from '../../components/tools/FormatMarkdown'

const FormatMarkdownContainer: React.FC = () => {
  const { data, openAsText } = useFile()
  const [fileName, setFileName] = useState<string>()
  const [content, setContent] = useState<string>()

  const open = (file: File) => {
    setFileName(file.name)
    openAsText(file)
  }

  const onChangeData = () => {
    setContent(data)
  }
  useEffect(onChangeData, [data])

  return (
    <PrintLayout title={fileName}>
      <FormatMarkdown data={content} openAsText={open} setData={c => setContent(c)} />
    </PrintLayout>
  )
}

export default FormatMarkdownContainer
