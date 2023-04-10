import React, { useCallback, useEffect, useRef, useState } from 'react';
import './AboutIT.scss';
import CvPic from '../../assets/mihai-lin.png';
import SocialMedia from '../mutual/SocialMedia/SocialMedia';

const moon = <svg style={{
  'width': window.innerWidth - 20,
  'height': 'max-content'
}} viewBox="0 0 1915 309" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 307C466 -98 1425 -100 1915 307" stroke="url(#paint0_linear_208_229)" stroke-width="5" />
  <defs>
    <linearGradient id="paint0_linear_208_229" x1="1915" y1="1.99982" x2="2" y2="1.99986" gradientUnits="userSpaceOnUse">
      <stop offset="0.000680678" stop-color="white" stop-opacity="0" />
      <stop offset="0.493748" stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
  </defs>
</svg>


const workSvg = <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.04202 63.8655C7.69748 63.8655 6.52101 63.3613 5.51261 62.3529C4.5042 61.3445 4 60.1681 4 58.8235V17.395C4 16.0504 4.5042 14.874 5.51261 13.8655C6.52101 12.8571 7.69748 12.3529 9.04202 12.3529H25.0084V5.04202C25.0084 3.7535 25.5126 2.59104 26.521 1.55462C27.5294 0.518207 28.7059 0 30.0504 0H45.1765C46.521 0 47.6975 0.518207 48.7059 1.55462C49.7143 2.59104 50.2185 3.7535 50.2185 5.04202V12.3529H66.1849C67.5294 12.3529 68.7059 12.8571 69.7143 13.8655C70.7227 14.874 71.2269 16.0504 71.2269 17.395V37.395C70.4426 36.7787 69.6443 36.2185 68.8319 35.7143C68.0196 35.2101 67.1373 34.7339 66.1849 34.2857V17.395H9.04202V58.8655V58.8235H37.1475C37.3461 59.7199 37.6134 60.5882 37.9496 61.4286C38.2857 62.2689 38.6779 63.0812 39.1261 63.8655H9.04202ZM30.0504 12.3529H45.1765V5.04202H30.0504V12.3529ZM57.7815 70C53.3557 70 49.5462 68.4034 46.3529 65.2101C43.1597 62.0168 41.563 58.2073 41.563 53.7815C41.563 49.3557 43.1597 45.5462 46.3529 42.3529C49.5462 39.1597 53.3557 37.563 57.7815 37.563C62.2073 37.563 66.0168 39.1597 69.2101 42.3529C72.4034 45.5462 74 49.3557 74 53.7815C74 58.2073 72.4034 62.0168 69.2101 65.2101C66.0168 68.4034 62.2073 70 57.7815 70ZM64 62.2689L66.2689 60L59.2101 53.6134V43.1933H55.6807V54.603L64 62.2689Z" fill="#6C63FF" />
</svg>

const educationSvg = <svg width="59" height="56" viewBox="0 0 59 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M29.433 56L9.98977 43.6333V24.9667L0 18.6667L29.433 0L59 18.6667V43.3222H54.9773V21.3889L48.8761 24.9667V43.6333L29.433 56ZM29.433 32.0444L50.5523 18.6667L29.433 5.52222L8.44773 18.6667L29.433 32.0444ZM29.433 50.7111L44.8534 40.8333V27.7667L29.433 37.3333L14.0125 27.6111V40.8333L29.433 50.7111Z" fill="#6C63FF" />
</svg>

const badgeSvg = <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.20801 59.1666C4.04134 59.1666 3.02051 58.7291 2.14551 57.8541C1.27051 56.9791 0.833008 55.9583 0.833008 54.7916V19.7916C0.833008 18.6249 1.27051 17.6041 2.14551 16.7291C3.02051 15.8541 4.04134 15.4166 5.20801 15.4166H22.4893V5.20825C22.4893 4.04159 22.9268 3.02075 23.8018 2.14575C24.6768 1.27075 25.6976 0.833252 26.8643 0.833252H33.208C34.3747 0.833252 35.3955 1.27075 36.2705 2.14575C37.1455 3.02075 37.583 4.04159 37.583 5.20825V15.4166H54.7913C55.958 15.4166 56.9788 15.8541 57.8538 16.7291C58.7288 17.6041 59.1663 18.6249 59.1663 19.7916V54.7916C59.1663 55.9583 58.7288 56.9791 57.8538 57.8541C56.9788 58.7291 55.958 59.1666 54.7913 59.1666H5.20801ZM5.20801 54.7916H54.7913V19.7916H37.583C37.583 21.1527 37.1334 22.2221 36.234 22.9999C35.3347 23.7777 34.2045 24.1666 32.8434 24.1666H27.1559C25.8434 24.1666 24.7375 23.7777 23.8382 22.9999C22.9389 22.2221 22.4893 21.1527 22.4893 19.7916H5.20801V54.7916ZM11.9163 46.9895H29.3434V45.9687C29.3434 45.0937 29.1247 44.3159 28.6872 43.6353C28.2497 42.9548 27.6906 42.493 27.0101 42.2499C25.4545 41.7152 24.2393 41.3628 23.3643 41.1926C22.4893 41.0225 21.6386 40.9374 20.8122 40.9374C19.8886 40.9374 18.9042 41.0468 17.859 41.2655C16.8139 41.4843 15.6351 41.8124 14.3226 42.2499C13.5934 42.493 13.0101 42.9548 12.5726 43.6353C12.1351 44.3159 11.9163 45.0937 11.9163 45.9687V46.9895ZM36.4163 42.1041H48.8122V38.4583H36.4163V42.1041ZM20.8122 38.4583C21.9059 38.4583 22.8356 38.0754 23.6012 37.3098C24.3669 36.5442 24.7497 35.6145 24.7497 34.5208C24.7497 33.427 24.3669 32.4973 23.6012 31.7317C22.8356 30.9661 21.9059 30.5833 20.8122 30.5833C19.7184 30.5833 18.7887 30.9661 18.0231 31.7317C17.2575 32.4973 16.8747 33.427 16.8747 34.5208C16.8747 35.6145 17.2575 36.5442 18.0231 37.3098C18.7887 38.0754 19.7184 38.4583 20.8122 38.4583ZM36.4163 33.8645H48.8122V30.2187H36.4163V33.8645ZM26.8643 19.7916H33.208V5.20825H26.8643V19.7916Z" fill="#6C63FF" />
</svg>

const MoonCircle = ({ svg, id }: { svg: any, id: number }) => {

  const click = (id: number) => {
    window.scrollTo(0,(id-1) * STEP)
  }

  return (<div className='moonCircle' onClick={() => click(id)}>
    {svg}
  </div>)
}

const STEP = window.innerHeight / 1;


function AboutIT() {
  const lastQuarter = useRef<number>();
  const [activeQuarter, setActiveQuarter] = useState<number>(0);

  const checkScroll = useCallback(() => {
    let quarter = Math.round(window.scrollY / STEP);
    if (lastQuarter.current === quarter) return;
    lastQuarter.current = quarter;

    quarter += 1;

    if (quarter > 3) quarter = 3;

    setActiveQuarter(quarter);
  }, [])

  useEffect(() => {
    checkScroll();

    document.addEventListener('scroll', checkScroll);

    return () => { document.removeEventListener('scroll', checkScroll) }
  }, [checkScroll])



  return (<div id="aboutITPage">

    <div id="moonContainer" style={{ 'height': `${STEP * 3}px` }}>
      <div id="moon" className={`state${activeQuarter}`}>
        {moon}
        <MoonCircle svg={badgeSvg} id={3} />
        <MoonCircle svg={educationSvg} id={2} />
        <MoonCircle svg={workSvg} id={1} />
        <div id="moonTextContainer">
          <div id="state1Text">
            <h3>Work history</h3>
            <div>
              <div>
                <p><b>Role:</b> Web developer</p>
                <p><b>Company:</b> 3SS</p>
                <p><b>from:</b> August 2022</p>
                <p><b>to: present</b></p>
              </div>

              <div>
                <p><b>Role:</b> Web developer (internship)</p>
                <p><b>Company:</b> Crafting Software</p>
                <p><b>from:</b> February 2022</p>
                <p><b>to:</b> May 2022</p>
              </div>

              <div>
                <p><b>Role:</b> Mobile developer (internship)</p>
                <p><b>Company:</b> [e-spres-oh]</p>
                <p><b>from:</b> November 2019</p>
                <p><b>to:</b> January 2020</p>
              </div>
            </div>
          </div>

          <div id="state2Text">
            <h3>Education</h3>
            <div>
              <div>
                <h4>Master's degree</h4>
                <p><b>Specialization:</b> Big data - data science, analytics and technologies</p>
                <p><b>University:</b> West University of Timișoara</p>
                <p><b>from:</b> September 2022</p>
                <p><b>to: present</b></p>
              </div>

              <div>
                <h4>Bachelor's degree</h4>
                <p><b>Specialization:</b> Computer Science</p>
                <p><b>University:</b> West University of Timișoara</p>
                <p><b>from:</b> September 2019</p>
                <p><b>to:</b> July 2022 </p>
              </div>
            </div>
          </div>

          <div id="state3Text">
            <div>
              <div>
                <p><b>from:</b> Romania</p>
                <p><b>city:</b> Timișoara</p>
                <p><b>availability:</b> from anywhere</p>
                <p><b>way of working:</b> remote / hybrid / on-site</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id='miniCv'>

      <div id='picContainer'>
        <img src={CvPic} alt='Mihai' />
        <SocialMedia />
      </div>

      <div id='textContainer'>
        <p>I'm a <b>programming enthusiast</b> who's always hungry for a new challenge to sink my teeth into. From the moment I laid my hands on my first programming language in high school, I knew I had found my passion. Since then, I've built a wide variety of programs ranging from Sudoku solvers to engaging games, utilizing both C++ and Python to their fullest potential.</p>
        <p> My dedication to computer science has led me to participate in the <b>Zero Robotics Competition</b> where my team and I qualified for the semi-finals. As if that wasn't enough, I've also had the pleasure of <b>teaching Python</b> to a group of 9th-grade students, igniting their curiosity for programming and sharing my love for the craft.</p>
        <p>But that's not all, I'm also a <b>web development enthusiast</b> with a keen eye for UI and UX design. I've had the opportunity to work on many university web projects as a <b>full-stack developer</b> and even led a team for a larger project. To me, the ultimate achievement in web development is creating an <b>application</b> that not only <b>looks good</b> but is <b>intuitive</b> and <b>functional</b>.</p>
        <p>I'm a highly motivated and driven <b>computer science graduate</b> looking to further develop my skills and take on new challenges. With a passion for programming and web development, I'm excited to see what the future holds and what I can accomplish 🚀🚀.</p>
      </div>

    </div>

  </div>)
}

export default AboutIT;
