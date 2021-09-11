import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';
import HeaderContainer from '@containers/common/HeaderContainer';
import secretWord from '@assets/img/alacard/secretWord.svg';
import lockBtn from '@assets/img/alacard-list/lockBtn.svg';
import { useTitle } from '@hooks/useMeta';
import Footer from '@components/common/Footer';

const Wrapper = styled.div`
  max-width: 57.6rem;
  width: 40vw;
  height: 92vh;
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
    width: 36rem;
    & > div {
      padding-right: 2.4rem;
    }
  }
`;

const TitleWrapper = styled.div`
  max-width: 500px;
  width: 35vw;
  display: flex;
  align-items: center;
  font-size: 38.4px;
  margin-top: min(3.44vh, 35.2px);
  margin-bottom: min(3.6vh, 36.8px);
  @media screen and (max-width: 1023px) {
    width: 308px;
    font-size: 2.4rem;
    margin-bottom: 23px;
  }
`;

const Title = styled.div`
  font-size: min(calc((2.6vw + 3.7vh) / 2), 3.8rem);
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
  padding: min(3.75vh, 3rem) min(2.6vw, 3rem);
  line-height: 1.6;
  letter-spacing: -0.08rem;
  font-size: 3.84rem;
  font-weight: 300;
  margin: 0 auto;
  @media screen and (max-width: 1023px) {
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
  word-break: keep-all;
  img {
    display: inline;
    width: min(30%, 15vh);
    vertical-align: -15%;
  }
  @media screen and (min-width: 1023px) {
    img {
      vertical-align: -8%;
      display: inline;
      max-width: 182px;
    }
  }
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
  const { alacardData, nickname } = state;
  const viewSize = useResponsive();
  useTitle(sessionStorage.getItem('nickname'));
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <HeaderContainer />
      <Wrapper>
        <TitleWrapper>
          <Title>알라 카드</Title>
        </TitleWrapper>
        {alacardData.map((card, idx) => {
          const { alaCardId, backgroundImgUrl, fontColor, isOpen } = card.alaCardSettingDto;
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
              backgroundColor: '#171717',
              maxWidth: viewSize > '1023' ? '50rem' : '31.2rem',
              width: viewSize > '1023' ? '34.7vw' : '31.2rem',
              marginBottom: viewSize > '1023' ? '1.9vh' : '2rem',
              borderRadius: viewSize > '1023' ? '2.4rem' : '1.5rem',
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
              <StyledLink
                to={`/${nickname || sessionStorage.getItem('nickname')}/alacard/settings`}
                onClick={() => {
                  const originCardInfo = {
                    originCardId: alaCardId,
                    originCardFont: fontStyle.color,
                    originCardSentence: card.sentence,
                    originCardBg: card.isCompleted ? backgroundImgUrl : null,
                    isOpen,
                    isCompleted: card.isCompleted,
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
        {viewSize > 1023 ? <></> : <Footer />}
      </Wrapper>
    </div>
  );
};

export default AlaCardListComponent;
