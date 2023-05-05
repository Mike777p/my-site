import styled from 'styled-components';


const Wrapper = styled.main`
.project-tiles-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
  }
  
  /* Add the rest of the CSS from the previous example here */

  .project-tile {
    position: relative;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
    cursor: pointer;
  }
  
  .project-tile-inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-size: cover;
    background-position: center;
    background-color: rgba(245, 245, 220, 1);
    transition: transform 0.5s;
  }
  
  .project-tile:hover .project-tile-inner {
    transform: rotateY(180deg);
  }
  
  .project-tile-description {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 10px;
    background: rgba(245, 245, 220, 0.95);
    color: black;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
`      
export default Wrapper