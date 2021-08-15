import styled from 'styled-components';

export const MainWrapper = styled.div`
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
    width: 360px;
    background-color: #121212;
    height: 100%;
  }
  @media screen and (min-width: 1023px) {
    max-width: 576px;
  }
`;
export const KeywordIntro = styled.div`
  color: white;
  margin-left: 24px;
  margin-top: 3.1vh;
  font-size: 18px;
  @media screen and (min-width: 1023px) {
    font-size: 29px;
    margin-left: 38px;
  }
`;
export const SelectedCount = styled.div`
  color: white;
  margin-left: 24px;
  margin-top: 3.1vh;
  font-size: 16px;
  @media screen and (min-width: 1023px) {
    font-size: 26px;
    margin-left: 38px;
    margin-top: 3.1vh;
  }
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
export const EachSelectViewItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 1.7vh 12px;
  padding: 0.7vh 28px;
  border-radius: 50px;
  height: 50px;
  border: 0 solid;
  background-color: rgba(255, 255, 255, 0.1);
  @media screen and (min-width: 1023px) {
    height: 80px;
    padding: 0.8vh 45px;
  }
`;
export const HintOfItem = styled.div`
  font-size: 10px;
  color: #ffffff;
  @media screen and (min-width: 1023px) {
    font-size: 16px;
  }
`;
export const WordNameOfItem = styled.div`
  font-size: 16px;
  color: #ffffff;
  @media screen and (min-width: 1023px) {
    font-size: 26px;
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
    min-width: 80px;
    height: 80px;
  }
`;
export const ButtonWrapper = styled.span`
  background-color: #121212;
  border: 0;
  display: flex;
  padding-bottom: 50px;
`;

export const GetMoreWorldButton = styled.button`
  color: white;
  background-color: black;
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
