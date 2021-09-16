import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  max-width: 525px;
  max-height: ${(props) => (props.delete ? '448px' : '864px')};
  width: 36.4vw;
  height: ${(props) => (props.delete ? '43.7vh' : '84.3vh')};
  overflow-y: auto;
  @media screen and (max-width: 1023px) {
    left: 0px;
    width: 328px;
    height: ${(props) => (props.delete ? '280px' : '540px')};
  }
  @media screen and (max-width: 1023px) and (max-height: 660px) {
    top: calc(9.4vh - 8.3vh);
  }
`;

export const AvatarImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid #d2d6dc;
  @media screen and (max-width: 1023px) {
    width: 40px;
    height: 40px;
  }
`;

export const AlarmContentsLink = styled(Link)`
  text-decoration: none;
  max-width: 460px;
  width: 31.9vw;
  display: flex;
  border-bottom: 1px solid #e2e8f0;
  height: 100%;
  & > div:nth-child(2) {
    margin-left: min(1.7vw, 25.6px);
  }
  @media screen and (max-width: 1023px) {
    width: 288px;
    height: 100%;
  }
`;

export const AlarmInnerContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  width: 24vw;
  & > :nth-child(3) {
    margin-top: 5px;
  }
  @media screen and (max-width: 1023px) {
    width: 232px;
  }
`;

export const FriendContentsWrapper = styled.div`
  max-width: 460px;
  width: 31.9vw;
  display: flex;
  border-bottom: 1px solid #e2e8f0;
  height: 100%;
  & > div:nth-child(2) {
    margin-left: min(1.7vw, 25.6px);
  }
  @media screen and (max-width: 1023px) {
    width: 288px;
  }
`;

export const FriendInnerContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 330px;
  width: 24vw;
  & > :nth-child(3) {
    margin-top: 5px;
  }
  @media screen and (max-width: 1023px) {
    width: 232px;
  }
`;

export const AlarmTitle = styled.span`
  color: #64748b;
  font-size: min(1.3vw, 16px);
  font-weight: normal;
  line-height: 1.6;
  text-align: left;
  @media screen and (max-width: 1023px) {
    font-size: 10px;
  }
`;

export const AlarmMessage = styled.span`
  color: #121212;
  font-size: min(1.5vw, 19.2px);
  margin-top: 20px;
  margin-bottom: ${(props) => props.marginBottom};
  line-height: 1.6;
  & > span {
    font-weight: bold;
  }
  @media screen and (max-width: 1023px) {
    margin-top: 10px;
    font-size: 12px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  line-height: 1.6;
  max-width: 70px;
  width: 100%;
  padding: 6.4px 12.8px;
  border-radius: 4.8px;
  margin-right: 15px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: 19.2px;
  @media screen and (max-width: 1023px) {
    width: 50px;
    height: 27px;
    font-size: 12px;
    border-radius: 3px;
    margin-right: 8px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 19.2px;
  max-width: 170px;
  width: 100%;
  border-radius: 4.8px;
  background-color: #fc3e57;
  color: white;
  padding: 6.4px 12.8px;
  a {
    text-decoration: none;
    color: white;
  }
  @media screen and (max-width: 1023px) {
    width: 39px;
    height: 27px;
    border-radius: 3px;
    margin-right: 8px;
  }
`;

export const AlarmAvatar = styled.div`
  width: 100%;
  max-width: 64px;
  max-height: 64px;
  background-color: #d2d6dc;
  border-radius: 50%;
  @media screen and (max-width: 1023px) {
    width: 42px;
    height: 42px;
  }
`;

export const Header = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 460px;
  width: 31.9vw;
  font-size: min(3.1vh, 5.5vw, 32px);
  img {
    cursor: pointer;
    max-width: 38.4px;
    max-height: 38.4px;
    width: 2.6vw;
    height: 3.75vh;
  }
  @media screen and (max-width: 1023px) {
    font-size: 20px;
    width: 290px;
    img {
      cursor: pointer;
      width: 24px;
      height: 24px;
    }
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: min(2.2vw, 3.1vh, 32px);
  @media screen and (max-width: 1023px) {
    margin-top: 20px;
  }
`;

export const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  line-height: 1.6;
  font-weight: normal;
  color: #000;
  font-size: min(calc((1.7vw + 2.5vh) / 2), 25.6px);
  @media screen and (max-width: 1023px) {
    font-size: 16px;
    height: 50vh;
  }
`;

export const AlarmContents = styled.div`
  margin-bottom: 20px;
  display: flex;
  max-width: 460.8px;
  width: 32vw;
  max-height: 188px;
  &:first-child {
    margin-top: 57.6px;
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-left: min(1.7vw, 25.6px);
  }

  @media screen and (max-width: 1023px) {
    width: 288px;
    &:first-child {
      margin-top: 36px;
    }
  }
`;
