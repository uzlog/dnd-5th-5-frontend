import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import HeaderContainer from '@containers/common/HeaderContainer';

const skeletonGradient = keyframes`
  0%{background-position: 90% 70%}
  50%{background-position: 40% 50%}
  100%{background-position: 0% 10%}
`;

const skeletonBackground = css`
  background: linear-gradient(90deg, #121212, #404040, #121212);
`;

const Wrapper = styled.div`
  max-width: 576px;
  width: 40vw;
  height: 100vh;
  background: #121212;
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
  position: absolute;
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
  background: red;
  border-radius: 10px;
  ${skeletonBackground};
  animation: ${skeletonGradient} 1.8s infinite linear;
  background-size: 200% 200%;
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
  height: 60vh;
  @media screen and (max-width: 1023px) {
    width: 36rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    height: 60vh;
  }
`;

const InnerContents = styled.div`
  padding-top: ${(props) => props.paddingTop};
  display: table-cell;
  vertical-align: middle;
  white-space: pre-line;
  height: ${(props) => props.height || ''};
  text-align: left;
`;

const SkeletonSentence = styled.div`
  max-width: 500px;
  width: 34.7vw;
  height: min(80px, 7.8vh);
  margin-top: 30px;
  ${skeletonBackground};
  animation: ${skeletonGradient} 1.8s infinite linear;
  background-size: 200% 200%;

  border-radius: 10px;
  @media screen and (max-width: 1023px) {
    width: 32rem;
    height: 50px;
  }
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

const FriendWrapper = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1023px) {
    padding: 12px 24px;
  }
`;

const SkeletonImg = styled.div`
  ${skeletonBackground};
  animation: ${skeletonGradient} 1.8s infinite linear;
  background-size: 200% 200%;

  border-radius: 50px;
  width: 64px;
  height: 64px;
  border-radius: 10px;
  @media screen and (max-width: 1023px) {
    width: 40px;
    height: 40px;
  }
`;
const FriendInfoWrapper = styled.div`
  max-width: 327px;
  width: 22.7vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 64px;
  margin-left: min(1.3vw, 19px);
  margin-right: min(1.3vw, 19px);
  @media screen and (max-width: 1023px) {
    width: 204px;
    height: 40px;
    margin-left: 12px;
    margin-right: 12px;
  }
`;

const SkeletonInfoBox = styled.div`
  width: 150px;
  height: 22px;
  ${skeletonBackground};
  animation: ${skeletonGradient} 1.8s infinite linear;
  background-size: 200% 200%;

  border-radius: 10px;
  @media screen and (max-width: 1023px) {
    width: 100px;
    height: 16px;
  }
`;

const ImgWrapper = styled.div`
  ${skeletonBackground};
  animation: ${skeletonGradient} 1.8s infinite linear;
  background-size: 200% 200%;

  max-width: 64px;
  width: 4.4vw;
  max-height: 56px;
  height: 5.5vh;
  border-radius: 10px;
  @media screen and (max-width: 1023px) {
    cursor: ${(props) => props.cursor};
    width: 44px;
    height: 36px;
  }
`;

const StyledButton = styled.button`
  ${skeletonBackground};
  animation: ${skeletonGradient} 1.8s infinite linear;
  animation-direction: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 368px;
  width: 25.5vw;
  height: 7.5vh;
  border-radius: 99px;
  border: none;
  background-size: 200% 200%;
  @media screen and (max-width: 1023px) {
    left: 110px;
    width: 230px;
    min-height: 48px;
    border-radius: 62px;
  }
`;

const MyPageSkeleton = ({ state }) => {
  const { nickname } = state;
  const [isOwner] = useState(sessionStorage.getItem('nickname') === nickname);
  return (
    <>
      <Wrapper>
        <HeaderContainer />
        {isOwner ? (
          <MoreButtonWrapper>
            <MoreButtonInnerWrapper>
              <MoreButton />
            </MoreButtonInnerWrapper>
          </MoreButtonWrapper>
        ) : (
          <FriendWrapper>
            <SkeletonImg />
            <FriendInfoWrapper>
              <SkeletonInfoBox />
              <SkeletonInfoBox />
            </FriendInfoWrapper>
            <ImgWrapper />
          </FriendWrapper>
        )}
        <ContentFlexWrapper>
          <ContentsWrapper>
            <InnerContents>
              <SkeletonSentence />
              <SkeletonSentence />
              <SkeletonSentence />
              <SkeletonSentence />
            </InnerContents>
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
