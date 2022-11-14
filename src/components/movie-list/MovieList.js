import React from 'react';
import { createUseStyles } from 'react-jss';
import MovieCard from '../movie-card/MovieCard';

const cards = [
  {
    id: 1,
    title: 'Bohemain Rapsody',
    genre: 'Biopic',
    year: 2004,
    description: ' Pulp Fiction is an American crime thriller film.',
    runTime: 123,
    rating: 3.5,
    src: 'https://images-na.ssl-images-amazon.com/images/I/41hnw9vKfFL._SX411_BO1,204,203,200_.jpg',
  },
  {
    id: 2,
    title: 'Avengers',
    genre: 'Action & Adventure',
    year: 2017,
    description: 'Avengers is a fictional super Hero film',
    runTime: 154,
    rating: 4.5,
    src: 'https://th.bing.com/th/id/OIP._6dP2n8MhINzZ9FFTgKTzwHaK-?w=198&h=294&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 3,
    title: 'Bill: Vol 2',
    genre: 'Oscar winning Movie',
    year: 1994,
    description: ' Bill: Vol 2 is an American crime thriller film.',
    runTime: 98,
    rating: 4.0,
    src: 'https://th.bing.com/th/id/OIP.h_9ADsw6Yy5IvBg--lmcegHaLH?w=198&h=297&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 4,
    title: 'EndGame',
    genre: 'Oscar winning Movie',
    year: 2020,
    description: ' EndGame is an American Fictional film.',
    runTime: 102,
    rating: 4.4,
    src: 'https://th.bing.com/th/id/OIP.1QKtdWS5t3PRAnvwO394awHaK5?w=125&h=184&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 5,
    title: 'Ishq',
    genre: 'Romance',
    year: 2010,
    description: ' Ishq is an Indian Romantic film.',
    runTime: 142,
    rating: 4.1,
    src: 'https://th.bing.com/th/id/OIP.yGL1XGKrOW3sqGioESfS4AHaOG?w=115&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 6,
    title: 'VR',
    genre: 'Thriller',
    year: 2022,
    description: ' VR is an Indian Fictional film.',
    runTime: 182,
    rating: 2.5,
    src: 'https://th.bing.com/th/id/OIP.AFYLCDSu68rqlfYAysqcsgHaKr?w=118&h=180&c=7&r=0&o=5&pid=1.7',
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
