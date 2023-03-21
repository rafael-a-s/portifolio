import style from '../../styles/About.module.css';
import avatar from '../../../public/images/avatar.png';
import Button from '../../public/components/button/button';

export default function About() {
  return ( 
    <section className={style.about} id={style.aout}>
      <div className={style.about_img}>
        <img src={avatar.src} alt="Imagem do um desenvolvedor" />
      </div>
      <div className={style.about_content}>
        <h2 className={style.heading}>Sobre <span>Mim</span></h2>
        <h3>Fullstack Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla culpa nisi placeat optio, quam quod fugit, quae alias earum molestias doloribus qui. Hic quae enim tempore ratione. Modi aliquid, perferendis voluptatibus pariatur quidem reprehenderit exercitationem optio doloribus deleniti sunt, similique unde neque ipsam maiores autem?</p>
        <Button text='Leia mais'/>
      </div>
    </section>
  )
}