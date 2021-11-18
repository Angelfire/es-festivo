import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel='shortcut icon' href='/static/favicon/favicon.ico' />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:description" content="Todos los feriados/festivos en Colombia" />
          <meta property="og:image" content="https://www.esfestivo.co/static/bannerFC.png" />
          <meta property="og:title" content="¿Es festivo en Colombia?" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.esfestivo.co" />
          <meta property="og:site_name" content="<meta name='apple-mobile-web-app-title' content='PWA App' />" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content="Todos los feriados/festivos en Colombia" />
          <meta name="twitter:image" content="https://www.esfestivo.co/static/bannerFC.png" />
          <meta name="twitter:title" content="¿Es festivo en Colombia?" />
          <meta name="twitter:url" content="https://www.esfestivo.co" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/static/favicon/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="application-name" content="Festivos en Colombia" />
          <meta name="apple-mobile-web-app-title" content="Festivos en Colombia" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
