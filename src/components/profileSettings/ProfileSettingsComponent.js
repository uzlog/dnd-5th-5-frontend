import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import imageCompression from 'browser-image-compression';
import { withRouter } from 'react-router-dom';
import client from '@lib/api/client';
import HeaderContainer from '@containers/common/HeaderContainer';
import { useTitle } from '@hooks/useMeta';
import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  ProfileImg,
  EmailWrapper,
  EachTitle,
  EmailImg,
  EmailContentWrapper,
  InputBoxWrapper,
  InputBox,
  ContentWrapper,
  CancelButton,
  SubmitButton,
  ButtonWrapper,
  DeleteButton,
  StatusMessageCount,
  AlertMessage,
  HideBox,
  ToggleButton,
  ToggleInner,
  IsOpen,
  ToastWrapper,
  Toast,
} from './style';
import Modal from './Modal';
import googleIcon from '@assets/img/auth/google.svg';
import kakaoIcon from '@assets/img/auth/kakao.svg';
import Footer from '@components/common/Footer';
import useResponsive from '../../hooks/useResponsive';

const cookies = new Cookies();
const ProfileSettingsComponent = ({ state, history }) => {
  const { memberData, onUpdateMyInfo } = state;
  const [myInfo, setMyInfo] = useState(memberData);
  const [isNicknameExists, setIsNicknameExists] = useState(false);
  const [isNicknameBreakeRoles, setIsNicknameBreakeRoles] = useState(false);
  const [statusMessageOverCount, setStatusMessageOverCount] = useState(false);
  const [nickname, setNickname] = useState(sessionStorage.getItem('nickname'));
  const [deleteModal, setDeleteModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
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
      const response = await onUpdateMyInfo(myInfo);
      if (response.status === 200) {
        setNickname(myInfo.nickname);
        sessionStorage.setItem('nickname', myInfo.nickname);
        setShowToast(true);
        setMyInfo({
          ...myInfo,
          changed: false,
        });
        setTimeout(() => {
          setShowToast(false);
        }, 1000);
      }
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
      <Wrapper>
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
                <div
                  style={myInfo.provider === 'KAKAO' ? { backgroundColor: '#fee500' } : { backgroundColor: 'white' }}>
                  <EmailImg
                    src={myInfo.provider === 'KAKAO' ? kakaoIcon : googleIcon}
                    style={myInfo.provider === 'KAKAO' ? { backgroundColor: '#fee500' } : { backgroundColor: 'white' }}
                  />
                </div>
                <span>{myInfo.email}</span>
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
                <span>계정 공개 여부</span>
                <span>
                  {myInfo.isOpen ? <p>공개</p> : <p>비공개</p>}
                  <ToggleButton onClick={onClickIsOpen} className={myInfo.isOpen ? 'left' : ''}>
                    <ToggleInner className={myInfo.isOpen ? 'left' : ''} />
                  </ToggleButton>
                </span>
              </IsOpen>
            </EachTitle>
            <DeleteButton>
              <span onClick={onlogoutHandler}>로그아웃</span>
            </DeleteButton>
            <DeleteButton>
              <span
                onClick={() => {
                  setDeleteModal(!deleteModal);
                }}>
                회원탈퇴
              </span>
            </DeleteButton>
            {deleteModal ? <Modal setDeleteModal={setDeleteModal} onDeleteHandler={onDeleteHandler} /> : <></>}
            <ToastWrapper>{showToast && <Toast>변경이 완료됐습니다!</Toast>}</ToastWrapper>

            <ButtonWrapper>
              <CancelButton onClick={() => history.push(`/${myInfo.nickname}`)}>취소</CancelButton>
              <SubmitButton
                onClick={onUpdataSubmitHandler}
                style={myInfo.changed ? { cursor: 'pointer' } : { background: '#2a2a2a' }}
                disabled={myInfo.changed ? false : true}>
                저장할래😋
              </SubmitButton>
            </ButtonWrapper>
          </ContentWrapper>
          {viewSize > 1023 ? <></> : <Footer />}
        </MainWrapper>
      </Wrapper>
    </div>
  );
};

export default withRouter(ProfileSettingsComponent);
