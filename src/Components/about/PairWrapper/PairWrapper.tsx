import { useRef } from "react";
import "./PairWrapper.scss"

type PairWrapperProps = {
  firstElement: any;
  secondElement: any;
  active?: boolean;
}

function PairWrapper({firstElement, secondElement, active}: PairWrapperProps) {
  const first = useRef<HTMLDivElement>(null);
  const second = useRef<HTMLDivElement>(null);

  return (
    <div className={`pairWrapper ${active ? 'active' : ''}`}>
      <div className="first" ref={first}>
        {firstElement}
      </div>

      <div className="second" ref={second}>
        {secondElement}
      </div>
    </div>
  );
}

export default PairWrapper;