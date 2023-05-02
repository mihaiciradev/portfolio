import React, { useEffect } from 'react';
import './Skills.scss';
import TopSkills from './TopSkills/TopSkills';
import IndividualSkills from './IndividualSkills/IndividualSkills';

function Skills() {
  
  useEffect(() => {
    document.title = "Mihai's portfolio • Skills";
  }, [])
  
  return (
    <div className='skillsPage'>
      <TopSkills/>
      <IndividualSkills/>
    </div>
  );
}

export default Skills;
