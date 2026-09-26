import { NavCardProps } from '@/utils/types'
import { Link } from 'react-router-dom'

export default function NavCard({ image, title, kicker, to, href, disabled, className = '' }: NavCardProps) {
  const content = (
    <>
      <img src={image} alt={title} />
      <div className="relative z-10 flex h-full w-full items-center justify-center p-5 md:justify-between">
        <div className="w-full text-center md:w-auto md:text-left">
          <p className="text-xs font-medium uppercase tracking-wider text-white/70 mb-1">{kicker}</p>
          <h3 className="serif text-2xl font-medium text-white">{title}</h3>
        </div>
      </div>
    </>
  )

  if (disabled) {
    return <div className={`nav-card block opacity-60 cursor-not-allowed ${className}`}>{content}</div>
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`nav-card group block ${className}`}>
        {content}
      </a>
    )
  }

  return (
    <Link to={to!} className={`nav-card group block ${className}`}>
      {content}
    </Link>
  )
}
