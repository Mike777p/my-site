import certificationData from "../Assets/Wrappers/CertificationData";
import React, { useState } from 'react';
import Wrapper from "../Assets/Wrappers/CertificationWrapper";
import Slider from 'react-slick';


const Certifications = () => {

const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  return (
    <Wrapper>
        {/* <video className='video-background' autoPlay loop muted>
          <source src={Matrix_Raining_Code} type='video/mp4' />
          Your browser does not support the video tag.
        </video> */}
    <div className="certifications-container" id="certifications">
      <div className="certifications">
        <h2>IT Certifications</h2>
        <Slider {...settings}>
          {certificationData.map((cert, index) => (
            <div key={index} className="certification" onClick={() => handleImageClick(cert.pdf)}>
              <img src={cert.pdf} alt={cert.title} />
              <h3>{cert.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <img src={modalImage} alt="modal certification" />
        </div>
      )}
    </div>
  </Wrapper>
  );
};

export default Certifications;
