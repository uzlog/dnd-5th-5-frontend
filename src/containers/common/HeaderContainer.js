import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateModalStatus } from '@modules/modal';
import Header from '@components/common/Header';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { showFriendModal, showAlarmModal } = useSelector(({ modal }) => ({
    showFriendModal: modal.showFriendModal,
    showAlarmModal: modal.showAlarmModal,
  }));
  const state = { showFriendModal, showAlarmModal };

  const onClickModalStatus = useCallback((payload) => dispatch(updateModalStatus(payload)), [dispatch]);

  return <Header state={state} onClickModalStatus={onClickModalStatus} />;
};

export default HeaderContainer;
