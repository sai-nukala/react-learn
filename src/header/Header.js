import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div>
        <label className="netfilx">
          <b>netflix</b>roulette
        </label>
        <div className="alignAddButton">
          <button className="addButton">+ ADD MOVIE</button>
        </div>
      </div>
      <div className="title">
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
