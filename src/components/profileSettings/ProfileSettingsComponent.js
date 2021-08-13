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
  ProfileImgInput,
  AlertMessage,
} from './style';
import HeaderContainer from '@containers/common/HeaderContainer';
import google from '@assets/img/profileSettings/google.svg';
import naver from '@assets/img/profileSettings/naver.svg';
import lock from '@assets/img/profileSettings/lock.svg';
import unlock from '@assets/img/profileSettings/unlock.svg';
import { URL } from 'url';
import Modal from './Modal';

const ProfileSettingsComponent = () => {
  const [myInfo, setMyInfo] = useState({ imgUrl: '', email: '', nickname: '', statusMessage: '', isOpen: false });
  const [nicknameLength, setNicknameLength] = useState(5);
  const [nicknameExists, setNicknameExists] = useState(false);
  const requestData = async () => {
    const response = await client.get('/api/v1/member/me');
    setMyInfo(response.data.data);
  };
  useEffect(requestData, []);
  const onNicknameChange = (e) => {
    setMyInfo({
      ...myInfo,
      nickname: e.target.value,
    });
    setNicknameLength(e.target.value.length);
  };
  const onStatusMessageChange = (e) => {
    setMyInfo({
      ...myInfo,
      statusMessage: e.target.value,
    });
  };
  const isOpenClick = () => {
    setMyInfo({
      ...myInfo,
      isOpen: !myInfo.isOpen,
    });
  };
  const onUpdataSubmit = async () => {
    if (nicknameLength > 2) {
      const existsResponse = await client.get('/api/v1/member/exists', { params: { nickname: myInfo.nickname } });
      (await existsResponse.data.data) === true ? setNicknameExists(true) : setNicknameExists(false);
      if (existsResponse.data.data === false) {
        const upDataResponse = await client.patch('/api/v1/member/me', myInfo);
        console.log(upDataResponse.data.message);
        if (upDataResponse.data.message === 'update') {
          alert('성공적으로 변경됐습니다 :)');
        }
      }
    }
  };
  const onFileChange = async (e) => {
    const imageFile = e.target.files[0];
    // option 설정 찾기 browser-image-compression 여기서 컴프레싱한거임
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 120,
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);
      // resize된 이미지의 url을 받아 fileUrl에 저장
      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then((result) => {
        setMyInfo({
          ...myInfo,
          imgUrl: result,
        });
      });
    } catch (error) {
      console.log(error);
    }
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
            <EachTitle>자기소개</EachTitle>
            <InputBox
              placeholder={myInfo.statusMessage}
              value={myInfo.statusMessage}
              onChange={onStatusMessageChange}
            />
          </InputBoxWrapper>
          <EachTitle>
            <span>
              계정 공개 여부 <img src={myInfo.isOpen ? unlock : lock} />
            </span>
            <img onClick={isOpenClick} src={myInfo.isOpen ? unlock : lock} />
          </EachTitle>
          <DeleteButton>회원탈퇴</DeleteButton>
          <ButtonWrapper>
            <LogoutButton>로그아웃</LogoutButton>
            <SubmitButton onClick={onUpdataSubmit}>다 썼음😋</SubmitButton>
          </ButtonWrapper>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
};

export default ProfileSettingsComponent;
