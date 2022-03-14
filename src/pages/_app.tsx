import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="Boilerplate to use NextJS with Typescript and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
