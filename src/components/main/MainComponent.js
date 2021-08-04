import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalOverlay, ModalContents } from './Style';
import SocialLoginContainer from '@containers/auth/SocialLoginContainer';
import logo from '@assets/img/logo/alaLogo.svg';

const Wrapper = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 360px;
    height: 640px;
  }
  @media screen and (max-width: 767px) {
    img {
      margin-top: 110px;
      margin-bottom: 30px;
    }
  }
`;

const Title = styled.div`
  font-weight: bold;
  color: white;
  @media screen and (max-width: 767px) {
    font-size: 30px;
    line-height: 1.4;
    margin-bottom: 45px;
  }
  span {
    color: #b9ff46;
  }
`;

const Description = styled.p`
  line-height: 1.6;
  text-align: center;
  color: white;
  @media screen and (max-width: 767px) {
    width: 204px;
    height: 46px;
    font-size: ${(props) => props.size || '14px'};
  }
  span {
    color: #b9ff46;
  }
`;

const StyledButton = styled.button`
  background-color: white;
  outline: none;
  border: none;
  font-weight: bold;
  text-align: center;
  border-radius: 50px;
  @media screen and (max-width: 767px) {
    padding: 14px 40px;
    width: 220px;
    height: 54px;
    font-size: 16px;
    margin-top: 50px;
    margin-bottom: 101px;
  }
`;

const MainComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Wrapper>
        <img src={logo} width="78px" height="70px" alt="로고" />
        <Title>
          너 자신을 <span>알라</span>
        </Title>
        <Description>
          네가 보는 '나'에 대해 궁금해! <br />
          남들이 보는 나는 어떤 사람일까?
        </Description>
        <StyledButton onClick={openModal}>시작하기 GO!! 🐨</StyledButton>
        <Description size="16px">
          지금까지 알라와 함께한
          <br /> <span>123,463명</span>
        </Description>
      </Wrapper>
      {showModal && (
        <ModalWrapper>
          <ModalOverlay onClick={() => closeModal()} />
          <ModalContents>
            <SocialLoginContainer closeModal={closeModal} />
          </ModalContents>
        </ModalWrapper>
      )}
    </>
  );
};
export default MainComponent;
