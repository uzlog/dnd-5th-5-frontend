import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { ModalWrapper, ModalOverlay, ModalContents } from '@components/main/Style';

const Contents = styled.div`
  width: 312px;
  height: 290px;
  margin-left: 24px;
  margin-right: 24px;
  background-color: red;
  margin-top: 65px;
  /* margin-bottom: 89px; */
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;
  font-size: 28px;
  font-weight: 300;
`;

const MoreButtonWrapper = styled.div`
  width: 360px;
  height: 64px;
  /* margin: 0 0 65px;
  padding: 20px 24px 20px 312px; */
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
  /* margin: 0 0 0 5px; */
  border: solid 5px var(--primary-color-white);
  background-color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 24px;
  margin-top: 89px;
`;

const StyledButton = styled.button`
  width: 230px;
  height: 48px;
  padding: 11px 28px;
  border-radius: 62px;
  cursor: pointer;
  /* background-color: transparent; */
  border: solid 1px var(--primary-color-white);
`;

const Header = styled.div`
  width: 360px;
  height: 60px;
  background-color: blue;
  color: white;
`;
const MyPageComponent = ({ state }) => {
  const { alacardData } = state;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log('open');
  };

  const closeModal = () => {
    setShowModal(false);
    console.log('close');
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
        card.sentence += '!';
        return (
          <>
            <div
              key={idx}
              onClick={() => openModal()}
              style={{
                backgroundImage: 'url(' + backgroundImgUrl + ')',
                backgroundSize: '360px 580px',
                width: '360px',
                height: '580px',
                color: fontColor,
              }}>
              <MoreButtonWrapper>
                <MoreButton>
                  {/* <MoreButtonInner />
                <MoreButtonInner />
                <MoreButtonInner /> */}
                  <FontAwesomeIcon icon={faEllipsisH} size="1x" />
                </MoreButton>
              </MoreButtonWrapper>
              <Contents dangerouslySetInnerHTML={{ __html: card.sentence }} />
              {/* <Contents>
              {card.sentence.split(', ').map((s, idx) =>
                card.selectedWordList.length - 1 > idx ? (
                  <>
                    {s}, <br />
                  </>
                ) : (
                  <>
                    {s}! <br />
                  </>
                ),
              )}
            </Contents> */}
              <ButtonWrapper>
                <StyledButton>키워드 PICK 요청하기</StyledButton>
              </ButtonWrapper>
            </div>
            {showModal && (
              <ModalWrapper>
                <ModalOverlay onClick={() => closeModal()} />
                <ModalContents>{card.sentence}</ModalContents>
              </ModalWrapper>
            )}
          </>
        );
      })}
    </>
  );
};

export default MyPageComponent;
