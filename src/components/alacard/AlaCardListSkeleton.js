import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '@containers/common/HeaderContainer';
import { skeletonGradient, skeletonBackground } from '@components/common/Skeleton';

const Wrapper = styled.div`
  max-width: 57.6rem;
  width: 40vw;
  height: 92vh;
  overflow-y: auto;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    padding-right: 3.84rem;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
    width: 36rem;
    & > div {
      padding-right: 2.4rem;
    }
  }
`;

const TitleWrapper = styled.div`
  max-width: 500px;
  width: 35vw;
  display: flex;
  align-items: center;
  margin-top: min(3.44vh, 35.2px);
  margin-bottom: min(3.6vh, 36.8px);
  @media screen and (max-width: 1023px) {
    width: 308px;
    margin-bottom: 23px;
  }
`;

const Title = styled.div`
  ${skeletonBackground};
  animation: ${skeletonGradient} 1.8s infinite linear;
  background-size: 200% 200%;
  border-radius: 10px;
  width: 135px;
  height: 50px;
  @media screen and (max-width: 1023px) {
    width: 100px;
    height: 38px;
  }
`;

const ContentsWrapper = styled.div`
  display: table;
  max-width: 50rem;
  width: 34.7vw;
  padding: min(3.75vh, 3.84rem) min(2.6vw, 3.84rem);
  @media screen and (max-width: 1023px) {
    width: 31.2rem;
    padding: 2.4rem 2.4rem 2.4rem 2.4rem;
  }
`;

const ContentFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div:nth-child(1) {
    height: 350px;
    @media screen and (max-width: 1023px) {
      height: 250px;
    }
  }
  & > div:nth-child(2) {
    height: 200px;
    @media screen and (max-width: 1023px) {
      height: 150px;
    }
  }
  & > div:nth-child(3) {
    height: 500px;
    @media screen and (max-width: 1023px) {
      height: 300px;
    }
  }
  & > div:nth-child(4) {
    height: 200px;
    @media screen and (max-width: 1023px) {
      height: 250px;
    }
  }
`;

const InnerContents = styled.div`
  display: table-cell;
  background-color: red;
  max-width: 50rem;
  width: 34.7vw;
  margin-bottom: 1.9vh;
  ${skeletonBackground};
  animation: ${skeletonGradient} 1.8s infinite linear;
  background-size: 200% 200%;
  border-radius: 10px;
  @media screen and (max-width: 1023px) {
    max-width: 31.2rem;
    width: 31.2rem;
    margin-bottom: 2rem;
  }
`;

const AlaCardListSkeleton = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <HeaderContainer />
      <Wrapper>
        <TitleWrapper>
          <Title />
        </TitleWrapper>
        <ContentsWrapper>
          <ContentFlexWrapper>
            <InnerContents />
            <InnerContents />
            <InnerContents />
            <InnerContents />
          </ContentFlexWrapper>
        </ContentsWrapper>
      </Wrapper>
    </div>
  );
};

export default AlaCardListSkeleton;
