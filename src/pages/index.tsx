import { Inter } from 'next/font/google'
import Home from './components/home';
import HeaderPage from './layout/header';

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <HeaderPage />
      <Home/>
    </>
  )
}