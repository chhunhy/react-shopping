import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// Import the images
import slide1 from '/images/slide-01.jpg';
import slide2 from '/images/slide-02.jpg';
import slide3 from '/images/slide-03.jpg';

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      image: slide1,
      title: 'Women Collection 2018',
      subtitle: 'NEW SEASON',
      button: 'Shop Now',
    },
    {
      image: slide2,
      title: 'Men New-Season',
      subtitle: 'Jackets & Coats',
      button: 'Shop Now',
    },
    {
      image: slide3,
      title: 'Men Collection 2018',
      subtitle: 'New arrivals',
      button: 'Shop Now',
    },
  ];

  return (
    <section className="section-slide">
      <div className="wrap-slick1">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="item-slick1">
            {/* Slide Image */}
            <div className="slide-container">
              <img src={slide.image} alt={slide.title} className="slide-img" />
              {/* Slide Content */}
              <div className="slide-content">
                <span className="ltext-101 cl2 respon2">{slide.title}</span>
                <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                  {slide.subtitle}
                </h2>
                <a
                  href="/shop"
                  className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                >
                  {slide.button}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;


