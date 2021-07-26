import React from 'react';
import GoogleLogin from 'react-google-login';
import NaverLogin from 'react-login-by-naver';

import * as dotenv from 'dotenv';

dotenv.config();

const SocialLogin = ({ state, onSubmitGoogle, onSubmitNaver }) => {
  const googleId = process.env.REACT_APP_GOOGLE_KEY;
  const naverId = process.env.REACT_APP_NAVER_KEY;

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
  return (
    <>
      <GoogleLogin
        clientId={googleId}
        buttonText="Google"
        onSuccess={(result) => onSuccessGoogle(result)}
        onFailure={(result) => console.log(result)}
      />
      <NaverLogin
        clientId={naverId}
        callbackUrl="http://localhost:3000"
        render={(props) => (
          <button type="button" onClick={props.onClick}>
            Naver
          </button>
        )}
        onSuccess={(naverUser) => onSuccessNaver(naverUser)}
        onFailure={(result) => console.error(result)}
      />
    </>
  );
};

export default SocialLogin;
