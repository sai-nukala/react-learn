import React, { useState, useContext } from 'react';
import imageToRender from '../../assets/images/movie1.png';
import ellipse from '../../assets/images/ellipsis.svg';
import PropTypes from 'prop-types';
import './movie-card.scss';
import styled from 'styled-components';
import useAddEditMovieModal from '../modals/AddEditModal';
import useDeleteMovieModal from '../modals/DeleteModal';
import { MovieContext, MovieDispatchContext } from '../../shared/MovieProvider';

const MoreOptions = styled.div`
  background-color: 'violet';
  width: 335px;
  height: 36px;
  border-radius: 50%;
  text-align: end;
  line-height: 36px;
  position: absolute;
  z-index: 1;
`;

const ContextMenu = styled.div`
  position: absolute;
  right: 0px;
  background-color: darkgrey;
  width: 190px;
  padding: 0 0 14px;
  border-radius: 4px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  z-index: 2;
`;

const MenuButton = styled.div`
  margin: 8px 10px 8px auto;
  cursor: pointer;
`;
const MenuRow = styled.div`
  box-sizing: border-box;
  padding: 8px 23px;
  flex: 1;
  width: 100%;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const MovieCard = (props) => {
  const [isContextMenuOpen, setOpenContextMenu] = useState(false);
  const [isMenuButtonVisible, setMenuButtonVisible] = useState(false);

  const openEditMovieModal = useAddEditMovieModal('Edit');
  const openDeleteMovieModal = useDeleteMovieModal();

  const movieDetails = useContext(MovieContext);
  const setMovieDetails = useContext(MovieDispatchContext);

  return (
    <div
      className="card"
      onMouseEnter={() => setMenuButtonVisible(true)}
      onMouseLeave={() => setMenuButtonVisible(false)}
      onClick={() => {
        setMovieDetails(props);
      }}
    >
      {isMenuButtonVisible && !isContextMenuOpen && (
        <MoreOptions
          onClick={() => {
            setOpenContextMenu(true);
            setMenuButtonVisible(false);
          }}
        >
          <img src={ellipse} key={props.value.id} alt={props.value.title} />
        </MoreOptions>
      )}

      {isContextMenuOpen && (
        <ContextMenu>
          <MenuButton>
            <p onClick={() => setOpenContextMenu(false)}>X</p>
          </MenuButton>
          <MenuRow
            role="button"
            onClick={() => {
              openEditMovieModal();
              setOpenContextMenu(false);
            }}
          >
            <p>Edit</p>
          </MenuRow>
          <MenuRow
            role="button"
            onClick={() => {
              openDeleteMovieModal();
              setOpenContextMenu(false);
            }}
          >
            <p>Delete</p>
          </MenuRow>
        </ContextMenu>
      )}

      <img
        className="movie"
        src={props.value.src}
        key={props.value.id}
        alt={props.value.title}
      />
      <div className="title-wrap">
        <span className="title">{props.value.title}</span>
        <span className="year">{props.value.year}</span>
      </div>
      <span className="genre">{props.value.genre}</span>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.number.isRequired,
  year: PropTypes.number,
  genre: PropTypes.string,
  src: PropTypes.string,
};

export default MovieCard;
