import React from 'react'

interface ContentProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
}

export default function Content({ children, className = '', ...props }: ContentProps) {
  return (
    <section className={`max-w-[1180px] mx-auto px-5 lg:px-8 py-7 ${className}`.trim()} {...props}>
      {children}
    </section>
  )
}
