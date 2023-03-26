'use client';
import style from '../../styles/Portifolio.module.css';
import avatar from '../../public/images/avatar.png';
import { FiExternalLink } from 'react-icons/fi';
import { useEffect } from 'react';
import React from 'react';
import { configScrollReveal } from '../../public/config/configScrollReveal';

export default function Page() {

  const refToComponent = React.useRef(null);
  const refToBox = React.useRef(null);

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default
      sr(configScrollReveal);
      refToComponent.current ?  sr().reveal(refToComponent.current, {origin: 'top'} ) : null;
      refToBox.current ?  sr().reveal(refToBox.current, {origin: 'bottom'} ) : null;
    }
    animate()
  },[]);

  return (
    <section className={style.portifolio} id={style.portifolio}>
      <h2 ref={refToComponent} className={style.heading}>Meus <span>Projetos</span></h2>
      <div className={style.portifolio_container}>
        <div ref={refToBox} className={style.portifolio_box}>
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