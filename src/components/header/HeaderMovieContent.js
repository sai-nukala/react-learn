import React, { useContext } from 'react';
import styled from 'styled-components';
import { MovieContext, MovieDispatchContext } from '../../shared/MovieProvider';
import { FaSearch } from 'react-icons/fa';

const FilmDetails = styled.div`
  display: flex;
  width: auto;
  margin: 0 auto;
  color: #ffffff;
  position: relative;
  justify-content: space-between;
`;
const FilmImage = styled.div`
  position: relative;
  img {
    margin: 45px 65px;
    width: 250px;
    height: 280px;
  }
`;

const FilmContent = styled.div`
  margin: 25px;
  position: relative;
`;

const FilmTitle = styled.div`
  display: inline-block;
  font-size: 30px;
  margin: 20px 30px 30px 0;
`;
const FilmRate = styled.div`
  display: inline-block;
  font-size: 18px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 50%;
  color: #a1e66f;
`;

const FilmDuration = styled.div`
  display: inline-block;
  font-size: 24px;
  color: #f65261;
`;
const FilmDescription = styled.div`
  margin: 20px 80px 0 0;
  font-size: 14px;
`;

const Filmyear = styled.div`
  display: inline;
  font-size: 24px;
  color: #f65261;
`;

const TextStyle = styled.span`
  margin: 0 30px 0 5px;
  font-size: 14px;
  color: #555555;
`;

const Search = styled.div`
  display: inline;
  margin: 40px 40px 0 0;
`;

const HeaderMovieContent = () => {
  const movieDetails = useContext(MovieContext);
  const setMovieDetails = useContext(MovieDispatchContext);

  return (
    <FilmDetails>
      <FilmImage>
        <img src={movieDetails?.value?.src} alt="movie_img"></img>
      </FilmImage>
      <FilmContent>
        <FilmTitle>{movieDetails?.value?.title}</FilmTitle>
        <FilmRate>{movieDetails?.value?.rating}</FilmRate>
        <div>
          <Filmyear>
            {movieDetails?.value?.year}
            <TextStyle>year</TextStyle>
          </Filmyear>
          <FilmDuration>
            {movieDetails?.value?.runTime}
            <TextStyle>min</TextStyle>
          </FilmDuration>
          <FilmDescription>{movieDetails?.value?.description}</FilmDescription>
        </div>
      </FilmContent>
      <Search>
        <FaSearch onClick={() => setMovieDetails(null)} />
      </Search>
    </FilmDetails>
  );
};

export default HeaderMovieContent;
