import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import DefaultLayout from '../../layouts/Default/DefaultLayout'
import circleCutTemplatePNG from '../../assets/circlecut_template1sp.png'
import styled from 'styled-components'

const fontSizePx = 64

const CircleCutGeneratePage: React.FC = () => {
  const [templateImage, setTemplateImage] = useState<HTMLImageElement>()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const [circleName, setCircleName] = useState('')

  const handleDownload = useCallback(() => {
    if (!canvasRef.current) return

    const now = new Date()

    const download = document.createElement('a')
    download.href = canvasRef.current.toDataURL('image/png')
    download.download = `circlecut-${now.getTime()}.png`
    download.click()
  }, [])

  useEffect(() => {
    const template = new Image()
    template.src = circleCutTemplatePNG
    template.onload = () => {
      if (!template) return
      setTemplateImage(template)
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current || !templateImage) return

    const { width, height } = templateImage
    canvasRef.current.width = width
    canvasRef.current.height = height

    const centerX = width / 2
    const centerY = height / 2 + 100

    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, width, height)

    const lines = circleName.split('\n')

    lines.forEach((l, i) => {
      const fixedX = centerX - l.length * fontSizePx / 2
      const fixedY = centerY - (lines.length / 2) * fontSizePx + fontSizePx * i + fontSizePx / 2

      ctx.fillStyle = '#000000'
      ctx.font = `${fontSizePx}px sans-serif`
      ctx.fillText(l, fixedX, fixedY)
    })

    ctx.drawImage(templateImage, 0, 0)
  }, [templateImage, circleName])

  return (
    <DefaultLayout title="CircleCutGeneratePage">
      <h1>CircleCutGeneratePage</h1>
      <p>
        <CircleCutCanvas ref={canvasRef} />
      </p>
      <p>
        半角文字を使うと左に寄りがちになります
      </p>
      <textarea
        value={circleName}
        onChange={e => setCircleName(e.target.value)} /><br />
      <button onClick={handleDownload}>ダウンロード</button>
    </DefaultLayout>
  )
}

export default CircleCutGeneratePage

const CircleCutCanvas = styled.canvas`
  width: 100%;
`
