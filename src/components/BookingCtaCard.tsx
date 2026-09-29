import type { BookingCtaCardProps } from '@/utils/types'
import WhatsAppButton from './WhatsAppButton'

export default function BookingCtaCard({ note, href, label = 'Book Now', className = '' }: BookingCtaCardProps) {
  return (
    <div className={`section-card ${className}`.trim()}>
      <p className="text-sm text-ink/80 mb-4">{note}</p>
      <WhatsAppButton href={href} label={label} />
    </div>
  )
}
