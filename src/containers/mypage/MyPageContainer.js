import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { getAlaCardList, updateError } from '@modules/mypage';
import { getMyInfo } from '@modules/member';
import {
  getOtherInfo,
  getRelation,
  sendFollow,
  acceptFollow,
  declineFollow,
  cancelFollow,
  deleteFriend,
} from '@modules/friend';
import { updateModalStatus } from '@modules/modal';
import MyPageComponent from '@components/mypage/MyPageComponent';
import MyPageSkeleton from '@components/mypage/MyPageSkeleton';

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
    showDeleteFriendModal,
    showCancelFollowModal,

    getOtherInfoStatus,
    getOtherInfoData,
    getOtherInfoError,
    getOtherInfoLoading,

    getRelationStatus,
    getRelationData,
    getRelationError,
    sendFollowStatus,
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
    showDeleteFriendModal: modal.showDeleteFriendModal,
    showCancelFollowModal: modal.showCancelFollowModal,

    getOtherInfoStatus: friend.getOtherInfoStatus,
    getOtherInfoData: friend.getOtherInfoData,
    getOtherInfoError: friend.getOtherInfoError,
    getOtherInfoLoading: loading['member/GET_OTHER_INFO'],

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
  const state = {
    getOtherInfoData,
    memberData,
    getRelationData,
    alacardData,
    nickname,
    alacardError,
    showProfileModal,
    showDeleteFriendModal,
    showCancelFollowModal,
  };

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

    if (token && nickname !== sessionNickname) {
      dispatch(getRelation(nickname));
    }
    if (nickname !== sessionNickname) {
      dispatch(getOtherInfo(nickname));
    }

    dispatch(getAlaCardList(nickname));
  }, [nickname]);

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

  // 친구 관계가 변할시 관계 다시 받아오기
  useEffect(() => {
    if (
      sendFollowStatus === 200 ||
      acceptFollowStatus === 200 ||
      cancelFollowStatus === 200 ||
      deleteFriendStatus === 204
    ) {
      dispatch(getRelation(nickname));
    }
  }, [sendFollowStatus, acceptFollowStatus, cancelFollowStatus, deleteFriendStatus]);

  const onClickSendFollow = useCallback((payload) => dispatch(sendFollow(payload)), [dispatch]);
  const onClickCancelFollow = useCallback((payload) => dispatch(cancelFollow(payload)), [dispatch]);
  const onClickAcceptFollow = useCallback((payload) => dispatch(acceptFollow(payload)), [dispatch]);
  const onClickDeleteFriend = useCallback((payload) => dispatch(deleteFriend(payload)), [dispatch]);
  const onClickUpdateModalStatus = useCallback((payload) => dispatch(updateModalStatus(payload)), [dispatch]);

  const apiCall = {
    onClickSendFollow,
    onClickCancelFollow,
    onClickAcceptFollow,
    onClickDeleteFriend,
    onClickUpdateModalStatus,
  };
  return <>{alacardLoading ? <MyPageComponent state={state} apiCall={apiCall} /> : <MyPageSkeleton state={state} />}</>;
};

export default withRouter(MyPageContainer);
