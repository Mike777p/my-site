// Skills.js
import React from 'react';
import Wrapper from "../Assets/Wrappers/SkillsWrapper"

const skillsData = [
  { name: 'JavaScript', score: 4 },
  { name: 'Python', score: 3 },
  { name: 'Bash Scripting', score: 2 },
  { name: 'React', score: 3 },
  { name: 'Node.js', score: 3 },
  { name: 'Express.js', score: 3 },
  { name: 'Jest', score: 3 },
  { name: 'Agile Project Management', score: 3 },
  { name: 'SQL & No-SQL', score: 3 },
  { name: 'MongoDB', score: 3 },
  { name: 'Postgres', score: 2 },
  { name: 'Linux/Unix', score: 3 },
  { name: 'Git', score: 3 },
  { name: 'Communication', score: 4 },
  { name: 'Problem Solving', score: 4 },
  { name: 'Teamwork', score: 3 },
  { name: 'Highly Motivated', score: 4 },
  { name: 'TDD', score: 3 },
  { name: 'Bootstrap', score: 2 },
];

const Skills = () => {
  return (
    <Wrapper>
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div key={skill.name} className="skill">
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-bar-filled"
                style={{ width: `${(skill.score / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Wrapper>
  )
};

export default Skills;
