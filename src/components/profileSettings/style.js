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
    width: 500px;
    background-color: #121212;
    flex-direction: column;
  }
`;

export const ProfileImg = styled.input`
  margin: 0 auto;
  margin-top: 28px;
  margin-bottom: 5px;
  font-size: 0;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  @media screen and (min-width: 1023px) {
    width: 192px;
    height: 192px;
    border-radius: 96px;
  }
`;
export const ContentWrapper = styled.div`
  margin-left: 24px;
  @media screen and (min-width: 1023px) {
  }
`;
export const EachTitle = styled.div`
  display: flex;
  font-size: 18px;
  width: 320px;
  height: 26px;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 5px;
  justify-content: space-between;

  @media screen and (min-width: 1023px) {
    width: 500px;
    height: 40px;

    margin-top: 40px;
    font-size: 28px;
    margin-bottom: 6px;
  }
`;
export const EmailWrapper = styled.div`
  margin-left: 24;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  @media screen and (min-width: 1023px) {
    font-size: 26px;
  }
`;

export const EmailImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  @media screen and (min-width: 1023px) {
    width: 32px;
    height: 32px;
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
  @media screen and (min-width: 1023px) {
  }
`;

export const InputBox = styled.input`
  background-color: #2a2a2a;
  width: 320px;
  border: 0;
  border-radius: 10px;
  color: white;
  padding: 14px 27px;
  @media screen and (min-width: 1023px) {
    width: 500px;
    font-size: 26px;
    padding: 22px 44px;
  }
`;
export const StatusMessageCount = styled.span`
  font-size: 12px;
  opacity: 0.5;

  @media screen and (min-width: 1023px) {
    font-size: 20px;
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
  }
`;
export const DeleteButton = styled.div`
  margin-top: 28px;
  margin-bottom: 100px;
  color: white;
  font-size: 14px;
  text-decoration: underline;
  opacity: 0.5;

  @media screen and (min-width: 1023px) {
    font-size: 26px;
  }
`;

export const LogoutButton = styled.button`
  color: white;
  background-color: black;
  width: 148px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px white;
  @media screen and (min-width: 1023px) {
    border: solid 1.6px;
    font-size: 26px;
    width: 237px;
    height: 77px;
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
  height: 48px;
  font-size: 16px;
  margin: 0 auto;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px;
  @media screen and (min-width: 1023px) {
    border: solid 1.6px;
    font-size: 26px;
    width: 237px;
    height: 77px;
    padding: 17.6px 22.4px 18.2px 22.4px;
  }
`;
export const ButtonWrapper = styled.span`
  background-color: #121212;
  border: 0;
  display: flex;
  padding-bottom: 50px;
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
