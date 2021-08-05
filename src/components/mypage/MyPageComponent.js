import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalOverlay, ModalContents } from '@components/main/Style';
import secretWord from '@assets/img/alacard/secretWord.svg';
import bigCardCloseBtn from '@assets/img/alacard/bigCardCloseBtn.svg';
import linkBtn from '@assets/img/alacard/linkBtn.svg';
import moreBtn from '@assets/img/alacard/moreBtn.svg';

const ContentsWrapper = styled.div`
  display: table;
  width: 312px;
  height: 420px;
  margin-left: 24px;
  margin-right: 24px;
  line-height: 1.6;
  letter-spacing: -0.5px;
  font-size: 36px;
  font-weight: 300;
  /* color: ${(props) => props.color || '#b9ff46'}; */
`;

const InnerContents = styled.div`
  display: table-cell;
  vertical-align: middle;
  height: ${(props) => props.height || ''};
  text-align: left;
`;

const MoreButtonWrapper = styled.div`
  width: 360px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MoreButton = styled.div`
  width: 24px;
  height: 24px;
  padding: 11px 4px;
  margin-right: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 24px;
  height: 96px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 48px;
  padding-left: 26px;
  padding-right: 26px;
  border-radius: 62px;
  cursor: pointer;
  border: solid 1px white;
  background: transparent;
  color: white;
  line-height: 1.6;
  font-size: 15px;
  img {
    margin-left: 8px;
  }
`;

const Header = styled.div`
  width: 360px;
  height: 60px;
  background-color: blue;
  color: white;
`;

const CustomModalContents = styled(ModalContents)``;

const CloseBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 24px 24px 0px 0px;
`;

const ToastWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ToastMessage = styled.div`
  position: absolute;
  padding: 11px;
  min-width: 200px;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s, visibility 0.5s, transform 2s;
  z-index: 3;
  background: rgba(0, 0, 0, 1);
  color: #fff;
  border-radius: 4px;
  border: 1px solid #000;
`;

const MyPageComponent = ({ state }) => {
  const { alacardData, selectLinkData } = state;
  const [showModal, setShowModal] = useState(false);
  const [sentence, setSentence] = useState('');
  const [showToast, setShowToast] = useState(false);

  const openModal = (card) => {
    setShowModal(true);
    setSentence(card.target.innerHTML);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onClickShare = (e) => {
    setShowToast(true);
    const text = document.createElement('textarea');
    document.body.appendChild(text);
    if (selectLinkData.length > 0) {
      text.value = selectLinkData;
    } else {
      const nickname = localStorage.getItem('nickname');
      text.value = `https://www.ala.monster/select/${nickname}`;
    }
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
      <Header>헤더</Header>
      {alacardData.map((card, idx) => {
        const { backgroundImgUrl, fontColor } = card.alaCardSettingDto;
        let cardStyle;
        let bigCardStyle;
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
            backgroundSize: '360px 580px',
          };
          bigCardStyle = {
            backgroundImage: 'url(' + backgroundImgUrl + ')',
            backgroundSize: '360px 640px',
            width: '360px',
            height: '640px',
            color: 'black',
            display: 'table',
            lineHeight: '1.6',
            letterSpacing: '-0.5px',
            fontSize: '36px',
            fontWeight: '300',
          };
          fontStyle = {
            color: fontColor,
          };
        } else {
          card.sentence = card.sentence.replaceAll('???', '<img src="' + secretWord + '" alt="비밀 단어" />');
          cardStyle = {
            backgroundColor: '#121212',
          };
          fontStyle = {
            color: '#b9ff46',
          };
          bigCardStyle = {
            width: '360px',
            height: '640px',
            backgroundColor: '#121212',
            color: '#b9ff46',
            lineHeight: '1.6',
            letterSpacing: '-0.5px',
            fontSize: '36px',
            fontWeight: '300',
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
                <MoreButton>
                  <img src={moreBtn} width="24px" height="24px" alt="더보기 버튼" />;
                </MoreButton>
              </MoreButtonWrapper>
              <ContentsWrapper onClick={(card) => openModal(card)}>
                <InnerContents style={fontStyle} dangerouslySetInnerHTML={{ __html: card.sentence }} />
              </ContentsWrapper>
              <ButtonWrapper>
                <StyledButton onClick={onClickShare} value={idx}>
                  키워드 PICK 요청하기
                  <img src={linkBtn} width="18px" height="18px" alt="링크 버튼" />
                </StyledButton>
                {showToast && (
                  <ToastWrapper>
                    <ToastMessage>링크가 클립보드에 복사되었습니다.</ToastMessage>
                  </ToastWrapper>
                )}
              </ButtonWrapper>
            </div>
            {showModal && (
              <ModalWrapper>
                <ModalOverlay onClick={() => closeModal()} />
                <CustomModalContents style={bigCardStyle}>
                  <CloseBtnWrapper>
                    <img src={bigCardCloseBtn} width="24px" height="24px" alt="닫기 버튼" onClick={closeModal} />
                  </CloseBtnWrapper>
                  <ContentsWrapper fontColor={fontColor}>
                    <InnerContents height="592px" dangerouslySetInnerHTML={{ __html: sentence }} />
                  </ContentsWrapper>
                </CustomModalContents>
              </ModalWrapper>
            )}
          </>
        );
      })}
    </>
  );
};

export default MyPageComponent;
