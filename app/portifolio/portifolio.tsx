import style from '../../styles/Portifolio.module.css';
import avatar from '../../../public/images/avatar.png';
import { FiExternalLink } from 'react-icons/fi';
export default function Portifolio() {
  return (
    <section className={style.portifolio} id={style.portifolio}>
      <h2 className={style.heading}>Meus <span>Projetos</span></h2>
      <div className={style.portifolio_container}>
        <div className={style.portifolio_box}>
          <img src={avatar.src} alt="Imagem provisoria" />
          <div className={style.portifolio_layer}>
            <h4>Web Desing</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laudantium dolorum dolorem velit ipsum sint quod ab, rem voluptatibus eveniet?</p>
            <a href="#"> <FiExternalLink className={style.icons}/> </a>
          </div>
        </div>
      </div>
    </section>
  )
}