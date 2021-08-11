import React from 'react';
//STYLED
import { MoviesWrapper, MoviesContainer, Wrap} from './Movies.css';
import { Container } from './../components.css';
//FILES
import photo1 from './../../assets/images/kopciuszek.jpg';
import photo2 from './../../assets/images/merida.jpg';
import photo3 from './../../assets/images/auta.jpg';
import photo4 from './../../assets/images/calineczka.jpg';
import photo5 from './../../assets/images/krolowa.jpg';
import photo6 from './../../assets/images/opowiesci.jpg';
//REDUX
import { useSelector } from 'react-redux';
import { getMovies } from '../../features/movie/movieSlice';


const Movies = () => {

const movies = useSelector(getMovies);
console.log(movies)

  return (
    <MoviesWrapper>
      <Container>
      <h4>Recommended for You:</h4>
        <MoviesContainer>
        {movies && movies.map((movie) => {
          <Wrap key={movie.id}>
            <img src={movie.cardImg} alt="Kopciuszek" />
          </Wrap>
        })}

          <Wrap>
            <img src={photo2} alt="Merida" />
          </Wrap>
          <Wrap>
            <img src={photo3} alt="Auta" />
          </Wrap>
          <Wrap>
            <img src={photo4} alt="Calineczka" />
          </Wrap>
          <Wrap>
            <img src={photo5} alt="Królowa Śniegu" />
          </Wrap>
          <Wrap>
            <img src={photo6} alt="Opowieści" />
          </Wrap>
        </MoviesContainer>
      </Container>
    </MoviesWrapper>
  )
}

export default Movies
