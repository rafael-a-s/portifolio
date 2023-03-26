'use client';
import { FiCode } from 'react-icons/fi';
import style from '../../styles/Services.module.css';
import Button from '../../public/components/button/button';
import React from 'react';
import { useEffect } from 'react';
import { configScrollReveal } from '../../public/config/configScrollReveal';

export default function Page(){
  const refToComponent = React.useRef(null);
  const refToContainer = React.useRef(null);

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default
      sr(configScrollReveal);
      refToComponent.current ?  sr().reveal(refToComponent.current, {origin: 'top'} ) : null;
      refToContainer.current ?  sr().reveal(refToContainer.current, {origin: 'bottom'} ) : null;
    }
    animate()
  },[]);

  return (
    <section className={style.services} id={style.services}>
      <h2 ref={refToComponent} className={style.heading}>Nossos <span>Serviços</span></h2>
      <div ref={refToContainer} className={style.services_container}>
        <div className={style.services_box}>
          <FiCode className={style.icons}/>
          <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima nobis amet deserunt, possimus debitis tempora reiciendis magni maiores nihil perferendis id.</p>
          <Button text='Leia mais'/>
        </div>

        <div className={style.services_box}>
        <FiCode className={style.icons}/>
          <h3>Back-end Development</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima nobis amet deserunt, possimus debitis tempora reiciendis magni maiores nihil perferendis id.</p>
          <Button text='Leia mais'/>
        </div>

        <div className={style.services_box}>
          <FiCode className={style.icons}/>
          <h3>Azure DevOps</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima nobis amet deserunt, possimus debitis tempora reiciendis magni maiores nihil perferendis id.</p>
          <Button text='Leia mais'/>
        </div>
      </div>
    </section>
  )
}