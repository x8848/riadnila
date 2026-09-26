interface WhatsAppButtonProps {
  href: string
  label: string
  className?: string
}

export default function WhatsAppButton({ href, label, className = '' }: WhatsAppButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`wa-button ${className}`}>
      {label}
    </a>
  )
}
