import styled from 'styled-components';

const Wrapper = styled.main`
.skills {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .skills h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 20px;
    justify-content: center;
  }  
  
  .skill h3 {
    margin-bottom: 10px;
  }
  
  .skill-bar {
    background-color: #eee;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .skill-bar-filled {
    background-color: #007bff;
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    .skills {
      padding: 20px 10px;
    }
  }
  `

  export default Wrapper