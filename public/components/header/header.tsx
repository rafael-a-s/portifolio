import style from '../../../styles/Header.module.css';
import { BiMenu } from 'react-icons/bi';

export default function HeaderPage(){

  return (
    <header className={style.header}>
      <a href="#" className={style.logo}>Portifolio.</a>
      <BiMenu id={style.menu_icon}/>
      <nav className={style.navbar}>
        <a href="#home" className={style.active}>Home</a>
        <a href="#expe">Experiêcias</a>
        <a href="#project">Projetos</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  )
}