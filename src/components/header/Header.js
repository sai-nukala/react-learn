import React, { useState, useContext } from 'react';
import './Header.css';
import AddEditModalContent from '../modals/AddEditModalContent';
import {
  MovieContext,
  MovieDispatchContext,
  ModalState,
} from '../../shared/MovieProvider';
import HeaderMovieContent from '../header/HeaderMovieContent';
import ReactModal from 'react-modal';
import { modalStyles } from '../../shared/CustomModalstyles';
import Movies from '../../shared/Movies-data.json';
import { MovieEditContext } from '../../shared/MovieEditProvider';

function Header(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContext, setmodalContext] = useState(ModalState.ADD);

  /**set modal state open/ close */
  const setModalState = (state) => {
    setModalIsOpen(state);
  };
  let add = useContext(MovieEditContext);
  const movieDetails = useContext(MovieContext);
  const updateMovie = () => {
    console.log('add', add);
    Movies.push(add);
  };

  return (
    <>
      <header className="header">
        {movieDetails?.id == null && (
          <>
            <div>
              <label className="netfilx">
                <b>netflix</b>roulette
              </label>
              <div className="alignAddButton">
                <button
                  className="addButton"
                  onClick={() => {
                    setModalState(true);
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
        {movieDetails?.id && (
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
      <ReactModal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        style={{
          ...modalStyles,
          content: { ...modalStyles.content },
        }}
      >
        <div className="alignRight">
          <h2>{'Add Movie'}</h2>
          <button
            style={{ margin: '20px' }}
            onClick={() => {
              setModalState(false);
            }}
          >
            x
          </button>
        </div>
        {modalContext === ModalState.ADD && (
          <AddEditModalContent
            updateMovie={() => {
              updateMovie();
              setModalIsOpen(false);
            }}
            cancelUpdate={() => {
              setModalIsOpen(false);
            }}
          ></AddEditModalContent>
        )}
      </ReactModal>
    </>
  );
}

export default Header;
