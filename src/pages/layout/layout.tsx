import { Head } from "next/document";
import HeaderPage from "./header";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/src/styles/globals.css" />
        <title>PokeNext</title>
      </Head>
      <HeaderPage />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
