'use client';
import style from '../styles/Home.module.css';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import Button from '../public/components/button/button';
import avatar from '../public/images/avatar.png';
import React, { useEffect } from 'react';
import { configScrollReveal } from '../public/config/configScrollReveal';

export default function Page() {
  const refToComponent = React.useRef(null);
  const refToImg = React.useRef(null);
  const refToHeder = React.useRef(null);
  const refToParagraf = React.useRef(null);

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default
      sr(configScrollReveal);
      refToComponent.current ?  sr().reveal(refToComponent.current, {origin: 'top'} ) : null;
      refToImg.current ?  sr().reveal(refToImg.current, {origin: 'bottom'} ) : null;
      refToHeder.current ?  sr().reveal(refToHeder.current, {origin: 'left'} ) : null;
      refToParagraf.current ?  sr().reveal(refToParagraf.current, {origin: 'right'} ) : null;
    }
    animate()
  },[]);

 
  return (
    <section className={style.home} id={style.home}>
      <div className={style.home_content} ref={refToComponent}>
        <h3>Olá, Me chamo</h3>
        <h1 ref={refToHeder}>Rafael Aguiar</h1>
        <h3>E sou desenvolvedor <span>FullStack</span></h3>
        <p ref={refToParagraf}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, error nobis facere quo odio, esse illum molestias sed, id explicabo at labore quae minima numquam non harum possimus necessitatibus! Officiis!</p>
        <div className={style.social_media}>
          <a href="#"> <FiFacebook/> </a>
          <a href="#"> <FiTwitter/> </a>
          <a href="#"> <FiInstagram/> </a>
          <a href="#"> <FiLinkedin/> </a>
        </div>
        <Button text='Download CV'/>
      </div>
      <div ref={refToImg} className={style.home_img}>
        <img src={avatar.src} alt="Avatar de um desenvolvedor" />
      </div>
    </section>
  )
}