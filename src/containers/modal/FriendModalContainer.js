import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendList } from '@modules/friend';
import { updateModalStatus } from '@modules/modal';
import FriendModal from '@components/modal/FriendModal';

const FriendModalContainer = () => {
  const dispatch = useDispatch();
  const { getFriendListData, getFriendListError, getFriendListLoading, deleteFriendStatus } = useSelector(
    ({ friend, loading }) => ({
      getFriendListData: friend.getFriendListData,
      getFriendListError: friend.getFriendListError,
      getFriendListLoading: loading['friend/GET_FRIEND_LIST'],
      deleteFriendStatus: friend.deleteFriendStatus,
    }),
  );
  const state = { getFriendListData };

  const onClickModalStatus = useCallback((payload) => dispatch(updateModalStatus(payload)), [dispatch]);

  useEffect(() => {
    dispatch(getFriendList());
  }, []);

  // 친구 삭제시 친구 목록 다시 받아오기
  useEffect(() => {
    if (deleteFriendStatus === 204) {
      dispatch(getFriendList());
    }
  }, [deleteFriendStatus]);

  return (
    <>
      {getFriendListLoading ? (
        <FriendModal state={state} onClickModalStatus={onClickModalStatus} />
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default FriendModalContainer;
