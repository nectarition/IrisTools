import PrintLayout from '../../components/Layouts/Print/PrintLayout'

import FormatMarkdown from '../../components/tools/FormatMarkdown'
import useFile from '../../hooks/useFile'

const FormatMarkdownContainer: React.FC = () => {
  const { data, openAsText } = useFile()

  return (
    <PrintLayout>
      <FormatMarkdown data={data} openAsText={openAsText} />
    </PrintLayout>
  )
}

export default FormatMarkdownContainer
