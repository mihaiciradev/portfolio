import React from 'react';
import MiniMenuBar from '../../../anim/MiniMenuBar';
import "./MiniMenu.scss";

function MiniMenu() {

  const handleAnimation = (event: any, enter: boolean) => {
    const buttonElement = (event.target.tagName === 'BUTTON') ? event.target : event.target.parentElement;

    if (!buttonElement) return;

    const top_1 = buttonElement.children[0];
    const top_2 = buttonElement.children[1];
    const bottom_1 = buttonElement.children[2];
    const bottom_2 = buttonElement.children[3];


    if (enter) {
      top_1.classList.add('top-1-active');
      bottom_1.classList.add('bottom-1-active');
    }
    else {
      top_2.classList.remove('top-2-active');
      bottom_2.classList.remove('bottom-2-active');
    }


    setTimeout(() => {
      if (enter && Array.from(top_1.classList).includes('top-1-active')) {
        top_2.classList.add('top-2-active');
        bottom_2.classList.add('bottom-2-active');
      }
      else {
        if (!Array.from(top_2.classList).includes('top-2-active')) {
          top_1.classList.remove('top-1-active');
          bottom_1.classList.remove('bottom-1-active');
        }
      }
    }, 250)

    // setTimeout(()=>{
    //   if(buttonElement.style.opacity === ''){
    //     console.log(buttonElement.style);
    //     top_1.classList.remove('top-1-active');
    //     top_2.classList.remove('top-2-active');

    //     bottom_1.classList.remove('bottom-1-active');
    //     bottom_2.classList.remove('bottom-2-active');
    //   }
    // },500)
  }

  return <div className='miniMenuContainer'>
    <span id="subtitle">View my</span>
    <div className='buttonsContainer'>
      <button onMouseEnter={(e) => { handleAnimation(e, true) }} onMouseLeave={(e) => { handleAnimation(e, false) }}>
        <div className="top-1"></div>
        <div className="top-2"></div>

        Skills

        <div className="bottom-1"></div>
        <div className="bottom-2"></div>
      </button>
      <MiniMenuBar />
      <button onMouseEnter={(e) => { handleAnimation(e, true) }} onMouseLeave={(e) => { handleAnimation(e, false) }}>
        <div className="top-1"></div>
        <div className="top-2"></div>

        Projects

        <div className="bottom-1"></div>
        <div className="bottom-2"></div></button>
    </div>
  </div>
}


export default MiniMenu;
