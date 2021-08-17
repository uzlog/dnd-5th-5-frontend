import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { ModalWrapper, ModalOverlay, ModalContents } from './style';
import closeBtn from '@assets/img/modal/closeBtn.svg';
import friendLink from '@assets/img/modal/friendLink.svg';
import avatar from '@assets/img/modal/avatar.svg';

const Header = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 460px;
  width: 31.9vw;
  font-size: min(3.1vh, 5.5vw, 32px);
  img {
    cursor: pointer;
    max-width: 38.4px;
    max-height: 38.4px;
    width: 2.6vw;
    height: 3.75vh;
  }
  @media screen and (max-width: 1023px) {
    font-size: 20px;
    width: 290px;
    img {
      cursor: pointer;
      width: 24px;
      height: 24px;
    }
  }
`;

const Title = styled.span`
  line-height: 1.6;
  font-weight: bold;
  max-height: 46.4px;
  height: 4.5vh;
  margin-top: 15.9vh;
  font-size: min(2.8vh, 5vw, 29px);
  @media screen and (max-width: 1023px) {
    height: 29px;
    margin: 102px 65px 35px 65px;
    font-size: 18px;
  }
`;

const Description = styled.p`
  text-align: center;
  max-height: 70.4px;
  height: 6.8vh;
  margin-top: 5.4vh;
  font-size: min(2.1vh, 1.5vw, 22.4px);
  line-height: 1.6;
  letter-spacing: -0.16px;
  @media screen and (max-width: 1023px) {
    font-size: 14px;
    margin-bottom: 35px;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: min(2.2vw, 3.1vh, 32px);
  @media screen and (max-width: 1023px) {
    width: 302px;
    height: 508px;
    margin-top: 20px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: min(2.5vw, 30px);
  @media screen and (max-width: 1023px) {
    padding-left: 18px;
  }
`;

const LinkArea = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #edf2f7;
  border-radius: 30px;
  line-height: 1.6;
  margin-top: 5.4vh;
  max-width: 460.8px;
  max-height: 57.6px;
  width: 32vw;
  height: 5.6vh;
  span {
    max-width: 365px;
    width: 24vw;
    font-size: min(2.1vh, 1.5vw, 22.4px);
  }
  img {
    cursor: pointer;
    max-width: 91.5px;
    max-height: 57.6px;
    width: 6.35vw;
    height: 5.6vh;
  }
  @media screen and (max-width: 1023px) {
    margin-top: ${(props) => props.hasFriend || '0px'};
    width: 288px;
    height: 36px;
    span {
      font-size: 14px;
      width: 213px;
    }
    img {
      width: 57px;
      height: 36px;
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
`;

const Toast = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
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

const FriendWrapper = styled.div`
  margin-top: 2.1vh;
  @media screen and (max-width: 1023px) {
    width: 291px;
    margin-top: 14px;
    padding-top: 11px;
  }
`;

const FriendContents = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #121212;
  display: flex;
  border-bottom: 1px solid #e2e8f0;
  max-width: 460px;
  width: 31.9vw;
  max-height: 114px;
  height: 11.1vh;
  @media screen and (max-width: 1023px) {
    height: 71px;
    width: 288px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: min(1.59vw, 2.2vh, 23px);
  @media screen and (max-width: 1023px) {
    margin-left: 14px;
    gap: 5px;
  }
`;

const InfoNickname = styled.span`
  font-weight: bold;
  line-height: 1.6;
  font-size: min(1.3vw, 1.8vh, 19.2px);
  @media screen and (max-width: 1023px) {
    font-size: 12px;
  }
`;
const InfoStatusMessage = styled.span`
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;
  font-size: min(1.1vw, 1.5vh, 16px);
  @media screen and (max-width: 1023px) {
    font-size: 10px;
  }
`;

const FriendModal = ({ state, onClickModalStatus }) => {
  const [showToast, setShowToast] = useState(false);
  const { getFriendListData } = state;

  const closeFriendModal = () => {
    onClickModalStatus({ key: 'showFriendModal', value: false });
  };

  const onClickShare = (e) => {
    setShowToast(true);
    const text = document.createElement('textarea');
    document.body.appendChild(text);
    const nickname = sessionStorage.getItem('nickname');
    text.value = `https://www.ala.monster/${nickname}`;

    text.select();
    document.execCommand('copy');
    document.body.removeChild(text);

    // 토스트 메세지
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  };

  return (
    <ModalWrapper>
      <ModalOverlay onClick={closeFriendModal} />
      <ModalContents>
        <Layout>
          <Header>
            <span>친구</span>
            <img src={closeBtn} alt="닫기 버튼" onClick={closeFriendModal} />
          </Header>
          {getFriendListData === undefined ? (
            <>
              <Title>친구를 추가해 보세요</Title>
              <Description>
                아래 공유 버튼을 눌러 <br /> 친구에게 내 페이지 링크를 보낼 수 있어요.
              </Description>
              <LinkArea>
                <LinkWrapper>
                  <span>{`ala.monster/${sessionStorage.getItem('nickname')}`}</span>
                </LinkWrapper>
                <img src={friendLink} alt="공유 버튼" onClick={onClickShare} />
              </LinkArea>
            </>
          ) : (
            <>
              <LinkArea hasFriend="36px">
                <LinkWrapper>
                  <span>{`ala.monster/${sessionStorage.getItem('nickname')}`}</span>
                </LinkWrapper>
                <img src={friendLink} alt="공유 버튼" onClick={onClickShare} />
              </LinkArea>
              <FriendWrapper>
                {getFriendListData.map((data) => {
                  return (
                    <FriendContents to={`/${data.nickname}`}>
                      {data.imgUrl ? (
                        <img src={data.imgUrl} width="40px" height="40px" alt="프로필 이미지" />
                      ) : (
                        <img src={avatar} width="40px" height="40px" alt="프로필 이미지" />
                      )}
                      <FriendInfo>
                        <InfoNickname>{data.nickname}</InfoNickname>
                        <InfoStatusMessage>{data.statusMessage}</InfoStatusMessage>
                      </FriendInfo>
                    </FriendContents>
                  );
                })}
              </FriendWrapper>
            </>
          )}
          {showToast && <Toast>링크가 클립보드에 복사되었습니다.</Toast>}
        </Layout>
      </ModalContents>
    </ModalWrapper>
  );
};

export default FriendModal;
