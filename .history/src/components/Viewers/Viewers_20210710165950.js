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

const Viewers = () => {
  return (
    <ViewersWrapper>
      <Container>
        <ViewersContainer>
          <Wrap>
            <img src={photo1} alt="disnay" />
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
