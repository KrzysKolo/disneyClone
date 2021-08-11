import styled from 'styled-components';
// SLICK

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const ImageSliderWrapper = styled.section`

  `;

  export const Carousel=styled(Slider)`
    padding-top: 20px;

    ul li button {
      &::before {
        font-size: 10px;
        color: rgb(150, 150, 171);
      }
    }

    li.slic-active button::before {
      color: white;
    }
    .slick-list {
      overflow: visible;
    }
    button {
      z-index: 1;
    }
  `;

  export const Wrap=styled.div`
    cursor: pointer;
    img{
      border: 4px solid transparent;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0) 0px 16px 10px -10px;
      transition-duration: .3s;

      &:hover {
        border: 4px solid rgba(52, 59, 86, 0.8);
      }
    }
  `;