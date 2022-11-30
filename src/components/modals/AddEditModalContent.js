import React, { forwardRef, useMemo, useState, useContext } from 'react';
import Select from 'react-select';
import ReactDatePicker from 'react-datepicker';
import {
  PrimaryButtonOutlined,
  PrimaryButtonFilled,
  ModalActions,
} from '../../shared/CustomModalstyles';
import {
  customStyles,
  StyledInput,
  StyledTextArea,
  Datepicker,
  FieldLabel,
  BottomContainer,
  TopContainer,
  LeftContainer,
  RightContainer,
} from './AddEditModalStyles';
import Genres from '../../shared/Genres-data.json';
import { MovieContext } from '../../shared/MovieProvider';
import { MovieEditDispatchContext } from '../../shared/MovieEditProvider';
import Movies from '../../shared/Movies-data.json';

const AddEditModalContent = (props) => {
  let _tempmovieDetails = useContext(MovieContext);
  if (_tempmovieDetails == null) {
    _tempmovieDetails = {
      id: Movies.length + 2,
      title: '',
      genre: 'Thriller',
      year: 2022,
      description: '',
      runTime: 0,
      rating: 0,
      releaseDate: new Date('2022-03-21'),
      src: 'https://th.bing.com/th/id/OIP.AFYLCDSu68rqlfYAysqcsgHaKr?w=118&h=180&c=7&r=0&o=5&pid=1.7',
    };
  }
  let setEditmovieDetails = useContext(MovieEditDispatchContext);
  const [selectedMovieGenre, setSelectedMovieGenre] = useState({
    name: _tempmovieDetails.genre,
    label: _tempmovieDetails.genre,
  });
  const [releaseDate, setReleaseDate] = useState(new Date(_tempmovieDetails.releaseDate));
  const CustomDatePickerInput = forwardRef((props, ref) => {
    return (
      <Datepicker onClick={props.onClick} ref={ref} role="button">
        {props.value}
      </Datepicker>
    );
  });

  CustomDatePickerInput.displayName = 'CustomDatePickerInput';

  const movieGenres = useMemo(() => {
    return Genres.map((item) => {
      return { value: item.name, label: item.name };
    });
  }, []);

  const handleChange = (evt) => {
    const value = evt.target.value;
    _tempmovieDetails = {
      ..._tempmovieDetails,
      [evt.target.name]: value,
    };
    setEditmovieDetails(_tempmovieDetails);
  };

  return (
    <>
      {_tempmovieDetails?.id && (
        <>
          <TopContainer>
            <LeftContainer>
              <FieldLabel>Title</FieldLabel>
              <StyledInput
                placeholder="Movie title"
                type={'text'}
                name={'title'}
                onChange={handleChange}
                defaultValue={`${'' || _tempmovieDetails.title}`}
              />
              <FieldLabel>Movie url</FieldLabel>
              <StyledInput
                placeholder="https://"
                name={'src'}
                onChange={handleChange}
                defaultValue={`${'' || _tempmovieDetails.src}`}
              />

              <FieldLabel>Genre</FieldLabel>
              <Select
                defaultValue={selectedMovieGenre}
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
                dateFormat="dd/MM/yyyy"
                onChange={(date) => {
                  setReleaseDate(_tempmovieDetails.releaseDate);
                }}
                selected={releaseDate}
                name={'releaseDate'}
                customInput={<CustomDatePickerInput />}
              />

              <FieldLabel>Rating</FieldLabel>
              <StyledInput
                placeholder="Movie rating"
                type="number"
                step="0.1"
                name={'rating'}
                onChange={handleChange}
                defaultValue={`${'' || _tempmovieDetails.rating}`}
              />

              <FieldLabel>Runtime</FieldLabel>
              <StyledInput
                placeholder="Minutes"
                type="number"
                name={'runTime'}
                onChange={handleChange}
                defaultValue={`${'' || _tempmovieDetails.runTime}`}
              />
            </RightContainer>
          </TopContainer>
          <BottomContainer>
            <FieldLabel>Overview</FieldLabel>
            <StyledTextArea
              rows={10}
              name={'description'}
              onChange={handleChange}
              placeholder={'Movie description'}
              defaultValue={`${'' || _tempmovieDetails.description}`}
            />
          </BottomContainer>
          <ModalActions>
            <PrimaryButtonOutlined
              cancelUpdate={() => {
                props.cancelUpdate();
              }}
            >
              Reset
            </PrimaryButtonOutlined>
            <PrimaryButtonFilled
              onClick={() => {
                props.updateMovie();
              }}
            >
              Submit
            </PrimaryButtonFilled>
          </ModalActions>
        </>
      )}
    </>
  );
};

export default AddEditModalContent;
