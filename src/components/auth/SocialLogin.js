import React, { useState } from 'react';
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
  GoogleButton,
  NaverButton,
  StyledInfoParagraph,
  FormWrapper,
  StyledInput,
  SmallWrapper,
  StyledSpan,
  ErrorMessage,
  SubmitButton,
} from './style';
import googleIcon from '@assets/img/googleIcon.svg';
import naverIcon from '@assets/img/naverIcon.svg';

dotenv.config();

const SocialLogin = ({
  state,
  closeModal,
  onSubmitGoogle,
  onSubmitNaver,
  onChangeField,
  onSubmitUpdateMyInfo,
  onSubmitCheckNicknameDuplicated,
}) => {
  const [error, setError] = useState('');
  const [regError, setRegError] = useState(false);
  const googleId = process.env.REACT_APP_GOOGLE_KEY;
  const naverId = process.env.REACT_APP_NAVER_KEY;
  const { authMessage, memberNickname, getMemberLoading, duplicatedData } = state;

  const onSuccessGoogle = (result) => {
    const userInfo = { profileObj: result.profileObj };
    onSubmitGoogle(userInfo);
  };
  const onSuccessNaver = (result) => {
    const { id, profile_image, email, name } = result;
    const userInfo = {
      id,
      profile_image,
      email,
      name,
    };
    onSubmitNaver(userInfo);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    onChangeField({ key: name, value });
  };
  const onSubmitNickname = (e) => {
    e.preventDefault();
    const userInfo = { nickname: memberNickname };
    console.log(userInfo);
    const regExp = /^[A-Za-z,_]{3,20}$/;
    if (!regExp.test(memberNickname)) {
      // 닉네임 조건에 부합하지 않음
      setRegError(true);
      console.log(memberNickname);
    } else {
      // 닉네임 조건에 부합함
      onSubmitCheckNicknameDuplicated(userInfo);
      if (!duplicatedData) {
        // onSubmitUpdateMyInfo(userInfo);
      } else {
        setError('앗, 누군가 이미 사용중인 별명이네요,\n 다른 별명을 사용해보세요.');
      }
    }
  };
  return (
    <>
      {authMessage === 'join' && getMemberLoading ? (
        <>
          <ExitButtonWrapper>
            <ExitButton type="button" onClick={() => closeModal()}>
              X
            </ExitButton>
          </ExitButtonWrapper>
          <FormWrapper onSubmit={onSubmitNickname}>
            <Header>뭐라고 불러드릴까요?</Header>
            <StyledParagraph>
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
              <StyledSpan className={regError ? 'error' : ''}>숫자/영문/_만 사용하여 3-20자 이내</StyledSpan>
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
              X
            </ExitButton>
          </ExitButtonWrapper>
          <Wrapper>
            <Header>시작하기</Header>
            <StyledParagraph>
              지금 로그인하고 맞춤 커리어 콘텐츠로 하루를 시작하세요. <br />
              매일 1,000개 채널의 콘텐츠가 새 탭에서 펼쳐집니다.
            </StyledParagraph>
            <ButtonWrapper>
              <GoogleLogin
                clientId={googleId}
                buttonText="Google"
                render={(renderProps) => (
                  <GoogleButton onClick={renderProps.onClick}>
                    <img src={googleIcon} alt="구글 로그인" />
                    Google
                  </GoogleButton>
                )}
                onSuccess={(result) => onSuccessGoogle(result)}
                onFailure={(result) => console.log(result)}
              />
              <NaverLogin
                clientId={naverId}
                callbackUrl="http://localhost:3000"
                render={(props) => (
                  <NaverButton type="button" onClick={props.onClick}>
                    <img src={naverIcon} alt="네이버 로그인" />
                    Naver
                  </NaverButton>
                )}
                onSuccess={(naverUser) => onSuccessNaver(naverUser)}
                onFailure={(result) => console.error(result)}
              />
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

export default SocialLogin;
