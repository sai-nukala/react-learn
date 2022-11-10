import React from 'react';
import imageToRender from '../../assets/images/movie1.png';
import PropTypes from 'prop-types';
import './movie-card.scss';

const MovieCard = (props) => {
  return (
    <div className="card">
      <img src={imageToRender} key={props.value.id} alt={props.value.title} />
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
