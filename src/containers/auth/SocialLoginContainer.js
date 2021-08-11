import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { googleOauth, naverOauth } from '@modules/auth';
import { changeField, getMyInfo, updateMyInfo, checkNicknameDuplicated } from '@modules/member';
import SocialLogin from '@components/auth/SocialLogin';
import client from '@lib/api/client';

const SocialLoginContainer = ({ history, closeModal }) => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const {
    socialLoginStatus,
    authMessage,
    token,
    authError,

    memberNickname,
    memberStatus,
    memberMessage,
    memberData,
    memberError,
    getMemberLoading,

    duplicatedData,
  } = useSelector(({ auth, member, loading }) => ({
    // 로그인 정보
    socialLoginStatus: auth.status,
    authMessage: auth.message,
    token: auth.token,
    authError: auth.error,

    // 유저 정보
    memberNickname: member.nickname,
    memberStatus: member.status,
    memberMessage: member.message,
    memberData: member.data,
    memberError: member.error,
    getMemberLoading: loading['member/GET_MY_INFO'],
    duplicatedData: member.duplicatedData,
  }));
  const state = { authMessage, memberNickname, getMemberLoading, duplicatedData, memberData };

  const onSubmitGoogle = useCallback((payload) => dispatch(googleOauth(payload)), [dispatch]);
  const onSubmitNaver = useCallback((payload) => dispatch(naverOauth(payload)), [dispatch]);
  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);
  const onSubmitUpdateMyInfo = useCallback((payload) => dispatch(updateMyInfo(payload)), [dispatch]);
  const onSubmitCheckNicknameDuplicated = useCallback(
    (payload) => dispatch(checkNicknameDuplicated(payload)),
    [dispatch],
  );

  // 로그인이 성공하면 유저 정보를 받아온다.
  useEffect(() => {
    if (socialLoginStatus === 200) {
      cookies.set('token', token, { path: '/' });
      client.defaults.headers.common['X-AUTH_TOKEN'] = token;
      dispatch(getMyInfo());
    }
  }, [socialLoginStatus]);

  // message == login
  useEffect(() => {
    if (memberData && authMessage === 'login') {
      history.push(`/${memberData.nickname}`);
      localStorage.setItem('nickname', memberData.nickname);
      sessionStorage.setItem('nickname', memberData.nickname);
    }
  }, [memberData]);

  // 닉네임 변경
  useEffect(() => {
    if (memberMessage === 'update') {
      sessionStorage.setItem('nickname', memberData.nickname);
      history.push(`/${memberData.nickname}`);
    }
  }, [memberMessage]);

  return (
    <SocialLogin
      state={state}
      closeModal={closeModal}
      onSubmitGoogle={onSubmitGoogle}
      onSubmitNaver={onSubmitNaver}
      onChangeField={onChangeField}
      onSubmitUpdateMyInfo={onSubmitUpdateMyInfo}
      onSubmitCheckNicknameDuplicated={onSubmitCheckNicknameDuplicated}
    />
  );
};

export default withRouter(SocialLoginContainer);
