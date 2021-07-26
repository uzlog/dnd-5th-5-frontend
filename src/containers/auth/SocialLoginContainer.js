import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { googleOauth, naverOauth } from '@modules/auth';
import SocialLogin from '@components/auth/SocialLogin';

const SocialLoginContainer = () => {
  const dispatch = useDispatch();
  const { status, message, token } = useSelector(({ auth }) => ({
    status: auth.status,
    message: auth.message,
    token: auth.token,
  }));
  const state = { status, message, token };

  const onSubmitGoogle = useCallback((payload) => dispatch(googleOauth(payload)), [dispatch]);
  const onSubmitNaver = useCallback((payload) => dispatch(naverOauth(payload)), [dispatch]);

  return <SocialLogin state={state} onSubmitGoogle={onSubmitGoogle} onSubmitNaver={onSubmitNaver} />;
};

export default SocialLoginContainer;
