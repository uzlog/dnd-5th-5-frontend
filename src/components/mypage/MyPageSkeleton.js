import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeaderContainer from '@containers/common/HeaderContainer';

const skeletonGradient = keyframes`
    0% {
      background-color: rgba(225, 225, 225, 0.1);
    }

    50% {
      background-color: rgba(225, 225, 225, 1)
    }

    100% {
      background-color: rgba(225, 225, 225, 0.1)
  }
`;

const Wrapper = styled.div`
  max-width: 576px;
  width: 40vw;
  height: 100vh;
  animation: ${skeletonGradient} 3s infinite ease-in-out;
  overflow: hidden;
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
    width: 36rem;
    min-height: 64rem;
  }
`;

const MoreButtonWrapper = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 38.4px;
    height: 38.4px;
  }
  @media screen and (max-width: 1023px) {
    min-height: 6.4rem;
    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const MoreButtonInnerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 34.7vw;
  max-width: 500px;

  @media screen and (max-width: 1023px) {
    width: 311px;
  }
`;

const MoreButton = styled.div`
  cursor: pointer;
  width: 38.4px;
  height: 3.8vh;
  cursor: pointer;
  animation: ${skeletonGradient} 3s infinite ease-in-out;
  @media screen and (max-width: 1023px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const ContentFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentsWrapper = styled.div`
  display: table;
  padding-bottom: 10vh;
  width: 34.7vw;
  max-width: 500px;
  height: 80vh;
  @media screen and (max-width: 1023px) {
    width: 36rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    height: 85vh;
  }
`;

const SkeletonSentence = styled.div`
  max-width: 500px;
  width: 34.7vw;
  height: 80px;
  margin-top: 30px;
  animation: ${skeletonGradient} 3s infinite ease-in-out;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  bottom: 0%;
  padding-bottom: 5vh;
  width: 34.7vw;
  max-width: 500px;
  margin: 0 auto;
  @media screen and (max-width: 1023px) {
    width: 311px;
  }
`;

const StyledButton = styled.button`
  animation: ${skeletonGradient} 3s infinite ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 368px;
  width: 25.5vw;
  height: 7.5vh;
  border-radius: 99px;
  border: none;
  @media screen and (max-width: 1023px) {
    left: 110px;
    width: 230px;
    min-height: 48px;
    border-radius: 62px;
  }
`;

const MyPageSkeleton = () => {
  return (
    <>
      <Wrapper>
        <HeaderContainer />
        <MoreButtonWrapper>
          <MoreButtonInnerWrapper>
            <MoreButton />
          </MoreButtonInnerWrapper>
        </MoreButtonWrapper>
        <ContentFlexWrapper>
          <ContentsWrapper>
            <SkeletonSentence />
            <SkeletonSentence />
            <SkeletonSentence />
            <SkeletonSentence />
          </ContentsWrapper>
        </ContentFlexWrapper>
        <ButtonWrapper>
          <StyledButton />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default MyPageSkeleton;
