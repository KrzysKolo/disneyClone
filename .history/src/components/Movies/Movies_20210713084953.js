import React from 'react';
//STYLED
import { MoviesWrapper, MoviesContainer, Wrap} from './Movies.css';
import { Container } from './../components.css';
//ROUTING
import { Link } from 'react-router-dom';
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
        {movies && movies.map((movie) => (
          <Wrap key={movie.id}>
            <img src={movie.cardImg} alt={movie.title}/>
          </Wrap>
        )

          )}

        </MoviesContainer>
      </Container>
    </MoviesWrapper>
  )
}

export default Movies
