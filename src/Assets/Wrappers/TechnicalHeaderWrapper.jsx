import styled from 'styled-components';

const Wrapper = styled.main`

.Background-container {
  background-color: #0F2557;
  width: 100%;
  display: flex;
  justify-content: center;
}

  display: flex;
  justify-content: center;
  padding-top: 80px;



  .profile-section {
    display: flex;
    align-items: center;
    background-image: url('your-background-image.jpg'); 
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
    margin-right: 40px;
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
