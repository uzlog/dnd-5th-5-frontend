import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';
import HeaderContainer from '@containers/common/HeaderContainer';
import secretWord from '@assets/img/alacard/secretWord.svg';
import lockBtn from '@assets/img/alacard-list/lockBtn.svg';

const Wrapper = styled.div`
  max-width: 57.6rem;
  width: 40vw;
  height: 100vh;
  overflow-y: auto;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    padding-right: 3.84rem;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
    min-width: 36rem;
    & > div {
      padding-right: 2.4rem;
    }
  }
`;

const TitleWrapper = styled.div`
  max-width: 57.6rem;
  width: 40vw;
  height: 300px;
  display: flex;
  padding: 3.4vh 2.6vw;
  @media screen and (max-width: 1023px) {
    width: 360px;
    font-size: 2.4rem;
    padding: 2.3rem 2.4rem;
  }
`;

const Title = styled.div`
  font-size: min(2.6vw, 3.7vh, 3.8rem);
  font-weight: bold;
  line-height: 1.6;
  color: white;
  @media screen and (max-width: 1023px) {
    font-size: 2.4rem;
  }
`;

const ContentFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentsWrapper = styled.div`
  display: table;
  max-width: 50rem;
  width: 34.7vw;
  padding: min(3.75vh, 3.84rem) min(2.6vw, 3.84rem);
  line-height: 1.6;
  letter-spacing: -0.08rem;
  font-size: 3.84rem;
  font-weight: 300;
  @media screen and (max-width: 1023px) {
    min-width: 31.2rem;
    font-size: 2.4rem;
    padding: 2.4rem 2.4rem 2.4rem 2.4rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const InnerContents = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: left;
`;

const ButtonWrapper = styled.div`
  margin-top: 1.5vh;
  display: flex;
  flex-direction: row-reverse;
  @media screen and (max-width: 1023px) {
    margin-top: 1rem;
  }
`;

const LockButton = styled.img`
  width: 3.8rem;
  height: 3.8rem;
  @media screen and (max-width: 1023px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const AlaCardListComponent = ({ state, onClickUploadCardInfo }) => {
  const { alacardData } = state;
  const viewSize = useResponsive();

  return (
    <>
      <Wrapper>
        <HeaderContainer />
        <TitleWrapper>
          <Title>알라 카드</Title>
        </TitleWrapper>
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
              maxWidth: viewSize > '1023' ? '50rem' : '31.2rem',
              width: viewSize > '1023' ? '34.7vw' : '31.2rem',
              marginBottom: viewSize > '1023' ? '1.9vh' : '2rem',
              borderRadius: viewSize > '1023' ? '2.4rem' : '1.5rem',
            };
            fontStyle = {
              color: fontColor,
            };
          } else {
            card.sentence = card.sentence.replaceAll('???', '<img src="' + secretWord + '" alt="비밀 단어" />');
            cardStyle = {
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              maxWidth: viewSize > '1023' ? '50rem' : '31.2rem',
              width: viewSize > '1023' ? '34.7vw' : '31.2rem',
              marginBottom: viewSize > '1023' ? '1.9vh' : '2rem',
              borderRadius: viewSize > '1023' ? '2.4rem' : '1.5rem',
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
              <StyledLink
                to={'/alacard/setting'}
                onClick={() => {
                  const originCardInfo = {
                    originCardFont: fontStyle,
                    originCardImg: cardStyle.backgroundImage || null,
                    originCardSentence: card.sentence,
                  };
                  onClickUploadCardInfo(originCardInfo);
                  sessionStorage.setItem('originCardInfo', JSON.stringify(originCardInfo));
                }}>
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
              </StyledLink>
            </>
          );
        })}
      </Wrapper>
    </>
  );
};

export default AlaCardListComponent;
