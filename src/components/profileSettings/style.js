import styled from 'styled-components';

export const MainWrapper = styled.div`
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
    display: flex;
    width: 360px;
    background-color: #121212;
    flex-direction: column;
  }
  @media screen and (min-width: 1023px) {
    display: flex;
    max-width: 576px;
    width: 40vw;
    height: 100vh;
    background-color: #121212;
    flex-direction: column;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

export const ProfileImg = styled.input`
  margin: 0 auto;
  margin-top: 10px;
  font-size: 0;
  width: 120px;
  height: 120px;
  border-radius: 70px;
  padding-left: 130px;
  padding-top: 130px;
  @media screen and (min-width: 1023px) {
    width: 192px;
    min-height: 192px;
    padding-left: 192px;
    padding-top: 192px;
    border-radius: 96px;
    margin-top: 45px;
  }
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
export const ContentWrapper = styled.div`
  margin-left: 24px;
`;
export const EachTitle = styled.div`
  display: flex;
  font-size: 18px;
  width: 320px;
  height: 26px;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 700;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1023px) {
    height: 46px;
    margin-top: 45px;
    max-width: 500px;
    width: 35vw;
    font-size: 29px;
    margin-bottom: 6px;
  }
`;
export const EmailWrapper = styled.div`
  margin-left: 24;
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
  display: flex;
  align-items: center;
`;

export const EmailContentWrapper = styled.div`
  display: flex;
  @media screen and (min-width: 1023px) {
  }
`;
export const InputBoxWrapper = styled.div`
  flex-direction: row;
`;

export const InputBox = styled.input`
  background-color: #2a2a2a;
  width: 320px;
  border: 0;
  border-radius: 10px;
  color: white;
  padding: 14px 27px;
  @media screen and (min-width: 1023px) {
    max-width: 500px;
    width: 36vw;
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
  margin-top: 28px;
  margin-bottom: 70px;
  color: white;
  font-size: 14px;
  text-decoration: underline;
  opacity: 0.5;
  @media screen and (min-width: 1023px) {
    margin-top: 38px;
    margin-bottom: 120px;

    font-size: 22px;
  }
`;

export const LogoutButton = styled.button`
  color: white;
  background-color: black;
  width: 148px;
  height: 48px;
  font-size: 16px;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px white;
  @media screen and (min-width: 1023px) {
    border: solid 1.6px;
    font-size: 26px;
    width: 237px;
    height: 76px;
  }
`;
export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
  width: 148px;
  height: 48px;
  font-size: 16px;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px;
  @media screen and (min-width: 1023px) {
    border: solid 1.6px;
    font-size: 26px;
    width: 237px;
    height: 76px;
  }
`;
export const ButtonWrapper = styled.span`
  background-color: #121212;
  border: 0;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 50px;
  margin-right: 24px;
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
