import styled from 'styled-components';
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
export {
  customStyles,
  StyledInput,
  StyledTextArea,
  Datepicker,
  FieldLabel,
  BottomContainer,
  TopContainer,
  LeftContainer,
  RightContainer,
};
