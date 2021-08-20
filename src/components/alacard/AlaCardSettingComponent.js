import React, { useEffect, useState } from 'react';
import useResponsive from '../../hooks/useResponsive';
import { withRouter } from 'react-router';
import styled, { keyframes } from 'styled-components';
import HeaderContainer from '@containers/common/HeaderContainer';
import lockBtn from '@assets/img/alacard-setting/lockBtn.svg';
import unlockBtn from '@assets/img/alacard-setting/unlockBtn.svg';
import helpBtn from '@assets/img/alacard-setting/helpBtn.svg';
import bgSelected from '@assets/img/alacard-setting/bgSelected.svg';
import { uploadCardInfo } from '@modules/cardSetting';

const fadeIn = keyframes`
        from {
            opacity: 0;
        }
 
        to {
            opacity: 1;
        }
`;

const Wrapper = styled.div`
  max-width: 576px;
  width: 40vw;
  height: 92vh;
  background-color: #121212;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
    width: 360px;
    height: 92vh;
  }
`;

const TitleWrapper = styled.div`
  max-width: 500px;
  width: 35vw;
  margin: 0 auto;
  font-size: min(calc((2.6vw + 3.75vh) / 2), 38.4px);
  margin-top: min(3.44vh, 35.2px);
  margin-bottom: min(3.6vh, 36.8px);
  @media screen and (max-width: 1023px) {
    width: 308px;
    font-size: 2.4rem;
    margin-bottom: 23px;
  }
`;
// const TitleWrapper = styled.div`
//   max-width: 57.6rem;
//   width: 40vw;
//   max-height: 135px;
//   height: 13.1vh;
//   display: flex;
//   padding: min(3.4vh, 34.8px) min(2.6vw, 38px);
//   @media screen and (max-width: 1023px) {
//     width: 360px;
//     font-size: 2.4rem;
//     padding: 2.4rem 2.4rem;
//   }
// `;

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
  margin-top: min(4.3vh, 44.8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div:last-child {
    margin-top: min(9.3vh, 96px);
    margin-bottom: min(3.75vh, 38.4px);
  }
  @media screen and (max-width: 1023px) {
    width: 360px;
    margin-top: 28px;
    & > div:last-child {
      margin-top: 59px;
      margin-bottom: 24px;
    }
  }
`;

const CardLockWrapper = styled.div`
  max-width: 50rem;
  width: 34.7vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: min(64px, 6.2vh);
  @media screen and (max-width: 1023px) {
    width: 312px;
    margin-bottom: 40px;
  }
`;

const LockWrapper = styled.div`
  img {
    max-width: 28.8px;
    width: min(2vw, 2.8vh, 28.8px);
    max-height: 28.8px;
    height: min(2vw, 2.8vh, 28.8px);
    margin-left: 4px;
    @media screen and (max-width: 1023px) {
      width: 18px;
      height: 18px;
      margin-left: 4px;
    }
  }
`;

const StyledSpan = styled.span`
  cursor: ${(props) => props.cursor};
  font-size: min(2vw, 2.8vh, 28.8px);
  font-weight: ${(props) => (props.notClicked ? '500' : 'bold')};
  color: white;
  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }
