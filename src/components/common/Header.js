import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { Wrapper, InnerWrapper } from './style';
import useOwner from '@hooks/useOwner';
import FriendModalContainer from '@containers/modal/FriendModalContainer';
import FollowerModalContainer from '@containers/modal/FollowerModalContainer';
import SocialLoginContainer from '@containers/auth/SocialLoginContainer';
import { ModalWrapper, ModalOverlay, ModalContents } from '@components/main/Style';
import logo from '@assets/img/nav/logo.svg';
import friend from '@assets/img/nav/friend.svg';
// import activatedNotice from '@assets/img/nav/activatedNotice.svg';
import inactivatedNotice from '@assets/img/nav/inactivatedNotice.svg';
import avatar from '@assets/img/nav/avatar.svg';
import arrowBtn from '@assets/img/my-profile/arrowBtn.svg';
import avatarM from '@assets/img/my-profile/avatarM.svg';
import closeBtnWhite from '@assets/img/my-profile/closeBtnWhite.svg';
import settingBtn from '@assets/img/my-profile/settingBtn.svg';

const LogoWrapper = styled(Link)`
  float: left;
  display: flex;
  align-items: center;
  width: 59px;
  height: 30px;
  img {
    width: 59px;
    height: 30px;
  }
  @media screen and (max-width: 1023px) {
    width: 37px;
    height: 19px;
    img {
      width: 37px;
      height: 19px;
    }
  }
`;

const IconWrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 180px;
  width: 12.5vw;
  div:not(:last-child) {
    margin-right: min(32px, 2.2vw);
  }
  @media screen and (max-width: 1023px) {
    width: 112px;
    height: 24px;
    div:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const ImgWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.close ? '23px' : '39px')};
  height: 38.4px;
  img {
    width: ${(props) => (props.close ? '23px' : '39px')};
    height: 38.4px;
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

const LoginButtonWrapper = styled.div`
  color: white;
  cursor: pointer;
  font-size: min(calc((1.5vw + 2.2vh) / 2), 22.4px);
  line-height: 1.6;
  @media screen and (max-width: 1023px) {
    width: 39px;
    font-size: 14px;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 7.6vh;
  padding-left: 2.3vw;
  @media screen and (max-width: 1023px) {
    padding-left: 24px;
    height: 62px;
  }
  span {
    color: white;
  }
`;

const ProfileImg = styled.img`
  max-width: ${(props) => (props.avatar ? '77px' : '24px')};
  max-height: ${(props) => (props.avatar ? '77px' : '24px')};
  width: ${(props) => (props.avatar ? '5.3vw' : '1.6vw')};
  height: ${(props) => (props.avatar ? '7.6vh' : '2.3vh')};
  @media screen and (max-width: 1023px) {
    width: ${(props) => (props.avatar ? '48px' : '18px')};
    height: ${(props) => (props.avatar ? '48px' : '18px')};
  }
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: min(1vw, 19px);
  img {
    margin-left: 12px;
  }
  div {
    display: flex;
    align-items: center;
    font-size: min(calc((1.7vw + 2.5vh) / 2), 2.56rem);
    font-weight: bold;
    line-height: 1.6;
    letter-spacing: -0.5px;
  }
  span:last-child {
    margin-top: 0.8vh;
    font-size: min(calc((1.3vw + 1.8vh) / 2), 1.92rem);
  }
  @media screen and (max-width: 1023px) {
    margin-left: 12px;
    div {
      font-size: 16px;
    }
    img {
      margin-left: 9px;
    }
    span:last-child {
      margin-top: 5px;
      font-size: 12px;
    }
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #2a2a2a;
  border-radius: 48px;
  max-width: 175px;
  max-height: 56.6px;
  width: 12.2vw;
  height: 5.5vh;
  margin-left: min(8.7vw, 135px);
  margin-top: 2.4vh;
  font-size: min(calc((1.3vw + 1.8vh) / 2), 1.9rem);
  letter-spacing: -0.8px;
  padding: 1vh 0.8vw 1vh 1.7w;
  outline: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1023px) {
    width: 10.9rem;
    height: 3.5rem;
    border-radius: 30px;
    line-height: 1.6;
    letter-spacing: -0.5px;
    font-size: 1.2rem;
    padding: 8px 8px 8px 16px;
    margin-left: 8.4rem;
    margin-top: 16px;
    img {
      width: 18px;
      height: 18px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Header = ({ history, state, apiCall }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const {
    tokenExisted,
    showLoginModal,
    showFriendModal,
    showAlarmModal,
    showFollowerModal,
    user,
    memberData: { nickname, statusMessage, imgUrl },
  } = state;
  const { onClickModalStatus, onClickOpenProfile } = apiCall;
  const urlNickname = history.location.pathname.split('/')[1];
  const userInfo = { nickname, urlNickname };
  const isOwned = useOwner(userInfo);

  const openFriendModal = () => {
    document.body.style = `overflow: hidden`;
    onClickModalStatus({ key: 'showFriendModal', value: true });
  };

  const openFollowerModal = () => {
    document.body.style = 'overflow: hidden';
    onClickModalStatus({ key: 'showFollowerModal', value: true });
  };

  const openProfileModal = () => {
    onClickOpenProfile(true);
    document.body.style = `overflow: hidden`;
    setShowProfile(true);
  };

  const closeProfileModal = () => {
    onClickOpenProfile(false);
    document.body.style = `overflow: visible`;
    setShowProfile(false);
  };

  const oepnLoginModal = () => {
    document.body.style = `overflow: hidden`;
    setShowLogin(true);
  };

  const closeLoginModal = () => {
    document.body.style = `overflow: visible`;
    setShowLogin(false);
  };

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <LogoWrapper to={user ? `/${nickname || sessionStorage.getItem('nickname')}` : `/`}>
            <img src={logo} alt="로고" />
          </LogoWrapper>
          {user ? (
            <IconWrapper>
              <ImgWrapper onClick={openFriendModal}>
                <img src={friend} alt="친구창" />
              </ImgWrapper>
              <ImgWrapper onClick={openFollowerModal}>
                <img src={inactivatedNotice} alt="알림창" />
              </ImgWrapper>
              <ImgWrapper onClick={openProfileModal}>
                <img src={imgUrl ? imgUrl : avatar} style={{ borderRadius: '50%' }} alt="프로필 사진" />
              </ImgWrapper>
            </IconWrapper>
          ) : (
            <>
              <ImgWrapper />
              <ImgWrapper />
              <LoginButtonWrapper onClick={oepnLoginModal}>로그인</LoginButtonWrapper>
            </>
          )}
        </InnerWrapper>
      </Wrapper>
      {showFriendModal && <FriendModalContainer />}
      {showFollowerModal && <FollowerModalContainer />}
      {showLogin && (
        <ModalWrapper>
          <ModalOverlay onClick={() => closeLoginModal()} />
          <ModalContents>
            <SocialLoginContainer closeModal={closeLoginModal} />
          </ModalContents>
        </ModalWrapper>
      )}
      {showProfile && (
        <ModalWrapper profile="profile">
          <ModalOverlay onClick={() => closeProfileModal()} />
          <ModalContents profile="profile">
            <Wrapper>
              <InnerWrapper>
                <LogoWrapper to={user ? `/${nickname}` : `/`}>
                  <img src={logo} alt="로고" />
                </LogoWrapper>
                <IconWrapper>
                  <div />
                  <div />
                  <ImgWrapper style={{ color: 'white' }} close="close" onClick={closeProfileModal}>
                    <img src={closeBtnWhite} alt="닫기" />
                  </ImgWrapper>
                </IconWrapper>
              </InnerWrapper>
            </Wrapper>
            {user ? (
              <>
                <ProfileWrapper>
                  <ProfileImg
                    src={imgUrl ? imgUrl : avatarM}
                    avatar="avatar"
                    style={{ borderRadius: '50%' }}
                    alt="프로필 사진"
                  />
                  <ProfileInfoWrapper>
                    <div>
                      <span>{nickname || sessionStorage.getItem('nickname')}</span>
                      <StyledLink to={`/${nickname}/settings`}>
                        <ProfileImg src={settingBtn} alt="프로필 수정" />
                      </StyledLink>
                    </div>
                    <span>{statusMessage}</span>
                  </ProfileInfoWrapper>
                </ProfileWrapper>
                <StyledLink to={`/${nickname}/alacard`}>
                  <StyledButton>
                    알라카드 관리
                    <ProfileImg src={arrowBtn} alt="카드 관리" />
                  </StyledButton>
                </StyledLink>
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

export default withRouter(Header);
