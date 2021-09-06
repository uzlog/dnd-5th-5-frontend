import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import imageCompression from 'browser-image-compression';
import { withRouter } from 'react-router-dom';
import client from '@lib/api/client';
import HeaderContainer from '@containers/common/HeaderContainer';
import useResponsive from '@hooks/useResponsive';
import { useTitle } from '@hooks/useMeta';
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
  HideBox,
  ToggleButton,
  ToggleInner,
  IsOpen,
} from './style';
import Modal from './Modal';
import google from '@assets/img/profileSettings/google.svg';
import naver from '@assets/img/profileSettings/naver.svg';
import emoji11 from '@assets/img/emoji/emoji11.svg';
import lock from '@assets/img/profileSettings/lock.svg';
import unlock from '@assets/img/profileSettings/unlock.svg';

const cookies = new Cookies();
const ProfileSettingsComponent = ({ state }) => {
  const { memberData, onUpdateMyInfo } = state;
  const [myInfo, setMyInfo] = useState(memberData);
  const [isNicknameExists, setIsNicknameExists] = useState(false);
  const [isNicknameBreakeRoles, setIsNicknameBreakeRoles] = useState(false);
  const [statusMessageOverCount, setStatusMessageOverCount] = useState(false);
  const [nickname, setNickname] = useState(sessionStorage.getItem('nickname'));
  const [deleteModal, setDeleteModal] = useState(false);
  const viewSize = useResponsive();

  const onChangeNickname = (e) => {
    setMyInfo({
      ...myInfo,
      nickname: e.target.value,
      changed: true,
    });
    setIsNicknameBreakeRoles(false);
  };

  const onChangeStatusMessage = (e) => {
    setStatusMessageOverCount(false);
    setMyInfo({
      ...myInfo,
      statusMessage: e.target.value,
      changed: true,
    });
  };

  const onClickIsOpen = () => {
    setMyInfo({
      ...myInfo,
      isOpen: !myInfo.isOpen,
      changed: true,
    });
  };

  const onChangeFile = async (e) => {
    const imageFile = e.target.files[0];
    // option 설정 찾기 browser-image-compression 여기서 컴프레싱한거임
    const options = {
      maxSizeMB: 1,
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

  const onUpdataSubmitHandler = async (e) => {
    e.preventDefault();
    // 닉네임이 있나?
    const existsResponse = await client.get('/api/v1/member/exists', { params: { nickname: myInfo.nickname } });
    existsResponse.data.data === true
      ? myInfo.nickname === nickname
        ? setIsNicknameExists(false)
        : setIsNicknameExists(true)
      : setIsNicknameExists(false);
    //상테메시지 30줄보다 짧은가?
    myInfo.statusMessage.length < 30 ? setStatusMessageOverCount(false) : setStatusMessageOverCount(true);
    // 닉네임 조건에 부합하는가?
    const regExp = /^[0-9a-zA-Z]([_]?[0-9a-zA-Z]){2,19}$/; // 영문, 숫자, 특수문자 '_' 를 포함한 3~20자 특수문자는 마지막에 못옴
    regExp.test(myInfo.nickname) ? setIsNicknameBreakeRoles(false) : setIsNicknameBreakeRoles(true);

    // 모든 조건을 만족할 때 업데이트 실행
    if (
      (existsResponse.data.data === false || myInfo.nickname === nickname) &&
      myInfo.statusMessage.length < 30 &&
      regExp.test(myInfo.nickname)
    ) {
      await onUpdateMyInfo(myInfo);
      alert('성공적으로 변경됐습니다 :)');
      setNickname(myInfo.nickname);
      sessionStorage.setItem('nickname', myInfo.nickname);
      window.location.replace(`/${myInfo.nickname}/settings`);
    }
  };

  const onDeleteHandler = async () => {
    const response = await client.delete('/api/v1/member');
    if (response.data.message === 'success') {
      cookies.remove('token');
      sessionStorage.removeItem('nickname');
      client.defaults.headers.common['X-AUTH_TOKEN'] = undefined;
      window.location.replace('/');
    }
  };

  const onlogoutHandler = () => {
    cookies.remove('token');
    sessionStorage.removeItem('nickname');
    window.location.replace('/');
  };

  useTitle(sessionStorage.getItem('nickname'));
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <HeaderContainer />
      <MainWrapper>
        <ProfileImg
          type="file"
          accept="image/x-png, image/jpeg, image/jpg"
          onChange={onChangeFile}
          style={{
            backgroundImage: `url(${myInfo.imgUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <HideBox></HideBox>
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
            <InputBox placeholder={myInfo.nickname} value={myInfo.nickname} onChange={onChangeNickname} />
            {isNicknameExists ? (
              <AlertMessage>앗, 누군가 이미 사용중인 별명이네요. 다른 별명을 사용해보세요.</AlertMessage>
            ) : (
              <></>
            )}
            {isNicknameBreakeRoles ? (
              <AlertMessage>앗, 숫자/영문/_만 사용하여 3-20자 이내로 사용해보세요.</AlertMessage>
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
              onChange={onChangeStatusMessage}
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
            <ToggleButton onClick={onClickIsOpen} className={myInfo.isOpen ? '' : 'left'}>
              <ToggleInner className={myInfo.isOpen ? '' : 'left'} />
            </ToggleButton>
          </EachTitle>
          <DeleteButton>
            <span
              style={{ cursor: 'not-allowed' }}
              onClick={() => {
                setDeleteModal(!deleteModal);
              }}>
              회원탈퇴
            </span>
          </DeleteButton>
          {deleteModal ? <Modal setDeleteModal={setDeleteModal} onDeleteHandler={onDeleteHandler} /> : <></>}
          <ButtonWrapper>
            <LogoutButton onClick={onlogoutHandler}>로그아웃</LogoutButton>
            <SubmitButton
              onClick={onUpdataSubmitHandler}
              style={myInfo.changed ? { cursor: 'pointer' } : { background: '#2a2a2a' }}
              disabled={myInfo.changed ? false : true}>
              저장할래 <img src={emoji11} />
            </SubmitButton>
          </ButtonWrapper>
        </ContentWrapper>
      </MainWrapper>
    </div>
  );
};

export default withRouter(ProfileSettingsComponent);
