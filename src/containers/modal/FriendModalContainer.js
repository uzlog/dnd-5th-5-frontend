import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendList } from '@modules/friend';
import FriendModal from '@components/modal/FriendModal';

const FriendModalContainer = () => {
  const dispatch = useDispatch();
  const { getFriendListData, getFriendListError, getFriendListLoading } = useSelector(({ friend, loading }) => ({
    getFriendListData: friend.getFriendListData,
    getFriendListError: friend.getFriendListError,
    getFriendListLoading: loading['friend/GET_FRIEND_LIST'],
  }));

  useEffect(() => {
    dispatch(getFriendList());
  }, []);

  return <>{getFriendListLoading ? <FriendModal /> : <div>loading...</div>}</>;
};

export default FriendModalContainer;
