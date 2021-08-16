import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { updateModalStatus, openProfileModal } from '@modules/modal';
import { getMyInfo } from '@modules/member';
import Header from '@components/common/Header';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get('token');
  const { showFriendModal, showAlarmModal, memberData, memberDataLoading } = useSelector(
    ({ modal, member, loading }) => ({
      showFriendModal: modal.showFriendModal,
      showAlarmModal: modal.showAlarmModal,

      memberData: member.data,
      memberDataLoading: loading['member/GET_MY_INFO'],
    }),
  );
  const user = token ? true : false;
  const state = { showFriendModal, showAlarmModal, memberData, user };

  const onClickModalStatus = useCallback((payload) => dispatch(updateModalStatus(payload)), [dispatch]);
  const onClickOpenProfile = useCallback((payload) => dispatch(openProfileModal(payload)), [dispatch]);

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

export default HeaderContainer;
