import React, { useState } from 'react';
import main from "../Assets/Images/main.jpg"
import Wrapper from "../Assets/Wrappers/TechnicalHeaderWrapper"

const TechnicalHeader = () => {
  const [showMore, setShowMore] = useState(false);

  const textPreview = `
  A versatile and experienced professional with a diverse background
  in automotive, education, operations and software engineering. 
  I bring a unique skill set and a passion for self-development. 
  Advancing through roles at Citroen and the AA, I progressed from 
  a technical specialist to a team manager. 
  Seeking personal growth and exploration, I left...
  `;

  const textFull = `
  A versatile and experienced professional with a diverse background
   in automotive, education, operations and software engineering. 
   I bring a unique skill set and a passion for self-development. 
   Advancing through roles at Citroen and the AA, I progressed from 
   a technical specialist to a team manager. 
   Seeking personal growth and exploration, I left my job to 
   teach English abroad while completing my 
   Project Management certification. 
   Through my studies of Agile practices I became interested in 
   software Engineering. Drawn further more by the problem-solving, 
   creativity, and the practical application aspects of coding, 
   I expanded my knowledge through self-study, learning Python, and 
   ultimately attending Northcoders' full-stack boot-camp, gaining 
   knowledge in both front-end and back-end development in JavaScript.
  `;

  return (
    <Wrapper>
      <div className='Background-container'>
    <div className="profile-section">
      <img src={main} alt="Profile" className="profile-pic" />
      <div className="profile-text">
        <h2>Michael Perryment</h2>
        <p>{showMore ? textFull : textPreview}</p>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Less' : 'More'}
        </button>
      </div>
    </div>
      </div>
    </Wrapper>
  );
};

export default TechnicalHeader;
