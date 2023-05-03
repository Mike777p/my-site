import certificationData from "../Assets/Wrappers/CertificationData"
import React from 'react';
import Wrapper from "../Assets/Wrappers/CertificationWrapper"
import Slider from 'react-slick';

const Certifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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

  return (
    <Wrapper>
    <div className="certifications">
      <h2>Certifications</h2>
      <Slider {...settings}>
        {certificationData.map((cert, index) => (
          <div key={index} className="certification">
            <img src={cert.pdf} alt={cert.title} />
            <h3>{cert.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
    </Wrapper>
  );
};

export default Certifications;
