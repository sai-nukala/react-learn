import React, { useContext, useState } from 'react';
import MovieCard from '../movie-card/MovieCard';
import Movies from '../../shared/Movies-data.json';
import { listStyles } from './MovieListStyles';
import { MovieContext } from '../../shared/MovieProvider';
import { MovieEditContext } from '../../shared/MovieEditProvider';

const MovieList = () => {
  const styles = listStyles();
  let _movieList = Movies;
  let edit = useContext(MovieEditContext);
  const [, updateState] = React.useState();
  const renderCOmp = React.useCallback(() => updateState({}), []);
  const deleteMovie = (movie) => {
    const objWithIdIndex = _movieList.findIndex((obj) => obj.id === edit?.id);
    if (objWithIdIndex > -1) {
      _movieList.splice(objWithIdIndex, 1);
    }
    renderCOmp();
  };

  const updateMovie = () => {
    const index = _movieList.findIndex((obj) => obj.id === edit?.id);

    if (index > -1) {
      Movies.splice(index, 1, edit);
      console.log(Movies);
      _movieList = [...Movies];
    }
    renderCOmp();
  };

  return (
    <>
      <div className={styles['.results']}>
        <span className={styles['.span']}>{Movies.length}</span> movies found
      </div>
      <div className={styles.listcontainer}>
        <ul className={styles['.list']}>
          {_movieList.map((card) => (
            <li className={styles['.li']} key={card.id}>
              <MovieCard
                movie={card}
                deleteMovie={deleteMovie}
                updateMovie={updateMovie}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieList;
