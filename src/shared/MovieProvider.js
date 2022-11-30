import React, { createContext, useState } from 'react';

// MovieContext: to query the context state
// MovieDispatchContext: to mutate the context state
const MovieContext = createContext({});
const MovieDispatchContext = createContext(undefined);

function MovieProvider({ children }) {
  const [movieDetails, setmovieDetails] = useState();

  return (
    <MovieContext.Provider value={movieDetails}>
      <MovieDispatchContext.Provider value={setmovieDetails}>
        {children}
      </MovieDispatchContext.Provider>
    </MovieContext.Provider>
  );
}

const ModalState = {
  EDIT: 'Edit',
  DELETE: 'Delete',
  ADD: 'Add',
};

export { MovieProvider, MovieContext, MovieDispatchContext, ModalState };
