import React, { useState, useContext } from 'react';
import './Header.css';
import useAddEditMovieModal from '../modals/AddEditModal';
import { MovieContext, MovieDispatchContext } from '../../shared/MovieProvider';
import HeaderMovieContent from '../header/HeaderMovieContent';

function Header() {
  const openEditMovieModal = useAddEditMovieModal('Add');
  const movieDetails = useContext(MovieContext);
  const setMovieDetails = useContext(MovieDispatchContext);
  console.log('movieDetails', movieDetails);

  return (
    <>
      <header className="header">
        {movieDetails?.value?.id == null && (
          <>
            <div>
              <label className="netfilx">
                <b>netflix</b>roulette
              </label>
              <div className="alignAddButton">
                <button
                  className="addButton"
                  onClick={() => {
                    openEditMovieModal();
                  }}
                >
                  + ADD MOVIE
                </button>
              </div>
            </div>
            <div className="headertitle">
              <h1>FIND YOUR MOVIE</h1>
              <div>
                <input
                  className="searchInput"
                  type="text"
                  placeholder="What do you want to watch?"
                ></input>
                <button className="searchButton">SEARCH</button>
              </div>
            </div>
          </>
        )}
        {movieDetails?.value?.id && (
          <>
            <div>
              <label className="netfilx">
                <b>netflix</b>roulette
              </label>
            </div>
            <HeaderMovieContent />
          </>
        )}
      </header>
    </>
  );
}

export default Header;
