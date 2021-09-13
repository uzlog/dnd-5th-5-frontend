import styled, { keyframes } from 'styled-components';

export const Header = styled.div`
  background-color: #121212;
  max-width: 576px;
  width: 40vw;
  height: 9.4vh;
  padding: 3.1vh 2.2vw 3.1vh 1.8vw;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (max-width: 1023px) {
    width: 360px;
    min-height: 60px;
    height: 9.3vh;
    padding: 2.8vh 20px 3vh 20px;
  }
`;
export const MainWrapper = styled.div`
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
    width: 360px;
    background-color: #121212;
    height: 100vh;
  }
  @media screen and (min-width: 1023px) {
    max-width: 576px;
    height: 100vh;
    background-color: #121212;
    width: 40vw;
    overflow: hidden;
  }
`;
export const KeywordIntro = styled.div`
  color: white;
  font-family: 'spoqaHanSansBold';
  margin-left: 24px;
  margin-top: 2.1vh;
  font-size: 18px;
  line-height: 1.6;
  @media screen and (min-width: 1023px) {
    font-size: 28.8px;
    margin-left: 2vw;
  }
  p {
    color: white;
    margin-top: 3.1vh;
    font-size: 16px;
    @media screen and (min-width: 1023px) {
      font-size: min(2rem, 2.3vh);
    }
    b {
      color: #b9ff46;
    }
  }
`;

export const SelectViewWrapper = styled.div`
  overflow: scroll;
  white-space: nowrap;
  margin-top: 6vh;
  margin-bottom: 8vh;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (min-width: 1023px) {
    margin-top: 7.5vh;
    margin-bottom: 6.5vh;
  }
`;
export const EachSelectViewLine = styled.span`
  display: flex;
  align-items: center;
`;
export const EachSelectViewItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  justify-content: space-evenly;
  margin: 1.7vh 6px;
  padding: 0.7vh 28px;
  height: 40px;
  border-radius: 50px;
  border: 0 solid;
  background-color: rgba(255, 255, 255, 0.1);
  @media screen and (min-width: 1023px) {
    height: 6.5vh;
    margin: 1.7vh 8px;
    padding: 1vh 30px;
  }
`;
export const HintOfItem = styled.div`
  opacity: 0.5;
  font-size: 10px;
  color: #ffffff;
  @media screen and (min-width: 1023px) {
    font-size: 15px;
  }
`;
export const WordNameOfItem = styled.div`
  font-size: 16px;
  color: #ffffff;
  @media screen and (min-width: 1023px) {
    font-size: 20px;
  }
`;
export const WhiteBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: white;
  font-size: 17px;
  margin: 0.7vh 12px;
  @media screen and (min-width: 1023px) {
    height: 7.8vh;
    min-width: 7.8vh;
    font-size: 18px;
  }
`;
export const ButtonWrapper = styled.span`
  background-color: #121212;
  border: 0;
  display: flex;
  padding-bottom: 4.8vh;
  margin: 0 24px;
  justify-content: space-between;
  img {
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 1023px) {
    margin: 0 2vw;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const GetMoreWordButton = styled.button`
  color: white;
  cursor: pointer;
  background-color: #121212;
  width: 148px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px white;
  :active {
    background-color: white;
    color: #121212;
  }
  @media screen and (min-width: 1023px) {
    border: solid 1.6px;
    font-size: min(33vw, 3vh, 2.6rem);
    width: 47.7%;
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
  height: 48px;
  font-size: 16px;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: 1px solid;
  @media screen and (min-width: 1023px) {
    border: 1.6px solid #2a2a2a;
    font-size: min(33vw, 3vh, 2.6rem);
    width: 47.7%;
    height: 7.5vh;
    padding: 17.6px 22.4px 18.2px 22.4px;
  }
`;

export const HeaderWrapper = styled.div`
  background-color: #121212;
  max-width: 576px;
  width: 40vw;
  padding-top: 20px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (max-width: 1023px) {
    width: 360px;
    min-height: 60px;
  }
`;

export const HeaderInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2vw;
  @media screen and (max-width: 1023px) {
    width: 308px;
    margin: 0 24px;
  }
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 65px;
  width: 6.1vw;
  height: 4vh;
  min-height: 35px;
  img {
    max-width: 65px;
    width: 6.1vw;
    height: 3.7vh;
    min-height: 30px;
  }
  @media screen and (max-width: 1023px) {
    width: 37px;
    min-height: 24px;
    height: 2.3vh;
    display: flex;
    justify-content: flex-start;
    img {
      width: 37px;
      min-height: 24px;
      height: 2.3vh;
    }
  }
`;

export const HeaderIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8vw;
  max-width: 30px;
  img {
    max-width: 30px;
    width: 1.8vw;
    height: 1.8vw;
  }
  @media screen and (max-width: 1023px) {
    width: 20px;
    height: 20px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
`;
export const ToastWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

export const Toast = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #000000;
  line-height: 1.6;
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
