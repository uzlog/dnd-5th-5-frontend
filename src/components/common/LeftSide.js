import React from 'react';
import styled from 'styled-components';
import deco from '@assets/img/desktop/deco.svg';
import sendAla from '@assets/img/desktop/sendAla.svg';
import sendBtn from '@assets/img/desktop/sendBtn.svg';

const Wrapper = styled.div`
  width: 38.6rem;
  height: 100vh;
  background-color: black;
  margin-right: 6.8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
  width: 146px;
  height: 132px;
  margin-top: 10px;
  margin-bottom: 67px;
  margin-left: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.div`
  width: 120px;
  height: 77px;
  background-color: #121212;
  cursor: pointer;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  &:hover {
    background-color: #b9ff46;
    img {
      filter: invert(100%) sepia(16%) saturate(3091%) hue-rotate(300deg) brightness(97%) contrast(117%);
    }
  }
`;

const AlaImage = styled.img`
  position: absolute;
  top: calc(100vh - 212px);
  margin-left: 19.3px;
`;

const StyledSpan = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
`;

const LeftSide = () => {
  return (
    <div>
      <Wrapper>
        <img src={deco} alt="소개" />
        <ButtonWrapper>
          <div style={{ display: 'flex' }}>
            <AlaImage src={sendAla} alt="알라" />
          </div>
          <StyledButton>
            <img src={sendBtn} alt="전송 버튼" />
          </StyledButton>
          <StyledSpan>요기로 문의 ㄱㄱ</StyledSpan>
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
};

export default LeftSide;
