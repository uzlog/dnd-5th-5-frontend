import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGetAlarm from '@hooks/useGetAlarm';
import { acceptFollow, declineFollow } from '@modules/friend';
import { updateModalStatus } from '@modules/modal';
import AlarmModal from '@components/modal/AlarmModal';

const AlarmModalContainer = () => {
  const { data, getAlarmDataError, getAlarmDataLoading, mutate } = useGetAlarm();
  const getAlarmDataList = data.data;
  const dispatch = useDispatch();

  const { getFollowerListData, acceptFollowStatus, declineFollowStatus } = useSelector(({ friend }) => ({
    acceptFollowStatus: friend.acceptFollowStatus,
    declineFollowStatus: friend.declineFollowStatus,
  }));
  const state = { getFollowerListData, getAlarmDataList, getAlarmDataError };

  useEffect(() => {
    if (acceptFollowStatus === 200 || declineFollowStatus === 200) {
      dispatch(updateModalStatus({ key: 'showAlarmModal', value: false }));
    }
  }, [acceptFollowStatus, declineFollowStatus]);

  const onClickAcceptFollow = useCallback((payload) => dispatch(acceptFollow(payload)), [dispatch]);
  const onClickDeclineFollow = useCallback((payload) => dispatch(declineFollow(payload)), [dispatch]);
  const onClickModalStatus = useCallback((payload) => dispatch(updateModalStatus(payload)), [dispatch]);

  const apiCall = { onClickAcceptFollow, onClickDeclineFollow, onClickModalStatus };

  return <>{getAlarmDataLoading ? <AlarmModal state={state} apiCall={apiCall} /> : <></>}</>;
};

export default AlarmModalContainer;
