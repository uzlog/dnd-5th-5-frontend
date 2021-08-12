import React, { useEffect, useState } from 'react';
import useResponsive from '../../hooks/useResponsive';
import styled from 'styled-components';
import HeaderContainer from '@containers/common/HeaderContainer';
import lockBtn from '@assets/img/alacard-setting/lockBtn.svg';
import unlockBtn from '@assets/img/alacard-setting/unlockBtn.svg';
import helpBtn from '@assets/img/alacard-setting/helpBtn.svg';

const Wrapper = styled.div`
  max-width: 576px;
  width: 40vw;
  height: 100vh;
  background-color: green;
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
  padding: min(3.4vh, 34.8px) min(2.6vw, 38px);
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardLockWrapper = styled.div`
  max-width: 50rem;
  width: 34.7vw;
  background: pink;
  display: flex;
  justify-content: space-between;
  margin-bottom: min(64px, 6.2vh);
`;

const LockWrapper = styled.div`
  img {
    max-width: 28.8px;
    width: min(2vw, 2.8vh, 28.8px);
    max-height: 28.8px;
    height: min(2vw, 2.8vh, 28.8px);
  }
`;

const StyledSpan = styled.span`
  font-size: min(2vw, 2.8vh, 28.8px);
  font-weight: ${(props) => (props.notClicked ? '500' : 'bold')};
  color: white;
`;

const ToggleButton = styled.div`
  max-width: 76.8px;
  width: 5.3vw;
  max-height: 41.6px;
  height: 4vh;
  background-color: black;
  border-radius: 160px;
  display: flex;
  align-items: center;
  &.left {
    background-color: white;
  }
`;

const ToggleInner = styled.div`
  max-width: 38.4px;
  width: min(2.6vw, 3.75vh, 38.4px);
  max-height: 38.4px;
  height: min(2.6vw, 3.75vh, 38.4px);
  background: white;
  border-radius: 160px;
  margin-left: 0%;
  transition: all 0.7s;
  &.left {
    background-color: black;
    margin-left: calc(100% - min(2.6vw, 3.75vh, 38.4px));
    transition: all 0.7s;
  }
`;

const BgHeader = styled.div`
  max-width: 50rem;
  width: 34.7vw;
  background: pink;
  margin-bottom: min(2.2vw, 3.1vh, 32.4px);
  img {
    max-width: 38.4px;
    width: min(2.6vw, 3.75vh, 38.4px);
    max-height: 38.4px;
    height: min(2.6vw, 3.75vh, 38.4px);
  }
`;

const BgTitle = styled.div`
  max-width: 50rem;
  width: 34.7vw;
  margin-bottom: min(3.1vh, 32px);
`;

const BgInnerWrapper = styled.div`
  max-width: 320px;
  width: 22vw;
  display: flex;
  justify-content: space-between;
`;

const BgWrapper = styled.div`
  max-width: 50rem;
  width: 34.7vw;
  max-height: 275px;
  height: 26.8vh;
  background: red;
  display: grid;
  gap: min(2.5vw, 3.6vh, 36.8px);
  grid-template-rows: repeat(3, min(4.9vw, 6.9vh, 70.4px));
  grid-template-columns: repeat(5, min(4.9vw, 6.9vh, 70.4px));
`;

const HI = styled.div`
  max-width: 70.4px;
  width: min(4.9vw, 6.9vh, 70.4px);
  max-height: 70.4px;
  height: min(4.9vw, 6.9vh, 70.4px);
  background: yellow;
`;

const AlaCardSettingComponent = ({ state }) => {
  const viewSize = useResponsive();
  const { originCardFont, originCardSentence, originCardBg, isOpen } = JSON.parse(
    sessionStorage.getItem('originCardInfo'),
  );
  const [toggle, setToggle] = useState(isOpen);
  const [bgSolid, setBgSolid] = useState(true);
  const [bgGrad, setBgGrad] = useState(false);
  const [bgPhoto, setBgPhoto] = useState(false);
  const { alaCardBgSolid, alaCardBgGrad, alaCardBgPhoto } = state;
  const cardStyle = {
    backgroundImage: originCardBg ? 'url(' + originCardBg + ')' : '',
    backgroundSize: originCardBg ? 'cover' : '',
    backgroundColor: originCardBg ? '' : 'red',
    maxWidth: viewSize > '1023' ? '57.6rem' : '31.2rem',
    width: viewSize > '1023' ? '40vw' : '31.2rem',
  };

  const onClickToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const onClickSolid = () => {
    setBgSolid((prevState) => !prevState);
    setBgGrad(false);
    setBgPhoto(false);
  };

  const onClickGrad = () => {
    setBgGrad((prevState) => !prevState);
    setBgSolid(false);
    setBgPhoto(false);
  };

  const onClickPhoto = () => {
    setBgPhoto((prevState) => !prevState);
    setBgGrad(false);
    setBgSolid(false);
  };
  console.log('solid: ', bgSolid);
  console.log('grad: ', bgGrad);
  console.log('photo:', bgPhoto);
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
        <SettingWrapper>
          <CardLockWrapper>
            <LockWrapper>
              <StyledSpan>카드 공개 여부</StyledSpan>
              <img src={toggle ? lockBtn : unlockBtn} alt="잠금 버튼" />
            </LockWrapper>
            <ToggleButton onClick={onClickToggle} className={toggle ? 'left' : ''}>
              <ToggleInner className={toggle ? 'left' : ''} />
            </ToggleButton>
          </CardLockWrapper>
          <BgHeader>
            <StyledSpan>배경 선택</StyledSpan>
            <img src={helpBtn} alt="도움말" />
          </BgHeader>
          <BgTitle>
            <BgInnerWrapper>
              <StyledSpan onClick={onClickSolid} notClicked={bgSolid ? false : true}>
                단색
              </StyledSpan>
              <StyledSpan onClick={onClickGrad} notClicked={bgGrad ? false : true}>
                그라데이션
              </StyledSpan>
              <StyledSpan onClick={onClickPhoto} notClicked={bgPhoto ? false : true}>
                이미지
              </StyledSpan>
            </BgInnerWrapper>
          </BgTitle>
          <BgWrapper>
            {alaCardBgSolid.map((card, idx) => {
              return <HI>{idx}</HI>;
            })}
          </BgWrapper>
        </SettingWrapper>
      </Wrapper>
    </>
  );
};

export default AlaCardSettingComponent;
