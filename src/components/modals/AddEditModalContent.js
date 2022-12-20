import React, { useMemo, useState, useContext } from 'react';
import Select from 'react-select';
import ReactDatePicker from 'react-date-picker';
import {
  PrimaryButtonOutlined,
  PrimaryButtonFilled,
  ModalActions,
} from '../../shared/CustomModalstyles';
import {
  customStyles,
  StyledInput,
  StyledTextArea,
  FieldLabel,
  BottomContainer,
  TopContainer,
  LeftContainer,
  RightContainer,
} from './AddEditModalStyles';
import Genres from '../../shared/Genres-data.json';
import { MovieContext, MovieDispatchContext } from '../../shared/MovieProvider';
import { useFormik } from 'formik';
import { updateMovie, createMovie } from '../../services/dataplatform';
import { useDispatch } from 'react-redux';
import { resetError } from '../../redux/movieSlice';

const fetchGenresOfMovie = (genre) => {
  let options = [];
  genre.forEach((G) => {
    options.push({
      name: G,
      label: G,
    });
  });
  return options;
};

const AddEditModalContent = (props) => {
  const dispatch = useDispatch();
  const setMovieDetails = useContext(MovieDispatchContext);
  let _tempmovieDetails = useContext(MovieContext);
  const [releaseDate, setReleaseDate] = useState({
    date: _tempmovieDetails?.releaseDate
      ? new Date(_tempmovieDetails?.releaseDate)
      : new Date(),
  });
  let dateSelected = new Date(releaseDate.date);
  const daonChange = (date) => {
    let formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    setReleaseDate({ date: formattedDate });
    dateSelected = new Date(releaseDate.date);
  };
  if (_tempmovieDetails == null) {
    _tempmovieDetails = {
      id: '',
      title: '',
      genre: ['Thriller'],
      overview: '',
      runTime: 0,
      rating: 0,
      releaseDate: new Date('03-21-2022'),
      src: '',
      year: new Date('2022-03-21'),
      budget: 0,
      revenue: 0,
      tagline: 'new title',
      vote_count: 0,
    };
  }

  const [selectedMovieGenre, setSelectedMovieGenre] = useState(
    fetchGenresOfMovie(_tempmovieDetails.genre),
  );

  const movieGenres = useMemo(() => {
    return Genres.map((item) => {
      return { value: item.name, label: item.name };
    });
  }, []);

  // * formik * //
  const formik = useFormik({
    initialValues: _tempmovieDetails,
    onSubmit: async (values) => {
      if (_tempmovieDetails.id !== '') {
        await dispatch(updateMovie(values));
      } else {
        await dispatch(createMovie(values));
      }
      if (this.props.error.length == 0) {
        props.updateMovie();
        setMovieDetails(null);
      }
    },
  });

  return (
    <>
      <div id="error-block">
        {props.error?.map((error) => (
          <li style={{ color: 'darkslategrey' }} key={error}>
            {error}
          </li>
        ))}
      </div>
      <>
        <form onSubmit={formik.handleSubmit}>
          <TopContainer>
            <LeftContainer>
              <FieldLabel>Title</FieldLabel>
              <StyledInput
                placeholder="Movie title"
                type={'text'}
                name={'title'}
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              <FieldLabel>Movie url</FieldLabel>
              <StyledInput
                placeholder="https://"
                name={'src'}
                onChange={formik.handleChange}
                value={formik.values.src}
              />

              <FieldLabel>Genre</FieldLabel>
              <Select
                value={selectedMovieGenre}
                onChange={(value) => {
                  setSelectedMovieGenre(value);
                }}
                options={movieGenres}
                isMulti
                components={{
                  IndicatorSeparator: () => null,
                }}
                name={'genre'}
                placeholder="Select Genre"
                styles={customStyles}
              />
            </LeftContainer>

            <RightContainer>
              <FieldLabel>Release date</FieldLabel>

              <ReactDatePicker
                format="MM-dd-y"
                onChange={daonChange}
                value={dateSelected}
              />

              <FieldLabel>Rating</FieldLabel>
              <StyledInput
                placeholder="Movie rating"
                type="number"
                step="0.1"
                name={'rating'}
                onChange={formik.handleChange}
                value={formik.values.rating}
              />

              <FieldLabel>Runtime</FieldLabel>
              <StyledInput
                placeholder="Minutes"
                type="number"
                name={'runTime'}
                onChange={formik.handleChange}
                value={formik.values.runTime}
              />
            </RightContainer>
          </TopContainer>
          <BottomContainer>
            <FieldLabel>Overview</FieldLabel>
            <StyledTextArea
              rows={10}
              name={'overview'}
              onChange={formik.handleChange}
              value={formik.values.overview}
            />
          </BottomContainer>
          <ModalActions>
            <PrimaryButtonOutlined
              type="button"
              onClick={() => {
                props.cancelUpdate();
                dispatch(resetError());
              }}
            >
              Reset
            </PrimaryButtonOutlined>
            <PrimaryButtonFilled type="submit">Submit</PrimaryButtonFilled>
          </ModalActions>
        </form>
      </>
    </>
  );
};

export default AddEditModalContent;
