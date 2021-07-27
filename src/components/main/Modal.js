import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 21;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  opacity: 0.4;
`;

const Contents = styled.div`
  position: relative;
  padding-top: 10px;
  display: flex;
  flex-flow: column;
  border-radius: 15px;
  padding: 0 auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  width: 360px;
  height: 600px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    width: 800px;
  }
`;

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Wrapper>
          <Overlay onClick={() => closeModal()} />
          <Contents>modal</Contents>
        </Wrapper>
      )}
    </>
  );
};

export default Modal;
