import React from 'react';
import Wrapper from "../Assets/Wrappers/ProjectTilesWrapper";
import BudgetBuddy from "../Assets/Images/BudgetBuddy.jpeg"
import newSite from "../Assets/Images/newSite.jpeg"
import noteProcessor from "../Assets/Images/noteProcessor.jpeg"

const projects = [
    {
      image: BudgetBuddy,
      description: 'Budget Buddies is a mobile device app. I was part of a 4 person team of junior Engineers which was the final project of our fullstack Javascript bootcamp at Northcoders. We had 1 week to go from idea to functional project. Our finance app tracks your finances, utilising MongoDB and Express.js for the backend and React-Native for the frontend - Please click to see our video presentation. \n ',
      link: 'https://northcoders.com/projects/apr-2023/budget-buddies',
    },
    {
      image: newSite,
      description: 'The News Site - Here I was given one week to build the frontend and one week to build the backend with only work tickets organised on a kanban board for guidance. This project was the first in which I built something from start to finish completely by myself and my confidence as an engineer grew from here on out. I utilised React, Express and Postgres amoung other utilities to complete this project - Please click to see the finshed website which is hosted! ',
      link: 'https://calm-gelato-df9f69.netlify.app/',
    },{
        image: noteProcessor,
        description: 'This is a Python project. Python was the first programming language I learned and although I am not familar with many framworks, I wanted to build a project using Python. I enjoy the practicality of coding and using it to solve problems. I am forever writing notes and have done so for many years. Hence - The note processing app! I used Tkinter which I learned from scratch building a GUI to assist organising these notes with processing and searching features. It\'s a work in progreass but whenever I have spare time, I work on this. Click and check out the github!',
        link: 'https://github.com/Mike777p/NoteProcessing-app',
      }
  ];
  
  const ProjectTiles = () => {
    const handleClick = (link) => {
      window.open(link, '_blank');
    };
  
    return (
      <Wrapper>
        
        <div className='project-tiles-container' id="projects">
        {/* <h2>Projects</h2> */}
        <div className="project-tiles-surround">
          
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

  // 'This is a Python project. Python was the first programming language I learnt and although I am not familar with many framworks, I wanted to build a project using Python. I am forever writing notes and have done so for many years. This has left me with thousannds upon thousands of notes that would most likely contain the answers to all my problems! Hence - The note processing app! I used Tkinter which I leanred from scratch and built a GUI to assist organising my notesd with processing and searching features. It\'s a a work in progreass but whenever I fancy coding for fun, I work on this. Click and check out the github!'