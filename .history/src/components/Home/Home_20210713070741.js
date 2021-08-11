import React, { useEffect } from 'react';
//STYLED
import { HomeWrapper } from './Home.css';
import { Container } from './../components.css';
//COMPONENTS
import ImgSlider from './../ImgSlider';
import Viewers from './../Viewers';
import Movies from './../Movies';
//FIREBASE
import db from '../../firebase/firebase';
//REDUX
import { useDispatch } from 'react-redux';
import { setMovies } from '../../features/movie/movieSlice';




const Home = () => {

  const dispatch = useDispatch();


  return (
    <HomeWrapper>
      <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
      </Container>
    </HomeWrapper>

  )
}

export default Home;
