import type { MenuSectionCardProps } from '@/utils/types'

export default function MenuSectionCard({ section, showKicker = false, className = '' }: MenuSectionCardProps) {
  return (
    <div className={`section-card ${className}`.trim()}>
      <div className="mb-4">
        {showKicker && section.kicker && (
          <p className="eyebrow mb-2">
            {section.symbol} {section.kicker}
          </p>
        )}
        <h3 className="serif text-2xl font-medium text-terracotta-deep">{section.title}</h3>
      </div>

      <div className="menu-section">
        {section.items.map((item, itemIdx) => (
          <div key={itemIdx} className="menu-item">
            <div className="dish-line">
              <h4 className="dish-name">{item.name}</h4>
              <p className="dish-price">{item.price}</p>
            </div>
            {item.description && <p className="dish-desc">{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
