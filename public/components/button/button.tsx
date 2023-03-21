import style from '../../../styles/Button.module.css';

type buttonProps = {
  text: string;
}

export default function Button(props: buttonProps) {
  return (
    <a href="#" className={style.btn}>{props.text}</a>
  )
}