import React from 'react';
//STYLED
import { ViewersWrapper, ViewersContainer, Wrap } from './Viewers.css';
import { Container } from './../components.css';
//FILES
import photo1 from './../../assets/images/viewers-disney.png';
import photo2 from './../../assets/images/viewers-marvel.png';
import photo3 from './../../assets/images/viewers-national.png';
import photo4 from './../../assets/images/viewers-pixar.png';
import photo5 from './../../assets/images/viewers-starwars.png';
import video1 from './../../assets/videos/1564674844-disney.mp4';
import video2 from './../../assets/videos/1564676115-marvel.mp4';
import video3 from './../../assets/videos/1564676296-national-geographic.mp4';
import video4 from './../../assets/videos/1564676714-pixar.mp4';
import video5 from './../../assets/videos/1608229455-star-wars.mp4';

const Viewers = () => {
  return (
    <ViewersWrapper>
      <Container>
        <ViewersContainer>
          <Wrap>
            <img src={photo1} alt="disnay" />
            <video autoPlay={true} loop={true} playsInline={true} >
              <source src=
            </video>
          </Wrap>
          <Wrap>
            <img src={photo2} alt="marvel" />
          </Wrap>
          <Wrap>
            <img src={photo3} alt="national" />
          </Wrap>
          <Wrap>
            <img src={photo4} alt="pixar" />
          </Wrap>
          <Wrap>
            <img src={photo5} alt="starwars" />
          </Wrap>
        </ViewersContainer>
      </Container>
    </ViewersWrapper>
  )
}

export default Viewers;
