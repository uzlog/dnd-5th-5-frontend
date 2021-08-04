import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 21;
  top: 30px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  opacity: 0.4;
`;

export const ModalContents = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  border-radius: 15px;
  padding: 0 auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  width: 800px;
  height: 600px;
  overflow-y: auto;
  @media screen and (max-width: 767px) {
    width: 328px;
    height: 540px;
  }
`;