`;

const ToggleButton = styled.div`
  cursor: pointer;
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
  @media screen and (max-width: 1023px) {
    width: 48px;
    height: 26px;
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
  @media screen and (max-width: 1023px) {
    width: 24px;
    height: 24px;
    border-radius: 100px;
    &.left {
      margin-left: 23px;
    }
  }
`;

const BgHeader = styled.div`
  max-width: 50rem;
  width: 34.7vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: min(2.2vw, 3.1vh, 32.4px);
  img {
    cursor: pointer;
    max-width: 38.4px;
    width: min(2.6vw, 3.75vh, 38.4px);
    max-height: 38.4px;
    height: min(2.6vw, 3.75vh, 38.4px);
  }
  @media screen and (max-width: 1023px) {
    width: 312px;
    margin-bottom: 20px;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const BgTitle = styled.div`
  max-width: 50rem;
  width: 34.7vw;
  margin-bottom: min(3.1vh, 32px);
  @media screen and (max-width: 1023px) {
    width: 312px;
  }
`;

const BgInnerWrapper = styled.div`
  max-width: 320px;
  width: 22vw;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    width: 201px;
  }
`;

const BgWrapper = styled.div`
  display: grid;
  max-width: 50rem;
  width: 34.7vw;
  max-height: 275px;
  height: 26.8vh;
  justify-content: space-between;
  row-gap: min(3.1vh, 32px);
  grid-template-rows: ${(props) =>
    props.bgSolid ? 'repeat(3, min(4.9vw, 6.9vh, 70.4px))' : 'repeat(2, min(4.9vw, 6.9vh, 70.4px))'};
  grid-template-columns: repeat(5, min(4.9vw, 6.9vh, 70.4px));
  @media screen and (max-width: 1023px) {
    width: 312px;
    height: 172px;
    row-gap: 20px;
    grid-template-rows: ${(props) => (props.bgSolid ? 'repeat(3, 44px)' : 'repeat(2, 44px)')};
    grid-template-columns: repeat(5, 44px);
  }
`;

const ImgWrapper = styled.div`
  cursor: ${(props) => (props.isCompleted ? 'pointer' : '')};
  max-width: 70.4px;
  width: 100%;
  max-height: 70.4px;
  height: 100%;
  opacity: ${(props) => (props.isCompleted ? '1' : '0.2')};
  img {
    max-width: 70.4px;
    width: 100%;
    max-height: 70.4px;
    height: 100%;
  }
`;

const ButtonWrapper = styled.div`
  max-width: 50rem;
  width: 34.7vw;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    width: 312px;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 236.8px;
  width: 16.4vw;
  max-height: 76.8px;
  height: 7.5vh;
  background-color: ${(props) => (props.close ? '#121212' : 'white')};
  color: ${(props) => (props.close ? 'white' : '#121212')};
  border-radius: 99px;
  font-size: min(1.7vw, 2.5vh, 25.6px);
  border: 1.6px solid white;
  line-height: 1.6;
  @media screen and (max-width: 1023px) {
    width: 148px;
    height: 48px;
    border-radius: 68px;
    font-size: 16px;
  }
`;
const CheckedBg = styled.img`
  position: relative;
  bottom: 105%;
  left: 20%;

  max-width: 60% !important;

  @media screen and (max-width: 1023px) {
    bottom: 105%;
    left: 23%;
  }
`;

const HelpMessage = styled.div`
  position: relative;
  left: 5vw;
  top: -10.3vh;
  display: flex;
  align-items: center;
  padding-left: 10px;
  max-width: 288px;
  width: 20vw;
  max-height: 99px;
  height: 9.6vh;
  background-color: #1e1e1e;
  border-radius: 5px;
  font-size: min(1.3vw, 1.8vh, 19.2px);
  font-weight: 500;
  line-height: 1.6;
  color: white;
  animation: ${fadeIn} 1s;
  @media screen and (max-width: 1023px) {
    top: -100px;
    left: 40px;
    width: 180px;
    height: 62px;
    font-size: 12px;
  }
`;

const AlaCardSettingComponent = ({ history, state, apiCall }) => {
  const viewSize = useResponsive();
  const { alaCardBgSolid, alaCardBgGrad, alaCardBgPhoto, updateCardInfoMessage, originCardInfo } = state;
  const { originCardId, originCardFont, originCardSentence, originCardBg, isOpen, isCompleted } = originCardInfo;
  const sessionCardInfo = JSON.parse(sessionStorage.getItem('originCardInfo'));
  const { onClickUpdateCardInfo, onClickUploadCardInfo } = apiCall;
  const [toggle, setToggle] = useState(isOpen || sessionCardInfo.isOpen);
  const [isChanged, setIsChanged] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [bgSolid, setBgSolid] = useState(true);
  const [bgGrad, setBgGrad] = useState(false);
  const [bgPhoto, setBgPhoto] = useState(false);
  const [background, setBackground] = useState(originCardBg);
  const [newFontColor, setNewFontColor] = useState(null);
  const [newBg, setNewBg] = useState(null);
  const [newCardInfo, setNewCardInfo] = useState(null);
  const cardStyle = {
    backgroundImage: originCardBg ? 'url(' + originCardBg + ')' : 'url(' + sessionCardInfo.originCardBg + ')',
    backgroundSize: originCardBg || sessionCardInfo.originCardBg ? 'cover' : '',
    backgroundColor: originCardBg || sessionCardInfo.originCardBg ? '' : '#171717',
    maxWidth: viewSize > '1023' ? '57.6rem' : '36rem',
    width: viewSize > '1023' ? '40vw' : '36rem',
  };
  console.log(cardStyle);
  const [solid, setSolid] = useState(
    alaCardBgSolid.map((item) =>
      item.backgroundImgUrl === (originCardBg ? originCardBg : sessionCardInfo.originCardBg)
        ? { ...item, clicked: true }
        : { ...item, clicked: false },
    ),
  );
  const [grad, setGrad] = useState(
    alaCardBgGrad.map((item) =>
      item.backgroundImgUrl === (originCardBg ? originCardBg : sessionCardInfo.originCardBg)
        ? { ...item, clicked: true }
        : { ...item, clicked: false },
    ),
  );
  const [photo, setPhoto] = useState(
    alaCardBgPhoto.map((item) =>
      item.backgroundImgUrl === (originCardBg ? originCardBg : sessionCardInfo.originCardBg)
        ? { ...item, clicked: true }
        : { ...item, clicked: false },
    ),
  );

  const onClickToggle = () => {
    setToggle((prevState) => !prevState);
    setIsChanged(true);
    const newCardInfo = {
      originCardId: originCardId || sessionCardInfo.originCardId,
      originCardFont: newFontColor || originCardFont || sessionCardInfo.originCardFont,
      originCardSentence: originCardSentence || sessionCardInfo.originCardSentence,
      originCardBg: newBg || originCardBg || sessionCardInfo.originCardBg,
      isOpen: !toggle,
      isCompleted: isCompleted || sessionCardInfo.isCompleted,
    };
    setNewCardInfo(newCardInfo);
    onClickUploadCardInfo(newCardInfo);
  };

  const openHelp = (e) => {
    setShowHelp(true);
  };

  const closeHelp = () => {
    if (showHelp) {
      setShowHelp(false);
    }
  };

  const onClickSolid = () => {
    setBgSolid(true);
    setBgGrad(false);
    setBgPhoto(false);
  };

  const onClickGrad = () => {
    setBgGrad(true);
    setBgSolid(false);
    setBgPhoto(false);
  };

  const onClickPhoto = () => {
    setBgPhoto(true);
    setBgGrad(false);
    setBgSolid(false);
  };

  const onClickBackground = (e) => {
    // e.target
    if (isCompleted || sessionCardInfo.isCompleted) {
      setIsChanged(true);
      const newCardInfo = {
        originCardId: originCardId || sessionCardInfo.originCardId,
        originCardFont: e.target.getAttribute('font'),
        originCardSentence: originCardSentence || sessionCardInfo.originCardSentence,
        originCardBg: e.target.getAttribute('bg'),
        isOpen: toggle,
        isCompleted: isCompleted || sessionCardInfo.isCompleted,
      };
      setBackground(e.target.src);
      setNewFontColor(e.target.getAttribute('font'));
      setNewBg(e.target.getAttribute('bg'));
      setNewCardInfo(newCardInfo);
      onClickUploadCardInfo(newCardInfo);

      setSolid(
        solid.map((item) =>
          item.thumbnailImgUrl === e.target.src ? { ...item, clicked: true } : { ...item, clicked: false },
        ),
      );
      setGrad(
        grad.map((item) =>
          item.thumbnailImgUrl === e.target.src ? { ...item, clicked: true } : { ...item, clicked: false },
        ),
      );
      setPhoto(
        photo.map((item) =>
          item.thumbnailImgUrl === e.target.src ? { ...item, clicked: true } : { ...item, clicked: false },
        ),
      );
    }
  };
  console.log(solid);
  const submitCardInfo = (e) => {
    e.preventDefault();
    setIsChanged(false);
    let cardInfo = {
      alaCardId: originCardId,
      isOpen: toggle,
    };
    if (isCompleted && newCardInfo) {
      cardInfo = {
        ...cardInfo,
        backgroundImgUrl: background,
        fontColor: newCardInfo.originCardFont,
      };
    }
    onClickUpdateCardInfo(cardInfo);
  };

  useEffect(() => {
    if (updateCardInfoMessage === 'success') {
      sessionStorage.setItem('originCardInfo', JSON.stringify(newCardInfo));
    }
  }, [updateCardInfoMessage]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <HeaderContainer />
      <Wrapper onClick={closeHelp}>
        <TitleWrapper>
          <Title>배경/설정 변경</Title>
        </TitleWrapper>
        <div style={cardStyle}>
          <ContentsWrapper>
            <ContentsInnerWrapper>
              <InnerContents
                style={{ color: originCardFont || sessionCardInfo.originCardFont }}
                dangerouslySetInnerHTML={{ __html: originCardSentence || sessionCardInfo.originCardSentence }}
              />
            </ContentsInnerWrapper>
          </ContentsWrapper>
        </div>
        <SettingWrapper>
          <CardLockWrapper>
            <LockWrapper>
              <StyledSpan>카드 공개 여부</StyledSpan>
              <img src={!toggle ? lockBtn : unlockBtn} alt="잠금 버튼" />
            </LockWrapper>
            <ToggleButton onClick={onClickToggle} className={!toggle ? 'left' : ''}>
              <ToggleInner className={!toggle ? 'left' : ''} />
            </ToggleButton>
          </CardLockWrapper>
          <BgHeader>
            <StyledSpan>배경 선택</StyledSpan>
            {showHelp && <HelpMessage>알라카드가 완성된 후 자유롭게 꾸밀 수 있어요.</HelpMessage>}
            <img src={helpBtn} onClick={openHelp} alt="도움말" />
          </BgHeader>
          <BgTitle>
            <BgInnerWrapper>
              <StyledSpan onClick={onClickSolid} notClicked={bgSolid ? false : true} cursor="pointer">
                단색
              </StyledSpan>
              <StyledSpan onClick={onClickGrad} notClicked={bgGrad ? false : true} cursor="pointer">
                그라데이션
              </StyledSpan>
              <StyledSpan onClick={onClickPhoto} notClicked={bgPhoto ? false : true} cursor="pointer">
                이미지
              </StyledSpan>
            </BgInnerWrapper>
          </BgTitle>
          <BgWrapper bgSolid={bgSolid ? true : false}>
            {bgSolid &&
              solid.map((card, idx) => {
                return (
                  <ImgWrapper
                    isCompleted={isCompleted || sessionCardInfo.isCompleted ? true : ''}
                    onClick={onClickBackground}>
                    {idx === 0 && isCompleted === false ? (
                      <img src={bgSelected} className="checked" alt="기본 배경" />
                    ) : (
                      <>
                        <img src={card.thumbnailImgUrl} bg={card.backgroundImgUrl} font={card.fontColor} alt="배경" />
                        {card.clicked ? <CheckedBg src={bgSelected} /> : <></>}
                      </>
                    )}
                  </ImgWrapper>
                );
              })}
            {bgGrad &&
              grad.map((card, idx) => {
                return (
                  <ImgWrapper
                    isCompleted={isCompleted || sessionCardInfo.isCompleted ? true : ''}
                    onClick={onClickBackground}>
                    <img src={card.thumbnailImgUrl} bg={card.backgroundImgUrl} font={card.fontColor} alt="배경" />
                    {card.clicked ? <CheckedBg src={bgSelected} /> : <></>}
                  </ImgWrapper>
                );
              })}
            {bgPhoto &&
              photo.map((card, idx) => {
                return (
                  <ImgWrapper
                    isCompleted={isCompleted || sessionCardInfo.isCompleted ? true : ''}
                    onClick={onClickBackground}>
                    <img src={card.thumbnailImgUrl} bg={card.backgroundImgUrl} font={card.fontColor} alt="배경" />
                    {card.clicked ? <CheckedBg src={bgSelected} /> : <></>}
                  </ImgWrapper>
                );
              })}
          </BgWrapper>
          <ButtonWrapper>
            <StyledButton close="close" onClick={() => history.goBack()}>
              취소
            </StyledButton>

            <StyledButton
              style={isChanged ? null : { background: '#2a2a2a', border: '0', cursor: 'not-allowed' }}
              onClick={submitCardInfo}>
              저장할래😋
            </StyledButton>
          </ButtonWrapper>
        </SettingWrapper>
      </Wrapper>
    </div>
  );
};

export default withRouter(AlaCardSettingComponent);
