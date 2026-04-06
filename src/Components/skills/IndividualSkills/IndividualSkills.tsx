import React, { useCallback, useEffect, useRef } from 'react';
import './IndividualSkills.scss';

const FrontendSkills = ['React', 'TypeScript', 'Next.js', 'JavaScript', 'HTML / CSS / SASS', 'Tailwind CSS', 'shadcn/ui', 'Material UI', 'React Query', 'Redux', 'React Router', 'WebSocket']

const BackendSkills = ['NodeJS', 'Python', 'FastAPI', 'C/C++', 'Java', 'C#', 'Elixir', 'Phoenix', 'PostgreSQL', 'NoSQL', 'Firebase', 'GraphQL', 'REST API', 'Docker']

const AISkills = ['ChatGPT', 'GitHub Copilot', 'Claude', 'Claude Code']

const OtherSkills = ['Figma', 'Excalidraw', 'Git', 'Jira', 'Linux', 'Postman', 'Swagger', 'Solidity', 'Unity', 'SwiftUI', 'Swift', 'Ruby', 'PHP', 'EmailJS']

const ManagementAndTeam = ['Slack', 'Microsoft Teams', 'Confluence', 'Jira', 'Scaled Agile Framework (SAFe 5)', 'System architecture', 'API design', 'Data-flow diagrams']

const SoftSkills = ['Proactive', 'Passionate', 'Empathetic', 'Team player', 'Communication', 'Time management', 'Adaptability', 'Problem solving', 'Creativity', 'Attention to detail']


function IndividualSkills() { 
  return <div className="individualSkillsContainer">

    <div className="individualSkill">
      <h2>Front-end development skills</h2>
      <div className="listOfSkills">
        {FrontendSkills.map(e => <div className="skill">{e}</div>)}
      </div>
    </div>
    

    <div className="individualSkill">
      <h2>Back-end development skills</h2>
      <div className="listOfSkills">
        {BackendSkills.map(e => <div className="skill">{e}</div>)}
      </div>
    </div>

    <div className="individualSkill">
      <h2>AI tools</h2>
      <div className="listOfSkills">
        {AISkills.map(e => <div className="skill">{e}</div>)}
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
