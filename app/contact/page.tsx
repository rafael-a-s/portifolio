'use client';
import Button from '../../public/components/button/button';
import { configScrollReveal } from '../../public/config/configScrollReveal';
import style from '../../styles/Contact.module.css';
import { useEffect } from 'react';
import React from 'react';

export default function Contact() {

  const refToComponent = React.useRef(null);
  const refToForm = React.useRef(null);

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default
      sr(configScrollReveal);
      refToComponent.current ?  sr().reveal(refToComponent.current, {origin: 'top'} ) : null;
      refToForm.current ?  sr().reveal(refToForm.current, {origin: 'bottom'} ) : null;
    }
    animate()
  },[]);
  
  return (
    <section className={style.contact} id={style.contact}>  
      <h2 ref={refToComponent} className={style.heading}>Contate <span>Me!</span></h2>

      <form ref={refToForm} action="#">
        <div className={style.input_box}>
          <input type="text" placeholder='Nome Completo'/>
          <input type="email" placeholder='Endereço de email'/>
        </div>

        <div className={style.input_box}>
          <input type="number" placeholder='Numero de Telefone'/>
          <input type="email" placeholder='Assunto do Email'/>
        </div>

        <textarea name="" id="" cols={30} rows={10} placeholder='Sua Mensagem'></textarea>

        <Button text='Enviar Mensagem'/>

      </form>

    </section>
  )
}