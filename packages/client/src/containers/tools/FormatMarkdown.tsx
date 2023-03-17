import { useState } from 'react'

import useFile from '../../hooks/useFile'

import PrintLayout from '../../components/Layouts/Print/PrintLayout'
import FormatMarkdown from '../../components/tools/FormatMarkdown'

const FormatMarkdownContainer: React.FC = () => {
  const { data, openAsText } = useFile()
  const [fileName, setFileName] = useState<string>()

  const open = (file: File) => {
    setFileName(file.name)
    openAsText(file)
  }

  return (
    <PrintLayout title={fileName}>
      <FormatMarkdown data={data} openAsText={open} />
    </PrintLayout>
  )
}

export default FormatMarkdownContainer
