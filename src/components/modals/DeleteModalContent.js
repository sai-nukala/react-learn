import React, { useContext } from 'react';
import {
  PrimaryButtonFilled,
  ModalActions,
  ModalContent,
} from '../../shared/CustomModalstyles';
import { MovieContext, MovieDispatchContext } from '../../shared/MovieProvider';
import { deleteMovieById } from '../../services/dataplatform';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

const DeleteModalContent = (props) => {
  const dispatch = useDispatch();
  let { editError } = useSelector((state) => state.movies);
  let _tempmovieDetails = useContext(MovieContext);
  const setMovieDetails = useContext(MovieDispatchContext);

  const formik = useFormik({
    initialValues: _tempmovieDetails,
    onSubmit: (values) => {
      dispatch(deleteMovieById(_tempmovieDetails?.id));
      if (editError?.length === 0) {
        props.deleteMovie();
        setMovieDetails(null);
      }
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <ModalContent>
          <p>Are you sure you want to delete this movie?</p>
        </ModalContent>
        <ModalActions>
          <PrimaryButtonFilled type="submit">Confirm</PrimaryButtonFilled>
        </ModalActions>
      </form>
    </>
  );
};

export default DeleteModalContent;
