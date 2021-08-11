import React from 'react';
//STYLED
import { ImageSliderWrapper, Carousel, Wrap } from './ImgSlider.css';
import { Container } from './../components.css';
//FILES
import photo1 from './../../assets/images/slider-badag.jpg';
import photo2 from './../../assets/images/slider-badging.jpg';
import photo3 from './../../assets/images/slider-scale.jpg';
import photo4 from './../../assets/images/slider-scales.jpg';


const ImgSlider = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <ImageSliderWrapper>
      <Container>
        <Carousel {...settings}>
          <Wrap>
            <img src={photo1} alt="photo1" />
          </Wrap>
          <Wrap>
            <img src={photo2} alt="photo2" />
          </Wrap>
          <Wrap>
            <img src={photo3} alt="photo3" />
          </Wrap>
          <Wrap>
            <img src={photo4} alt="photo4" />
          </Wrap>
        </Carousel>
      </Container>
    </ImageSliderWrapper>
  )
}

export default ImgSlider;
