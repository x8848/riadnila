import { QRCodeCanvas } from 'qrcode.react'
import { useRef } from 'react'
import { Download, Printer } from 'lucide-react'

export default function QRCodePrint() {
  const qrRef = useRef<HTMLDivElement>(null)

  const appUrl = typeof window !== 'undefined' ? window.location.origin : 'https://riadnila.com'

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector('canvas')
    if (canvas) {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'riad-nila-qr.png'
      link.click()
    }
  }

  const printQR = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand to-white flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="serif text-4xl font-medium text-terracotta-deep mb-2">Riad Nila</h1>
        <p className="text-gray-600 text-lg">Scan to Access Our Guest App</p>
      </div>

      {/* QR Code Container */}
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full">
        {/* QR Code */}
        <div ref={qrRef} className="bg-white p-8 rounded-lg flex justify-center mb-8 border-2 border-gray-100">
          <QRCodeCanvas value={appUrl} size={280} level="H" includeMargin={true} fgColor="#000000" bgColor="#ffffff" />
        </div>

        {/* Instructions */}
        <div className="text-center mb-8">
          <p className="text-gray-700 font-medium mb-2">Point your phone camera at this QR code</p>
          <p className="text-sm text-gray-500">Access menus, spa bookings, and guest information instantly</p>
        </div>

        {/* URL Display */}
        <div className="bg-gray-50 p-4 rounded-lg mb-8 text-center">
          <p className="text-xs text-gray-600 mb-1">Or visit:</p>
          <p className="text-sm font-mono text-terracotta-deep break-all">{appUrl}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={downloadQR}
            className="relative z-10 flex-1 min-h-12 flex items-center justify-center gap-2 px-4 py-3 bg-[#8f4a3c] text-white border-2 border-[#8f4a3c] rounded-lg shadow-md hover:bg-[#74382e] hover:border-[#74382e] transition-colors font-semibold"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
          <button
            onClick={printQR}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: white;
            padding: 0;
            margin: 0;
          }
          .no-print {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
}
