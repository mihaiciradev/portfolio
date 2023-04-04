import React, { useCallback, useEffect, useRef } from 'react';
import './IndividualSkills.scss';

const FrontendSkills = ['React', 'Typescript', 'React Styled components', 'React redux', 'React Router', 'CSS', 'SASS', 'jQuery', 'HTML', 'Javascript ES5', 'Typescript']

const BackendSkills = ['NodeJS', 'Python', 'C', 'C++', 'Java', 'C#', 'Elixir', 'Phoenix', 'MongoDB', 'Cassandra', 'SQL', 'PostgreSQL', 'Google Firebase', 'GraphQL']

const OtherSkills = ['Postman', 'Swagger', 'Jira', 'Confluence', 'Prologue', 'Clisp', 'Websockets', 'PHP', 'Git', 'Solidity', 'Unity', 'SwiftUI']

function IndividualSkills() { 
  return <div className="individualSkillsContainer">

    <div className="individualSkill">
      <h2>Front-end developent skills</h2>
      <div className="listOfSkills">
        {FrontendSkills.map(e => <div className="skill">{e}</div>)}
      </div>
    </div>

    <div className="individualSkill">
      <h2>Back-end developent skills</h2>
      <div className="listOfSkills">
        {BackendSkills.map(e => <div className="skill">{e}</div>)}
      </div>
    </div>

    <div className="individualSkill">
      <h2>Other skills</h2>
      <div className="listOfSkills">
        {OtherSkills.map(e => <div className="skill">{e}</div>)}
      </div>
    </div>

  </div>  
  
}
export default IndividualSkills;
