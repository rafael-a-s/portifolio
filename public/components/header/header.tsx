'use client';
import style from '../../../styles/Header.module.css';
import { BiMenu, BiArrowToRight } from 'react-icons/bi';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';

export default function HeaderPage(){
  const segments = useSelectedLayoutSegment();
  const [menu, setMenu] = useState(true);

  return (
    <header className={style.header}>
      <a href="/" className={style.logo}>Portifolio.</a>
      { menu ? <BiMenu onClick={ () => setMenu(!menu) } id={style.menu_icon}/> : <BiArrowToRight onClick={ () => setMenu(!menu) } id={style.menu_icon}/> }
      <nav className={`${style.navbar} ${menu ? '' : style.active}`}>
        <a href="/" className={ segments === null ? style.active : ''}>Home</a>
        <a href="/services" className={ segments === 'services' ? style.active : ''} >Experiêcias</a>
        <a href="/portifolio" className={ segments === 'portifolio' ? style.active : ''}>Projetos</a>
        <a href="/about" className={ segments === 'about' ? style.active : ''}>Sobre</a>
        <a href="/contact" className={ segments === 'contact' ? style.active : ''}>Contato</a>
      </nav>
    </header>
  )
}