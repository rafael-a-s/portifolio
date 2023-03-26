'use client';
import style from '../../../styles/Header.module.css';
import { BiMenu } from 'react-icons/bi';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function HeaderPage(){
  const segments = useSelectedLayoutSegment();

  return (
    <header className={style.header}>
      <a href="/" className={style.logo}>Portifolio.</a>
      <BiMenu id={style.menu_icon}/>
      <nav className={style.navbar}>
        <a href="/" className={ segments === null ? style.active : ''}>Home</a>
        <a href="/services" className={ segments === 'services' ? style.active : ''} >Experiêcias</a>
        <a href="/portifolio" className={ segments === 'portifolio' ? style.active : ''}>Projetos</a>
        <a href="/about" className={ segments === 'about' ? style.active : ''}>Sobre</a>
        <a href="/contact" className={ segments === 'contact' ? style.active : ''}>Contato</a>
      </nav>
    </header>
  )
}