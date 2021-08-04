import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* background-color: #121212; */
  background-color: pink;
  /* display: flex;
  align-items: center; */
  @media screen and (max-width: 767px) {
    width: 360px;
    height: 60px;
    padding: 17px 24px 17.6px;
  }
`;

const LogoWrapper = styled.div`
  float: left;
`;

const IconWrapper = styled.div`
  width: 92px;
  float: right;
  display: flex;
  align-items: center;
  div:not(:last-child) {
    margin-right: 21px;
  }
`;

const TempSpan = styled.div`
  width: 24px;
`;

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>Logo</LogoWrapper>
      <IconWrapper>
        <TempSpan>1</TempSpan>
        <TempSpan>2</TempSpan>
        <TempSpan>3</TempSpan>
      </IconWrapper>
    </Wrapper>
  );
};

export default Header;
