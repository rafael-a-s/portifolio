'use client';
import style from '../../styles/About.module.css';
import Button from '../../public/components/button/button';
import avatar from '../../public/images/rafa3.png';
import React from 'react';
import { useEffect } from 'react';
import { configScrollReveal } from '../../public/config/configScrollReveal';

export default function Page() {

  const refToComponent = React.useRef(null);
  const refToImg = React.useRef(null);
  const refToContent = React.useRef(null);


  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default
      sr(configScrollReveal);
      refToComponent.current ?  sr().reveal(refToComponent.current, {origin: 'top'} ) : null;
      refToImg.current ?  sr().reveal(refToImg.current, {origin: 'left'} ) : null;
      refToContent.current ?  sr().reveal(refToContent.current, {origin: 'right'} ) : null;
    }
    animate()
  },[]);

  return ( 
    <section className={style.about} id={style.about}>
      <div ref={refToImg} className={style.about_img}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatar.src} alt="Imagem do um desenvolvedor" />
      </div>
      <div ref={refToContent} className={style.about_content}>
        <h2 ref={refToComponent} className={style.heading}>Sobre <span>Mim</span></h2>
        <h3>Fullstack Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla culpa nisi placeat optio, quam quod fugit, quae alias earum molestias doloribus qui. Hic quae enim tempore ratione. Modi aliquid, perferendis voluptatibus pariatur quidem reprehenderit exercitationem optio doloribus deleniti sunt, similique unde neque ipsam maiores autem?</p>
        <Button text='Leia mais'/>
      </div>
    </section>
  )
}