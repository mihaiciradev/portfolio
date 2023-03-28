import React from 'react';
import AboutSvgSlider from '../../../anim/AboutSvgSlider';
import ComeIntoView from '../../mutual/ComeIntoView';
import './About.scss';

function About() {
  return (
    <div className='aboutContainer'>
      <ComeIntoView fromLeft>
        <div className='bioText' id="bioText">
          <p>I am a highly motivated Computer Science graduate, looking for experiences to learn, be challenged and develop my skills. I am a web developer who enjoys creating astonishing web applications that can provide the best user experience possible. Back in University, I have been involved in many projects as a full-stack developer, having roles of all kinds, from developer to project manager. I believe that the most important achievement for a web developer is to create a good looking application, that is easy-to-use and also highly functional.</p>
        </div>
      </ComeIntoView>


      <div id="aboutVerticalLine"></div>

      <AboutSvgSlider />


      <ComeIntoView>
        <div className='bioText'>
          <p>country: Romania</p>
          <p>city: Timisoara</p>
          <p>availability: from anywhere</p>
          <p>way of working: Remote / Hybrid / On-site</p>
          <br />
          <p>Bachelor’s Degree: West University of Timisoara</p>
          <ul>
            <li>September 2019 - July 2022;</li>
            <li>Specialization: Computer science;</li>
          </ul>
          <br />
          <p>Master’s Degree: West University of Timisoara</p>
          <ul>
            <li>September 2022 - present;</li>
            <li>Specialization: Big Data;</li>
          </ul>
        </div>
      </ComeIntoView>

      <div className="aboutMoreContainer">
        <span>more</span>
      </div>
    </div>
  );
}

export default About;
