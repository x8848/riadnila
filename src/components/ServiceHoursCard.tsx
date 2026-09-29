import type { ServiceHoursCardProps } from '@/utils/types'

export default function ServiceHoursCard({ title, children, className = 'mb-6' }: ServiceHoursCardProps) {
  return (
    <div className={`section-card ${className}`.trim()}>
      <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{title}</h3>
      <div className="space-y-2 text-sm">{children}</div>
    </div>
  )
}
