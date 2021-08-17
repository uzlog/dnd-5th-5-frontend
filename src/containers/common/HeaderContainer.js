import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { updateModalStatus, openProfileModal } from '@modules/modal';
import { getMyInfo } from '@modules/member';
import useWatchCookie from '@hooks/useWatchCookie';
import Header from '@components/common/Header';

const HeaderContainer = ({ history }) => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get('token');
  const { authToken, socialLoginStatus, tokenExisted, showFriendModal, showAlarmModal, memberData, memberDataLoading } =
    useSelector(({ auth, modal, member, loading }) => ({
      authToken: auth.token,
      socialLoginStatus: auth.status,
      tokenExisted: auth.tokenExisted,

      showFriendModal: modal.showFriendModal,
      showAlarmModal: modal.showAlarmModal,

      memberData: member.data,
      memberDataLoading: loading['member/GET_MY_INFO'],
    }));
  const user = token ? true : false;
  let localNickname = localStorage.getItem('nickname');
  const [sibal, setSibal] = useState(sessionStorage.getItem('nickname'));
  let sessionNickname = sessionStorage.getItem('nickname');
  const state = { tokenExisted, showFriendModal, showAlarmModal, memberData, user };
  useWatchCookie();

  const onClickModalStatus = useCallback((payload) => dispatch(updateModalStatus(payload)), [dispatch]);
  const onClickOpenProfile = useCallback((payload) => dispatch(openProfileModal(payload)), [dispatch]);

  useEffect(() => {
    console.log(sessionStorage.getItem('nickname'));
    if (!tokenExisted && sessionStorage.getItem('nickname') !== null) {
      sessionStorage.removeItem('nickname');
      localStorage.removeItem('nickname');
      alert('다시 로그인해주세요');
      history.push('/');
      window.location.reload();
    }
  }, [tokenExisted]);

  // useEffect(() => {
  //   if (socialLoginStatus === 200) {
  //     cookies.set('token', authToken, { path: '/', expires: new Date(Date.now() + 1000 * 10) });
  //     client.defaults.headers.common['X-AUTH_TOKEN'] = token;
  //   }
  // }, [socialLoginStatus]);
  // useEffect(() => {
  //   console.log('token: ', token, 'sibal: ', sessionStorage.getItem('nickname'));
  //   if (!tokenExisted && sessionStorage.getItem('nickname') !== null) {
  //     alert('토큰 만료');
  //     if (sessionStorage.getItem('type') === 'google') {
  //       dispatch(googleOauth(JSON.parse(sessionStorage.getItem('userInfo'))));
  //     } else {
  //       dispatch(naverOauth(JSON.parse(sessionStorage.getItem('userInfo'))));
  //     }
  //   }
  // }, [tokenExisted]);

  // useEffect(() => {
  //   cookies.set('token', authToken, { path: '/', expires: new Date(Date.now() + 1000 * 5) });
  //   console.log('토큰 바꿈');
  // }, [socialLoginStatus]);

  /**
   * 1. 토큰 유무
   * 2. 유저 정보 존재 유무
   * 3. 토큰 O -> 유저 정보 X -> 데이터 받아오기,
   * 4. 토큰 O -> 유저 정보 O && 토큰 X -> 아무것도 안함
   */
  useEffect(() => {
    if (token) {
      if (Object.values(memberData).length === 0) {
        dispatch(getMyInfo());
      }
    }
  }, [token, memberData]);

  return (
    <>
      {memberDataLoading === undefined ? ( // 데이터 불러오기 안하는 경우
        <Header state={state} onClickModalStatus={onClickModalStatus} onClickOpenProfile={onClickOpenProfile} />
      ) : memberDataLoading ? (
        <Header state={state} onClickModalStatus={onClickModalStatus} onClickOpenProfile={onClickOpenProfile} />
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default withRouter(HeaderContainer);
