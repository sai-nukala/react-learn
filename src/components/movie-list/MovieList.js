import React, { useContext, useEffect, useState } from 'react';
import MovieCard from '../movie-card/MovieCard';
import { listStyles } from './MovieListStyles';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, deleteMovieById } from '../../services/dataplatform';
import { store } from '../../redux/store';
import CollapsibleExample from '../navbar/headernav';
import {
  updateSortBy,
  updateCurrentGenre,
  updateSearchInput,
} from '../../redux/movieSlice';
import { MovieContext } from '../../shared/MovieProvider';
import ReactPaginate from 'react-paginate';
import Header from '../header/Header';

const _storebasepath = store.getState();
const MovieList = () => {
  const styles = listStyles();

  let {
    value: cards,
    limit,
    sortBy,
    currentGenre,
    search,
  } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  // *** updates the data ** //
  useEffect(() => {
    dispatch(getMovies({ limit, sortBy, currentGenre, search }));
  }, [dispatch, limit, sortBy, currentGenre, search]);

  let edit = useContext(MovieContext);

  const deleteMovie = () => {
    dispatch(getMovies({ limit, sortBy, currentGenre }));
  };

  //todo in task7
  const updateMovie = (values) => {
    dispatch(getMovies({ limit, sortBy, currentGenre }));
  };

  /** filterBy Genre , search & sortBy */
  const sortByValue = (sortingKey) => {
    dispatch(updateSortBy(sortingKey));
  };

  const fetchByGenre = (genreKey) => {
    dispatch(updateCurrentGenre(genreKey));
  };

  const searchMovie = (searchInput) => {
    dispatch(updateSearchInput(searchInput));
  };

  /** pagination logic  */
  const itemsPerPage = _storebasepath.movies.pageOffset;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = cards.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(cards.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cards.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Header searchMovie={searchMovie} />
      <CollapsibleExample
        sortByValue={sortByValue}
        fetchByGenre={fetchByGenre}
      ></CollapsibleExample>
      <div className={styles['.results']}>
        <span className={styles['.span']}>{cards.length}</span> movies found
      </div>
      <div className={styles.listcontainer}>
        <ul className={styles['.list']}>
          {currentItems.map((card) => (
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
      <div className={styles.paginations}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          breakLinkClassName={'page-link'}
          containerClassName={'pagination'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          activeClassName={'active'}
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default MovieList;
