import About from '@/pages/About'
import Breakfast from '@/pages/Breakfast'
import GuestInfo from '@/pages/GuestInfo'
import Home from '@/pages/Home'
import Menu from '@/pages/Menu'
import NotFound from '@/pages/NotFound'
import QRCodePrint from '@/pages/QRCodePrint'
import Restaurant from '@/pages/Restaurant'
import Rooftop from '@/pages/Rooftop'
import Services from '@/pages/Services'
import Spa from '@/pages/Spa'
import { Url } from '@/utils/enums'
import { LanguageProvider } from '@/utils/i18n'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={Url.Home} element={<Home />} />
          <Route path={Url.GuestInformation} element={<GuestInfo />} />
          <Route path={Url.Restaurant} element={<Restaurant />} />
          <Route path={Url.Breakfast} element={<Breakfast />} />
          <Route path={Url.Menu} element={<Menu />} />
          <Route path={Url.Rooftop} element={<Rooftop />} />
          <Route path={Url.Spa} element={<Spa />} />
          <Route path={Url.Services} element={<Services />} />
          <Route path={Url.About} element={<About />} />
          <Route path={Url.QRCode} element={<QRCodePrint />} />
          <Route path={Url.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
