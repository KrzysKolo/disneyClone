import React, { useEffect, useState } from 'react';
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
  const [movie, setMovie] = useState();

  console.log(id);


  useEffect(() => {
    db.collection("movies").doc(id)
    .get()
    .then((doc) => {
      if(doc.exists){
        setMovie(doc.data());
      } else {
        //coś
      }

    })

  }, [id]);
  console.log("Movie is ", movie);
  return (
    <DetailsWrapper>
    {movie &&
    <>
      <Background>
        <img src={movie.backgroundImg} alt={movie.title}/>
      </Background>
      <Container>
        <ImageTitle>
          <img src={movie.title} alt={movie.title} />
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
         {movie.subTitle}
        </SubTitle>
        <Description>
        {movie.description}
        </Description>
      </Container>
      </>
    }
    </DetailsWrapper>
  )
}

export default Detail;
