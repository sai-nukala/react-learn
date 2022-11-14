import React, { createContext, useState } from 'react';
import Movie_Default from './Movie';

// MovieContext: to query the context state
// MovieDispatchContext: to mutate the context state
const MovieContext = createContext(undefined);
const MovieDispatchContext = createContext(undefined);

function MovieProvider({ children }) {
  const [movieDetails, setmovieDetails] = useState(null);

  return (
    <MovieContext.Provider value={movieDetails}>
      <MovieDispatchContext.Provider value={setmovieDetails}>
        {children}
      </MovieDispatchContext.Provider>
    </MovieContext.Provider>
  );
}

export { MovieProvider, MovieContext, MovieDispatchContext };
