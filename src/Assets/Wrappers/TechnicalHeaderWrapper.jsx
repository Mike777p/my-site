import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 20px; // Adjust this value to position the content below the navbar

  .profile-section {
    display: flex;
    align-items: center;
    background-image: url('your-background-image.jpg'); // Replace with the path to your background image
    background-size: cover;
    background-position: center;
    padding: 40px;
  }

  .profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 40px;
  }

  .profile-text {
    max-width: 600px;
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
