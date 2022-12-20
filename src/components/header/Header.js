import React, { useState, useContext, useRef } from 'react';
import './Header.css';
import AddEditModalContent from '../modals/AddEditModalContent';
import { MovieContext, ModalState } from '../../shared/MovieProvider';
import HeaderMovieContent from '../header/HeaderMovieContent';
import ReactModal from 'react-modal';
import { modalStyles } from '../../shared/CustomModalstyles';

function Header(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContext, setmodalContext] = useState(ModalState.ADD);
  const inputRef = useRef(null);

  /**set modal state open/ close */
  const setModalState = (state) => {
    setModalIsOpen(state);
  };
  const movieDetails = useContext(MovieContext);

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
                  ref={inputRef}
                ></input>
                <button
                  className="searchButton"
                  onClick={() => {
                    props.searchMovie(inputRef.current.value);
                  }}
                >
                  SEARCH
                </button>
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
              // updateMovie();
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
