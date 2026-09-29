import type { InfoCardProps } from '@/utils/types'

export default function InfoCard({ title, icon, children, className = '' }: InfoCardProps) {
  return (
    <div className={`section-card ${className}`.trim()}>
      {title && (
        <div className="flex items-center gap-2 mb-3">
          {icon && <span className="text-lg leading-none">{icon}</span>}
          {typeof title === 'string' ? (
            <h3 className="serif text-lg font-medium text-terracotta-deep">{title}</h3>
          ) : (
            title
          )}
        </div>
      )}
      {children}
    </div>
  )
}
