import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Projects.scss";
import ProjectsSvg from "../../anim/ProjectsSvg";
import CL from "../../assets/projects/CL.png";
import CL1 from "../../assets/projects/CL1.png";
import CL2 from "../../assets/projects/CL2.png";
import ETH from "../../assets/projects/ETH_scoreboard.jpeg";
import Figma from "../../assets/projects/portfolio-design.png";
import Remigoo from "../../assets/projects/remigoo.png";
import Remigoo1 from "../../assets/projects/remigoo1.png";
import Remigoo2 from "../../assets/projects/remigoo2.png";

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
  }, []);

  useEffect(() => {
    checkScroll();

    document.addEventListener("scroll", checkScroll);

    return () => {
      document.removeEventListener("scroll", checkScroll);
    };
  }, [checkScroll]);

  useEffect(() => {
    document.title = "Mihai's portfolio • Projects";
  }, []);

  type ProjectType = {
    title: string;
    link: string;
    linkRef?: string;
    mainImg?: any;
    imgs?: any[];
    role: string[];
    tech: string[];
    text: string;
  };

  const Project = ({
    title,
    link,
    linkRef,
    mainImg,
    imgs,
    role,
    tech,
    text,
  }: ProjectType) => {
    return (
      <div className="project">
        <div className="projectTitle">
          <h2>{title}</h2>
          {!!linkRef ? (
            <a href={linkRef} target="_blank" rel="noreferrer">
              {link}
            </a>
          ) : (
            <p>{link}</p>
          )}
        </div>

        <div className="projectImages">
          {!!mainImg && <img src={mainImg} alt="main" />}

          <div>
            {!!imgs && imgs.map((i) => <img src={i} alt="secondary" />)}
          </div>
        </div>

        <div className="projectRoles">
          <div>
            <h3>Role</h3>
            {role.map((r) => (
              <p>{r}</p>
            ))}
          </div>

          <div>
            <h3>Technologies</h3>
            {tech.map((t) => (
              <p>{t}</p>
            ))}
          </div>
        </div>

        <p>{text}</p>
      </div>
    );
  };

  return (
    <div className="projectsPage">
      <div
        id="projectsLanding"
        ref={landing}
        className={`${activeQuarter === 1 ? "visible" : ""}`}
      >
        <ProjectsSvg />
        <div>
          <h3>projects</h3>
          <p>
            Here is a list of the projects I have worked on, primarily during my
            Bachelor's degree but not limited to that. Throughout these
            projects, I have taken on multiple roles, including developer, team
            leader, project manager, and designer.
          </p>
        </div>
      </div>

      <div
        id="projectsContainer"
        className={`${activeQuarter === 2 ? "visible" : ""}`}
      >
        <Project
          title="Attack-Defense-Scoreboard"
          link="Hackathon scoreboard page (click for github page)"
          linkRef="https://github.com/Fineas/Attack-Defense-Scoreboard/tree/master"
          mainImg={ETH}
          role={["Frontend developer"]}
          tech={["ReactJS", "Figma"]}
          text="The page represents the scoreboard user interface for a hackathon called HackTM. Fetching the data from an API, the page shows the participants at the hackathon. Even though it has basic functionality, the opportunity to help an event such as a hackathon was exciting."
        />

        <Project
          title="Personal portfolio"
          link="react application (you are already here)"
          mainImg={Figma}
          role={["everything 🤩"]}
          tech={["React", "Typescript", "Figma", "SASS"]}
          text="That is the website that you are currently visiting. The images attached represent the prototype. Check it out and compare it to the actual final application."
        />

        <Project
          title="Classroom Laboratory"
          link="educational website (click)"
          linkRef="https://classroomlab.uvt.ro/"
          mainImg={CL}
          imgs={[CL1, CL2]}
          role={["Full-stack developer", "Team leader"]}
          tech={["HTML", "CSS", "Javascript", "jQuery"]}
          text="Classroom Laboratory is a classroom where selected courses are taught, an infrastructure for conducting experiments in teaching and methodology methods, and finally an arena for collaboration between students, teachers, researchers and the world of work. It is a front-end website only, which I built alone, as a volunteer, for the Faculty of Sociology and Psychology (West University of Timișoara).When needed, I am called to update stuff on the website."
        />

        <Project
          title="Remigoo"
          link="react web-based appointment system website"
          mainImg={Remigoo}
          imgs={[Remigoo1, Remigoo2]}
          role={["Team leader", "Full-stack developer", "Designer"]}
          tech={["React", "Typescript", "Figma", "Firebase", "SASS"]}
          text="It has been created in 2021-2022 by three students, a team which I led. Users can create their own accounts if they want to, book tickets to certain movies and visualize their history on their profile page."
        />
      </div>
    </div>
  );
}

export default Projects;
