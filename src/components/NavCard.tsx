import { NavCardProps } from '@/utils/types'
import { Link } from 'react-router-dom'

export default function NavCard({ image, title, kicker, to, href, disabled, className = '' }: NavCardProps) {
  const content = (
    <>
      <img src={image} alt={title} loading="lazy" decoding="async" />
      <div className="relative z-10 flex flex-1 items-center justify-between p-5 w-full">
        <div className="text-left">
          <p className="text-sm font-medium uppercase tracking-wider text-white/80 mb-1">{kicker}</p>
          <h3 className="serif text-2xl font-medium text-white">{title}</h3>
        </div>
      </div>
    </>
  )

  if (disabled) {
    return <div className={`nav-card flex items-center opacity-60 cursor-not-allowed ${className}`}>{content}</div>
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`nav-card group flex items-center ${className}`}
      >
        {content}
      </a>
    )
  }

  return (
    <Link to={to!} className={`nav-card group flex items-center ${className}`}>
      {content}
    </Link>
  )
}
