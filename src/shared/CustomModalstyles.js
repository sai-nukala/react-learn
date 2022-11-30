import styled from 'styled-components';
export const modalStyles = {
  content: {
    background: 'grey',
    borderRadius: 0,
    border: 'none',
    color: 'white',
    padding: '60px',
  },
  overlay: {
    background: 'rgba(35, 35, 35, 0.9)',
  },
};

export const PrimaryButton = styled.button`
  border-radius: 3px;
  width: 180px;
  height: 57px;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 24.38px;
  font-weight: 500;
`;

export const PrimaryButtonFilled = styled(PrimaryButton)`
  min-width: 180px;
  cursor: pointer;
  background-color: orange;
  color: white;
  border: none;
`;

export const PrimaryButtonOutlined = styled(PrimaryButton)`
  background-color: transparent;
  color: orange;
  border: 1.5px solid orange;
`;

export const CloseIcon = styled.div`
  margin-bottom: 13px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  align-self: flex-end;
`;
export const ModalActions = styled.div`
  display: flex;
  gap: 13px;
  justify-content: flex-end;
`;
export const deleteModalStyles = {
  content: {
    maxWidth: '670px',
    maxHeight: '350px',
    margin: '0 auto',
  },
};
export const ModalContent = styled.div`
  margin: 20px 0;
`;
