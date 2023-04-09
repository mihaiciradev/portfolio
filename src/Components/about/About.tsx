import React, { useCallback, useEffect, useRef, useState } from 'react';
import './About.scss';
import MehoyUntold from "../../assets/mehoy_untold.png";
import LilHand from '../../anim/LilHand';
import SocialMedia from '../mutual/SocialMedia/SocialMedia';
import Gamer from '../../assets/Gamer';
import Doggy from '../../assets/Doggy';
import Sports from '../../assets/Sports';
import Relax from '../../anim/Relax';
import IconsOverlay from './IconsOverlay';

const STEP = window.innerHeight / 1;

function About() {

  const hiThere = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<number>(0);
  const slider = useRef<HTMLDivElement>(null);
  const overall = useRef<HTMLDivElement>(null);

  const lastQuarter = useRef<number>();

  const checkScroll = useCallback(() => {

    if (!hiThere.current?.style) return;

    const newMargin = 100 + window.scrollY / 5

    hiThere.current.style.marginTop = `${newMargin < 300 ? newMargin : 300}px`;

    let quarter = Math.round(window.scrollY / STEP);
    if (lastQuarter.current === quarter) return;
    lastQuarter.current = quarter;

    if (quarter > 4)
      quarter = 4;

    switch (quarter) {
      case 0:
        slider.current!.parentElement!.classList.remove('visible');
        slider.current!.children[0].classList.remove('visible');
        slider.current!.children[1].classList.remove('visible');
        slider.current!.children[2].classList.remove('visible');
        hiThere.current!.parentElement!.classList.add('visible');
        overall.current!.classList.remove('visible');
        break;

      case 1:
        hiThere.current!.parentElement!.classList.remove('visible');
        slider.current!.parentElement!.classList.add('visible');
        slider.current!.children[0].classList.add('visible');
        slider.current!.children[1].classList.remove('visible');
        slider.current!.children[2].classList.remove('visible');
        overall.current!.classList.remove('visible');
        break;

      case 2:
        slider.current!.parentElement!.classList.add('visible');

        slider.current!.children[0].classList.remove('visible');
        slider.current!.children[1].classList.add('visible');
        slider.current!.children[2].classList.remove('visible');
        overall.current!.classList.remove('visible');
        break;


      case 3:
        slider.current!.parentElement!.classList.add('visible');
        slider.current!.children[0].classList.remove('visible');
        slider.current!.children[1].classList.remove('visible');
        slider.current!.children[2].classList.add('visible');
        overall.current!.classList.remove('visible');
        break;

      case 4:
        slider.current!.parentElement!.classList.remove('visible');
        hiThere.current!.parentElement!.classList.remove('visible');
        slider.current!.children[0].classList.remove('visible');
        slider.current!.children[1].classList.remove('visible');
        slider.current!.children[2].classList.remove('visible');
        overall.current!.classList.add('visible');
        break;
    }

  }, [])



  useEffect(() => {
    checkScroll();

    document.addEventListener('scroll', checkScroll);

    return () => { document.removeEventListener('scroll', checkScroll) }
  }, [checkScroll])



  const HiThere = () => {
    return (<div id="hiThereContainer">

      <div id="hiThere" ref={hiThere}>
        <h2>hi there</h2>
        <LilHand />
      </div>

      <img src={MehoyUntold} alt="Mihai pic" />
    </div>)
  }

  const ImMihai = () => {
    return (<div id="imMihaiContainer">

      <div id="title">
        <h2>I'm Mihai 🤓</h2>
        <SocialMedia />
      </div>

      <div id='slidesContainer' ref={slider}>
        <div className='slide'>
          <h2> Gamer </h2>
          <Gamer />
        </div>

        <div className='slide left'>
          <h2> Dog owner </h2>
          <Doggy />
        </div>

        <div className='slide'>
          <h2> Sport enthusiast </h2>
          <Sports />
        </div>
      </div>
    </div>)
  }

  const Overall = () => {
    return (<div id="overallContainer" ref={overall}>
      <h2>But overall...</h2>

      <p>A 22’ years old fella’, who enjoys  coffee breaks ☕, trips to Italy 🤌, sunny days ☀️ and good hamburgers 🍔.</p>

      <Relax />

    </div>)

  }

  return (
    <div className='aboutPage' style={{ "minHeight": `${STEP * 4}px` }}>
      <div id="movingBox">
        <HiThere />

        <ImMihai />

        <Overall />
      </div>
      <IconsOverlay/>
    </div>
  );
}

export default About;
