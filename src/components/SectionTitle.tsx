type SectionTitleProps = {
  id?: string
  title: string
  subtitle?: string
}

export function SectionTitle({ id, title, subtitle }: SectionTitleProps) {
  return (
    <header className="section-title">
      <h2 id={id}>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  )
}
