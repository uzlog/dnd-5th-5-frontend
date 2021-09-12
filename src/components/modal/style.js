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
  /* max-height: 64px; */
  /* height: 6.25vh; */
  height: 64px;
  border-radius: 50%;
  border: 1px solid #d2d6dc;
  @media screen and (max-width: 1023px) {
    width: 40px;
    height: 40px;
  }
`;

export const AlarmInnerContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 330px;
  width: 24vw;

  & > :nth-child(3) {
    margin-top: 5px;
  }
  @media screen and (max-width: 1023px) {
    height: 88px;
    width: 207px;
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
  & > span {
    font-weight: bold;
  }
  @media screen and (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
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
  /* font-weight: bold; */
  @media screen and (max-width: 1023px) {
    width: 55px;
    height: 29px;
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
  /* font-weight: bold; */
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
`;
