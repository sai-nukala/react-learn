import axios from 'axios';

import {
  fetchDelete,
  fetchError,
  fetchPending,
  fetchGetSuccess,
  fetchCreate,
  fetchCreateSuccess,
  fetchUpdateSuccess,
  fetchUpdate,
  fetchEditError,
  fetchDeleteSuccess,
} from '../redux/movieSlice';

const GET_OPTIONS_DEFAULT = {
  limit: 12,
  sortBy: 'title',
  sortOrder: 'desc',
  currentGenre: '',
  search: '',
};

const apiUrl = 'http://localhost:4000/movies/';

export const getMovies =
  ({
    limit = GET_OPTIONS_DEFAULT.limit,
    sortBy = GET_OPTIONS_DEFAULT.sortBy,
    sortOrder = GET_OPTIONS_DEFAULT.sortOrder,
    currentGenre = GET_OPTIONS_DEFAULT.currentGenre,
    search = GET_OPTIONS_DEFAULT.search,
  }) =>
  async (dispatch) => {
    dispatch(fetchPending());
    let res;
    const genreFilter =
      currentGenre === '' || currentGenre === 'all' ? '' : `&filter=${currentGenre}`;
    const searchFilter = search === '' ? '' : `&search=${search}`;

    try {
      res = await axios.get(
        `${apiUrl}?limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}${genreFilter}${searchFilter}`,
      );

      if (res.status === 400) {
        throw new Error('Bad request');
      }

      const cards = fromMovieArrToCardArr(res.data.data);
      dispatch(
        fetchGetSuccess({
          value: cards,
          totalAmount: res.data.totalAmount,
          offset: res.data.offset,
          limit: res.data.limit,
        }),
      );
    } catch (error) {
      dispatch(fetchError(error));
    }
  };

export const deleteMovieById = (id) => async (dispatch) => {
  dispatch(fetchDelete());

  try {
    const res = await axios.delete(`${apiUrl}${id}`);

    if (res.status === 404) {
      throw new Error('Movie not found');
    }

    if (res.status === 204) {
      dispatch(fetchDeleteSuccess());
    }
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const createMovie = (card) => async (dispatch) => {
  dispatch(fetchCreate());

  try {
    const movieFull = fromCardToMovie(card);
    const { id, ...movie } = movieFull;

    const res = await axios.post(apiUrl, movie);

    if (res.status === 400) {
      throw new Error('Bad request');
    }

    dispatch(fetchCreateSuccess(card));
  } catch (error) {
    dispatch(fetchEditError(error));
  }
};

export const updateMovie = (card) => async (dispatch) => {
  dispatch(fetchUpdate());

  try {
    const movieArr = fromCardToMovie(card);

    const res = await axios.put(apiUrl, movieArr);

    if (res.status === 400) {
      throw new Error('Bad request');
    } else if (res.status === 404) {
      throw new Error('Movie not found');
    }

    dispatch(fetchUpdateSuccess(card));
  } catch (error) {
    dispatch(fetchEditError(error));
  }
};

const fromMovieArrToCardArr = (movies) =>
  movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    genre: movie.genres,
    src: movie.poster_path,
    description: movie.overview,
    runTime: movie.runtime,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    year: movie.release_date,
  }));

const fromCardToMovie = (card) => ({
  id: card.id,
  title: card.title,
  genres: card.genre,
  poster_path: card.src,
  overview: card.description,
  runtime: card.runTime,
  vote_average: card.rating,
  release_date: card.releaseDate,
});
