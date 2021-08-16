import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ModalWrapper, ModalOverlay, ModalContents } from '@components/main/Style';
import HeaderContainer from '@containers/common/HeaderContainer';
import useResponsive from '../../hooks/useResponsive';
import secretWord from '@assets/img/alacard/secretWord.svg';
import bigCardCloseBtn from '@assets/img/alacard/bigCardCloseBtn.svg';
import linkBtn from '@assets/img/alacard/linkBtn.svg';
import maximizeBtn from '@assets/img/alacard/maximize.svg';
import { useEffect } from 'react';

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

const ButtonWrapper = styled.div`
  width: 40vw;
  max-width: 576px;
  display: flex;
  justify-content: flex-end;
  padding-right: 1.9vw;
  height: 10.6vh;
  @media screen and (max-width: 1023px) {
    min-height: 96px;
    width: 36rem;
    padding-right: 2.4rem;
  }
`;

const StyledButton = styled.button`
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
  top: 90%;
  opacity: 0.5;
  border-radius: 5px;
  background-color: #000000;
  line-height: 1.6;
  color: white;
  max-width: 460px;
  width: 31.9vw;
  max-height: 57.6px;
  height: 5.6vh;
  font-size: min(1.3vw, 1.8vh, 19.2px);
  animation: ${fadeIn} 3s;
  -moz-animation: ${fadeIn} 3s; /* Firefox */
  -webkit-animation: ${fadeIn} 3s; /* Safari and Chrome */
  -o-animation: ${fadeIn} 3s; /* Opera */
  @media screen and (max-width: 1023px) {
    width: 302px;
    height: 36px;
    font-size: 12px;
    text-align: center;
  }
`;

const MyPageComponent = ({ state }) => {
  const { alacardData, nickname, alacardError, showProfileModal } = state;
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [sentence, setSentence] = useState('');
  const [bigAlaCardStyle, setBigAlaCardStyle] = useState('');
  const [fontColorStyle, setFontColorStyle] = useState('');
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  const viewSize = useResponsive();
  const slider = useRef(null);

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
  return (
    <>
      <Wrapper>
        <HeaderContainer />
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
                width: viewSize > '1023' ? '40vw' : '36rem',
                maxWidth: viewSize > '1023' ? '576px' : '360px',
              };
              fontStyle = {
                color: fontColor,
              };
            } else {
              card.sentence = card.sentence.replaceAll('???', '<img src="' + secretWord + '" alt="비밀 단어" />');
              cardStyle = {
                backgroundColor: '#121212',
                width: viewSize > '1023' ? '40vw' : '36rem',
                maxWidth: viewSize > '1023' ? '576px' : '360px',
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
                  <ButtonWrapper>
                    <StyledButton onClick={onClickShare} value={idx}>
                      키워드 PICK 요청하기
                      <img src={linkBtn} alt="링크 버튼" />
                    </StyledButton>
                  </ButtonWrapper>
                </div>
              </>
            );
          })}
        </Slider>
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
        {showToast && (
          <ToastWrapper>
            <Toast>링크가 클립보드에 복사되었습니다.</Toast>
          </ToastWrapper>
        )}
      </Wrapper>
    </>
  );
};

export default MyPageComponent;
