import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMyInfo, updateMyInfo } from '@modules/member';
import ProfileSettingsComponent from '@components/profileSettings/ProfileSettingsComponent';

const PorifileSettingsContainer = () => {
  const dispatch = useDispatch();
  const { memberData, getMemberLoading } = useSelector(({ member, loading }) => ({
    memberData: member.data,
    getMemberLoading: loading['member/GET_MY_INFO'],
  }));

  useEffect(() => {
    dispatch(getMyInfo());
  }, []);

  const onUpdateMyInfo = useCallback((payload) => dispatch(updateMyInfo(payload)), [dispatch]);

  const state = { memberData, onUpdateMyInfo };

  return <>{getMemberLoading ? <ProfileSettingsComponent state={state} /> : <div>loading</div>}</>;
};

export default withRouter(PorifileSettingsContainer);
