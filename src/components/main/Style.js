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
  background-color: #efefef;
  opacity: 0.4;
`;

export const ModalContents = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  top: ${(props) => (props.profile ? '0' : '')};
  left: ${(props) => (props.profile ? '227px' : '')};
  border-radius: ${(props) => (props.profile ? '' : '15px')};
  padding: 0 auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: ${(props) => (props.profile ? '#121212' : 'white')};
  max-width: ${(props) => (props.profile ? '576px' : '800px')};
  width: ${(props) => (props.profile ? '40vw' : '600px')};
  max-height: ${(props) => (props.profile ? '307px' : '')};
  height: ${(props) => (props.profile ? '28vh' : '600px')};
  overflow-y: auto;
  @media screen and (max-width: 1023px) {
    width: 360px;
    left: 0;
    height: ${(props) => (props.profile ? '28vh' : '613px')};
    transition: ${(props) => (props.profile ? '5s ease' : '')};
  }
`;
