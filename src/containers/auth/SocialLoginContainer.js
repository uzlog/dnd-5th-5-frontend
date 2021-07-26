import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { googleOauth, naverOauth } from '@modules/auth';
import { getTempInfo, updateMyInfo } from '@modules/member';
import SocialLogin from '@components/auth/SocialLogin';
import client from '@lib/client';

const SocialLoginContainer = ({ history }) => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const { socialLoginStatus, authMessage, token, authError, memberStatus, memberMessage, memberData, memberError } =
    useSelector(({ auth, member, loading }) => ({
      // 로그인 정보
      socialLoginStatus: auth.status,
      authMessage: auth.message,
      token: auth.token,
      authError: auth.error,

      // 유저 정보
      memberStatus: member.memberStatus,
      memberMessage: member.memberMessage,
      memberData: member.memberData,
      memberError: member.memberError,
    }));
  const state = { socialLoginStatus, authMessage, token };

  const onSubmitGoogle = useCallback((payload) => dispatch(googleOauth(payload)), [dispatch]);
  const onSubmitNaver = useCallback((payload) => dispatch(naverOauth(payload)), [dispatch]);

  // 로그인이 성공하면 유저 정보를 받아온다.
  useEffect(() => {
    if (socialLoginStatus === 200) {
      cookies.set('token', token, { path: '/' });
      client.defaults.common.headers.common['X-AUTH_TOKEN'] = token;
      dispatch(getTempInfo());
    }
  }, [socialLoginStatus]);

  useEffect(() => {
    if (memberData && authMessage === 'join') {
      // 닉네임 입력 모달로 변경
    } else if (memberData && authMessage === 'login') {
      // 유저 프로필로 이동
    }
  }, [memberData, authMessage]);

  return <SocialLogin state={state} onSubmitGoogle={onSubmitGoogle} onSubmitNaver={onSubmitNaver} />;
};

export default withRouter(SocialLoginContainer);
