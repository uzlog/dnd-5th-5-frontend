import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ModalWrapper, ModalOverlay, ModalContents } from './style';
import closeBtn from '@assets/img/modal/closeBtn.svg';
import friendLink from '@assets/img/modal/friendLink.svg';

const Header = styled.div`
  @media screen and (max-width: 767px) {
    font-size: 20px;
    width: 290px;
  }
  font-weight: bold;
  line-height: 1.6;
  margin: 0 auto;
  span {
    float: left;
  }
  img {
    float: right;
  }
`;

const Title = styled.span`
  @media screen and (max-width: 767px) {
    height: 29px;
    margin: 102px 65px 35px 65px;
    font-size: 18px;
  }
  line-height: 1.6;
  font-weight: bold;
`;

const Description = styled.p`
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 35px;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 302px;
    height: 508px;
    margin-top: 20px;
  }
`;

const LinkArea = styled.div`
  display: flex;
  border-radius: 30px;
  background-color: #edf2f7;
  line-height: 1.6;
  @media screen and (max-width: 767px) {
    width: 288px;
    height: 36px;
    font-size: 14px;
    span {
      width: 231px;
      padding: 8px 0px 8px 18px;
    }
  }
  img {
    float: right;
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
  opacity: 0.5;
  border-radius: 5px;
  background-color: #000000;
  line-height: 1.6;
  color: white;
  animation: ${fadeIn} 3s;
  -moz-animation: ${fadeIn} 3s; /* Firefox */
  -webkit-animation: ${fadeIn} 3s; /* Safari and Chrome */
  -o-animation: ${fadeIn} 3s; /* Opera */
  @media screen and (max-width: 767px) {
    top: 488px;
    width: 302px;
    height: 36px;
    padding: 8px 24.6px 1.3px 29px;
    font-size: 12px;
    text-align: center;
  }
`;

const FriendModal = () => {
  const [showToast, setShowToast] = useState(false);

  const onClickShare = (e) => {
    setShowToast(true);
    const text = document.createElement('textarea');
    document.body.appendChild(text);
    const nickname = localStorage.getItem('nickname');
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
      <ModalOverlay />
      <ModalContents>
        <Layout>
          <Header>
            <span>친구</span>
            <img src={closeBtn} alt="닫기 버튼" />
          </Header>
          <Title>친구를 추가해 보세요</Title>
          <Description>
            아래 공유 버튼을 눌러 <br /> 친구에게 내 페이지 링크를 보낼 수 있어요.
          </Description>
          <LinkArea>
            <span>{`ala.monster/${localStorage.getItem('nickname')}`}</span>
            <img src={friendLink} alt="공유 버튼" onClick={onClickShare} />
          </LinkArea>
          {showToast && <Toast>링크가 클립보드에 복사되었습니다.</Toast>}
        </Layout>
      </ModalContents>
    </ModalWrapper>
  );
};

export default FriendModal;
