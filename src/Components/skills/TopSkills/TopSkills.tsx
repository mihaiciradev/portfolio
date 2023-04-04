import React, { useCallback, useEffect, useRef } from 'react';
import './TopSkills.scss';
import Firebase from "../../../assets/firebase-logo.png";
import Nodejs from "../../../assets/nodejs-logo.png";
import ReactLogo from "../../../assets/react-logo.png";


function TopSkills() {
  const movingBoxRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  
  const checkScroll = useCallback(() =>{

    const container = (document.getElementsByClassName('topSkillsContainer')[0] as HTMLElement);
    const containerBottomPosition = container.offsetHeight + container.offsetTop;

    const marginOfError = 10; // px
    const scrollingEndBorder = containerBottomPosition - (movingBoxRef.current as HTMLElement).offsetHeight - marginOfError

    if(!movingBoxRef.current || !subtitleRef.current) return;

    if(subtitleRef.current.offsetTop < movingBoxRef.current.offsetTop - (marginOfError * 2)){
      subtitleRef.current.style.transform = `translateY(${window.scrollY/2}px)`;
      subtitleRef.current.style.letterSpacing = `${window.scrollY/80}px`;
    }


    const FE = movingBoxRef.current.children[0];
    const BE = movingBoxRef.current.children[1];

    if((movingBoxRef.current as HTMLElement).offsetTop >= scrollingEndBorder){
      if(!Array.from(FE.classList).includes('hiddenCard')) return;

      FE.classList.remove('hiddenCard');
      BE.classList.remove('hiddenCard');

      FE.classList.add('feCardTransition');
      BE.classList.add('beCardTransition');
    }
    else{
      if(Array.from(FE.classList).includes('hiddenCard')) return;

      FE.classList.add('hiddenCard');
      BE.classList.add('hiddenCard');

      FE.classList.remove('feCardTransition');
      BE.classList.remove('beCardTransition');

    }
    


  },[])

  useEffect(() => {
    document.addEventListener('scroll', checkScroll);

    return () => { document.removeEventListener('scroll', checkScroll) }
}, [checkScroll])

  return (
    <div className='topSkillsContainer'>
      <h3 ref={subtitleRef}>for the most recent projects i’ve been using </h3>
      <div id="jsContainer" ref={movingBoxRef}>

        <div id="frontendBox" className='hiddenCard'>
          <h2>Javascript</h2>
          <span>front-end development</span>
          <div className='jsContainerTech'>
            <h3>REACT</h3>
          </div>
          <div className='jsContainerImg'>
            <img src={ReactLogo} id='react-logo' alt='react-logo' />
          </div>
        </div>

        <div id="backendBox" className='hiddenCard'>
          <h2>Javascript</h2>
          <span>back-end development</span>
          <div className='jsContainerTech'>
            <h3>NODEJS</h3>
            <h3>FIREBASE</h3>
          </div>
          <div className='jsContainerImg'>
            <img src={Nodejs} id='nodejs-logo' alt='nodejs-logo' />
            <img src={Firebase} id='firebase-logo' alt='firebase-logo' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSkills;
