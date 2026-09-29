import type { PageHeaderProps } from '@/utils/types'

export default function PageHeader({ eyebrow, title, description, className = '' }: PageHeaderProps) {
  return (
    <div className={`mb-6 ${className}`.trim()}>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{title}</h2>
      <div className="mini-divider" />
      {description &&
        (typeof description === 'string' ? (
          <p className="text-sm leading-relaxed text-ink/80">{description}</p>
        ) : (
          description
        ))}
    </div>
  )
}
