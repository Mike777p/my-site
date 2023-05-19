import styled from 'styled-components';


const Wrapper = styled.main`


  h2 {
    text-align: center;
    padding-top: 20px;
    color: white;
  }

.project-tiles-container {
  background-color: #0F2547;
  width: 100%;
  height: 100%;
  display: block;
  justify-content: center;
  padding: 40px;
  border-bottom: 1px solid #ffffff;
  border-top: 1px solid #ffffff;
  padding-bottom: 65px;
  // transform: skewY(2deg);
  // transform-origin: top left;
}
  background-image: url(https://i.makeagif.com/media/2-27-2015/jv6xB8.gif)
}
.project-tiles-surround {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 200px;
    max-width: 1300px;
    margin: auto;
    padding: 20px;
    color: white;
    // background-color: #0F2557;
    // transform: skewY(2deg);
    // transform-origin: top left;
  }

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
    background-color: white;
    transition: transform 0.5s, opacity 0.5s;
    z-index: 1;
  }
  
  .project-tile:hover .project-tile-inner {
    transform: rotateY(180deg);
    opacity: 0;
  }
  
  .project-tile-description {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 10px;
    background: white;
    color: black;
    backface-visibility: hidden;
    // transform: rotateY(-180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    // z-index: 0;
  }
`      
export default Wrapper