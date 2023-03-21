import { Html, Head, Main, NextScript } from 'next/document'
import Footer from './layout/footer'
import HeaderPage from './layout/header'

export default function Document() {
  return (
    <Html lang="pt">
      <Head />
      <body>
        <HeaderPage/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}
