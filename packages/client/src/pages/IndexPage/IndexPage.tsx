import { Link } from 'react-router-dom'
import DefaultLayout from '../../layouts/Default/DefaultLayout'

const IndexPage: React.FC = () => {
  return (
    <DefaultLayout>
      <h1>IrisTools</h1>

      <p>
        雑ツール置き場
      </p>

      <p>
        このページに掲載しているツールは動作保証を行っておりません。各自の責任でご使用ください。
      </p>

      <ul>
        <li>
          <Link to="/tools/format-markdown">MarkdownFormatPage</Link>: Markdown を印刷用に整形するやつ
        </li>
        <li>
          <Link to="/tools/generate-circlecut">CircleCutGeneratePage</Link>: サークルカット生成するやつ
        </li>
      </ul>
    </DefaultLayout>
  )
}

export default IndexPage
