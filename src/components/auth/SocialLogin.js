import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import NaverLogin from 'react-login-by-naver';
import * as dotenv from 'dotenv';
import {
  Wrapper,
  ExitButtonWrapper,
  ExitButton,
  Header,
  StyledParagraph,
  ButtonWrapper,
  LoginBtn,
  StyledInfoParagraph,
  FormWrapper,
  StyledInput,
  SmallWrapper,
  StyledSpan,
  StyledErrorSpan,
  ErrorMessage,
  SubmitButton,
  LoginBtnWrapper,
} from './style';
import googleIcon from '@assets/img/auth/google.svg';
import kakaoIcon from '@assets/img/auth/kakao.svg';
import closeBtn from '@assets/img/auth/closeBtn.svg';
import { withRouter } from 'react-router-dom';

dotenv.config();
const { Kakao } = window;

const SocialLogin = ({ state, closeModal, apiCall }) => {
  const [error, setError] = useState('');
  const [regError, setRegError] = useState(false);
  const googleId = process.env.REACT_APP_GOOGLE_KEY;
  const { authMessage, memberNickname, getMemberLoading, duplicatedData, memberData } = state;
  const { onSubmitGoogle, onSubmitKakao, onChangeField, onSubmitUpdateMyInfo, onSubmitCheckNicknameDuplicated } =
    apiCall;
  const onSuccessGoogle = (result) => {
    const userInfo = { profileObj: result.profileObj };
    onSubmitGoogle(userInfo);
  };

  const kakaoLoginClickHandler = async () => {
    await Kakao.Auth.login({
      success: function () {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
            const { nickname, thumbnail_image } = response.properties;
            const kakaoId = response.id;
            const { email } = response.kakao_account;
            const profileObj = {
              kakaoId,
              imageUrl: thumbnail_image,
              name: nickname,
              email,
            };
            const userInfo = { profileObj };
            onSubmitKakao(userInfo);
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    onChangeField({ key: name, value });
  };
  const onSubmitNickname = (e) => {
    e.preventDefault();
    const userInfo = { nickname: memberNickname };
    const regExp = /^[0-9a-zA-Z]([_]?[0-9a-zA-Z]){2,19}$/; // 영문, 숫자, 특수문자 '_' 를 포함한 3~20자 특수문자는 마지막에 못옴
    if (!regExp.test(memberNickname)) {
      // 닉네임 조건에 부합하지 않음
      setRegError(true);
    } else {
      // 닉네임 조건에 부합함
      if (memberData.nickname === memberNickname) {
        onSubmitUpdateMyInfo(userInfo);
      } else {
        setRegError(false);
        onSubmitCheckNicknameDuplicated(userInfo);
      }
    }
  };

  // 카카오 로그인 init
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
  }, []);

  useEffect(() => {
    const userInfo = { nickname: memberNickname };
    if (duplicatedData === false) {
      onSubmitUpdateMyInfo(userInfo);
    } else if (duplicatedData === true) {
      setError('앗, 누군가 이미 사용중인 별명이네요,\n 다른 별명을 사용해보세요.');
    }
  }, [duplicatedData]);

  return (
    <>
      {authMessage === 'join' && getMemberLoading ? (
        <>
          <ExitButtonWrapper>
            <ExitButton type="button" onClick={() => closeModal()}>
              <img src={closeBtn} alt="닫기" />
            </ExitButton>
          </ExitButtonWrapper>
          <FormWrapper onSubmit={onSubmitNickname}>
            <Header nickname="nickname">뭐라고 불러드릴까요?</Header>
            <StyledParagraph nickname="nickname">
              다른 사용자들에게 보여질 별명을 입력해주세요. <br />
              이후에도 언제든지 변경할 수 있습니다.
            </StyledParagraph>
            <StyledInput
              type="text"
              name="nickname"
              value={memberNickname}
              placeholder={memberNickname}
              minLength="3"
              maxLength="20"
              onChange={onChange}
            />
            <SmallWrapper>
              {regError ? (
                <StyledErrorSpan>숫자/영문/_만 사용하여 3-20자 이내</StyledErrorSpan>
              ) : (
                <StyledSpan>숫자/영문/_만 사용하여 3-20자 이내</StyledSpan>
              )}
              <StyledSpan>{memberNickname.length}/20</StyledSpan>
            </SmallWrapper>
            {duplicatedData && (
              <ErrorMessage>
                {error.split('\n').map((e) => (
                  <>
                    {e}
                    <br />
                  </>
                ))}
              </ErrorMessage>
            )}
            <SubmitButton type="submit" onClick={onSubmitNickname}>
              이렇게 불러줘 😁
            </SubmitButton>
          </FormWrapper>
        </>
      ) : (
        <>
          <ExitButtonWrapper>
            <ExitButton type="button" onClick={() => closeModal()}>
              <img src={closeBtn} alt="닫기" />
            </ExitButton>
          </ExitButtonWrapper>
          <Wrapper>
            <Header>시작하기</Header>
            <StyledParagraph>
              나도 몰랐던 내 모습,
              <br /> <strong>알라</strong>와 함께 <strong>알아</strong>가 보세요.
            </StyledParagraph>
            <ButtonWrapper>
              <LoginBtnWrapper color="white">
                <GoogleLogin
                  clientId={googleId}
                  buttonText="Google"
                  render={(renderProps) => (
                    <LoginBtn src={googleIcon} onClick={renderProps.onClick} alt="구글 로그인" />
                  )}
                  onSuccess={(result) => onSuccessGoogle(result)}
                  onFailure={(result) => console.log(result)}
                />
              </LoginBtnWrapper>
              <LoginBtnWrapper color="#f9e000">
                <LoginBtn src={kakaoIcon} onClick={kakaoLoginClickHandler} alt="카카오 로그인" />
              </LoginBtnWrapper>
            </ButtonWrapper>
            <StyledInfoParagraph>
              로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며, <br /> 서비스 이용을 위해 이메일과
              프로필 이미지를 수집합니다.
            </StyledInfoParagraph>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default withRouter(SocialLogin);
