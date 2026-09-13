type SkillCardProps = {
  category: string
  items: string[]
}

export function SkillCard({ category, items }: SkillCardProps) {
  return (
    <article className="card skill-card">
      <h3>{category}</h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="muted">Inhalt wird im nächsten Schritt ergänzt.</p>
      )}
    </article>
  )
}
