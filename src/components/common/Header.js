import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import useOwner from '@hooks/useOwner';
import FriendModalContainer from '@containers/modal/FriendModalContainer';
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
import { useEffect } from 'react';

const Wrapper = styled.div`
  background-color: #121212;
  max-width: 576px;
  width: 40vw;
  height: 9.4vh;
  padding: 3.1vh 2.2vw 3.1vh 1.8vw;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (max-width: 1023px) {
    width: 360px;
    min-height: 60px;
    height: 9.3vh;
    padding: 2.8vh 20px 3vh 20px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled(Link)`
  float: left;
  display: flex;
  align-items: center;
  max-width: 74px;
  width: 5.1vw;
  height: 2.7vh;
  min-height: 30px;
  img {
    max-width: 74px;
    width: 5.1vw;
    height: 2.7vh;
    min-height: 30px;
  }
  @media screen and (max-width: 1023px) {
    width: 37px;
    min-height: 24px;
    height: 2.3vh;
    img {
      width: 37px;
      min-height: 24px;
      height: 2.3vh;
    }
  }
`;

const IconWrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 220px;
  width: 15.2vw;
  div:not(:last-child) {
    margin-right: min(32px, 2.2vw);
  }
  @media screen and (max-width: 1023px) {
    width: 112px;
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
  max-width: ${(props) => (props.close ? '23px' : '39px')};
  min-height: 38.4px;
  width: ${(props) => (props.close ? '1.6vw' : '2.7vw')};
  height: ${(props) => (props.close ? '2.2vh' : '3.8vh')};
  img {
    width: ${(props) => (props.close ? '1.6vw' : '2.7vw')};
    height: ${(props) => (props.close ? '2.2vh' : '3.8vh')};
    min-height: 38.4px;
  }
  @media screen and (max-width: 1023px) {
    width: 24px;
    min-height: 24px;
    img {
      width: ${(props) => (props.close ? '14px' : '24px')};
    }
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 7.6vh;
  padding-left: 2.3vw;
  @media screen and (max-width: 1023px) {
    padding-left: 24px;
    min-height: 62px;
  }
  span {
    color: white;
  }
`;

const ProfileImg = styled.img`
  max-width: ${(props) => (props.avatar ? '77px' : '24px')};
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
    font-size: min(1.7vw, 2.5vh, 2.56rem);
    font-weight: bold;
    line-height: 1.6;
    letter-spacing: -0.5px;
  }
  span:last-child {
    margin-top: 0.8vh;
    font-size: min(1.3vw, 1.8vh, 1.92rem);
  }
  @media screen and (max-width: 1023px) {
    margin-left: 12px;
    font-size: 16px;

    img {
      margin-left: 9px;
    }
    span:last-child {
      font-size: 12px;
    }
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #2a2a2a;
  border-radius: 48px;
  max-width: 175px;
  width: 12.2vw;
  height: 5.5vh;
  margin-left: min(8.7vw, 135px);
  margin-top: 2.4vh;
  font-size: min(1.3vw, 1.8vh, 1.9rem);
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
    min-height: 35px;
    border-radius: 30px;
    line-height: 1.6;
    letter-spacing: -0.5px;
    font-size: min(1.8vh, 1.3vw, 1.2rem);
    padding: 8px 8px 8px 16px;
    margin-left: 8.4rem;
    margin-top: 16px;
    img {
      width: 18px;
      min-height: 18px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Header = ({ history, state, onClickModalStatus, onClickOpenProfile }) => {
  const [showProfile, setShowProfile] = useState(false);
  const {
    tokenExisted,
    showFriendModal,
    showAlarmModal,
    user,
    memberData: { nickname, statusMessage, imgUrl },
  } = state;
  const urlNickname = history.location.pathname.split('/')[1];
  const userInfo = { nickname, urlNickname };
  const isOwned = useOwner(userInfo);

  const openFriendModal = () => {
    document.body.style = `overflow: hidden`;
    onClickModalStatus({ key: 'showFriendModal', value: true });
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

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <LogoWrapper to={user ? `/${nickname || sessionStorage.getItem('nickname')}` : `/`}>
            <img src={logo} alt="로고" />
          </LogoWrapper>
          <IconWrapper>
            <ImgWrapper onClick={openFriendModal}>
              <img src={friend} alt="친구창" />
            </ImgWrapper>
            <ImgWrapper>
              <img src={inactivatedNotice} alt="알림창" />
            </ImgWrapper>
            <ImgWrapper onClick={openProfileModal}>
              <img src={imgUrl ? imgUrl : avatar} alt="프로필 사진" />
            </ImgWrapper>
          </IconWrapper>
        </InnerWrapper>
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
                <div />
                <div />
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
                      <span>{nickname || localStorage.getItem('nickname')}</span>
                      <StyledLink to={isOwned ? `/${nickname}/settings` : ''}>
                        <ProfileImg src={settingBtn} alt="프로필 수정" />
                      </StyledLink>
                    </div>
                    <span>{statusMessage}</span>
                  </ProfileInfoWrapper>
                </ProfileWrapper>
                <StyledLink to={isOwned ? `/${nickname}/alacard` : ''}>
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
