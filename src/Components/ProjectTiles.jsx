import React from 'react';
import Wrapper from "../Assets/Wrappers/ProjectTilesWrapper";
import BudgetBuddy from "../Assets/Images/BudgetBuddy.jpeg"
import newSite from "../Assets/Images/newSite.jpeg"
import noteProcessor from "../Assets/Images/noteProcessor.jpeg"

const projects = [
    {
      image: BudgetBuddy,
      description: 'Project 1 description',
      link: 'https://project-link1.com',
    },
    {
      image: newSite,
      description: 'Project 2 description',
      link: 'https://project-link2.com',
    },{
        image: noteProcessor,
        description: 'Project 2 description',
        link: 'https://project-link2.com',
      }
  ];
  
  const ProjectTiles = () => {
    const handleClick = (link) => {
      window.open(link, '_blank');
    };
  
    return (
      <Wrapper>
        <div className='project-tiles-container'>
        <div className="project-tiles-surround">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div
            key={index}
            className="project-tile"
              onMouseEnter={() => {}}
              onClick={() => handleClick(project.link)}
            >
              <div
                className="project-tile-inner"
                style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              <div className="project-tile-description">
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
          </div>
      </Wrapper>
    );
  };
  
  export default ProjectTiles;