import React, { forwardRef, useMemo, useState } from 'react';
import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import Select from 'react-select';
import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';
import {
  modalStyles,
  PrimaryButtonOutlined,
  PrimaryButtonFilled,
  CloseIcon,
  ModalActions,
} from '../../shared/modalstyles';

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  gap: 13px;
`;

const TopContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 30px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-basis: 40%;
  flex-direction: column;
  gap: 13px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 60px;
`;

const FieldLabel = styled.label`
  margin-bottom: 13px;
  color: 'red';
`;

const Datepicker = styled.div`
  box-sizing: border-box;
  border-radius: 0;
  background-color: darkgrey;
  border: none;
  outline: none;
  height: 57px;
  padding: 18px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  border-radius: 0;
  background-color: darkgrey;
  border: none;
  outline: none;
  height: 57px;
  padding-left: 18px;
  color: white;
`;

const StyledTextArea = styled.textarea`
  border-radius: 0;
  background-color: darkgrey;
  border: none;
  outline: none;
  height: 57px;
  padding: 18px;
  color: white;
  resize: none;
`;

const customStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'darkgrey',
    border: 'none',
    borderRadius: 0,
    height: '57px',
    boxShadow: 'none',
    paddingLeft: '18px',
  }),
  input: (styles) => ({
    ...styles,
    color: 'white',
    padding: 0,
  }),
  option: (styles) => ({
    ...styles,
    color: 'grey',
  }),
};

const UseAddEditMovieModal = (flowType) => {
  const [selectedMovieGenre, setSelectedMovieGenre] = useState({ name: 'comedy' });
  const [releaseDate, setReleaseDate] = useState(new Date());

  const CustomDatePickerInput = forwardRef((props, ref) => {
    return (
      <Datepicker onClick={props.onClick} ref={ref} role="button">
        {props.value}
      </Datepicker>
    );
  });

  CustomDatePickerInput.displayName = 'CustomDatePickerInput';
  const movieGenres = useMemo(() => {
    const genres = [
      { name: 'documentary' },
      { name: 'comedy' },
      { name: 'horror' },
      { name: 'crime' },
    ];
    return genres.map((item) => {
      return { value: item.name, label: item.name };
    });
  }, []);

  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen style={modalStyles}>
      <CloseIcon>
        <p onClick={hideModal} role="button">
          {' '}
          X{' '}
        </p>
      </CloseIcon>
      <h1>{flowType + ' Movie'}</h1>

      <TopContainer>
        <LeftContainer>
          <FieldLabel>Title</FieldLabel>
          <StyledInput placeholder="Movie title" />

          <FieldLabel>Movie url</FieldLabel>
          <StyledInput placeholder="https://" />

          <FieldLabel>Genre</FieldLabel>
          <Select
            defaultValue={selectedMovieGenre}
            onChange={(value) => setSelectedMovieGenre(value)}
            options={movieGenres}
            isMulti
            components={{
              IndicatorSeparator: () => null,
            }}
            placeholder="Select Genre"
            styles={customStyles}
          />
        </LeftContainer>

        <RightContainer>
          <FieldLabel>Release date</FieldLabel>
          <ReactDatePicker
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setReleaseDate(date)}
            selected={releaseDate}
            customInput={<CustomDatePickerInput />}
          />

          <FieldLabel>Rating</FieldLabel>
          <StyledInput placeholder="Movie rating" type="number" step="0.1" />

          <FieldLabel>Runtime</FieldLabel>
          <StyledInput placeholder="Minutes" type="number" />
        </RightContainer>
      </TopContainer>

      <BottomContainer>
        <FieldLabel>Overview</FieldLabel>
        <StyledTextArea rows={10} placeholder={'Movie description'} />
      </BottomContainer>

      <ModalActions>
        <PrimaryButtonOutlined>Reset</PrimaryButtonOutlined>
        <PrimaryButtonFilled>Submit</PrimaryButtonFilled>
      </ModalActions>
    </ReactModal>
  ));
  return showModal;
};

export default UseAddEditMovieModal;
