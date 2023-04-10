import React, { useCallback, useEffect, useRef } from 'react';
import './IndividualSkills.scss';

const FrontendSkills = ['React', 'Typescript', 'React Styled components', 'React redux', 'React Router', 'CSS', 'SASS', 'jQuery', 'HTML', 'Javascript ES5', 'Typescript']

const BackendSkills = ['NodeJS', 'Python', 'C', 'C++', 'Java', 'C#', 'Elixir', 'Phoenix', 'MongoDB', 'Cassandra', 'SQL', 'PostgreSQL', 'Google Firebase', 'GraphQL']

const OtherSkills = ['Figma', 'Postman', 'Swagger', 'Prologue', 'Clisp', 'Websockets', 'PHP', 'Git', 'Solidity', 'Unity', 'SwiftUI']

const ManagementAndTeam = ['Skype', 'Slack', 'Microsoft Teams', 'Confluence', 'Jira', 'Slack', 'Scaled Agile Framework (SAFe 5)']

const SoftSkills = ['Frank', 'Passionate', 'Empathetic', 'Teamplayer', 'Communication skills', 'Time management', 'Adaptability', 'Problem solving', 'Creativity', 'Attention to details']


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
      <h2>Soft skills</h2>
      <div className="listOfSkills">
        {SoftSkills.map(e => <div className="skill">{e}</div>)}
      </div>
    </div>

    <div className="individualSkill">
      <h2>Other skills</h2>
      <div className="listOfSkills">
        {OtherSkills.map(e => <div className="skill">{e}</div>)}
      </div>
    </div>

    <div className="individualSkill">
      <h2>Management & Team</h2>
      <div className="listOfSkills">
        {ManagementAndTeam.map(e => <div className="skill">{e}</div>)}
      </div>
    </div>



  </div>  
  
}
export default IndividualSkills;
