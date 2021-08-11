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

//REDUX



const Home = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data()}
      })

      dispatch(setMovies(tempMovies));
      console.log(tempMovies)
    }, [] )
  })

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
