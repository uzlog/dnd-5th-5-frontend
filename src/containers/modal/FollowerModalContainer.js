import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { getFollowerList, acceptFollow, declineFollow } from '@modules/friend';
import { updateModalStatus } from '@modules/modal';
import FollowerModal from '@components/modal/FollowerModal';

const FollowerModalContainer = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get('token');
  const {
    getFollowerListStatus,
    getFollowerListData,
    getFollowerListError,
    getFollowerListLoading,
    acceptFollowStatus,
    declineFollowStatus,
  } = useSelector(({ friend, loading }) => ({
    getFollowerListStatus: friend.getFollowerListStatus,
    getFollowerListData: friend.getFollowerListData,
    getFollowerListError: friend.getFollowerListError,
    getFollowerListLoading: loading['friend/GET_FOLLOWER_LIST'],
    acceptFollowStatus: friend.acceptFollowStatus,
    declineFollowStatus: friend.declineFollowStatus,
  }));
  const state = { getFollowerListData };

  useEffect(() => {
    if (acceptFollowStatus === 200 || declineFollowStatus === 200) {
      dispatch(getFollowerList());
    }
  }, [acceptFollowStatus, declineFollowStatus]);

  const onClickAcceptFollow = useCallback((payload) => dispatch(acceptFollow(payload)), [dispatch]);
  const onClickDeclineFollow = useCallback((payload) => dispatch(declineFollow(payload)), [dispatch]);
  const onClickModalStatus = useCallback((payload) => dispatch(updateModalStatus(payload)), [dispatch]);

  const apiCall = { onClickAcceptFollow, onClickDeclineFollow, onClickModalStatus };
  useEffect(() => {
    if (token) {
      dispatch(getFollowerList());
    }
  }, []);

  return <>{getFollowerListLoading ? <FollowerModal state={state} apiCall={apiCall} /> : <div>loading...</div>}</>;
};

export default FollowerModalContainer;
