import type { WhatsAppButtonProps } from '@/utils/types'

export default function WhatsAppButton({ href, label, className = '' }: WhatsAppButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`wa-button ${className}`}>
      {label}
    </a>
  )
}
