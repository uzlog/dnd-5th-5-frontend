import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
`;

export const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  padding: 0 2vw;
  height: 92vh;
  width: 40vw;
  background-color: #121212;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
    padding: 0 26px;
    width: 308px;
    height: 92vh;
    background-color: #121212;
  }
`;

export const ProfileImg = styled.input`
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 0;
  width: 120px;
  height: 120px;
  border-radius: 70px;
  z-index: 10;
  @media screen and (min-width: 1023px) {
    width: 192px;
    min-height: 192px;
    border-radius: 96px;
    margin-top: 45px;
  }
`;
export const HideBox = styled.div`
  min-height: 20px;
  background-color: #121212;
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  max-width: 76.8px;
  width: 5.3vw;
  max-height: 41.6px;
  height: 4vh;
  background-color: black;
  border-radius: 160px;
  display: flex;
  align-items: center;
  &.left {
    background-color: white;
  }
  @media screen and (max-width: 1023px) {
    width: 48px;
    height: 26px;
  }
`;

export const ToggleInner = styled.div`
  max-width: 38.4px;
  width: min(2.6vw, 3.75vh, 38.4px);
  max-height: 38.4px;
  height: min(2.6vw, 3.75vh, 38.4px);
  background: white;
  border-radius: 160px;
  margin-left: 0%;
  transition: all 0.7s;
  &.left {
    background-color: black;
    margin-left: calc(100% - min(2.6vw, 3.75vh, 38.4px));
    transition: all 0.7s;
  }
  @media screen and (max-width: 1023px) {
    width: 24px;
    height: 24px;
    border-radius: 100px;
    &.left {
      margin-left: 23px;
    }
  }
`;
export const ContentWrapper = styled.div``;
export const EachTitle = styled.div`
  display: flex;
  font-size: 18px;
  width: 312px;
  height: 26px;
  font-family: 'spoqaHanSansBold';
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 5px;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1023px) {
    height: 46px;
    margin-top: 45px;
    width: 100%;
    max-width: 500px;
    font-size: 29px;
    margin-bottom: 6px;
  }
`;
export const EmailWrapper = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  @media screen and (min-width: 1023px) {
    font-size: 25px;
  }
`;

export const EmailImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  @media screen and (min-width: 1023px) {
    width: 3.5vh;
    height: 3.5vh;
  }
`;
export const IsOpen = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: flex;
    p {
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      font-size: 10px;
    }
  }
  @media screen and (min-width: 1023px) {
    span {
      display: flex;
      p {
        font-size: 14px;
      }
    }
  }
`;

export const EmailContentWrapper = styled.div`
  display: flex;
`;
export const InputBoxWrapper = styled.div`
  flex-direction: row;
`;

export const InputBox = styled.input`
  background-color: #2a2a2a;
  width: 258px;
  font-family: 'spoqaHanSansRegular';
  border: 0;
  border-radius: 10px;
  color: white;
  padding: 14px 27px;
  @media screen and (min-width: 1023px) {
    width: calc(100% - 70px);
    max-width: 458px;
    font-size: 25px;
    padding: 2vh 35px;
  }
`;
export const StatusMessageCount = styled.span`
  font-size: 12px;
  opacity: 0.5;
  @media screen and (min-width: 1023px) {
    font-size: min(2rem, 2vh);
  }
`;
export const AlertMessage = styled.div`
  width: 320px;
  margin-top: 7px;
  color: #ff0000;
  display: flex;
  justify-content: center;
  font-size: 12px;
  @media screen and (min-width: 1023px) {
    max-width: 500px;
    width: 36vw;
    font-size: 19px;
  }
`;
export const DeleteButton = styled.div`
  cursor: pointer;
  margin-top: 28px;
  margin-bottom: 50px;
  color: white;
  font-size: 14px;
  text-decoration: underline;
  opacity: 0.5;
  @media screen and (min-width: 1023px) {
    margin-top: 38px;
    margin-bottom: 80px;

    font-size: 22px;
  }
`;

export const CancelButton = styled.button`
  color: white;
  background-color: #121212;
  width: 148px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: 'spoqaHanSansRegular';
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px white;
  @media screen and (min-width: 1023px) {
    border: solid 1.6px;
    font-size: min(33vw, 3vh, 2.6rem);
    width: 45.7%;
    height: 7.5vh;
    padding: 17.6px 22.4px 18.2px 22.4px;
  }
`;
export const SubmitButton = styled.button`
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 148px;
  font-family: 'spoqaHanSansRegular';
  height: 48px;
  font-size: 16px;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px #2a2a2a;
  @media screen and (min-width: 1023px) {
    border: solid 1.6px #2a2a2a;
    font-size: min(33vw, 3vh, 2.6rem);
    width: 45.7%;
    height: 7.5vh;
    padding: 17.6px 22.4px 18.2px 22.4px;
  }
`;
export const ButtonWrapper = styled.span`
  background-color: #121212;
  border: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 50px;
  @media screen and (min-width: 1023px) {
    margin-top: 120px;
  }
`;

//// 모달 css
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  position: relative;
  top: 2.9vh;
  left: 228px;
  display: flex;
  flex-flow: column;
  align-items: center;
  border-radius: 15px;
  padding: 0 auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  max-width: 529px;
  max-height: 864px;
  width: 36.7vw;
  height: 84.3vh;
  overflow-y: auto;
  @media screen and (max-width: 1023px) {
    left: 0px;
    width: 328px;
    height: 334px;
  }
  @media screen and (max-width: 1023px) and (max-height: 660px) {
    top: calc(9.4vh - 8.3vh);
  }
`;

export const ToastWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

export const Toast = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #000000;
  color: white;
  max-width: 460px;
  width: 31.9vw;
  max-height: 57.6px;
  height: 5.6vh;
  font-size: min(1.3vw, 1.8vh, 19.2px);
  animation: ${fadeIn} 5s;
  -moz-animation: ${fadeIn} 5s; /* Firefox */
  -webkit-animation: ${fadeIn} 5s; /* Safari and Chrome */
  -o-animation: ${fadeIn} 5s; /* Opera */
  @media screen and (max-width: 1023px) {
    width: 302px;
    height: 36px;
    font-size: 12px;
    text-align: center;
  }
`;
