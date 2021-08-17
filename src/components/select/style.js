import styled from 'styled-components';

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
  }
`;
export const KeywordIntro = styled.div`
  color: white;
  margin-left: 24px;
  margin-top: 3.1vh;
  font-size: 18px;
  @media screen and (min-width: 1023px) {
    font-size: min(2.9rem, 4.5vh);
    margin-left: 1.8vw;
  }
`;
export const SelectedCount = styled.div`
  color: white;
  margin-left: 24px;
  margin-top: 3.1vh;
  font-size: 16px;
  @media screen and (min-width: 1023px) {
    font-size: 26px;
    margin-left: 1.8vw;
    margin-top: 3.1vh;
  }
`;
export const SelectedCountFoucs = styled.b`
  color: #b9ff46;
`;

export const SelectViewWrapper = styled.div`
  overflow: scroll;
  white-space: nowrap;
  margin-top: 7vh;
  margin-bottom: 11.7vh;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (min-width: 1023px) {
    margin-top: 8vh;
    margin-bottom: 9.7vh;
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
  border-radius: 50px;
  height: 50px;
  border: 0 solid;
  background-color: rgba(255, 255, 255, 0.1);
  @media screen and (min-width: 1023px) {
    height: 7.8vh;
    margin: 1.7vh 8px;
    padding: 0.8vh 45px;
  }
`;
export const HintOfItem = styled.div`
  font-size: 10px;
  color: #ffffff;
  @media screen and (min-width: 1023px) {
    font-size: min(1.5vh, 2.6rem);
  }
`;
export const WordNameOfItem = styled.div`
  font-size: 16px;
  color: #ffffff;
  @media screen and (min-width: 1023px) {
    font-size: min(4vh, 2.6rem);
  }
`;
export const WhiteBox = styled.span`
  display: flex;
  justify-content: center;
  min-width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: white;
  margin: 0.7vh 12px;
  padding: 0.7vh 22px;
  @media screen and (min-width: 1023px) {
    height: 7.8vh;
    min-width: 7.8vh;
  }
`;
export const ButtonWrapper = styled.span`
  background-color: #121212;
  border: 0;
  display: flex;
  padding-bottom: 4.8vh;
`;

export const GetMoreWorldButton = styled.button`
  color: white;
  background-color: #121212;
  width: 148px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  margin: 0 auto;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px white;
  @media screen and (min-width: 1023px) {
    border: solid 1.6px;
    font-size: min(33vw, 4vh, 2.6rem);
    width: 41.7%;
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

  margin: 0 auto;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px;
  @media screen and (min-width: 1023px) {
    border: solid 1.6px;
    font-size: min(33vw, 4vh, 2.6rem);

    width: 41.7%;
    height: 7.5vh;
    padding: 17.6px 22.4px 18.2px 22.4px;
  }
`;

export const HeaderWrapper = styled.div`
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

export const HeaderInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 74px;
  width: 6.1vw;
  height: 3.7vh;
  min-height: 30px;
  img {
    max-width: 74px;
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
  max-width: ${(props) => (props.close ? '23px' : '39px')};
  min-height: 38.4px;
  width: ${(props) => (props.close ? '1.6vw' : '2.7vw')};
  height: ${(props) => (props.close ? '1.6vw' : '2.7vw')};
  img {
    width: ${(props) => (props.close ? '1.6vw' : '2.7vw')};
    height: ${(props) => (props.close ? '1.6vw' : '2.7vw')};
  }
  @media screen and (max-width: 1023px) {
    width: 24px;
    height: 24px;

    img {
      width: ${(props) => (props.close ? '14px' : '22px')};
      height: ${(props) => (props.close ? '14px' : '22px')};
    }
  }
`;
