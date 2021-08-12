import React, { useEffect, useState } from 'react';
import useResponsive from '../../hooks/useResponsive';
import styled from 'styled-components';
import HeaderContainer from '@containers/common/HeaderContainer';

const Wrapper = styled.div`
  max-width: 576px;
  width: 40vw;
  height: 100vh;
  background-color: #121212;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const TitleWrapper = styled.div`
  max-width: 57.6rem;
  background-color: pink;
  width: 40vw;
  max-height: 135px;
  height: 13.1vh;
  display: flex;
  padding: 3.4vh 2.6vw;
  @media screen and (max-width: 1023px) {
    width: 360px;
    font-size: 2.4rem;
    padding: 2.3rem 2.4rem;
  }
`;

const Title = styled.div`
  font-size: min(2.6vw, 3.7vh, 3.8rem);
  font-weight: bold;
  line-height: 1.6;
  color: white;
  @media screen and (max-width: 1023px) {
    font-size: 2.4rem;
  }
`;

const ContentsWrapper = styled.div`
  display: table;
  max-width: 57.6rem;
  width: 40vw;
  /* padding: 5.4vh 2.6vw; */
  @media screen and (max-width: 1023px) {
    min-width: 36rem;
  }
`;

const ContentsInnerWrapper = styled.div`
  display: table;
  max-width: 50rem;
  width: 34.7vw;
  padding: min(3.75vh, 3.84rem) min(2.6vw, 3.84rem);
  line-height: 1.6;
  letter-spacing: -0.08rem;
  font-size: min(4vw, 5.6vh, 5.76rem);
  font-weight: 300;
  @media screen and (max-width: 1023px) {
    min-width: 31.2rem;
    font-size: 2.4rem;
    padding: 2.4rem 2.4rem 2.4rem 2.4rem;
  }
`;

const InnerContents = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: left;
`;

const SettingWrapper = styled.div`
  max-width: 57.6rem;
  width: 40vw;
  max-height: 600px;
  height: 58vh;
  background-color: blue;
  margin-top: min(4.3vh, 44.8px);
`;

const AlaCardSettingComponent = () => {
  const viewSize = useResponsive();
  const { originCardFont, originCardSentence, originCardBg } = JSON.parse(sessionStorage.getItem('originCardInfo'));

  const cardStyle = {
    backgroundImage: originCardBg ? 'url(' + originCardBg + ')' : '',
    backgroundSize: originCardBg ? 'cover' : '',
    backgroundColor: originCardBg ? '' : 'red',
    maxWidth: viewSize > '1023' ? '57.6rem' : '31.2rem',
    width: viewSize > '1023' ? '40vw' : '31.2rem',
  };

  return (
    <>
      <Wrapper>
        <HeaderContainer />
        <TitleWrapper>
          <Title>배경/설정 변경</Title>
        </TitleWrapper>
        <div style={cardStyle}>
          <ContentsWrapper>
            <ContentsInnerWrapper>
              <InnerContents style={originCardFont} dangerouslySetInnerHTML={{ __html: originCardSentence }} />
            </ContentsInnerWrapper>
          </ContentsWrapper>
        </div>
        <SettingWrapper></SettingWrapper>
      </Wrapper>
    </>
  );
};

export default AlaCardSettingComponent;
