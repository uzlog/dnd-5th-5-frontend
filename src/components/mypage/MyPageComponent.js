import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ModalWrapper, ModalOverlay, ModalContents } from './style';
import HeaderContainer from '@containers/common/HeaderContainer';
import DeleteFriendContainer from '@containers/mypage/DeleteFriendContainer';
import useResponsive from '../../hooks/useResponsive';
import secretWord from '@assets/img/alacard/secretWord.svg';
import bigCardCloseBtn from '@assets/img/alacard/bigCardCloseBtn.svg';
import linkBtn from '@assets/img/alacard/linkBtn.svg';
import maximizeBtn from '@assets/img/alacard/maximize.svg';
import arrowBtn from '@assets/img/friend/arrow.svg';
import avatar from '@assets/img/friend/avatar.svg';
import friendCheckBtn from '@assets/img/friend/friendCheckBtn.svg';
import friendPlusBtn from '@assets/img/friend/friendPlusBtn.svg';
import friendWaitingBtn from '@assets/img/friend/friendWaitingBtn.svg';
import lock from '@assets/img/profileSettings/lock.svg';
import { useTitle } from '@hooks/useMeta';

const StyledSlider = styled(Slider)`
  .slick-slide {
    word-break: keep-all;
  }
  .slick-slide img {
    display: inline;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  max-width: 576px;
  width: 40vw;
  height: 100vh;
  background-color: #121212;
  overflow: hidden;
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
    width: 36rem;
    min-height: 64rem;
  }
`;

const FriendWrapper = styled.div`
  background-color: #121212;
  height: 10vh;
  max-width: 576px;
  width: 40vw;
  z-index: 1;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  img:first-child {
    border-radius: 50px;
    width: 64px;
    height: 64px;
    @media screen and (max-width: 1023px) {
      width: 40px;
      height: 40px;
    }
  }
  span {
    max-width: 500px;
    width: 35vw;
    margin: 0 auto;
  }
  @media screen and (max-width: 1023px) {
    max-width: 360px;
    width: 360px;
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

const Name = styled.div`
  font-size: min(calc((1.56vw + 2.19vh) / 2), 22.4px);
  font-weight: bold;
  line-height: 1.6;
  letter-spacing: -0.16px;
  color: white;
  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
`;

const StatusBox = styled.div`
  color: white;
  font-size: min(calc((1.5vw + 1.875vh) / 2), 19.2px);
  @media screen and (max-width: 1023px) {
    font-size: 12px;
  }
`;

const ImgWrapper = styled.div`
  img,
  div {
    max-width: 64px;
    width: 4.4vw;
    max-height: 56px;
    height: 5.5vh;
    @media screen and (max-width: 1023px) {
      cursor: ${(props) => props.cursor};
      width: 44px;
      height: 36px;
    }
  }
`;

const FriendButton = styled.img`
  cursor: ${(props) => props.cursor};
