import React from 'react';
import styled from 'styled-components';
import logo from '@assets/img/nav/logo.svg';
import friend from '@assets/img/nav/friend.svg';
import activatedNotice from '@assets/img/nav/activatedNotice.svg';
import inactivatedNotice from '@assets/img/nav/inactivatedNotice.svg';
import avatar from '@assets/img/nav/avatar.svg';

const Wrapper = styled.div`
  background-color: #121212;
  @media screen and (max-width: 767px) {
    width: 360px;
    height: 60px;
    padding: 17px 24px 17.6px;
  }
`;

const LogoWrapper = styled.div`
  float: left;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 24px;
    width: 46px;
  }
`;

const IconWrapper = styled.div`
  width: 112px;
  float: right;
  display: flex;
  align-items: center;
  div:not(:last-child) {
    margin-right: 20px;
  }
`;

const ImgWrapper = styled.div`
  width: 24px;
`;

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <img src={logo} width="37px" height="19px" alt="로고" />
      </LogoWrapper>
      <IconWrapper>
        <ImgWrapper>
          <img src={friend} width="24px" height="24px" alt="친구창" />
        </ImgWrapper>
        <ImgWrapper>
          <img src={inactivatedNotice} width="24px" height="24px" alt="알림창" />
        </ImgWrapper>
        <ImgWrapper>
          <img src={avatar} width="24px" height="24px" alt="프로필 사진" />
        </ImgWrapper>
      </IconWrapper>
    </Wrapper>
  );
};

export default Header;
