import React, { useEffect, useRef } from 'react';
import Bike from '../../../anim/Bike';
import LandingPicSquares from '../../../anim/LandingPicSquares';
import { typingEffect } from '../../../const/utils';
import './Landing.scss';


const STRINGS = ["I am Mihai Cira.", "React & TypeScript developer", "Next.js developer", "system architect", "problem solver"];
const WORD_TIMEOUT = 2500;
const LOOP = true;

function Landing() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ELEMENT = titleRef.current;
    if (!ELEMENT) return;

    setTimeout(() => {
      typingEffect(STRINGS, 50, WORD_TIMEOUT, LOOP, ELEMENT);
    }, WORD_TIMEOUT);

  }, [])

  return (
    <div className='landingContainer'>

      <div className="landingLeftContainer">
        <h1 ref={titleRef}>{STRINGS[0]}</h1>
        <div className="landingDemoText">
          <p>Fullstack developer specialized in <b>React</b>, <b>TypeScript</b> and <b>Next.js</b></p>
          <p>Lead developer · System architect · <b>SAFe 5</b> certified · Open to <b>B2B</b></p>
        </div>
      </div>

      <div className='landingRightContainer'>
        <div className='landingSvgContainer'>
          <LandingPicSquares />
        </div>
        <div className='bikeContainer'>
          <Bike />
        </div>
      </div>

      {/* <div id="randomCircle" onClick={() => {
        scrollSmoothTo(document.getElementsByClassName('aboutContainer')[0] as HTMLElement)
      }}>
    </div> */}

      {/* <div onClick={() => {
        scrollSmoothTo(document.getElementsByClassName('aboutContainer')[0] as HTMLElement)
      }}>
        <LandingArrow />
      </div> */}

    </div >


  );
}

export default Landing;
