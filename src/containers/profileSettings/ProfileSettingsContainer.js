import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlaWordList } from '@modules/alaWord';
import ProfileSettingsComponent from '@components/profileSettings/ProfileSettingsComponent';

const PorifileSettingsContainer = ({}) => {
  const dispatch = useDispatch();
  const {
    memberNickname,
    memberStatus,
    memberMessage,
    memberData,
    memberError,

    deletedData,

    getMemberLoading,

    duplicatedData,
  } = useSelector(({ auth, member, loading }) => ({
    // 로그인 정보
    token: auth.token,

    // 유저 정보
    memberNickname: member.nickname,
    memberStatus: member.status,
    memberMessage: member.message,
    memberData: member.data,
    memberError: member.error,

    deletedData: member.deletedData,

    getMemberLoading: loading['member/GET_MY_INFO'],
    duplicatedData: member.duplicatedData,
  }));

  const state = { memberNickname };
  return (
    <>
      <ProfileSettingsComponent />
    </>
  );
};

export default PorifileSettingsContainer;
