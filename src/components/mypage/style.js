import styled from 'styled-components';

export const ModalWrapper = styled.div`
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
  align-items: ${(props) => (props.profile ? '' : 'center')};
`;

export const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;

export const ModalContents = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  left: 227.4px;
  padding: 0 auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  max-width: 576px;
  width: 40vw;
  height: 100vh;
  overflow-y: auto;
  @media screen and (max-width: 1023px) {
    width: 360px;
    /* height: 100vh; */
    left: 0px;
  }
`;
