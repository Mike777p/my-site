import styled from 'styled-components';


const Wrapper = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
background-color: #333;
color: white;

.social-icons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.social-icon {
  cursor: pointer;
  transition: transform 0.3s;
}

.social-icon:hover {
  transform: scale(1.2);
}

.footer-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-link {
  cursor: pointer;
  transition: transform 0.3s;
  text-decoration: none;
  color: white;
}

.footer-link:hover {
  transform: translateY(-5px);
}
  `
  export default Wrapper