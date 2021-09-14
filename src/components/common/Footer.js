import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { HoverLink, FooterLink } from './style';
import logo from '@assets/img/nav/logo.svg';
import click_question from '@assets/img/desktop/click_question.svg';
import click_insta from '@assets/img/desktop/click_insta.svg';
import click_notion from '@assets/img/desktop/click_notion.svg';
import unclick_question from '@assets/img/desktop/unclick_question.svg';
import unclick_insta from '@assets/img/desktop/unclick_insta.svg';
import unclick_notion from '@assets/img/desktop/unclick_notion.svg';

const Wrapper = styled.footer`
  width: 308px;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #121212;
`;

const InnerWrapper = styled.div`
  width: 308px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-size: 12px;
    line-height: 1.6;
    color: #ffffff;
    opacity: 0.5;
  }
`;

const LogoImg = styled.img`
  width: 54px;
  margin: 0 auto 20px 0;
`;

const LinkedContents = styled.div`
  margin-top: 20px;
  margin-left: -2px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HR = styled.hr`
  width: 308px;
  height: 0.5px;
  background-color: #ffffff;
  opacity: 0.2;
  margin: 20px 0px;
`;

const FooterLinkWrapper = styled.div`
  display: flex;
  margin-left: -10px;
  margin-bottom: 28px;
`;

const SnsWrapper = styled.div`
  display: flex;
  height: 40px;
`;

const Footer = () => {
  const [isQestionHover, setIsQestionHover] = useState(false);
  const [isInstaHover, setIsInstaHover] = useState(false);
  const [isNotionHover, setIsNotionHover] = useState(false);

  return (
    <Wrapper>
      <InnerWrapper>
        <LogoImg src={logo} />
        <p>만든이 : Captain, Jjm, Bongbong, Mr. Sorry, Eonji, July</p>
        <p>이메일 : alameme629@gmail.com</p>
        <LinkedContents>
          <SnsWrapper>
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
              url={isNotionHover ? click_notion : unclick_notion}>
              <Link to={{ pathname: 'https://dnd-5.notion.site/ALA-28bcdf46474b4f029464ec61831ae0c6' }} target="_blank">
                <div>
                  <span></span>
                </div>
              </Link>
            </HoverLink>
          </SnsWrapper>
          <HoverLink
            onMouseOver={() => setIsQestionHover(true)}
            onMouseOut={() => setIsQestionHover(false)}
            url={isQestionHover ? click_question : unclick_question}>
            <Link to={{ pathname: 'https://dnd-5.notion.site/ala-8ec976aea5f842abb925b611e16d9545' }} target="_blank">
              <div>
                <span></span>
              </div>
            </Link>
          </HoverLink>
        </LinkedContents>
        <HR />
        <FooterLinkWrapper>
          <Link to={{ pathname: 'https://www.notion.so/dnd-5/1844e5d193ad432bae6a52ad73ded882' }} target="_blank">
            <FooterLink>개인정보 이용 정책</FooterLink>
          </Link>
          <Link to={{ pathname: 'https://www.notion.so/dnd-5/f0e99468bd894f9195f1f8d451002d8b' }} target="_blank">
            <FooterLink>서비스 이용약관</FooterLink>
          </Link>{' '}
        </FooterLinkWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default withRouter(Footer);
