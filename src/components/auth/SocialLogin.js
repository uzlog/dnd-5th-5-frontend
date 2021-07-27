import React from 'react';
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
} from './style';
import googleIcon from '@assets/img/googleIcon.svg';
import naverIcon from '@assets/img/naverIcon.svg';

dotenv.config();

const SocialLogin = ({ state, closeModal, onSubmitGoogle, onSubmitNaver, onChangeField, onSubmitUpdateMyInfo }) => {
  const googleId = process.env.REACT_APP_GOOGLE_KEY;
  const naverId = process.env.REACT_APP_NAVER_KEY;
  const { authMessage, memberNickname, getMemberLoading } = state;

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
    console.log(name, value);
    onChangeField({ key: name, value });
  };
  const onSubmitNickname = (e) => {
    e.preventDefault();
    const userInfo = { nickname: memberNickname };
    onSubmitUpdateMyInfo(userInfo);
  };

  return (
    <>
      {authMessage === 'join' && getMemberLoading ? (
        <form onSubmit={onSubmitNickname}>
          <input type="text" name="nickname" value={memberNickname} placeholder={memberNickname} onChange={onChange} />
          <button type="submit" onClick={onSubmitNickname}>
            닉네임 설정
          </button>
        </form>
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
