type PhotoPlaceholderProps = {
  imageSrc?: string
  alt: string
  showImage?: boolean
}

export function PhotoPlaceholder({ imageSrc, alt, showImage = false }: PhotoPlaceholderProps) {
  return (
    <figure className="photo-slot" aria-label="Foto Bereich">
      {showImage && imageSrc ? (
        <img src={imageSrc} alt={alt} />
      ) : (
        <div
          className="photo-slot__placeholder"
          role="img"
          aria-label="Hier kommt dein Foto hin, 3,5 mal 4,5 Zentimeter"
        >
          <p>Hier kommt dein Foto hin</p>
          <small>3,5 × 4,5 cm</small>
        </div>
      )}
    </figure>
  )
}
