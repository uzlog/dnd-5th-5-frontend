import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { getFollowerList, acceptFollow, declineFollow } from '@modules/friend';
import { getAlarmData } from '@modules/alarm';
import { updateModalStatus } from '@modules/modal';
import FollowerModal from '@components/modal/FollowerModal';

const AlarmModalContainer = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get('token');
  const {
    getFollowerListStatus,
    getFollowerListData,
    getFollowerListError,
    getFollowerListLoading,
    getAlarmDataStatus,
    getAlarmDataList,
    getAlarmDataError,
    getAlarmDataLoading,
    acceptFollowStatus,
    declineFollowStatus,
  } = useSelector(({ friend, alarm, loading }) => ({
    getFollowerListStatus: friend.getFollowerListStatus,
    getFollowerListData: friend.getFollowerListData,
    getFollowerListError: friend.getFollowerListError,
    getFollowerListLoading: loading['friend/GET_FOLLOWER_LIST'],

    getAlarmDataStatus: alarm.getAlarmDataStatus,
    getAlarmDataList: alarm.getAlarmDataList,
    getAlarmDataError: alarm.getAlarmDataError,
    getAlarmDataLoading: loading['friend/GET_ALARM_DATA'],
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
      dispatch(getAlarmData());
    }
  }, []);

  return <>{getFollowerListLoading ? <FollowerModal state={state} apiCall={apiCall} /> : <div>loading...</div>}</>;
};

export default AlarmModalContainer;
