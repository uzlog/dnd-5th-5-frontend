import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ModalWrapper, ModalOverlay, ModalContents } from '@components/main/Style';
import useResponsive from '../../hooks/useResponsive';
import secretWord from '@assets/img/alacard/secretWord.svg';
import bigCardCloseBtn from '@assets/img/alacard/bigCardCloseBtn.svg';
import linkBtn from '@assets/img/alacard/linkBtn.svg';
import maximizeBtn from '@assets/img/alacard/maximize.svg';

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin: 0 auto;
    @media screen and (max-width: 767px) {
      width: 360px;
    }
  }
`;

const ContentFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentsWrapper = styled.div`
  display: table;
  width: 578px;
  height: 578px;
  margin-left: 10px;
  margin-right: 24px;
  line-height: 1.6;
  letter-spacing: -0.8px;
  font-size: 58px;
  font-weight: 300;
  @media screen and (min-width: 400px) {
    margin-left: ${(props) => props.margin || '24px'};
  }
  @media screen and (max-width: 1023px) {
    width: 312px;
    height: 420px;
    margin-left: 24px;
    margin-right: 24px;
    line-height: 1.6;
    letter-spacing: -0.5px;
    font-size: 36px;
  }
  @media screen and (max-height: 990px) and (min-width: 1023px) {
    font-size: 40px;
    height: 500px;
    width: 500px;
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

const InnerContents = styled.div`
  display: table-cell;
  vertical-align: middle;
  height: ${(props) => props.height || ''};
  text-align: left;
`;

const MoreButtonWrapper = styled.div`
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 38px;
    height: 38px;
  }
  @media screen and (max-width: 1023px) {
    height: 64px;
    img {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (max-height: 990px) and (min-width: 1023px) {
    height: 80px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const MoreButton = styled.div`
  cursor: pointer;
  width: 38px;
  height: 38px;
  margin-right: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    margin-right: 24px;
    width: 24px;
    height: 24px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 38px;
  margin-top: 30px;
  height: 96px;
  @media screen and (max-width: 1023px) {
    margin-top: 0px;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 368px;
  height: 77px;
  border-radius: 99px;
  cursor: pointer;
  border: solid 1px white;
  background: transparent;
  color: white;
  line-height: 1.6;
  font-size: 26px;
  @media screen and (max-width: 1023px) {
    width: 230px;
    height: 48px;
    border-radius: 62px;
    font-size: 15px;
  }
  @media screen and (max-height: 990px) and (min-width: 1023px) {
    width: 300px;
    height: 60px;
    border-radius: 80px;
    font-size: 20px;
  }
  img {
    @media screen and (max-width: 1023px) {
      width: 18px;
      height: 18px;
      margin-left: 8px;
    }
    width: 26px;
    height: 26px;
    margin-left: 14px;
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

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: blue;
  color: white;
  margin: 0 auto;
`;

const MyPageComponent = ({ state }) => {
  const { alacardData, nickname } = state;
  const [showModal, setShowModal] = useState(false);
  const [sentence, setSentence] = useState('');
  const [bigAlaCardStyle, setBigAlaCardStyle] = useState('');
  const [fontColorStyle, setFontColorStyle] = useState('');
  const viewSize = useResponsive();
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

  const openModal = (e) => {
    setShowModal(true);
    setSentence(e.target.getAttribute('sentence'));
    const index = e.target.getAttribute('idx');
    console.log(alacardData[index]);
    if (alacardData[index].isCompleted) {
      const { backgroundImgUrl, fontColor } = alacardData.alaCardSettingDto;
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
    setShowModal(false);
  };

  const onClickShare = () => {
    const text = document.createElement('textarea');
    document.body.appendChild(text);
    text.value = `https://www.ala.monster/select/${nickname}`;

    text.select();
    document.execCommand('copy');
    document.body.removeChild(text);
  };

  return (
    <>
      <div style={{ width: viewSize > '1023' ? '578px' : '360px' }}>
        <Header>헤더</Header>
        <StyledSlider {...settings}>
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
                width: viewSize > '768' ? '578px' : '360px',
                height: '100vh',
                margin: '0 auto',
              };
              fontStyle = {
                color: fontColor,
              };
            } else {
              card.sentence = card.sentence.replaceAll('???', '<img src="' + secretWord + '" alt="비밀 단어" />');
              cardStyle = {
                backgroundColor: '#121212',
                width: viewSize > '1023' ? '578px' : '360px',
                height: '100vh',
                margin: '0 auto',
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
                    <MoreButton fontcolor={fontStyle} onClick={openModal}>
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
        </StyledSlider>
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
      </div>
    </>
  );
};

export default MyPageComponent;
