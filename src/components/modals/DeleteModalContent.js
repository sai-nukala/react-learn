import React, { useContext } from 'react';
import {
  PrimaryButtonFilled,
  ModalActions,
  ModalContent,
} from '../../shared/CustomModalstyles';
import { MovieContext } from '../../shared/MovieProvider';
import { MovieEditDispatchContext } from '../../shared/MovieEditProvider';

const DeleteModalContent = (props) => {
  let _tempmovieDetails = useContext(MovieContext);

  let setEditMovieDetails = useContext(MovieEditDispatchContext);

  const deleteMovies = () => {
    setEditMovieDetails(_tempmovieDetails);
    props.deleteMovie();
  };
  return (
    <>
      <ModalContent>
        <p>Are you sure you want to delete this movie?</p>
      </ModalContent>
      <ModalActions>
        <PrimaryButtonFilled onClick={(event) => deleteMovies()}>
          Confirm
        </PrimaryButtonFilled>
      </ModalActions>
    </>
  );
};

export default DeleteModalContent;
