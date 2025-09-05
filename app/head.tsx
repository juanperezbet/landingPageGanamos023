export default function Head() {
  return (
    <>
      {/* Preload critical assets */}
      <link rel="preload" href="/images/header-ganamos.jpg" as="image" />
      <link rel="preload" href="/images/casino-background.jpg" as="image" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Meta tags for social sharing */}
      <meta
        property="og:title"
        content="GANAMOS.IO - Tu entretenimiento Online de Confianza"
      />
      <meta
        property="og:description"
        content="La mejor plataforma de entretenimiento online con los mejores slots y juegos de azar. Crea tu cuenta hoy y comienza a ganar."
      />
      <meta property="og:image" content="/images/header-ganamos.jpg" />

      {/* Performance optimization */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
    </>
  )
}
