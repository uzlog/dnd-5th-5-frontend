import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ModalWrapper, ModalOverlay, ModalContents } from '@components/main/Style';
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
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
    width: 36rem;
    min-height: 64rem;
  }
`;

const FriendWrapper = styled.div`
  background-color: #121212;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 20px 2.6vw;
  img:first-child {
    border-radius: 50px;
    width: 64px;
    height: 64px;
    @media screen and (max-width: 1023px) {
      width: 40px;
      height: 40px;
    }
  }
  @media screen and (max-width: 1023px) {
    padding: 12px 24px;
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
  img {
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
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1.9vw;
  img {
    width: 38.4px;
    height: 38.4px;
  }
  @media screen and (max-width: 1023px) {
    min-height: 6.4rem;
    padding-right: 2.4rem;
    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const MoreButton = styled.div`
  cursor: pointer;
  width: 38.4px;
  height: 3.8vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const ContentFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10.6vh;
`;

const ContentsWrapper = styled.div`
  display: table;
  width: 40vw;
  max-width: 576px;
  height: 70vh;
  line-height: 1.6;
  letter-spacing: -0.8px;
  font-size: min(5.6vh, 57.6px, 4vw);
  font-weight: 300;
  padding-bottom: 10.6vh;
  padding-left: 38.4px;
  padding-right: 38.4px;
  @media screen and (max-width: 1023px) {
    width: 36rem;
    min-height: 42rem;
    line-height: 1.6;
    letter-spacing: -0.5px;
    font-size: 3.6rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
`;

const InnerContents = styled.div`
  display: table-cell;
  vertical-align: middle;
  height: ${(props) => props.height || ''};
  text-align: left;
  img {
    display: inline;
    vertical-align: -11%;
  }
  @media screen and (min-width: 1023px) {
    img {
      vertical-align: -8%;
      display: inline;
      width: min(33%, 15vh);
      max-width: 182px;
    }
  }
`;

const ModalContentsWrapper = styled.div`
  width: 312px;
  height: 420px;
  margin-left: 24px;
  margin-right: 24px;
  line-height: 1.6;
  letter-spacing: -0.5px;
  font-size: 36px;
`;

const StyledButton = styled.button`
  position: relative;
  bottom: 13%;
  left: 31%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 368px;
  width: 25.5vw;
  height: 7.5vh;
  border-radius: 99px;
  cursor: pointer;
  border: solid 1px white;
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
  position: relative;
  bottom: 13%;
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
  border: solid 1px white;
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
  display: flex;
  justify-content: flex-end;
  margin: 24px 24px 0px 0px;
  img {
    cursor: pointer;
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
  top: 82%;
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
  background: white;
  max-width: 576px;
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
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
  // const [owner, setOwner] = useState()
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
    autoplay: false,
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

  const openModal = (e) => {
    setShowModal(true);
    document.body.style = `overflow: hidden`;
    setSentence(e.target.getAttribute('sentence'));
    const index = e.target.getAttribute('idx');
    if (alacardData[index].isCompleted) {
      const { backgroundImgUrl, fontColor } = alacardData[index].alaCardSettingDto;
      setBigAlaCardStyle({
        backgroundImage: 'url(' + backgroundImgUrl + ')',
        backgroundSize: '360px 640px',
        width: '360px',
        height: '640px',
        color: fontColor,
        display: 'table',
        lineHeight: '1.6',
        letterSpacing: '-0.5px',
        fontSize: '36px',
        fontWeight: '300',
      });
      setFontColorStyle({
        color: fontColor,
      });
    } else {
      setBigAlaCardStyle({
        width: '360px',
        height: '640px',
        backgroundColor: '#121212',
        color: '#b9ff46',
        lineHeight: '1.6',
        letterSpacing: '-0.5px',
        fontSize: '36px',
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
    }, 1000);
  };

  const sendFollow = () => {
    onClickSendFollow(nickname);
  };

  const acceptFollow = () => {
    onClickAcceptFollow(nickname);
  };

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
            </ImgWrapper>
          </FriendWrapper>
        )}
        {isOwner ? (
          // 페이지 주인인 경우 다 보여주기
          <>
            <Slider ref={slider} {...settings}>
              {alacardData.map((card, idx) => {
                const { backgroundImgUrl, fontColor } = card.alaCardSettingDto;
                let cardStyle;
                let fontStyle;
                // 카드가 완성된 경우
                if (card.isCompleted) {
                  if (!card.sentence.includes('strong')) {
                    card.selectedWordList.forEach((word) => {
                      card.sentence = card.sentence.replaceAll(word.wordName, '<strong>' + word.wordName + '</strong>');
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
                    '<span><img src="' + secretWord + '" alt="비밀 단어" /></span>',
                  );
                  cardStyle = {
                    backgroundColor: '#121212',
                    width: viewSize > '1023' ? '39.9vw' : '36rem',
                    maxWidth: viewSize > '1023' ? '576px' : '359px',
                  };
                  fontStyle = {
                    color: '#b9ff46',
                  };
                }

                card.sentence = card.sentence.replaceAll(', ', ',<br />');
                if (!card.sentence.includes('!')) {
                  card.sentence += '!';
                }
                return (
                  <>
                    <div key={idx} style={cardStyle}>
                      <MoreButtonWrapper>
                        <MoreButton onClick={openModal}>
                          <img src={maximizeBtn} idx={idx} sentence={card.sentence} alt="확대 버튼" />
                        </MoreButton>
                      </MoreButtonWrapper>
                      <ContentFlexWrapper>
                        <ContentsWrapper>
                          <InnerContents style={fontStyle} dangerouslySetInnerHTML={{ __html: card.sentence }} />
                        </ContentsWrapper>
                      </ContentFlexWrapper>
                    </div>
                  </>
                );
              })}
            </Slider>
            <StyledButton onClick={onClickShare}>
              키워드 PICK 요청하기
              <img src={linkBtn} alt="링크 버튼" />
            </StyledButton>
          </>
        ) : getOtherInfoData.isOpen ? (
          <>
            <Slider ref={slider} {...settings}>
              {alacardData.map((card, idx) => {
                const { backgroundImgUrl, fontColor } = card.alaCardSettingDto;
                let cardStyle;
                let fontStyle;
                // 카드가 완성된 경우
                if (card.isCompleted) {
                  if (!card.sentence.includes('strong')) {
                    card.selectedWordList.forEach((word) => {
                      card.sentence = card.sentence.replaceAll(word.wordName, '<strong>' + word.wordName + '</strong>');
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
                    '<span><img src="' + secretWord + '" alt="비밀 단어" /></span>',
                  );
                  cardStyle = {
                    backgroundColor: '#121212',
                    width: viewSize > '1023' ? '39.9vw' : '36rem',
                    maxWidth: viewSize > '1023' ? '576px' : '359px',
                  };
                  fontStyle = {
                    color: '#b9ff46',
                  };
                }

                card.sentence = card.sentence.replaceAll(', ', ',<br />');
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
              })}
            </Slider>
            <StyledLink to={`${nickname}/select`}>
              키워드 PICK 하러가기
              <img src={arrowBtn} alt="이동 버튼" />
            </StyledLink>
          </>
        ) : getRelationData === '친구' ? (
          <>
            <Slider ref={slider} {...settings}>
              {alacardData.map((card, idx) => {
                const { backgroundImgUrl, fontColor } = card.alaCardSettingDto;
                let cardStyle;
                let fontStyle;
                // 카드가 완성된 경우
                if (card.isCompleted) {
                  if (!card.sentence.includes('strong')) {
                    card.selectedWordList.forEach((word) => {
                      card.sentence = card.sentence.replaceAll(word.wordName, '<strong>' + word.wordName + '</strong>');
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
                    '<span><img src="' + secretWord + '" alt="비밀 단어" /></span>',
                  );
                  cardStyle = {
                    backgroundColor: '#121212',
                    width: viewSize > '1023' ? '39.9vw' : '36rem',
                    maxWidth: viewSize > '1023' ? '576px' : '359px',
                  };
                  fontStyle = {
                    color: '#b9ff46',
                  };
                }

                card.sentence = card.sentence.replaceAll(', ', ',<br />');
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
              })}
            </Slider>
            <StyledLink to={`${nickname}/select`}>
              키워드 PICK 하러가기
              <img src={arrowBtn} alt="이동 버튼" />
            </StyledLink>
          </>
        ) : (
          <Slider ref={slider} {...closeSettings}>
            <Secret>
              <h1>비공개 계정</h1>
            </Secret>
          </Slider>
        )}
        {showModal && (
          <ModalWrapper>
            <ModalOverlay onClick={() => closeModal()} />
            <ModalContents style={bigAlaCardStyle}>
              <CloseBtnWrapper>
                <img src={bigCardCloseBtn} width="24px" height="24px" alt="닫기 버튼" onClick={closeModal} />
              </CloseBtnWrapper>
              <ModalContentsWrapper style={fontColorStyle}>
                <InnerContents height="592px" dangerouslySetInnerHTML={{ __html: sentence }} />
              </ModalContentsWrapper>
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
