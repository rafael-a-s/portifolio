'use client';
import style from '../../styles/Portifolio.module.css';
import avatar from '../../public/images/rafael2.png';
import { FiExternalLink } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import React from 'react';
import { configScrollReveal } from '../../public/config/configScrollReveal';
import { Projects } from '../../public/projects/Projects';
import { Service } from '../../public/projects/service';

export default function Page() {

  const refToComponent = React.useRef(null);
  const refToBox = React.useRef(null);

  const [projects, setProjects] = useState<Projects[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await Service.getRepositories();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    }
    
    async function animate() {
      const sr = (await import("scrollreveal")).default
      sr(configScrollReveal);
      refToComponent.current ?  sr().reveal(refToComponent.current, {origin: 'top'} ) : null;
      refToBox.current ?  sr().reveal(refToBox.current, {origin: 'bottom'} ) : null;
    }
    animate();
    fetchData();
  },[]);

  return (
    <section className={style.portifolio} id={style.portifolio}>
      <h2 ref={refToComponent} className={style.heading}>Meus <span>Projetos</span></h2>
      <div className={style.portifolio_container} >
        {projects.map((project, index) => (
          <div ref={refToBox} className={style.portifolio_box}>
          <img src={`${project.img_url ?  project.img_url  : avatar.src}`} alt="Imagem do projeto" />
          <div className={style.portifolio_layer}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <a href={`${project.html_url}`}> <FiExternalLink className={style.icons}/> </a>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}