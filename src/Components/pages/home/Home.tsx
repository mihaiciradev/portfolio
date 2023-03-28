import React from 'react';
import About from '../../home/About/About';
import Building from '../../home/Building/Building';
import Contact from '../../home/Contact/Contact';
import Landing from '../../home/Landing/Landing';
import MiniMenu from '../../home/MiniMenu/MiniMenu';
import WorkingAs from '../../home/WorkingAs/WorkingAs';
import './Home.scss';

function Home() {
  return (
    <div className='homePage'>
      <Landing />
      <About />
      <Building />
      <WorkingAs/>
      <MiniMenu/>
      <Contact/>
    </div>
  );
}

export default Home;
