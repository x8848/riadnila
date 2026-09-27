import Page from '@/components/Page'
import { Url } from '@/utils/enums'
import { ArrowLeft, Download, Printer } from 'lucide-react'
import { QRCodeCanvas } from 'qrcode.react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const HOME_URL = 'https://riadnila.com'
const MENU_URL = `${HOME_URL}${Url.Menu}`

export default function QRCodePrint() {
  const navigate = useNavigate()
  const homeQrRef = useRef<HTMLDivElement>(null)
  const menuQrRef = useRef<HTMLDivElement>(null)

  const downloadQR = (ref: React.RefObject<HTMLDivElement | null>, filename: string) => {
    const canvas = ref.current?.querySelector('canvas')
    if (canvas) {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = filename
      link.click()
    }
  }

  const printQR = () => {
    window.print()
  }

  return (
    <Page className="py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center print:bg-white print:p-0">
      {/* Top Bar - No Print */}
      <div className="no-print w-full max-w-5xl flex items-center justify-between mb-8">
        <button
          onClick={() => (window.history.length > 1 ? navigate(-1) : navigate(Url.Home))}
          aria-label="Go back"
          className="w-11 h-11 rounded-full border border-white/55 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/30 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <button
          onClick={printQR}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-terracotta-deep text-white hover:bg-terracotta transition-colors shadow-sm cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Print QR Codes</span>
        </button>
      </div>

      {/* Header */}
      <div className="text-center mb-10 max-w-xl">
        <p className="eyebrow mb-2">Riad Nila Chefchaouen</p>
        <h1 className="serif text-3xl sm:text-4xl font-medium text-terracotta-deep mb-2">Digital Guest Access</h1>
        <div className="mini-divider mx-auto mb-3" />
        <p className="text-sm text-ink/75 leading-relaxed">
          Scan with your phone camera for instant access to the guest portal and restaurant menu
        </p>
      </div>

      {/* QR Code Cards Grid */}
      <div className="qr-grid w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
        {/* QR 1: Home / Guest Portal */}
        <div className="qr-card bg-white rounded-2xl shadow-xl border border-stone-200/80 p-8 flex flex-col items-center text-center transition-all">
          <h2 className="serif text-2xl font-medium text-terracotta-deep mb-2">Guest Information</h2>
          <p className="text-sm text-ink/70 mb-6 max-w-xs">
            Scan to access riad information, wifi guide, amenities, spa treatments, and concierge services.
          </p>

          <div
            ref={homeQrRef}
            className="bg-white p-5 rounded-xl border-2 border-stone-100 shadow-inner flex items-center justify-center mb-6"
          >
            <QRCodeCanvas
              value={HOME_URL}
              size={230}
              level="H"
              includeMargin={true}
              fgColor="#1f1815"
              bgColor="#ffffff"
            />
          </div>

          <a
            href={HOME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="no-print group bg-sand/60 hover:bg-sand border border-stone-200/80 hover:border-terracotta-deep/30 px-4 py-2.5 rounded-xl mb-6 w-full block transition-colors text-center"
          >
            <p className="text-sm font-mono font-medium text-terracotta-deep break-all underline-offset-2 group-hover:underline">
              {HOME_URL}
            </p>
          </a>

          <div className="no-print w-full">
            <button
              onClick={() => downloadQR(homeQrRef, 'riad-nila-home-qr.png')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-terracotta-deep text-white hover:bg-terracotta transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download QR Code
            </button>
          </div>
        </div>

        {/* QR 2: Restaurant Menu */}
        <div className="qr-card bg-white rounded-2xl shadow-xl border border-stone-200/80 p-8 flex flex-col items-center text-center transition-all">
          <h2 className="serif text-2xl font-medium text-terracotta-deep mb-2">Restaurant Menu</h2>
          <p className="text-sm text-ink/70 mb-6 max-w-xs">
            Scan to view traditional Moroccan tagines, couscous, desserts, and beverages.
          </p>

          <div
            ref={menuQrRef}
            className="bg-white p-5 rounded-xl border-2 border-stone-100 shadow-inner flex items-center justify-center mb-6"
          >
            <QRCodeCanvas
              value={MENU_URL}
              size={230}
              level="H"
              includeMargin={true}
              fgColor="#1f1815"
              bgColor="#ffffff"
            />
          </div>

          <a
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="no-print group bg-sand/60 hover:bg-sand border border-stone-200/80 hover:border-terracotta-deep/30 px-4 py-2.5 rounded-xl mb-6 w-full block transition-colors text-center"
          >
            <p className="text-sm font-mono font-medium text-terracotta-deep break-all underline-offset-2 group-hover:underline">
              {MENU_URL}
            </p>
          </a>

          <div className="no-print w-full">
            <button
              onClick={() => downloadQR(menuQrRef, 'riad-nila-menu-qr.png')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-terracotta-deep text-white hover:bg-terracotta transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download QR Code
            </button>
          </div>
        </div>
      </div>

      {/* Print Instructions footer - No print */}
      <div className="no-print text-center text-sm text-ink/60 w-full max-w-5xl">
        <p>Tip: Click "Print QR Codes" to print both cards cleanly on an A4 sheet for tables or reception.</p>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: landscape;
            margin: 1cm;
          }
          body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .qr-grid {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.5rem !important;
            margin-bottom: 0 !important;
          }
          .qr-card {
            box-shadow: none !important;
            border: 1px solid #d6d3d1 !important;
            padding: 1.25rem !important;
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </Page>
  )
}
