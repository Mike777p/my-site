
import styled from 'styled-components';

const Wrapper = styled.main`
.certifications {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .certifications h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .certification img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .certification h3 {
    text-align: center;
    margin-top: 10px;
  }
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal img {
    max-width: 80%;
    max-height: 80%;
    object-fit: cover;
    border-radius: 5px;
  }
  `

  export default Wrapper