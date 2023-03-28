import React, { useEffect, useRef } from 'react';
import Bike from '../../../anim/Bike';
import LandingArrow from '../../../anim/LandingArrow';
import LandingPicSquares from '../../../anim/LandingPicSquares';
import { scrollSmoothTo, typingEffect } from '../../../const/utils';
import './Landing.scss';


const STRINGS = ["I am Mihai Cira.", "front end developer", "back end developer", "problem solver"];
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
          <p>Web development enthusiast,  using the most <b>modern technologies</b></p>
          <p>Trained and <b>certified</b> in the Scaled Agile Framework (<b>SAFe 5</b> Methodology)</p>
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
