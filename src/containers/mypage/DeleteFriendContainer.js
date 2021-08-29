import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFriend, cancelFollow } from '@modules/friend';
import { updateModalStatus } from '@modules/modal';
import DeleteFriendComponent from '@components/mypage/DeleteFriendComponent';

const DeleteFriendContainer = ({ nickname }) => {
  const dispatch = useDispatch();
  const { deleteFriendStatus, cancelFollowStatus, showDeleteFriendModal, showCancelFollowModal } = useSelector(
    ({ friend, modal }) => ({
      deleteFriendStatus: friend.deleteFriendStatus,
      cancelFollowStatus: friend.cancelFollowStatus,

      showDeleteFriendModal: modal.showDeleteFriendModal,
      showCancelFollowModal: modal.showCancelFollowModal,
    }),
  );
  const state = { nickname, showDeleteFriendModal, showCancelFollowModal };
  useEffect(() => {
    if (deleteFriendStatus === 204) {
      dispatch(updateModalStatus({ key: 'showDeleteFriendModal', value: false }));
    }
  }, [deleteFriendStatus]);
  useEffect(() => {
    if (cancelFollowStatus === 200) {
      dispatch(updateModalStatus({ key: 'showCancelFollowModal', value: false }));
    }
  }, [cancelFollowStatus]);

  const onClickUpdateModalStatus = useCallback((payload) => dispatch(updateModalStatus(payload)), [dispatch]);
  const onClickDeleteFriend = useCallback((payload) => dispatch(deleteFriend(payload)), [dispatch]);
  const onClickCancelFollow = useCallback((payload) => dispatch(cancelFollow(payload)), [dispatch]);

  const apiCall = { onClickUpdateModalStatus, onClickDeleteFriend, onClickCancelFollow };

  return <DeleteFriendComponent state={state} apiCall={apiCall} />;
};

export default DeleteFriendContainer;
