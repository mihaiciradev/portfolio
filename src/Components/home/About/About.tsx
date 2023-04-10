import React from 'react';
import AboutSvgSlider from '../../../anim/AboutSvgSlider';
import ComeIntoView from '../../mutual/ComeIntoView';
import './About.scss';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <div className='aboutContainer'>
      <ComeIntoView fromLeft>
        <div className='bioText' id="bioText">
          <p> I'm a tech-savvy <b>Computer Science grad</b>, ready to take on new challenges and dazzle with my skills.
            As a web developer, I take pride in creating <b>breathtaking applications</b> that not only look great,
            but provide a <b>seamless user experience</b>. My experience as a<b> full-stack developer</b>, and even dabbling in project management,
            has given me a well-rounded skillset to tackle any task. And let's be real, who doesn't love a good-looking app
            that's easy to use AND functional? I'm the web developer you need, and probably the one you deserve.
            So let's join forces and create web applications that are out of this world! 👽👽</p>
        </div>
      </ComeIntoView>


      <div id="aboutVerticalLine"></div>

      <AboutSvgSlider />

      <ComeIntoView>
        <div className='bioText'>
          <p><b>country:</b> Romania</p>
          <p><b>city:</b> Timisoara</p>
          <p><b>availability:</b> from anywhere</p>
          <p><b>way of working:</b> Remote / Hybrid / On-site</p>
          <br />
          <p><b>Bachelor’s Degree:</b> West University of Timisoara</p>
          <ul>
            <li>September 2019 - July 2022;</li>
            <li>Specialization: Computer science;</li>
          </ul>
          <br />
          <p><b>Master’s Degree:</b> West University of Timisoara</p>
          <ul>
            <li>September 2022 - present;</li>
            <li>Specialization: Big Data;</li>
          </ul>
        </div>
      </ComeIntoView>

      <div className="aboutMoreContainer" onClick={() => {
        navigate('./about-the-programmer');
        window.scrollTo(0, 0)
      }}>
        <span>more</span>
      </div>

    </div>
  );
}

export default About;
