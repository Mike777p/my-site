import styled from 'styled-components';

const Wrapper = styled.main`

.Background-container {
  background-color: #0F2557;
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: left;
  padding-left: 100px;
  // background-image: url(https://i.makeagif.com/media/5-05-2014/tm0Zfv.gif)
  transform: skewY(-2deg);
  transform-origin: top left;
  border-bottom: 1px solid #ffffff;
}

  display: flex;
  justify-content: center;
  padding-top: 80px;



  .profile-section {
    transform: skewY(2deg);
    transform-origin: top left;
    z-index:0;
    display: flex;
    align-items: center;
    // background-color: #0F2557;
    background-size: cover;
    background-position: center;
    padding: 40px;
  }

  .profile-pic {
    width: 150px;
    height: 170px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 100px;
  }

  .profile-text {
    max-width: 600px;
    color: white;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 15px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export default Wrapper;
