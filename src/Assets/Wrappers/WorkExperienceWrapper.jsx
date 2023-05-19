import styled from 'styled-components';


const Wrapper = styled.main`
.work-experience-container {
  background-color: #0F2557;
  width: 100%;
  display: block;
  color: white;
  // max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border-bottom: 1px solid #ffffff;
  background-image: url(https://i.makeagif.com/media/2-27-2015/jv6xB8.gif)
}

h3 {
  color: black;
}

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  .timeline:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    width: 6px;
    background-color: #1da1f2;
    border-radius: 30px;
  }

  .timeline-item {
    margin-bottom: 30px;
    position: relative;
  }

  .timeline-item:before {
    content: '';
    position: absolute;
    top: 18px;
    right: -18px;
    height: 0;
    width: 0;
    border: 10px solid transparent;
    border-left-color: #1da1f2;
    border-right: 0;
    margin-top: -10px;
  }

  .timeline-item:last-of-type {
    margin-bottom: 0;
  }

  .timeline-item-content {
    position: relative;
    margin-right: 30px;
    margin-left: 30px;
    background-color: #fff;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  }

  .timeline-item-content h3 {
    margin-top: 0;
  }

  .timeline-item-content p {
    margin: 1em 0;
  }

  .timeline-item-content .time {
    font-size: 0.9rem;
    color: #999;
  }

  .timeline-item-content .company-logo {
    max-width: 50px;
    margin-right: 10px;
    vertical-align: middle;
    display: inline-block;
  }

  .timeline-item-content .company-logo img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  }

  .timeline-item-content .job-details {
    display: none;
    margin-top: 10px;
  }

  .timeline-item-content.active .job-details {
    display: block;
  }

  .timeline-item-content.active {
    z-index: 10;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
  }

  .timeline-item-content.active:before {
    content: '';
    position: absolute;
    top: 30px;
    left: -9px;
    height: 0;
    width: 0;
    border: 10px solid transparent;
    border-right-color: #f8f8f8;
    border-left: 0;
    margin-top: -10px;
  }

  @media (max-width: 768px) {
    .timeline:before {
      left: 40px;
    }

    .timeline-item:before {
      top: 30px;
      right: auto;
      left: -17px;
      border-color: transparent;
      border-left-color: #1da1f2;
    }

    .timeline-item-content {
        position: relative;
        padding: 20px;
        width: 70%;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease-in-out;
      
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
      
        .logo {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          overflow: hidden;
      
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      
        h3 {
          font-size: 1.5rem;
          margin-top: 15px;
          margin-bottom: 10px;
        }
      
        .years {
          font-size: 1.2rem;
          margin-bottom: 15px;
        }
      }
`      
export default Wrapper