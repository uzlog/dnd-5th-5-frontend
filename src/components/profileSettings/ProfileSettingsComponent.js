import client from '@lib/api/client';
import imageCompression from 'browser-image-compression';
import React, { useEffect, useState } from 'react';
import {
  MainWrapper,
  ProfileImg,
  EmailWrapper,
  EachTitle,
  EmailImg,
  EmailContentWrapper,
  InputBoxWrapper,
  InputBox,
  ContentWrapper,
  LogoutButton,
  SubmitButton,
  ButtonWrapper,
  DeleteButton,
  StatusMessageCount,
  AlertMessage,
  ToggleButton,
  ToggleInner,
  IsOpen,
} from './style';
import useResponsive from '@hooks/useResponsive';
import google from '@assets/img/profileSettings/google.svg';
import naver from '@assets/img/profileSettings/naver.svg';
import emoji11 from '@assets/img/emoji/emoji11.svg';
import lock from '@assets/img/profileSettings/lock.svg';
import unlock from '@assets/img/profileSettings/unlock.svg';
import Modal from './Modal';
import { withRouter } from 'react-router-dom';
import HeaderContainer from '@containers/common/HeaderContainer';

const ProfileSettingsComponent = ({ history }) => {
  const [myInfo, setMyInfo] = useState({
    imgUrl: '',
    email: '',
    nickname: '',
    statusMessage: '',
    isOpen: false,
  });
  const [nicknameLength, setNicknameLength] = useState(5);
  const [nicknameExists, setNicknameExists] = useState(false);
  const [statusMessageOverCount, setStatusMessageOverCount] = useState(false);
  const viewSize = useResponsive();
  const [nickname, setNickname] = useState(sessionStorage.getItem('nickname'));
  const [deleteModal, setDeleteModal] = useState(false);
  const requestData = async () => {
    const response = await client.get('/api/v1/member/me');
    setMyInfo(response.data.data);
  };

  useEffect(requestData, []);

  const onNicknameChange = (e) => {
    setMyInfo({
      ...myInfo,
      nickname: e.target.value,
      changed: true,
    });
    setNicknameLength(e.target.value.length);
  };

  const onStatusMessageChange = (e) => {
    setStatusMessageOverCount(false);
    setMyInfo({
      ...myInfo,
      statusMessage: e.target.value,
      changed: true,
    });
  };

  const isOpenClick = () => {
    setMyInfo({
      ...myInfo,
      isOpen: !myInfo.isOpen,
      changed: true,
    });
  };

  const onFileChange = async (e) => {
    const imageFile = e.target.files[0];
    // option 설정 찾기 browser-image-compression 여기서 컴프레싱한거임
    const options = {
      maxSizeMB: 2,
      maxWidthOrWidth: 200,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);
      // resize된 이미지의 url을 받아 fileUrl에 저장
      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then((result) => {
        setMyInfo({
          ...myInfo,
          imgUrl: result,
          changed: true,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdataSubmitHandler = async () => {
    if (nicknameLength > 2) {
      const existsResponse = await client.get('/api/v1/member/exists', { params: { nickname: myInfo.nickname } });
      existsResponse.data.data === true
        ? myInfo.nickname === nickname
          ? setNicknameExists(false)
          : setNicknameExists(true)
        : setNicknameExists(false);
      myInfo.statusMessage.length < 30 ? setStatusMessageOverCount(false) : setStatusMessageOverCount(true);
      if ((existsResponse.data.data === false || myInfo.nickname === nickname) && myInfo.statusMessage.length < 30) {
        const upDataResponse = await client.patch('/api/v1/member/me', myInfo);
        if (upDataResponse.data.message === 'update') {
          alert('성공적으로 변경됐습니다 :)');
          setNickname(myInfo.nickname);
          sessionStorage.setItem('nickname', myInfo.nickname);
          localStorage.setItem('nickname', myInfo.nickname);
          window.location.replace(`/${myInfo.nickname}/settings`);
        }
      }
    }
  };

  const onDeleteHandler = async () => {
    const response = await client.get('/api/v1/member/delete', { params: { nickname } });
    if (response.data.message === 'success') {
      document.cookie = 'token=; expires=1995-11-01T09:11:07.000Z;';
      sessionStorage.removeItem('nickname');
      localStorage.removeItem('nickname');
      history.push('/');
    }
  };

  const onlogoutHandler = () => {
    document.cookie = 'token=; expires=1995-11-01T09:11:04.000Z;';
    sessionStorage.removeItem('nickname');
    localStorage.removeItem('nickname');
    history.push('/');
  };

  return (
    <>
      <MainWrapper>
        <HeaderContainer />
        <ProfileImg
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={onFileChange}
          style={{
            backgroundImage: `url(${myInfo.imgUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />

        <ContentWrapper>
          <EmailWrapper>
            <EachTitle>계정</EachTitle>
            <br />
            <EmailContentWrapper>
              <EmailImg src={myInfo.email.slice(-9, -4) === 'naver' ? naver : google} />
              <span> {myInfo.email}</span>
            </EmailContentWrapper>
          </EmailWrapper>
          <InputBoxWrapper>
            <EachTitle>별명</EachTitle>
            <InputBox placeholder={myInfo.nickname} value={myInfo.nickname} onChange={onNicknameChange} />
            {nicknameLength < 3 ? <AlertMessage>앗, 별명이 너무 짧아요! 3자 이상 입력해주세요.</AlertMessage> : <></>}
            {nicknameExists ? (
              <AlertMessage>앗, 누군가 이미 사용중인 별명이네요. 다른 별명을 사용해보세요.</AlertMessage>
            ) : (
              <></>
            )}
          </InputBoxWrapper>
          <InputBoxWrapper>
            <EachTitle>
              자기소개
              <StatusMessageCount style={myInfo.statusMessage.length > 30 ? { color: 'red' } : null}>
                {myInfo.statusMessage.length}/30 byte
              </StatusMessageCount>
            </EachTitle>
            <InputBox
              placeholder={myInfo.statusMessage}
              value={myInfo.statusMessage}
              onChange={onStatusMessageChange}
            />
            {statusMessageOverCount ? (
              <AlertMessage>앗, 자기소개가 길어요. 짧고 강렬하게 부탁드려요 :)</AlertMessage>
            ) : (
              <></>
            )}
          </InputBoxWrapper>
          <EachTitle>
            <IsOpen>
              계정 공개 여부
              <img
                style={viewSize < 1023 ? { width: '19px', height: '19px' } : { width: '29px', height: '29px' }}
                src={myInfo.isOpen ? unlock : lock}
              />
            </IsOpen>
            <ToggleButton onClick={isOpenClick} className={myInfo.isOpen ? 'left' : ''}>
              <ToggleInner className={myInfo.isOpen ? 'left' : ''} />
            </ToggleButton>
          </EachTitle>
          <DeleteButton
            style={{ cursor: 'not-allowed' }}
            onClick={() => {
              setDeleteModal(!deleteModal);
            }}>
            회원탈퇴
          </DeleteButton>
          {deleteModal ? <Modal setDeleteModal={setDeleteModal} onDeleteHandler={onDeleteHandler} /> : <></>}
          <ButtonWrapper>
            <LogoutButton onClick={onlogoutHandler}>로그아웃</LogoutButton>
            <SubmitButton
              onClick={onUpdataSubmitHandler}
              style={myInfo.changed ? { cursor: 'pointer' } : { background: '#2a2a2a' }}
              disabled={myInfo.changed ? false : true}>
              다 썼음
              <img src={emoji11} />
            </SubmitButton>
          </ButtonWrapper>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
};

export default withRouter(ProfileSettingsComponent);
