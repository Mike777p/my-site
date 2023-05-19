import styled from 'styled-components'

const Wrapper = styled.main`
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cream;
  padding: 10px;
  align-items: center;
  background-color: #0F2557;
  color: white;

  .info {
    height: 250px;
    display: block;
    width: 450px;
    text-align: center;
  }
 
  .main-img {
    height: ;
    width: 200px;
    margin-top: 30px;
  }

  .btn:hover {
    color:green;
    transform: translateY(-5px);
  }

  .btn {
    color: white;
    margin: 0 30px;
  }

  .btn-hero1 {
    margin: 20px;
  }
  .btn-hero2 {
    margin: 20px;
  }
  .btn-hero3 {
    margin: 20px;
  }
`
export default Wrapper