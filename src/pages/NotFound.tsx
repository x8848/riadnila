import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Url } from '@/utils/enums'
import { useLanguage } from '@/utils/i18n'
import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen min-h-[100dvh] bg-sand flex flex-col justify-between">
      <Header heroImage="/images/info.jpeg" showBack={false} />

      <main className="flex-1 flex flex-col items-center justify-center px-5 py-12 text-center my-auto">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <h2 className="serif text-3xl sm:text-4xl font-medium text-terracotta-deep mb-2">{t('pageNotFound')}</h2>

          <Link
            to={Url.Home}
            aria-label={t('homePage')}
            className="inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-full text-sm font-semibold border border-terracotta-deep/30 text-terracotta-deep bg-sand/60 hover:bg-terracotta-deep/10 transition-colors cursor-pointer mt-5"
          >
            <Home className="w-4 h-4" />
            <span>{t('homePage')}</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
