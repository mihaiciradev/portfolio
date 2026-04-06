import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Projects.scss";
import ProjectsSvg from "../../anim/ProjectsSvg";

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
            A selection of projects I have built and shipped — ranging from
            ML-powered platforms to production booking systems. Across these I
            have acted as lead developer, system architect, team leader,
            and designer.
          </p>
        </div>
      </div>

      <div
        id="projectsContainer"
        className={`${activeQuarter === 2 ? "visible" : ""}`}
      >
        <Project
          title="Get Me Hired"
          link="Next.js & ML-powered job recommendation platform"
          role={["Fullstack developer", "ML engineer"]}
          tech={["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Python", "FastAPI", "XGBoost", "Sentence Transformers", "scikit-learn"]}
          text="A full-stack web application that matches candidates with relevant job opportunities by semantically analysing the content of their CV. Users upload their CV through the browser; a FastAPI backend processes the PDF, generates semantic embeddings via a pre-trained transformer model, and returns a ranked list of personalised job recommendations. The model was trained on a corpus of over 200,000 real-world job descriptions across multiple industries."
        />

        <Project
          title="Travel agency internal booking app"
          link="hotel reservation platform — React & TypeScript"
          role={["Lead frontend developer", "System architect"]}
          tech={["React", "TypeScript", "Redux", "React Query", "Material UI", "REST API", "Git"]}
          text="A complex full-stack web application built for a French travel agency, enabling agents to search hotel availability, configure and price stays, and manage the full reservation lifecycle across multiple external providers. The frontend handles multi-step booking flows, real-time availability checks, dynamic pricing tables, and a booking modification system that synchronises changes across multiple third-party APIs. I led the frontend architecture, defined component and state-management patterns, collaborated closely with the backend team on API design, and was responsible for end-to-end delivery of several major features."
        />

        <Project
          title="Ciuson"
          link="business website & admin platform — Next.js"
          role={["Fullstack developer", "Designer"]}
          tech={["Next.js", "React", "TypeScript", "Firebase", "Google Authentication"]}
          text="A Romanian vulcanisation business that transitioned from having no online presence to achieving constant website traffic and strong Google ranking. I designed and developed the application using Next.js with backend services powered by Google Firebase. The platform includes Google authentication, allowing the client to securely manage and update displayed pricing and business information. Delivered through direct client communication with continuous feedback, resulting in a significant improvement in online visibility and customer reach."
        />

        <Project
          title="Center of Francophone Studies"
          link="serverless website platform (click)"
          linkRef="https://csf.uvt.ro/"
          role={["Team leader", "Fullstack developer"]}
          tech={["HTML", "CSS", "JavaScript", "jQuery", "Firebase"]}
          text="A complex online platform for the Center of Francophone Studies at West University of Timișoara, developed through a partnership between two faculties. I led a team of six to build a role-based user account system and automate processes previously handled manually. The platform serves researchers and staff working in the field of francophonie from the perspective of interculturality and interdisciplinarity."
        />

        <Project
          title="Guildhall"
          link="web-based company management tool"
          role={["Fullstack developer"]}
          tech={["React", "TypeScript", "Elixir", "PostgreSQL", "Git", "Google Calendar API"]}
          text="A company PTO management application built during an internship at Crafting Software. The app tracks paid time off for employees and integrates directly with the Google Calendar API. I worked across both the React frontend and Elixir backend in a seven-person team with daily standups and weekly demos."
        />
      </div>
    </div>
  );
}

export default Projects;
