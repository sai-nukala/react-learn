import React from 'react';
import './Header.css';
import useAddEditMovieModal from '../modals/AddEditModal';
function Header() {
  const openEditMovieModal = useAddEditMovieModal('Add');
  return (
    <header className="header">
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
    </header>
  );
}

export default Header;
