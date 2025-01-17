import React, { useState } from 'react';
import styled from 'styled-components';
import { HoverLink, FooterContents, FooterLink } from './style';
import deco from '@assets/img/desktop/deco.svg';
import sendAla from '@assets/img/desktop/sendAla.svg';
import sendBtn from '@assets/img/desktop/sendBtn.svg';
import click_question from '@assets/img/desktop/click_question.svg';
import click_insta from '@assets/img/desktop/click_insta.svg';
import click_notion from '@assets/img/desktop/click_notion.svg';
import unclick_question from '@assets/img/desktop/unclick_question.svg';
import unclick_insta from '@assets/img/desktop/unclick_insta.svg';
import unclick_notion from '@assets/img/desktop/unclick_notion.svg';
import { Link } from 'react-router-dom';

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
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    margin-left: 40px;
    margin-bottom: 20px;
  }
`;

const StyledButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: #121212;
  cursor: pointer;
  border-radius: 50px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    background-color: #b9ff46;
    img {
      filter: invert(100%) sepia(16%) saturate(3091%) hue-rotate(300deg) brightness(97%) contrast(117%);
    }
  }
`;

const AlaImage = styled.img`
  position: absolute;
  width: 45px;
`;

const StyledSpan = styled.span`
  width: 130px;
  color: white;
  font-size: 16px;
  line-height: 1.6;
  margin-top: 10px;
`;

const LinkWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
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
        url={isQestionHover ? click_question : unclick_question}>
        <Link to={{ pathname: 'https://dnd-5.notion.site/ala-8ec976aea5f842abb925b611e16d9545' }} target="_blank">
          <div>
            <span></span>
          </div>
          <p>사용방법</p>
        </Link>
      </HoverLink>
      <span>
        <QuestionWrapper>
          <img style={{ float: 'right' }} src={deco} alt="소개" />
          <ButtonWrapper>
            <div>
              <AlaImage src={sendAla} alt="알라" />
            </div>
            <StyledButton>
              <Link to={{ pathname: 'https://forms.gle/spUhPiV8tdQ7iWwP9' }} target="_blank">
                <img src={sendBtn} alt="전송 버튼" />
              </Link>
            </StyledButton>
            <StyledSpan>요기로 문의 고고!</StyledSpan>
          </ButtonWrapper>
        </QuestionWrapper>
        <FooterContents>
          <p>만든이 : Captain, Jjm, Bongbong, Mr. Sorry, Eonji, July</p>
          <p>이메일 : the.ala.official@gmail.com</p>
          <LinkWrapper>
            <HoverLink
              onMouseOver={() => setIsInstaHover(true)}
              onMouseOut={() => setIsInstaHover(false)}
              url={isInstaHover ? click_insta : unclick_insta}>
              <Link to={{ pathname: 'https://www.instagram.com/the.ala.official/' }} target="_blank">
                <div>
                  <span></span>
                </div>
              </Link>
            </HoverLink>
            <HoverLink
              onMouseOver={() => setIsNotionHover(true)}
              onMouseOut={() => setIsNotionHover(false)}
              url={isNotionHover ? click_notion : unclick_notion}>
              <Link to={{ pathname: 'https://dnd-5.notion.site/ALA-28bcdf46474b4f029464ec61831ae0c6' }} target="_blank">
                <div>
                  <span></span>
                </div>
              </Link>
            </HoverLink>
            <Link to={{ pathname: 'https://www.notion.so/dnd-5/1844e5d193ad432bae6a52ad73ded882' }} target="_blank">
              <FooterLink>개인정보 이용 정책</FooterLink>
            </Link>
            <Link to={{ pathname: 'https://www.notion.so/dnd-5/f0e99468bd894f9195f1f8d451002d8b' }} target="_blank">
              <FooterLink>서비스 이용약관</FooterLink>
            </Link>
          </LinkWrapper>
        </FooterContents>
      </span>
    </Wrapper>
  );
};

export default LeftSide;
