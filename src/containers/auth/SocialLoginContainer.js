import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { googleOauth, kakaoOauth } from '@modules/auth';
import { changeField, getMyInfo, updateMyInfo, checkNicknameDuplicated } from '@modules/member';
import { updateModalStatus } from '@modules/modal';
import SocialLogin from '@components/auth/SocialLogin';
import client from '@lib/api/client';

const SocialLoginContainer = ({ history, closeModal }) => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const {
    socialLoginStatus,
    authMessage,
    token,

    memberNickname,
    memberMessage,
    memberData,
    updateMyInfoError,
    getMemberLoading,

    duplicatedData,
    duplicatedTimestamp,
  } = useSelector(({ auth, member, loading }) => ({
    // 로그인 정보
    socialLoginStatus: auth.status,
    authMessage: auth.message,
    token: auth.token,

    // 유저 정보
    memberNickname: member.nickname,
    memberMessage: member.message,
    memberData: member.data,
    updateMyInfoError: member.error,
    getMemberLoading: loading['member/GET_MY_INFO'],

    duplicatedData: member.duplicatedData,
    duplicatedTimestamp: member.duplicatedTimestamp,
  }));
  const state = {
    authMessage,
    memberNickname,
    updateMyInfoError,
    getMemberLoading,
    duplicatedData,
    duplicatedTimestamp,
    memberData,
  };

  const onSubmitGoogle = useCallback((payload) => dispatch(googleOauth(payload)), [dispatch]);
  const onSubmitKakao = useCallback((payload) => dispatch(kakaoOauth(payload)), [dispatch]);
  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);
  const onSubmitUpdateMyInfo = useCallback((payload) => dispatch(updateMyInfo(payload)), [dispatch]);
  const onSubmitCheckNicknameDuplicated = useCallback(
    (payload) => dispatch(checkNicknameDuplicated(payload)),
    [dispatch],
  );

  const apiCall = {
    onSubmitGoogle,
    onSubmitKakao,
    onChangeField,
    onSubmitUpdateMyInfo,
    onSubmitCheckNicknameDuplicated,
  };

  // 로그인이 성공하면 유저 정보를 받아온다.
  useEffect(() => {
    if (socialLoginStatus === 200) {
      cookies.set('token', token, { path: '/', expires: new Date(Date.now() + 1000 * 60 * 29) });
      client.defaults.headers.common['X-AUTH_TOKEN'] = token;
      dispatch(getMyInfo());
    }
  }, [socialLoginStatus]);

  // message == login
  useEffect(() => {
    if (memberData && authMessage === 'login') {
      sessionStorage.setItem('nickname', memberData.nickname);
      dispatch(updateModalStatus({ key: 'showLoginModal', value: false }));
      history.push(`/${memberData.nickname}`);
    }
  }, [memberData]);

  // 닉네임 변경 (회원가입)
  useEffect(() => {
    if (memberMessage === 'update') {
      sessionStorage.setItem('nickname', memberData.nickname);
      history.push(`/${memberData.nickname}`);
    }
  }, [memberMessage]);

  return (
    <>
      <SocialLogin state={state} closeModal={closeModal} apiCall={apiCall} />
    </>
  );
};

export default withRouter(SocialLoginContainer);
