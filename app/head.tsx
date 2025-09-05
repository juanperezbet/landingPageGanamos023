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
      <meta property="og:title" content="GANAMOS.IO - Tu entretenimiento Online de Confianza" />
      <meta
        property="og:description"
        content="La mejor plataforma de entretenimiento online con los mejores slots y juegos de azar. Crea tu cuenta hoy y comienza a ganar."
      />
      <meta property="og:image" content="/images/header-ganamos.jpg" />

      {/* Performance optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

      {/* Meta Pixel Code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '740829815451697');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=740829815451697&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}
    </>
  )
}