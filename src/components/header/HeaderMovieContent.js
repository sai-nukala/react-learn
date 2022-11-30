import React, { useContext } from 'react';
import { MovieContext, MovieDispatchContext } from '../../shared/MovieProvider';
import { FaSearch } from 'react-icons/fa';
import {
  Search,
  TextStyle,
  FilmContent,
  FilmDescription,
  Filmyear,
  FilmDetails,
  FilmDuration,
  FilmImage,
  FilmRate,
  FilmTitle,
} from './HeaderMovieContentStyles';

const HeaderMovieContent = () => {
  const movieDetails = useContext(MovieContext);
  const setMovieDetails = useContext(MovieDispatchContext);
  return (
    <FilmDetails>
      <FilmImage>
        <img src={movieDetails?.src} alt="movie_img"></img>
      </FilmImage>
      <FilmContent>
        <FilmTitle>{movieDetails?.title}</FilmTitle>
        <FilmRate>{movieDetails?.rating}</FilmRate>
        <div>
          <Filmyear>
            {movieDetails?.year}
            <TextStyle>year</TextStyle>
          </Filmyear>
          <FilmDuration>
            {movieDetails?.runTime}
            <TextStyle>min</TextStyle>
          </FilmDuration>
          <FilmDescription>{movieDetails?.description}</FilmDescription>
        </div>
      </FilmContent>
      <Search>
        <FaSearch onClick={() => setMovieDetails(null)} />
      </Search>
    </FilmDetails>
  );
};

export default HeaderMovieContent;
