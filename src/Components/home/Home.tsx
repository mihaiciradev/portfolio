import React from 'react';
import About from './About/About';
import Building from './Building/Building';
import Contact from './Contact/Contact';
import Landing from './Landing/Landing';
import MiniMenu from './MiniMenu/MiniMenu';
import WorkingAs from './WorkingAs/WorkingAs';
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
