import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(){
    return (
      <Html lang="es">
        <Head>
          <meta name="description" content="Marketplace circular: comparte, intercambia y reutiliza en tu comunidad." />
          <meta name="theme-color" content="#4CAF50" />
          <link rel="icon" href="https://vercel.com/favicon.ico" />
          <meta property="og:title" content="Marketplace Circular" />
          <meta property="og:description" content="Comparte e intercambia sin gastar dinero. Gana créditos y crea impacto." />
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
