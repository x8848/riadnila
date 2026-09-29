import type { AlertNoticeProps } from '@/utils/types'
import { AlertCircle } from 'lucide-react'

export default function AlertNotice({
  icon = <AlertCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />,
  title,
  children,
  className = '',
}: AlertNoticeProps) {
  return (
    <div className={`section-card bg-amber-50 border-l-4 border-gold py-4 px-6 ${className}`.trim()}>
      <div className="flex gap-3">
        {icon}
        <div className="flex-1">
          {title && <h3 className="serif text-lg font-medium text-terracotta-deep mb-2">{title}</h3>}
          <div className="space-y-2 text-sm text-ink/80">{children}</div>
        </div>
      </div>
    </div>
  )
}
