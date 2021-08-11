import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 360px;
  background-color: #121212;
  @media screen and (min-width: 1023px) {
    width: 576px;
  }
`;
export const KeywordIntro = styled.div`
  color: white;
  margin-left: 24px;
  margin-top: 20px;
  font-size: 18px;
  @media screen and (min-width: 1023px) {
    font-size: 29px;
    margin-left: 38px;
  }
`;
export const SelectedCount = styled.div`
  color: white;
  margin-left: 24px;
  margin-top: 20px;
  font-size: 16px;
  @media screen and (min-width: 1023px) {
    font-size: 26px;
    margin-left: 38px;
    margin-top: 32px;
  }
`;
export const SelectViewWrapper = styled.div`
  overflow: scroll;
  white-space: nowrap;
  margin-top: 45px;
  margin-bottom: 75px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (min-width: 1023px) {
    margin-top: 83px;
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
  margin: 11.5px 12px;
  padding: 5px 28px;
  border-radius: 50px;
  height: 50px;
  border: 0 solid;
  background-color: rgba(255, 255, 255, 0.1);
  @media screen and (min-width: 1023px) {
    height: 83px;
    padding: 8px 45px;
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
  margin: 5px 12px;
  padding: 5px 22px;
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
  font-size: 16px;
  margin: 0 auto;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px var(--primary-color-white);
  @media screen and (min-width: 1023px) {
    border: solid 1.6px var(--primary-color-white);
    font-size: 26px;
    width: 237px;
    height: 77px;
    padding: 17.6px 22.4px 18.2px 22.4px;
  }
`;
export const SubmitButton = styled.button`
  color: black;
  background-color: white;
  width: 148px;
  height: 48px;
  font-size: 16px;

  margin: 0 auto;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px var(--primary-color-white);
  @media screen and (min-width: 1023px) {
    border: solid 1.6px var(--primary-color-white);
    font-size: 26px;

    width: 237px;
    height: 77px;
    padding: 17.6px 22.4px 18.2px 22.4px;
  }
`;
