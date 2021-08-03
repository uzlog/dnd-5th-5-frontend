import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { ModalWrapper, ModalOverlay, ModalContents } from '@components/main/Style';

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
  color: black;
`;

const InnerContents = styled.div`
  display: table-cell;
  vertical-align: middle;
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

const MoreButtonInner = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: solid 5px var(--primary-color-white);
  background-color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 24px;
  height: 96px;
`;

const StyledButton = styled.button`
  width: 230px;
  height: 48px;
  padding: 11px 28px;
  border-radius: 62px;
  cursor: pointer;
  border: solid 1px var(--primary-color-white);
`;

const Header = styled.div`
  width: 360px;
  height: 60px;
  background-color: blue;
  color: white;
`;

const CustomModalWrapper = styled(ModalWrapper)`
  display: table;
  line-height: 1.6;
  letter-spacing: -0.5px;
  font-size: 36px;
  font-weight: 300;
  color: black;
`;
const CustomModalContents = styled(ModalContents)`
  /* display: table-cell;
  vertical-align: middle;
  text-align: left; */
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
  const [toastStyle, setToastStyle] = useState('');

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
    console.log(window.pageYOffset);
    console.log(e.target.value);

    // 토스트 메세지
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  };

  return (
    <>
      <Header>헤더</Header>
      {alacardData.map((card, idx) => {
        const { backgroundImgUrl, font, fontColor, isOpen } = card.alaCardSettingDto;
        if (!card.sentence.includes('strong')) {
          card.selectedWordList.forEach((word) => {
            card.sentence = card.sentence.replaceAll(word.wordName, '<strong>' + word.wordName + '</strong>');
          });
        }

        card.sentence = card.sentence.replaceAll(', ', ',<br />');
        if (!card.sentence.includes('!')) {
          card.sentence += '!';
        }
        return (
          <>
            <div
              key={idx}
              style={{
                backgroundImage: 'url(' + backgroundImgUrl + ')',
                backgroundSize: '360px 580px',
                width: '360px',
                height: '580px',
                color: fontColor,
              }}>
              <MoreButtonWrapper>
                <MoreButton>
                  <FontAwesomeIcon icon={faEllipsisH} size="1x" />
                </MoreButton>
              </MoreButtonWrapper>
              <ContentsWrapper onClick={(card) => openModal(card)}>
                <InnerContents dangerouslySetInnerHTML={{ __html: card.sentence }} />
              </ContentsWrapper>
              <ButtonWrapper>
                <StyledButton onClick={onClickShare} value={idx}>
                  키워드 PICK 요청하기
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
                <CustomModalContents
                  style={{
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
                  }}>
                  <InnerContents dangerouslySetInnerHTML={{ __html: sentence }} />
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
