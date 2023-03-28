import React, { useEffect, useRef, useState } from 'react';

type RotatingTextType = {
  firstString: string,
  secondString: string,
  isFirstActive: boolean
}

const ANIMATION_TIMING_MS = 550;


function RotatingText({ firstString, secondString, isFirstActive }: RotatingTextType) {

  const [activeText, setActiveText] = useState<string>("");
  const rotatingContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {


    if (rotatingContainer.current && rotatingContainer.current.style) {
      rotatingContainer.current.style.animation = `${ANIMATION_TIMING_MS}ms textSwitch linear`;

      setTimeout(() => {
        setActiveText(isFirstActive ? firstString : secondString);
        setTimeout(() => {
          if (rotatingContainer.current && rotatingContainer.current.style)
            rotatingContainer.current.style.animation = 'none';
        }, ANIMATION_TIMING_MS / 2);
      }, ANIMATION_TIMING_MS / 2);
    }

  }, [firstString, isFirstActive, secondString])

  return <div id="rotatingTextContainer">
    <div id="rotatingText" ref={rotatingContainer}>{activeText}</div>
  </div>
}


export default RotatingText;
