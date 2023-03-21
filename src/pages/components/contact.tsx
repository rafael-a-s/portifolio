import style from '../../styles/Contact.module.css';
import Button from '../utils/button';

export default function Contact() {
  return (
    <section className={style.contact} id={style.contact}>  
      <h2 className={style.heading}>Contate <span>Me!</span></h2>

      <form action="#">
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