`;

const MoreButtonWrapper = styled.div`
  width: 40vw;
  max-width: 576px;
  position: absolute;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 38.4px;
    height: 38.4px;
  }
  @media screen and (max-width: 1023px) {
    width: 360px;
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
  margin: 0 auto;
  @media screen and (max-width: 1023px) {
    width: 308px;
    margin: 0 auto;
  }
`;

const MoreButton = styled.div`
  cursor: pointer;
  width: 38.4px;
  height: 3.8vh;
  cursor: pointer;
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
  width: 34.7vw;
  max-width: 500px;
  padding-bottom: 5vh;
  white-space: pre-line;
  line-height: 1.6;
  letter-spacing: -0.8px;
  font-size: min(calc((5.6vh + 4vw) / 2), 57.6px);
  font-weight: 300;
  @media screen and (max-width: 1023px) {
    width: 308px;
    line-height: 1.6;
    letter-spacing: -0.5px;
    font-size: 3.6rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
`;

const InnerContents = styled.div`
  padding-top: ${(props) => props.paddingTop};
  font-family: 'spoqaHanSansLight';
  display: table-cell;
  vertical-align: middle;
  font-size: 35px;
  word-break: keep-all;
  height: ${(props) => props.height || ''};
  text-align: left;
  height: 80vh;
  padding-bottom: 12vh;
  img {
    vertical-align: 0em;
    width: 80px;
    display: inline;
  }
  strong {
    font-family: 'spoqaHanSansBold';
  }
  @media screen and (min-width: 1023px) {
    font-size: 45px;

    img {
      vertical-align: -0.1em;
      max-width: 150px;
      width: 9vw;
      min-width: 120px;
      display: inline;
    }
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

const StyledButton = styled.button`
  font-family: 'spoqaHanSansRegular';
  position: sticky;
  bottom: 4%;
  left: 31%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 368px;
  width: 25.5vw;
  height: 7.5vh;
  border-radius: 99px;
  cursor: pointer;
  border: solid 2px white;
  background: transparent;
  color: white;
  line-height: 1.6;
  font-size: min(2.5vh, 25.6px, 1.7vw);
  :active {
    color: black;
    background-color: white;
    img {
      filter: invert(100%) sepia(16%) saturate(3091%) hue-rotate(300deg) brightness(97%) contrast(117%);
    }
  }
  @media screen and (max-width: 1023px) {
    left: 110px;
    width: 230px;

    min-height: 48px;
    border-radius: 62px;
    font-size: 15px;
  }
  img {
    width: 26px;
    height: 26px;
    margin-left: 14px;
    @media screen and (max-width: 1023px) {
      width: 18px;
      height: 18px;
      margin-left: 8px;
    }
  }
`;

const StyledLink = styled(Link)`
  position: sticky;
  bottom: 4%;
  left: 31%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 368px;
  width: 25.5vw;
  height: 7.5vh;
  border-radius: 99px;
  cursor: pointer;
  border: solid 2px white;
  background: transparent;
  color: white;
  line-height: 1.6;
  font-size: min(2.5vh, 25.6px, 1.7vw);
  :active {
    color: black;
    background-color: white;
    img {
      filter: invert(100%) sepia(16%) saturate(3091%) hue-rotate(300deg) brightness(97%) contrast(117%);
    }
  }
  @media screen and (max-width: 1023px) {
    width: 230px;
    min-height: 48px;
    border-radius: 62px;
    font-size: 15px;
  }
  img {
    width: 26px;
    height: 26px;
    margin-left: 14px;
    @media screen and (max-width: 1023px) {
      width: 18px;
      height: 18px;
      margin-left: 8px;
    }
  }
`;

const CloseBtnWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  padding-top: 24px;
  span {
    margin: 24px;
    display: flex;
    text-align: right;
    justify-content: flex-end;
    width: 308px;
  }
  img {
    display: inline;
    cursor: pointer;
  }
  @media screen and (min-width: 1024px) {
    span {
      margin: 24px 2.5vw;
      max-width: 500px;
      width: 35vw;
    }
  }
`;

const ToastWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Toast = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  top: 78%;
  border-radius: 5px;
  background-color: #000000;
  line-height: 1.6;
  color: white;
  max-width: 460px;
  width: 31.9vw;
  max-height: 57.6px;
  height: 5.6vh;
  font-size: min(1.3vw, 1.8vh, 19.2px);
  animation: ${fadeIn} 5s;
  -moz-animation: ${fadeIn} 5s; /* Firefox */
  -webkit-animation: ${fadeIn} 5s; /* Safari and Chrome */
  -o-animation: ${fadeIn} 5s; /* Opera */
  @media screen and (max-width: 1023px) {
    width: 302px;
    height: 36px;
    font-size: 12px;
    text-align: center;
  }
`;

const Secret = styled.div`
  margin: 0 auto;
  margin-top: 10.6vh;
  font-size: 14px;
  width: 40vw;
  max-width: 576px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  img {
    width: 17px;
    height: 17px;
  }
  p {
    font-size: 12px;
    color: #ffffff;
    opacity: 0.5;
    font-weight: 400;
  }

  @media screen and (max-width: 1023px) {
    width: 312px;
  }
`;

const MyPageComponent = ({ history, state, apiCall }) => {
  const {
    getOtherInfoData,
    memberData,
    memberData: { isOpen },
    getRelationData,
    alacardData,
    nickname,
    alacardError,
    showProfileModal,
    showDeleteFriendModal,
    showCancelFollowModal,
  } = state;
  const { onClickSendFollow, onClickCancelFollow, onClickAcceptFollow, onClickDeleteFriend, onClickUpdateModalStatus } =
    apiCall;
  const [isOwner, setIsOwner] = useState(memberData.nickname === nickname);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [sentence, setSentence] = useState('');
  const [bigAlaCardStyle, setBigAlaCardStyle] = useState('');
  const [fontColorStyle, setFontColorStyle] = useState('');
  const viewSize = useResponsive();
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const closeSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (!showProfileModal) {
      slider.current.slickPlay();
    } else {
      slider.current.slickPause();
    }
  }, [showProfileModal]);

  useEffect(() => {
    if (!showModal) {
      slider.current.slickPlay();
    } else {
      slider.current.slickPause();
    }
  }, [showModal]);

  const openModal = (e) => {
    setShowModal(true);
    document.body.style = `overflow: hidden`;
    setSentence(e.target.getAttribute('sentence'));
    const index = e.target.getAttribute('idx');
    if (alacardData[index].isCompleted) {
      const { backgroundImgUrl, fontColor } = alacardData[index].alaCardSettingDto;
      setBigAlaCardStyle({
        backgroundImage: 'url(' + backgroundImgUrl + ')',
        backgroundSize: viewSize > 1023 ? '40vw 100vh' : '360px 100vh',
        width: viewSize > 1023 ? '40vw' : '360px',
        height: '100vh',
        color: fontColor,
        overflow: 'hidden',
        display: 'table',
        lineHeight: '1.6',
        letterSpacing: '-0.5px',
        fontSize: viewSize > 1023 ? '57.6px)' : '36px)',
        fontWeight: '300',
      });
      setFontColorStyle({
        color: fontColor,
      });
    } else {
      setBigAlaCardStyle({
        width: viewSize > 1023 ? '40vw' : '360px',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#171717',
        color: '#b9ff46',
        lineHeight: '1.6',
        letterSpacing: '-0.5px',
        fontSize: viewSize > 1023 ? '57.6px' : '36px)',
        fontWeight: '300',
      });
      setFontColorStyle({
        color: '#b9ff46',
      });
    }
  };

  const closeModal = () => {
    document.body.style = `overflow: visible`;
    setShowModal(false);
  };

  const openFriendRelationModal = ({ key, value }) => {
    onClickUpdateModalStatus({ key, value });
  };

  const onClickShare = () => {
    setShowToast(true);
    const text = document.createElement('textarea');
    document.body.appendChild(text);
    text.value = `https://www.ala.monster/${nickname}/select`;

    text.select();
    document.execCommand('copy');
    document.body.removeChild(text);

    // 토스트 메세지
    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  const sendFollow = () => {
    onClickSendFollow(nickname);
  };

  const acceptFollow = () => {
    onClickAcceptFollow(nickname);
  };

  useTitle(nickname);

  return (
    <>
      <Wrapper>
        <HeaderContainer />
        {!isOwner && (
          <FriendWrapper>
            <img src={getOtherInfoData.imgUrl} alt="프로필" />
            <FriendInfoWrapper>
              <Name>{getOtherInfoData.nickname}</Name>
              <StatusBox>{getOtherInfoData.statusMessage}</StatusBox>
            </FriendInfoWrapper>
            <ImgWrapper>
              {getRelationData === '일반' && (
                <FriendButton src={friendPlusBtn} cursor="pointer" onClick={sendFollow} alt="친구 추가" />
              )}
              {getRelationData === '친구' && (
                <FriendButton
                  src={friendCheckBtn}
                  cursor="pointer"
                  onClick={() => openFriendRelationModal({ key: 'showDeleteFriendModal', value: true })}
                  alt="친구"
                />
              )}
              {getRelationData === '팔로잉' && (
                <FriendButton
                  src={friendWaitingBtn}
                  cursor="pointer"
                  onClick={() => openFriendRelationModal({ key: 'showCancelFollowModal', value: true })}
                  alt="수락 대기"
                />
              )}
              {getRelationData === '팔로워' && (
                <FriendButton src={friendPlusBtn} cursor="pointer" onClick={acceptFollow} alt="친구 수락" />
              )}
              {getRelationData === undefined && <div />}
            </ImgWrapper>
          </FriendWrapper>
        )}
        {isOwner ? (
          // 페이지 주인인 경우 다 보여주기
          <>
            <StyledSlider ref={slider} {...settings}>
              {alacardData.map((card, idx) => {
                const { backgroundImgUrl, fontColor } = card.alaCardSettingDto;
                let cardStyle;
                let fontStyle;
                // 카드가 완성된 경우
                if (card.alaCardSettingDto.isOpen) {
                  if (card.isCompleted) {
                    if (!card.sentence.includes('strong')) {
                      card.selectedWordList.forEach((word) => {
                        card.sentence = card.sentence.replaceAll(
                          word.wordName,
                          '<strong>' + word.wordName + '</strong>',
                        );
                      });
                    }
                    cardStyle = {
                      backgroundImage: 'url(' + backgroundImgUrl + ')',
                      backgroundSize: 'cover',
                      width: viewSize > '1023' ? '39.9vw' : '36rem',
                      maxWidth: viewSize > '1023' ? '576px' : '359px',
                    };
                    fontStyle = {
                      color: fontColor,
                    };
                  } else {
                    card.sentence = card.sentence.replaceAll(
                      '???',
                      '<img src="' + secretWord + '" alt="비밀 단어"></img>',
                    );
                    cardStyle = {
                      backgroundColor: '#171717',
                      width: viewSize > '1023' ? '39.9vw' : '36rem',
                      maxWidth: viewSize > '1023' ? '576px' : '359px',
                    };
                    fontStyle = {
                      color: '#b9ff46',
                    };
                  }

                  if (!card.sentence.includes('!')) {
                    card.sentence += '!';
                  }
                  return (
                    <>
                      <div key={idx} style={cardStyle}>
                        <MoreButtonWrapper>
                          <MoreButtonInnerWrapper>
                            <MoreButton onClick={openModal}>
                              <img src={maximizeBtn} idx={idx} sentence={card.sentence} alt="확대 버튼" />
                            </MoreButton>
                          </MoreButtonInnerWrapper>
                        </MoreButtonWrapper>
                        <ContentFlexWrapper>
                          <ContentsWrapper>
                            <InnerContents style={fontStyle} dangerouslySetInnerHTML={{ __html: card.sentence }} />
                          </ContentsWrapper>
                        </ContentFlexWrapper>
                      </div>
                    </>
                  );
                }
              })}
            </StyledSlider>
            <ButtonWrapper>
              <StyledButton onClick={onClickShare}>
                키워드 PICK 요청하기
                <img src={linkBtn} alt="링크 버튼" />
              </StyledButton>
            </ButtonWrapper>
          </>
        ) : getOtherInfoData.isOpen ? (
          <>
            <StyledSlider ref={slider} {...settings}>
              {alacardData.map((card, idx) => {
                const { backgroundImgUrl, fontColor } = card.alaCardSettingDto;
                let cardStyle;
                let fontStyle;
                // 카드가 완성된 경우
                if (card.alaCardSettingDto.isOpen) {
                  if (card.isCompleted) {
                    if (!card.sentence.includes('strong')) {
                      card.selectedWordList.forEach((word) => {
                        card.sentence = card.sentence.replaceAll(
                          word.wordName,
                          '<strong>' + word.wordName + '</strong>',
                        );
                      });
                    }
                    cardStyle = {
                      backgroundImage: 'url(' + backgroundImgUrl + ')',
                      backgroundSize: 'cover',
                      backgroundColor: '#171717',
                      width: viewSize > '1023' ? '39.9vw' : '36rem',
                      maxWidth: viewSize > '1023' ? '576px' : '359px',
                    };
                    fontStyle = {
                      color: fontColor,
                    };
                  } else {
                    card.sentence = card.sentence.replaceAll(
                      '???',
                      '<img src="' + secretWord + '" alt="비밀 단어"></img>',
                    );
                    cardStyle = {
                      backgroundColor: '#171717',
                      width: viewSize > '1023' ? '39.9vw' : '36rem',
                      maxWidth: viewSize > '1023' ? '576px' : '359px',
                    };
                    fontStyle = {
                      color: '#b9ff46',
                    };
                  }

                  if (!card.sentence.includes('!')) {
                    card.sentence += '!';
                  }
                  return (
                    <>
                      <div key={idx} style={cardStyle}>
                        <ContentFlexWrapper>
                          <ContentsWrapper>
                            <InnerContents style={fontStyle} dangerouslySetInnerHTML={{ __html: card.sentence }} />
                          </ContentsWrapper>
                        </ContentFlexWrapper>
                      </div>
                    </>
                  );
                }
              })}
            </StyledSlider>
            <ButtonWrapper>
              <StyledLink to={`${nickname}/select`}>
                키워드 PICK 하러가기
                <img src={arrowBtn} alt="이동 버튼" />
              </StyledLink>
            </ButtonWrapper>
          </>
        ) : getRelationData === '친구' ? (
          <>
            <StyledSlider ref={slider} {...settings}>
              {alacardData.map((card, idx) => {
                const { backgroundImgUrl, fontColor } = card.alaCardSettingDto;
                let cardStyle;
                let fontStyle;
                // 카드가 완성된 경우
                if (card.alaCardSettingDto.isOpen) {
                  if (card.isCompleted) {
                    if (!card.sentence.includes('strong')) {
                      card.selectedWordList.forEach((word) => {
                        card.sentence = card.sentence.replaceAll(
                          word.wordName,
                          '<strong>' + word.wordName + '</strong>',
                        );
                      });
                    }
                    cardStyle = {
                      backgroundImage: 'url(' + backgroundImgUrl + ')',
                      backgroundSize: 'cover',
                      width: viewSize > '1023' ? '39.9vw' : '36rem',
                      maxWidth: viewSize > '1023' ? '576px' : '359px',
                    };
                    fontStyle = {
                      color: fontColor,
                    };
                  } else {
                    card.sentence = card.sentence.replaceAll(
                      '???',
                      '<img src="' + secretWord + '" alt="비밀 단어"></img>',
                    );
                    cardStyle = {
                      backgroundColor: '#171717',
                      width: viewSize > '1023' ? '39.9vw' : '36rem',
                      maxWidth: viewSize > '1023' ? '576px' : '359px',
                    };
                    fontStyle = {
                      color: '#b9ff46',
                    };
                  }

                  if (!card.sentence.includes('!')) {
                    card.sentence += '!';
                  }
                  return (
                    <>
                      <div key={idx} style={cardStyle}>
                        <ContentFlexWrapper>
                          <ContentsWrapper>
                            <InnerContents style={fontStyle} dangerouslySetInnerHTML={{ __html: card.sentence }} />
                          </ContentsWrapper>
                        </ContentFlexWrapper>
                      </div>
                    </>
                  );
                }
              })}
            </StyledSlider>
            <ButtonWrapper>
              <StyledLink to={`${nickname}/select`}>
                키워드 PICK 하러가기
                <img src={arrowBtn} alt="이동 버튼" />
              </StyledLink>
            </ButtonWrapper>
          </>
        ) : (
          <Slider ref={slider} {...closeSettings}>
            <ContentFlexWrapper>
              <ContentsWrapper>
                <InnerContents>
                  <Secret style={{ color: 'white' }}>
                    <span>
                      <img src={lock} alt="잠금 이미지" /> 앗! 비공개 계정이에요
                    </span>
                    <p>친구를 맺으면 알라카드를 확인할 수 있어요.</p>
                  </Secret>
                </InnerContents>
              </ContentsWrapper>
            </ContentFlexWrapper>
          </Slider>
        )}
        {showModal && (
          <ModalWrapper>
            <ModalOverlay onClick={() => closeModal()} />
            <ModalContents style={bigAlaCardStyle}>
              <CloseBtnWrapper>
                <span>
                  <img
                    src={bigCardCloseBtn}
                    width={viewSize > 1023 ? '38.4px' : '24px'}
                    height={viewSize > 1023 ? '38.4px' : '24px'}
                    alt="닫기 버튼"
                    onClick={closeModal}
                  />
                </span>
              </CloseBtnWrapper>
              <ContentFlexWrapper>
                <ContentsWrapper>
                  <InnerContents
                    height="80vh"
                    paddingTop="10vh"
                    style={fontColorStyle}
                    dangerouslySetInnerHTML={{ __html: sentence }}
                  />
                </ContentsWrapper>
              </ContentFlexWrapper>
            </ModalContents>
          </ModalWrapper>
        )}
        {(showDeleteFriendModal || showCancelFollowModal) && <DeleteFriendContainer nickname={nickname} />}
        {showToast && (
          <ToastWrapper>
            <Toast style={secretWord ? { backgroundColor: '#000000' } : { backgroundColor: 'white' }}>
              링크가 클립보드에 복사되었습니다.
            </Toast>
          </ToastWrapper>
        )}
      </Wrapper>
    </>
  );
};

export default withRouter(MyPageComponent);
