import { MapPin, MessageCircle, Star } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-transparent to-black/80 py-8 px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/riadnila/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2"
            title="Follow us on Instagram"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="text-sm hidden sm:inline">Instagram</span>
          </a>

          {/* Google Maps */}
          <a
            href="https://www.google.com/maps/place/Riad+Nila/@35.1697248,-5.2634902,17z/data=!3m1!4b1!4m9!3m8!1s0xd0b271f75f19cbb:0x1855dde75a352b32!5m2!4m1!1i2!8m2!3d35.1697204!4d-5.2609153!16s%2Fg%2F11j0wj45t4?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2"
            title="View location on Google Maps"
          >
            <MapPin className="w-6 h-6" />
            <span className="text-sm hidden sm:inline">Google Maps</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/212662134431"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2"
            title="Contact us on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-sm hidden sm:inline">WhatsApp</span>
          </a>

          {/* TripAdvisor */}
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g304013-d19516865-Reviews-Riad_Nila-Chefchaouen_Tanger_Tetouan_Al_Hoceima.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2"
            title="Read reviews on TripAdvisor"
          >
            <Star className="w-6 h-6" />
            <span className="text-sm hidden sm:inline">TripAdvisor</span>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-4 w-full" />

        {/* Copyright */}
        <div className="text-center text-sm text-white/60">
          <p>© 2026 Riad Nila. All rights reserved.</p>
          <p className="mt-1">A quiet haven in the heart of Chefchaouen</p>
        </div>
      </div>
    </footer>
  )
}
