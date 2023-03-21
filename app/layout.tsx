import Footer from "@/pages/layout/footer"
import HeaderPage from "@/pages/layout/header"

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
          {children}
        <Footer/>
      </body>
    </html>
  )
}