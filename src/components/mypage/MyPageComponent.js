import React, { useState } from 'react';
import styled from 'styled-components';
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
const MyPageComponent = ({ state }) => {
  const { alacardData } = state;
  const [showModal, setShowModal] = useState(false);
  const [sentence, setSentence] = useState('');

  const openModal = (card) => {
    setShowModal(true);
    setSentence(card.target.innerHTML);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Header>헤더</Header>
      {alacardData.map((card, idx) => {
        const { backgroundImgUrl, font, fontColor, isOpen } = card.alaCardSettingDto;
        if (!card.sentence.includes('strong')) {
          card.selectedWordList.forEach((word) => {
            card.sentence = card.sentence.replaceAll(word.wordName, '<strong>' + word.wordName + '</strong>');
            console.log(card.sentence);
          });
        }

        card.sentence = card.sentence.replaceAll(', ', ',<br />');
        if (!card.sentence.includes('!')) {
          card.sentence += '!';
        }
        console.log(card.sentence);
        return (
          <>
            <div
              key={idx}
              onClick={(card) => openModal(card)}
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
              <ContentsWrapper>
                <InnerContents dangerouslySetInnerHTML={{ __html: card.sentence }} />
              </ContentsWrapper>
              <ButtonWrapper>
                <StyledButton>키워드 PICK 요청하기</StyledButton>
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
