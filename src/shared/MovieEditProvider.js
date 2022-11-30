import React, { createContext, useState } from 'react';

const MovieEditContext = createContext({});
const MovieEditDispatchContext = createContext(undefined);

function MovieEditProvider({ children }) {
  const [editmovieDetails, setEditmovieDetails] = useState();

  return (
    <MovieEditContext.Provider value={editmovieDetails}>
      <MovieEditDispatchContext.Provider value={setEditmovieDetails}>
        {children}
      </MovieEditDispatchContext.Provider>
    </MovieEditContext.Provider>
  );
}

export { MovieEditProvider, MovieEditContext, MovieEditDispatchContext };
