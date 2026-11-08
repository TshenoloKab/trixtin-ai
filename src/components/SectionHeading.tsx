type Props = {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, lead, align = 'left' }: Props) {
  return (
    <div className={`section-heading ${align === 'center' ? 'center' : ''}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  )
}
