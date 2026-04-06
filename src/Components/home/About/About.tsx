import React from "react";
import AboutSvgSlider from "../../../anim/AboutSvgSlider";
import ComeIntoView from "../../mutual/ComeIntoView";
import "./About.scss";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="aboutContainer">
      <ComeIntoView fromLeft>
        <div className="bioText" id="bioText">
          <p>
            {" "}
            Fullstack web developer specialized in React, TypeScript and
            Next.js, with strong experience in designing and building scalable,
            real-time web applications. Over the last two years, I have been
            actively involved in a complex production system where I owned
            front-end architecture, contributed to system design, and
            coordinated development across frontend and backend teams. I am a
            proactive and reliable team member, known primarily for strong
            problem-solving skills, clear technical communication, and the
            ability to translate business requirements into clean, maintainable
            solutions. I work comfortably with RESTful APIs, modern tooling, and
            Agile processes, while keeping a constant focus on code quality,
            performance, and long-term maintainability. Open to B2b contracts.
          </p>
        </div>
      </ComeIntoView>

      <div id="aboutVerticalLine"></div>

      <AboutSvgSlider />

      <ComeIntoView>
        <div className="bioText">
          <p>
            <b>country:</b> Romania
          </p>
          <p>
            <b>city:</b> Timisoara
          </p>
          <p>
            <b>availability:</b> from anywhere
          </p>
          <p>
            <b>way of working:</b> Remote / Hybrid / On-site
          </p>
          <br />
          <p>
            <b>Bachelor’s Degree:</b> West University of Timisoara
          </p>
          <ul>
            <li>September 2019 - July 2022;</li>
            <li>Specialization: Computer science;</li>
          </ul>
          <br />
          <p>
            <b>Master’s Degree:</b> West University of Timisoara
          </p>
          <ul>
            <li>September 2022 - July 2025;</li>
            <li>Specialization: Big Data;</li>
          </ul>
        </div>
      </ComeIntoView>

      <div
        className="aboutMoreContainer"
        onClick={() => {
          navigate("./about-the-programmer");
          window.scrollTo(0, 0);
        }}
      >
        <span>more</span>
      </div>
    </div>
  );
}

export default About;
