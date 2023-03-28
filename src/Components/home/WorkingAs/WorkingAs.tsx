import React, { useCallback, useEffect, useRef, useState } from 'react';
import ManAndWoman from '../../../anim/ManAndWoman';
import RotatingText from './RotatingText';
import './WorkingAs.scss';

const isMovingBoxAboveBorder = (container: any, movingBox: any) => {
  const containerOffsetTop = container.current?.offsetTop;
  const containerOffsetHeight = container.current?.offsetHeight;
  if (containerOffsetHeight && containerOffsetTop && movingBox.current?.offsetTop) {
    const border = containerOffsetTop + (containerOffsetHeight / 3);

    return !(movingBox.current.offsetTop > border);
  }

  return false;
}

function WorkingAs() {

  const container = useRef<HTMLDivElement>(null);
  const movingBox = useRef<HTMLDivElement>(null);

  const [isAboveBorder, setIsAboveBorder] = useState<boolean>(isMovingBoxAboveBorder(container, movingBox));

  const checkScroll = useCallback(() => {
    if (!isMovingBoxAboveBorder(container, movingBox) && isAboveBorder) {
      setIsAboveBorder(false);
      return;
    }

    if (isMovingBoxAboveBorder(container, movingBox) && !isAboveBorder) {
      setIsAboveBorder(true)
      return;
    }
  }, [isAboveBorder])

  useEffect(() => {
    document.addEventListener('scroll', checkScroll);

    return () => { document.removeEventListener('scroll', checkScroll) }
  }, [checkScroll])


  return (
    <div className="workingAsContainer">
      <div className="workingAsElementsContainer" ref={container}>
        <div id="movingBox" ref={movingBox}>

          <div className='text'>
            <span>I have experience working</span>
            <RotatingText firstString="as part of a team" secondString="independently" isFirstActive={isAboveBorder} />
          </div>

          <div id="manAndWoman" className={!isAboveBorder ? 'onlyMan' : undefined}>
          <ManAndWoman />
          </div>
          
        </div>
      </div>

    </div>


  );
}

export default WorkingAs;
