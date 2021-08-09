import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '@containers/common/HeaderContainer';
import secretWord from '@assets/img/alacard/secretWord.svg';
import lockBtn from '@assets/img/alacard-list/lockBtn.svg';

const Wrapper = styled.div`
  width: 57.6rem;
  padding-left: 3.84rem;
  padding-right: 3.84rem;
`;

const Title = styled.div`
  font-size: 3.8rem;
  font-weight: bold;
  line-height: 1.6;
  color: white;
  margin-bottom: 3.52rem;
`;

const ContentFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContentsWrapper = styled.div`
  display: table;
  width: 50rem;
  padding: 3.84rem;
  gap: 1.28rem;
  border-radius: 24px;
  line-height: 1.6;
  letter-spacing: -0.08rem;
  font-size: 3.84rem;
  font-weight: 300;
  margin-bottom: 1.6rem;
`;

const InnerContents = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: left;
`;

const ButtonWrapper = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: row-reverse;
`;

const LockButton = styled.img`
  width: 3.8rem;
  height: 3.8rem;
`;

const AlaCardListComponent = ({ state }) => {
  const { alacardData } = state;
  return (
    <>
      <Wrapper>
        <HeaderContainer />
        <Title>알라 카드</Title>
        {alacardData.map((card, idx) => {
          const { backgroundImgUrl, fontColor, isOpen } = card.alaCardSettingDto;
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
              width: '50rem',
            };
            fontStyle = {
              color: fontColor,
            };
          } else {
            card.sentence = card.sentence.replaceAll('???', '<img src="' + secretWord + '" alt="비밀 단어" />');
            cardStyle = {
              backgroundColor: '#121212',
              width: '50rem',
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
                <ContentsWrapper>
                  <ContentFlexWrapper>
                    <InnerContents style={fontStyle} dangerouslySetInnerHTML={{ __html: card.sentence }} />
                    {card.isCompleted && !isOpen && (
                      <ButtonWrapper>
                        <LockButton src={lockBtn} alt="잠금버튼" />
                      </ButtonWrapper>
                    )}
                  </ContentFlexWrapper>
                </ContentsWrapper>
              </div>
            </>
          );
        })}
      </Wrapper>
    </>
  );
};

export default AlaCardListComponent;
