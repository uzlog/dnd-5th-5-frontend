import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { getAlaCardList, updateError } from '@modules/mypage';
import { getMyInfo } from '@modules/member';
import { getRelation, sendFollow, acceptFollow, declineFollow, cancelFollow, deleteFriend } from '@modules/friend';
import MyPageComponent from '@components/mypage/MyPageComponent';

const MyPageContainer = ({ history, nickname }) => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const {
    memberData,
    memberLoading,
    alacardStatus,
    alacardMessage,
    alacardData,
    alacardError,
    alacardLoading,
    showProfileModal,

    getRelationStatus,
    getRelationData,
    getRelationError,
    snedFollowStatus,
    sendFollowError,
    acceptFollowStatus,
    acceptFollowError,
    declineFollowStatus,
    declineFollowError,
    cancelFollowStatus,
    cancelFollowError,
    deleteFriendStatus,
    deleteFriendError,
  } = useSelector(({ member, mypage, modal, friend, loading }) => ({
    memberData: member.data,
    memberLoading: loading['member/GET_MY_INFO'],

    alacardStatus: mypage.alacardStatus,
    alacardMessage: mypage.alacardMessage,
    alacardData: mypage.alacardData,
    alacardError: mypage.alacardError.data,
    alacardLoading: loading['mypage/GET_ALA_CARD_LIST'],

    showProfileModal: modal.showProfileModal,

    getRelationStatus: friend.getRelationStatus,
    getRelationData: friend.getRelationData.relation,
    getRelationError: friend.getRelationError,
    sendFollowStatus: friend.sendFollowStatus,
    sendFollowError: friend.sendFollowError,
    acceptFollowStatus: friend.acceptFollowStatus,
    acceptFollowError: friend.acceptFollowError,
    declineFollowStatus: friend.declineFollowStatus,
    declineFollowError: friend.declineFollowError,
    cancelFollowStatus: friend.cancelFollowStatus,
    cancelFollowError: friend.cancelFollowError,
    deleteFriendStatus: friend.deleteFriendStatus,
    deleteFriendError: friend.deleteFriendError,
  }));
  const token = cookies.get('token');
  const sessionNickname = sessionStorage.getItem('nickname');
  const state = { memberData, getRelationData, alacardData, nickname, alacardError, showProfileModal };

  /**
   * 화면 첫 진입시, 내 정보 받아오기
   * 알라 카드 목록 받아오기
   * 로그인 회원의 경우, 관계 확인하기
   */
  useEffect(() => {
    if (token) {
      if (Object.values(memberData).length === 0) {
        dispatch(getMyInfo());
      }
    }
    dispatch(getAlaCardList(nickname));
    if (token && nickname !== sessionNickname) {
      dispatch(getRelation(nickname));
    }
  }, []);

  useEffect(() => {
    if (alacardError) {
      alert('해당 유저가 존재하지 않습니다!');
      dispatch(updateError());
      history.push('/');
      if (token) {
        dispatch(getAlaCardList(nickname));
      }
    }
  }, [alacardError]);

  const onClickSendFollow = useCallback((payload) => dispatch(sendFollow(payload)), [dispatch]);
  const onClickCancelFollow = useCallback((payload) => dispatch(cancelFollow(payload)), [dispatch]);

  const apiCall = { onClickSendFollow, onClickCancelFollow };
  return (
    <>
      {alacardLoading && memberLoading && !alacardError ? (
        <MyPageComponent state={state} apiCall={apiCall} />
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default withRouter(MyPageContainer);
