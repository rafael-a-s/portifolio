import style from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_text}> 
        <p>Copyright &copy; 2023 Rafael Aguiar | Todos os direitos Reservados.</p>
      </div>
    </footer>
  )
}