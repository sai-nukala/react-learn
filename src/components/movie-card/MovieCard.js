import React, { useState, useContext, useRef } from 'react';
import ellipse from '../../assets/images/ellipsis.svg';
import PropTypes from 'prop-types';
import './movie-card.scss';
import AddEditModalContent from '../modals/AddEditModalContent.js';
import DeleteModalContent from '../modals/DeleteModalContent';
import { MovieDispatchContext, ModalState } from '../../shared/MovieProvider';
import { useOutsideClickHandler } from '../../shared/customCloseHook';
import ReactModal from 'react-modal';
import { MenuRow, MenuButton, ContextMenu, MoreOptions } from './MovieCardStyles';
import { modalStyles, deleteModalStyles } from '../../shared/CustomModalstyles';
import Movies from '../../shared/Movies-data.json';

const MovieCard = (props) => {
  /**Destructuring the movie details of */
  const { id, title, genre, year, description, runTime, rating, src } = props?.movie;
  const [isContextMenuOpen, setOpenContextMenu] = useState(false);
  const [isMenuButtonVisible, setMenuButtonVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContext, setmodalContext] = useState('');

  /**context of selected movie */
  const setMovieDetails = useContext(MovieDispatchContext);

  /**set modal state open/ close */
  const setModalState = (state) => {
    setModalIsOpen(state);
  };

  const openModal = (context) => {
    switch (context) {
      case ModalState.EDIT:
        setModalState(true);
        setMenuButtonVisible(false);
        setOpenContextMenu(false);
        setmodalContext(context);
        break;
      case ModalState.DELETE:
        setModalState(true);
        setMenuButtonVisible(false);
        setOpenContextMenu(false);
        setmodalContext(context);
        break;
      default:
        setModalState(false);
    }
  };

  const wrapperRef = useRef(null);
  useOutsideClickHandler(wrapperRef, () => setOpenContextMenu(false));

  const cancelUpdate = () => {
    setModalState(false);
  };
  return (
    <div
      className="card"
      onMouseOver={() => setMenuButtonVisible(true)}
      onMouseLeave={() => setMenuButtonVisible(false)}
      onClick={() => {
        setMovieDetails(props?.movie);
      }}
    >
      {/* Menu icon on each card */}
      {isMenuButtonVisible && !isContextMenuOpen && (
        <MoreOptions
          onClick={() => {
            setOpenContextMenu(true);
            setMenuButtonVisible(false);
          }}
        >
          <img
            src={ellipse}
            key={id}
            alt={title}
            style={{ zIndex: `${isMenuButtonVisible && !modalIsOpen}` ? 1 : 0 }}
          />
        </MoreOptions>
      )}

      {/* Menu options to display edit / delete */}
      {isContextMenuOpen && (
        <ContextMenu ref={wrapperRef}>
          <MenuButton>
            <p onClick={() => setOpenContextMenu(false)}>X</p>
          </MenuButton>
          <MenuRow
            role="button"
            onClick={() => {
              openModal(ModalState.EDIT);
            }}
          >
            <p>{`${ModalState.EDIT}`}</p>
          </MenuRow>
          <MenuRow
            role="button"
            onClick={() => {
              openModal(ModalState.DELETE);
            }}
          >
            <p>{`${ModalState.DELETE}`}</p>
          </MenuRow>
        </ContextMenu>
      )}

      {/* React modal to display Edit and Delete Modal */}
      <ReactModal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        style={{
          ...modalStyles,
          ...deleteModalStyles,
          content: { ...modalStyles.content, ...deleteModalStyles.content },
        }}
      >
        <div className="alignRight">
          <h2>{modalContext === ModalState.EDIT ? 'Edit Movie' : 'Delete Movie'}</h2>
          <button
            style={{ margin: '20px' }}
            onClick={() => {
              setModalState(false);
            }}
          >
            x
          </button>
        </div>
        {modalContext === ModalState.EDIT && (
          <AddEditModalContent
            updateMovie={() => {
              props.updateMovie();
              setModalIsOpen(false);
            }}
            cancelUpdate={() => {
              cancelUpdate();
            }}
          ></AddEditModalContent>
        )}
        {modalContext === ModalState.DELETE && (
          <DeleteModalContent
            deleteMovie={() => {
              props.deleteMovie();
            }}
          ></DeleteModalContent>
        )}
      </ReactModal>

      {/* Card Content */}
      <img className="movie" src={src} key={id} alt={title} />
      <div className="title-wrap">
        <span className="title">{title}</span>
        <span className="year">{year}</span>
      </div>
      <span className="genre">{genre}</span>
    </div>
  );
};

// default Props
MovieCard.defaultProps = {
  movie: Movies[0],
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    description: PropTypes.string,
    runTime: PropTypes.number,
    src: PropTypes.string,
    rating: PropTypes.number,
    releaseDate: PropTypes.string,
  }),
};

export default MovieCard;
