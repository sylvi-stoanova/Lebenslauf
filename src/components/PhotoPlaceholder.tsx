type PhotoPlaceholderProps = {
  imageSrc?: string
  alt: string
}

export function PhotoPlaceholder({ imageSrc, alt }: PhotoPlaceholderProps) {
  return (
    <figure className="photo-slot" aria-label="Foto Bereich">
      {imageSrc ? <img src={imageSrc} alt={alt} /> : null}
    </figure>
  )
}
