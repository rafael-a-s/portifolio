import style from '../styles/Home.module.css';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import Button from '../public/components/button/button';
import avatar from '../public/images/avatar.png';

export default function Page() {
  return (
    <section className={style.home} id={style.home}>
      <div className={style.home_content}>
        <h3>Olá, Me chamo</h3>
        <h1>Rafael Aguiar</h1>
        <h3>E sou desenvolvedor <span>FullStack</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, error nobis facere quo odio, esse illum molestias sed, id explicabo at labore quae minima numquam non harum possimus necessitatibus! Officiis!</p>
        <div className={style.social_media}>
          <a href="#"> <FiFacebook/> </a>
          <a href="#"> <FiTwitter/> </a>
          <a href="#"> <FiInstagram/> </a>
          <a href="#"> <FiLinkedin/> </a>
        </div>
        <Button text='Download CV'/>
      </div>
      <div className={style.home_img}>
        <img src={avatar.src} alt="Avatar de um desenvolvedor" />
      </div>
    </section>
  )
}