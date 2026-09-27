import type { QRCardProps } from '@/utils/types'
import { Download } from 'lucide-react'
import { QRCodeCanvas } from 'qrcode.react'
import { useRef } from 'react'

export default function QRCard({ title, description, url, filename }: QRCardProps) {
  const qrRef = useRef<HTMLDivElement>(null)

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector('canvas')
    if (canvas) {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = filename
      link.click()
    }
  }

  return (
    <div
      className={`qr-card bg-white rounded-2xl shadow-xl border border-stone-200/80 p-8 flex flex-col items-center text-center transition-all`.trim()}
    >
      <h2 className="serif text-2xl font-medium text-terracotta-deep mb-2">{title}</h2>
      <p className="text-sm text-ink/70 mb-6 max-w-xs">{description}</p>

      <div
        ref={qrRef}
        className="bg-white p-5 rounded-xl border-2 border-stone-100 shadow-inner flex items-center justify-center mb-6"
      >
        <QRCodeCanvas value={url} size={230} level="H" includeMargin={true} fgColor="#1f1815" bgColor="#ffffff" />
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="no-print group bg-sand/60 hover:bg-sand border border-stone-200/80 hover:border-terracotta-deep/30 px-4 py-2.5 rounded-xl mb-6 w-full block transition-colors text-center"
      >
        <p className="text-sm font-mono font-medium text-terracotta-deep break-all underline-offset-2 group-hover:underline">
          {url}
        </p>
      </a>

      <div className="no-print w-full">
        <button
          onClick={downloadQR}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-terracotta-deep text-white hover:bg-terracotta transition-colors shadow-sm cursor-pointer"
        >
          <Download className="w-4 h-4" />
          Download QR Code
        </button>
      </div>
    </div>
  )
}
