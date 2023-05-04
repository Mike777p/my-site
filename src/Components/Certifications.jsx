import certificationData from "../Assets/Wrappers/CertificationData";
import React, { useState } from 'react';
import Wrapper from "../Assets/Wrappers/CertificationWrapper";
import Slider from 'react-slick';

const Certifications = () => {

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
    </Wrapper>
  );
};

export default Certifications;
