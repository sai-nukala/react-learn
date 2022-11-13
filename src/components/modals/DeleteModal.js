import React from 'react';
import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import styled from 'styled-components';
import {
  modalStyles,
  PrimaryButtonFilled,
  CloseIcon,
  ModalActions,
} from '../../shared/modalstyles';

const deleteModalStyles = {
  content: {
    maxWidth: '670px',
    maxHeight: '350px',
    margin: '0 auto',
  },
};

const ModalContent = styled.div`
  margin-top: 50px;
  margin-bottom: 90px;
`;

const useDeleteMovieModal = () => {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal
      isOpen
      style={{
        ...modalStyles,
        ...deleteModalStyles,
        content: { ...modalStyles.content, ...deleteModalStyles.content },
      }}
    >
      <CloseIcon>
        <p onClick={hideModal} role="button">
          X
        </p>
      </CloseIcon>
      <h1>Delete movie</h1>
      <ModalContent>
        <p>Are you sure you want to delete this movie?</p>
      </ModalContent>
      <ModalActions>
        <PrimaryButtonFilled>Confirm</PrimaryButtonFilled>
      </ModalActions>
    </ReactModal>
  ));

  return showModal;
};

export default useDeleteMovieModal;
