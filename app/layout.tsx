import Footer from '../public/components/footer/footer';
import HeaderPage from '../public/components/header/header';
import './styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <HeaderPage/>
          <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}