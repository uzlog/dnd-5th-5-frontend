import React, { useState } from 'react';
import { ModalWrapper, ModalOverlay, ModalContents } from './Style';
import SocialLoginContainer from '@containers/auth/SocialLoginContainer';

const MainComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button type="button" onClick={openModal}>
        나도 할래
      </button>
      {showModal && (
        <ModalWrapper>
          <ModalOverlay onClick={() => closeModal()} />
          <ModalContents>
            <SocialLoginContainer />
          </ModalContents>
        </ModalWrapper>
      )}
    </>
  );
};

export default MainComponent;
