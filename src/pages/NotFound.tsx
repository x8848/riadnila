import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-sand flex flex-col justify-between">
      <div>
        <Header heroImage="/images/info.jpeg" />

        <section className="px-5 py-10 max-w-xl mx-auto text-center">
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">Page Not Found</h2>
        </section>
      </div>

      <Footer />
    </div>
  )
}
