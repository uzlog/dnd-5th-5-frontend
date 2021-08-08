import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FriendModalContainer from '@containers/modal/FriendModalContainer';
import { ModalWrapper, ModalOverlay, ModalContents } from '@components/main/Style';
import logo from '@assets/img/nav/logo.svg';
import friend from '@assets/img/nav/friend.svg';
import activatedNotice from '@assets/img/nav/activatedNotice.svg';
import inactivatedNotice from '@assets/img/nav/inactivatedNotice.svg';
import avatar from '@assets/img/nav/avatar.svg';
import arrowBtn from '@assets/img/my-profile/arrowBtn.svg';
import avatarM from '@assets/img/my-profile/avatarM.svg';
import closeBtnWhite from '@assets/img/my-profile/closeBtnWhite.svg';
import settingBtn from '@assets/img/my-profile/settingBtn.svg';

const Wrapper = styled.div`
  background-color: #121212;
  width: 576px;
  height: 96px;
  padding: 29px 0px 29px 27px;
  @media screen and (max-width: 1023px) {
    width: 360px;
    height: 60px;
    padding: 18px 20px 18px 15px;
  }
`;

const LogoWrapper = styled(Link)`
  float: left;
  display: flex;
  align-items: center;
  width: 74px;
  height: 39px;
  img {
    width: 74px;
    height: 39px;
  }
  @media screen and (max-width: 1023px) {
    width: 46px;
    height: 24px;
    img {
      width: 46px;
      height: 24px;
    }
  }
`;

const IconWrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;
  width: 220px;
  div:not(:last-child) {
    margin-right: 39px;
  }
  @media screen and (max-width: 1023px) {
    width: 112px;
    div:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.close ? '23px' : '39px')};
  height: ${(props) => (props.close ? '23px' : '39px')};
  img {
    width: ${(props) => (props.close ? '23px' : '39px')};
    height: ${(props) => (props.close ? '23px' : '39px')};
  }
  @media screen and (max-width: 1023px) {
    width: 24px;
    height: 24px;
    img {
      width: ${(props) => (props.close ? '14px' : '24px')};
      height: ${(props) => (props.close ? '14px' : '24px')};
    }
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 125px;
  padding-left: 39px;
  @media screen and (max-width: 1023px) {
    padding-left: 24px;
    height: 62px;
  }
  span {
    color: white;
  }
`;

const ProfileImg = styled.img`
  width: ${(props) => (props.avatar ? '77px' : '24px')};
  height: ${(props) => (props.avatar ? '77px' : '24px')};
  @media screen and (max-width: 1023px) {
    width: ${(props) => (props.avatar ? '48px' : '18px')};
    height: ${(props) => (props.avatar ? '48px' : '18px')};
  }
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-left: 19px;
  img {
    margin-left: 12px;
  }
  @media screen and (max-width: 1023px) {
    margin-left: 12px;
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: -0.5px;
    img {
      margin-left: 9px;
    }
    span:last-child {
      margin-top: 5px;
      font-size: 12px;
    }
  }
  div {
    display: flex;
    align-items: center;
  }
`;

const StyledButton = styled.button`
  background-color: #2a2a2a;
  border-radius: 48px;
  width: 175px;
  height: 57px;
  margin-left: 135px;
  font-size: 19px;
  letter-spacing: -0.8px;
  padding: 12px 12px 12px 25px;
  outline: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1023px) {
    width: 109px;
    height: 35px;
    border-radius: 30px;
    line-height: 1.6;
    letter-spacing: -0.5px;
    font-size: 12px;
    padding: 6px 6px 6px 12px;
    margin-left: 84px;
    margin-top: 14px;
    img {
      width: 18px;
      height: 18px;
    }
  }
`;
const Header = ({ state, onClickModalStatus }) => {
  const [showProfile, setShowProfile] = useState(false);
  const { showFriendModal, showAlarmModal, user } = state;
  const {
    memberData: { nickname, statusMessage, imgUrl },
  } = state;

  const openFriendModal = () => {
    onClickModalStatus({ key: 'showFriendModal', value: true });
  };

  const openProfileModal = () => {
    setShowProfile(true);
  };

  const closeProfileModal = () => {
    setShowProfile(false);
  };

  return (
    <>
      <Wrapper>
        <LogoWrapper to={user ? `/${localStorage.getItem('nickname')}` : `/`}>
          <img src={logo} alt="로고" />
        </LogoWrapper>
        <IconWrapper>
          <ImgWrapper onClick={openFriendModal}>{user && <img src={friend} alt="친구창" />}</ImgWrapper>
          <ImgWrapper>{user && <img src={inactivatedNotice} alt="알림창" />}</ImgWrapper>
          <ImgWrapper onClick={openProfileModal}>
            <img src={imgUrl ? imgUrl : avatar} alt="프로필 사진" />
          </ImgWrapper>
        </IconWrapper>
      </Wrapper>
      {showFriendModal && <FriendModalContainer />}
      {showProfile && (
        <ModalWrapper profile="profile">
          <ModalOverlay onClick={() => closeProfileModal()} />
          <ModalContents profile="profile">
            <Wrapper>
              <LogoWrapper to={user ? `/${nickname}` : `/`}>
                <img src={logo} alt="로고" />
              </LogoWrapper>
              <IconWrapper>
                <ImgWrapper />
                <ImgWrapper />
                <ImgWrapper style={{ color: 'white' }} close="close" onClick={closeProfileModal}>
                  <img src={closeBtnWhite} alt="닫기" />
                </ImgWrapper>
              </IconWrapper>
            </Wrapper>
            {user ? (
              <>
                <ProfileWrapper>
                  <ProfileImg src={avatarM} avatar="avatar" alt="프로필 사진" />
                  <ProfileInfoWrapper>
                    <div>
                      <span>{nickname}</span>
                      <ProfileImg src={settingBtn} alt="프로필 수정" />
                    </div>
                    <span>{statusMessage}</span>
                  </ProfileInfoWrapper>
                </ProfileWrapper>
                <StyledButton>
                  알라카드 관리
                  <ProfileImg src={arrowBtn} alt="카드 관리" />
                </StyledButton>
              </>
            ) : (
              <div>로그인하3</div>
            )}
          </ModalContents>
        </ModalWrapper>
      )}
    </>
  );
};

export default Header;
