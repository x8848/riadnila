import { PageProps } from '@/utils/types'

export default function Page({ children, className = '', ...props }: PageProps) {
  return (
    <div className={`min-h-screen bg-sand ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
