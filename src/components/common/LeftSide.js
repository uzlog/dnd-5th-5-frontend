import React, { useState } from 'react';
import styled from 'styled-components';

import { HoverLink } from './style';

import deco from '@assets/img/desktop/deco.svg';
import sendAla from '@assets/img/desktop/sendAla.svg';
import sendBtn from '@assets/img/desktop/sendBtn.svg';
import click_question from '@assets/img/desktop/click_question.svg';
import click_insta from '@assets/img/desktop/click_insta.svg';
import click_notion from '@assets/img/desktop/click_notion.svg';
import unclick_question from '@assets/img/desktop/unclick_question.svg';
import unclick_insta from '@assets/img/desktop/unclick_insta.svg';
import unclick_notion from '@assets/img/desktop/unclick_notion.svg';

const Wrapper = styled.div`
  margin-top: 3vh;
  width: 328px;
  height: 95vh;
  background-color: black;
  margin-right: 6.8rem;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const QuestionWrapper = styled.div`
  margin: 0 0 0 auto;
`;

const ButtonWrapper = styled.a`
  margin: 0 0 0 auto;
  text-decoration: none;
  width: 100px;
  height: 132px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.div`
  width: 100px;
  height: 67px;
  background-color: #121212;
  cursor: pointer;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #b9ff46;
    img {
      filter: invert(100%) sepia(16%) saturate(3091%) hue-rotate(300deg) brightness(97%) contrast(117%);
    }
  }
`;

const AlaImage = styled.img`
  position: absolute;
  margin-left: 27px;
  bottom: 255px;
  width: 45px;
`;

const StyledSpan = styled.span`
  width: 130px;
  color: white;
  font-size: 16px;
  line-height: 1.6;
  margin-top: 10px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 12px;
  line-height: 1.6;
  color: #ffffff;
  opacity: 0.5;
`;

const LinkWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const FooterLink = styled.a`
  font-size: 12px;
  color: #ffffff;
  opacity: 0.5;
  padding-left: 12px;
  transition: 0.3s;
  :hover {
    opacity: 1;
  }
`;

const LeftSide = () => {
  const [isQestionHover, setIsQestionHover] = useState(false);
  const [isInstaHover, setIsInstaHover] = useState(false);
  const [isNotionHover, setIsNotionHover] = useState(false);

  return (
    <Wrapper>
      <HoverLink
        onMouseOver={() => setIsQestionHover(true)}
        onMouseOut={() => setIsQestionHover(false)}
        url={isQestionHover ? click_question : unclick_question}
        href="">
        <div>
          <span></span>
        </div>
        <p>사용방법</p>
      </HoverLink>
      <span>
        <QuestionWrapper>
          <img style={{ float: 'right' }} src={deco} alt="소개" />
          <ButtonWrapper href="https://pm8nnftoca1.typeform.com/to/YKRgB84m" target="_blank">
            <div style={{ display: 'flex' }}>
              <AlaImage src={sendAla} alt="알라" />
            </div>
            <StyledButton>
              <img src={sendBtn} alt="전송 버튼" />
            </StyledButton>
            <StyledSpan>요기로 문의 고고!</StyledSpan>
          </ButtonWrapper>
        </QuestionWrapper>
        <Footer>
          <p>만든이 : caption, jjm, bongbong, mr. sorry, jenny, july</p>
          <p>이메일 : alameme629@gmail.com</p>
          <LinkWrapper>
            <HoverLink
              onMouseOver={() => setIsInstaHover(true)}
              onMouseOut={() => setIsInstaHover(false)}
              url={isInstaHover ? click_insta : unclick_insta}
              href="">
              <div>
                <span></span>
              </div>
            </HoverLink>
            <HoverLink
              onMouseOver={() => setIsNotionHover(true)}
              onMouseOut={() => setIsNotionHover(false)}
              url={isNotionHover ? click_notion : unclick_notion}
              href="">
              <div>
                <span></span>
              </div>
            </HoverLink>
            <FooterLink>개인정보 이용 정책</FooterLink>
            <FooterLink>서비스 이용약관</FooterLink>
          </LinkWrapper>
        </Footer>
      </span>
    </Wrapper>
  );
};

export default LeftSide;
