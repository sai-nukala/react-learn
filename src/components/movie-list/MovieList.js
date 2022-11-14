import React from 'react';
import { createUseStyles } from 'react-jss';
import MovieCard from '../movie-card/MovieCard';

const cards = [
  {
    id: 1,
    title: 'Pulp Fiction',
    genre: 'Action & Adventure',
    year: 2004,
  },
  {
    id: 2,
    title: 'Avengers',
    genre: 'Action & Adventure',
    year: 2017,
  },
  {
    id: 3,
    title: 'Bill: Vol 2',
    genre: 'Oscar winning Movie',
    year: 1994,
  },
  {
    id: 4,
    title: 'EndGame',
    genre: 'Oscar winning Movie',
    year: 2020,
  },
  {
    id: 5,
    title: 'Ishq',
    genre: 'Romance',
    year: 2010,
  },
  {
    id: 6,
    title: 'VR',
    genre: 'Thriller',
    year: 2022,
  },
];

const listStyles = createUseStyles({
  '.results': {
    margin: '27px 0',
    fontSize: '20px',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '.span': {
    fontWeight: '600',
    marginLeft: '45px',
  },
  '.list': {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '15px',
    rowGap: '50px',
    justifyContent: 'space-evenly',
    padding: 0,
    listStyle: 'none',
  },
  '.li': {
    width: '335px',
  },
  listcontainer: {
    width: '1200px',
    padding: '0 0 50px 0',
  },
});
const MovieList = () => {
  const styles = listStyles();
  return (
    <>
      <div className={styles['.results']}>
        <span className={styles['.span']}>{cards.length}</span> movies found
      </div>
      <div className={styles.listcontainer}>
        <ul className={styles['.list']}>
          {cards.map((card) => (
            <li className={styles['.li']} key={card.id}>
              <MovieCard value={card} />
            </li>
          ))}
        </ul>
      </div>
      {/* <UseAddEditMovieModal /> */}
    </>
  );
};

export default MovieList;
