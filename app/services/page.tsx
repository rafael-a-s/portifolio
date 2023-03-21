import { FiCode } from 'react-icons/fi';
import style from '../../styles/Services.module.css';
import Button from '../../public/components/button/button';

export default function Page(){
  return (
    <section className={style.services} id={style.services}>
      <h2 className={style.heading}>Nossos <span>Serviços</span></h2>
      <div className={style.services_container}>
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