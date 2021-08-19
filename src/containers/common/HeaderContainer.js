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
  const {
    authToken,
    socialLoginStatus,
    tokenExisted,
    showLoginModal,
    showFriendModal,
    showAlarmModal,
    showFollowerModal,
    memberNickname,
    memberData,
    memberDataLoading,
  } = useSelector(({ auth, modal, member, loading }) => ({
    authToken: auth.token,
    socialLoginStatus: auth.status,
    tokenExisted: auth.tokenExisted,

    showLoginModal: modal.showLoginModal,
    showFriendModal: modal.showFriendModal,
    showAlarmModal: modal.showAlarmModal,
    showFollowerModal: modal.showFollowerModal,

    memberNickname: member.nickname,
    memberData: member.data,
    memberDataLoading: loading['member/GET_MY_INFO'],
  }));
  const user = token ? true : false;
  const state = { tokenExisted, showFriendModal, showLoginModal, showAlarmModal, showFollowerModal, memberData, user };
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

  /**
   * 비로그인으로 사용중에 로그인을 하면 스토리지에 닉네임 저장이 안 된다.
   * 그래서 토큰이 있고 스토리지가 비어있는 상태이기 때문에, 이때 스토리지에 넣어준다.
   */
  useEffect(() => {
    if (token && sessionStorage.getItem('nickname') === null) {
      if (memberNickname.length > 0) {
        sessionStorage.setItem('nickname', memberNickname);
        localStorage.setItem('nickname', memberNickname);
      }
    }
  });

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
