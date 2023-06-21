import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Papers.scss";
import PapersSvg from "../../anim/PapersSvg";

const STEP = window.innerHeight / 4;

const PapersList = [
  {
    title: "Walmart Sales Forecast",
    link: "./papers/Walmart_Sales_Forecast.pdf",
    authors: "Mihai Cîra",
  },
  {
    title: "Law of Large Numbers",
    link: "./papers/LawOfLargeNumbers.pdf",
    authors: "Mihai Cîra",
  },
  {
    title: "Chaotic Boltzmann Machines",
    link: "./papers/ChaoticBoltzmann.pdf",
    authors: "Mihai Cîra, Alex Măcrescu",
  },
  {
    title: "Ethical Analysis",
    link: "./papers/EthicalAnalysis.pdf",
    authors: "Mihai Cîra",
  },
];

function Papers() {
  const landing = useRef<HTMLDivElement>(null);
  const lastQuarter = useRef<number>();

  const [activeQuarter, setActiveQuarter] = useState<number>(0);

  const checkScroll = useCallback(() => {
    let quarter = Math.round(window.scrollY / STEP);
    quarter += 1;

    if (lastQuarter.current === quarter) return;
    lastQuarter.current = quarter;

    if (quarter > 2) return;

    setActiveQuarter(quarter);
  }, []);

  useEffect(() => {
    checkScroll();

    document.addEventListener("scroll", checkScroll);

    return () => {
      document.removeEventListener("scroll", checkScroll);
    };
  }, [checkScroll]);

  useEffect(() => {
    document.title = "Mihai's portfolio • Papers";
  }, []);

  return (
    <div className="papersPage">
      <div
        id="papersLanding"
        ref={landing}
        className={`${activeQuarter === 1 ? "visible" : ""}`}
      >
        <PapersSvg />
        <div>
          <h3>published work and research contributions</h3>
        </div>
      </div>

      <div id="papersContainer">
        {PapersList.map((p: any) => (
          <div className="paper">
            <span>{p.title}</span>
            <a href={p.link} target="_blank">
              {window.location.origin}/{p.link.substring(2)}
            </a>
            <span>{p.authors}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Papers;
