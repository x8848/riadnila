import { ContentProps } from '@/utils/types'

export default function Content({ children, className = '', ...props }: ContentProps) {
  return (
    <section className={`max-w-[1180px] mx-auto px-5 lg:px-8 py-7 ${className}`.trim()} {...props}>
      {children}
    </section>
  )
}
