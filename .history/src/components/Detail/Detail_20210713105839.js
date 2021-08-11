import React, { useEffect } from 'react';
//STYLED
import { AddButton, GroupWatchButton, DetailsWrapper, Background, Controls, PlayButton, TrailerButton, ImageTitle, SubTitle, Description} from './Detail.css';
import { Container } from './../components.css';
//ROUTING
import { useParams } from 'react-router';
//FIREBASE
import db from '../../firebase/firebase';
//FILES
import play from './../../assets/images/play-icon-white.png';
import playBlack from './../../assets/images/play-icon-black.png';
import watchGroup from './../../assets/images/group-icon.png';

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {

  }, [])
  return (
    <DetailsWrapper>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1920&aspectRatio=1.78&format=jpeg" alt="bao" />
      </Background>
      <Container>
        <ImageTitle>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1344&aspectRatio=1.78" alt="bao-title" />
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src={playBlack} alt="play" />
            <span>PLAY</span>

          </PlayButton>
          <TrailerButton>
            <img src={play} alt="play" />
            <span>TRAILER</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src={watchGroup} alt="watch-group" />
          </GroupWatchButton>
        </Controls>
        <SubTitle>
        2018 • 7m • Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
        A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
        </Description>
      </Container>

    </DetailsWrapper>
  )
}

export default Detail;
