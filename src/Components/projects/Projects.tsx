import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Projects.scss';
import ProjectsSvg from '../../anim/ProjectsSvg';
import Csf from '../../assets/projects/csf.png';
import Csf1 from '../../assets/projects/csf1.png';
import Csf2 from '../../assets/projects/csf2.png';
import Csf3 from '../../assets/projects/csf3.png';
import CL from '../../assets/projects/CL.png';
import CL1 from '../../assets/projects/CL1.png';
import CL2 from '../../assets/projects/CL2.png';
import Figma from '../../assets/projects/portfolio-design.png';
import Remigoo from '../../assets/projects/remigoo.png';
import Remigoo1 from '../../assets/projects/remigoo1.png';
import Remigoo2 from '../../assets/projects/remigoo2.png';





const STEP = window.innerHeight / 3;

function Projects() {

  const landing = useRef<HTMLDivElement>(null);
  const lastQuarter = useRef<number>();

  const [activeQuarter, setActiveQuarter] = useState<number>(0);



  const checkScroll = useCallback(() => {

    let quarter = Math.round(window.scrollY / STEP);
    quarter += 1;

    if (lastQuarter.current === quarter) return;
    lastQuarter.current = quarter;

    if (quarter > 2) return;

    setActiveQuarter(quarter);
    console.log(quarter)
  }, [])

  useEffect(() => {
    checkScroll();

    document.addEventListener('scroll', checkScroll);

    return () => { document.removeEventListener('scroll', checkScroll) }
  }, [checkScroll])


  type ProjectType = {
    title: string,
    link: string,
    linkRef?: string,
    mainImg?: any,
    imgs?: any[],
    role: string[],
    tech: string[]
    text: string
  }

  const Project = ({ title, link, linkRef, mainImg, imgs, role, tech, text }: ProjectType) => {
    return (<div className='project'>

      <div className='projectTitle'>
        <h2>{title}</h2>
        {
          !!linkRef ? <a href={linkRef} target="_blank" rel="noreferrer">{link}</a> : <p>{link}</p>

        }
      </div>

      <div className='projectImages'>
        {!!mainImg && <img src={mainImg} alt='main' />}

        <div>
          {!!imgs && imgs.map(i => <img src={i} alt='secondary' />)}
        </div>
      </div>

      <div className='projectRoles'>
        <div>
          <h3>Role</h3>
          {role.map(r => <p>{r}</p>)}
        </div>

        <div>
          <h3>Technologies</h3>
          {tech.map(t => <p>{t}</p>)}
        </div>
      </div>

      <p>{text}</p>
    </div>)
  }

  return (
    <div className='projectsPage'>
      <div id="projectsLanding" ref={landing} className={`${activeQuarter === 1 ? 'visible' : ''}`}>
        <ProjectsSvg />
        <div>
          <h3>projects</h3>
          <p>Here is a list of the projects I have worked on,
            primarily during my Bachelor's degree but not limited to that.
            Throughout these projects, I have taken on multiple roles,
            including developer, team leader, project manager, and designer.</p>
        </div>
      </div>

      <div id="projectsContainer" className={`${activeQuarter === 2 ? 'visible' : ''}`}>

        <Project title='Center of francophone studies'
          link='serverless website platform (click)'
          linkRef='http://csf.uvt.ro/'
          mainImg={Csf}
          imgs={[Csf1, Csf2, Csf3]}
          role={['Full-stack developer', 'Team leader']}
          tech={['HTML', 'CSS', 'Javascript', 'jQuery', 'Firebase', 'Figma']}
          text='The Center of Francophone Studies aims to carry out a comprehensive and coherent research program in the field of francophonie from the perspective of interculturality and interdisciplinarity. The project has been built by a team of six people whose team leader was me.The project subject belongs to the Faculty of Letters, History and Theology within West University of Timisoara. We developed the product via a patnership between that faculty and my faculty, within a certain subject matter.The website is a complex online platform that manages some processes that in the past have been dealt with manually. It has plenty of systems, such as a user account system based on roles, each role having its responsabilities.' />

        <Project title='Classroom Laboratory'
          link='educational website (click)'
          linkRef='https://classroomlab.uvt.ro/'
          mainImg={CL}
          imgs={[CL1, CL2]}
          role={['Full-stack developer', 'Team leader']}
          tech={['HTML', 'CSS', 'Javascript', 'jQuery']}
          text='Classroom Laboratory is a classroom where selected courses are taught, an infrastructure for conducting experiments in teaching and methodology methods, and finally an arena for collaboration between students, teachers, researchers and the world of work. It is a front-end website only, which I built alone, as a volunteer, for the Faculty of Sociology and Psychology (West University of Timișoara).When needed, I am called to update stuff on the website.' />


        <Project title='Personal portfolio'
          link='react application (you are already here)'
          mainImg={Figma}
          role={['everything 🤩']}
          tech={['React', 'Typescript', 'Figma', 'SASS']}
          text='That is the website that you are currently visiting. The images attached represent the prototype. Check it out and compare it to the actual final application.' />


        <Project title='Remigoo'
          link='react web-based appointment system website'
          mainImg={Remigoo}
          imgs={[Remigoo1,Remigoo2]}
          role={['Team leader', 'Full-stack developer']}
          tech={['React', 'Typescript', 'Figma', 'Firebase', 'SASS']}
          text='It has been created in 2021-2022 by three students, a team which I led. Users can create their own accounts if they want to, book tickets to certain movies and visualize their history on their profile page.' />
      </div>

    </div>
  );
}

export default Projects;
