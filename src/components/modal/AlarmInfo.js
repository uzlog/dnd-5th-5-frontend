import React from 'react';
import getTime from '@hooks/useGetTime';
import { AlarmContentsLink, AvatarImg, AlarmInnerContentsWrapper, AlarmTitle, AlarmMessage } from './style';
import alarmAla from '@assets/img/modal/alarmAla.png';

const AlarmInfo = ({ data }) => {
  return (
    <AlarmContentsLink to={{ pathname: data.addInfo.redirectUrl }} target="_blank">
      <AvatarImg src={alarmAla} alt="알라 로고" />
      <AlarmInnerContentsWrapper>
        <AlarmTitle>공지사항 | {getTime(data.createdAt)}</AlarmTitle>
        <AlarmMessage marginBottom="10px">{data.string}</AlarmMessage>
      </AlarmInnerContentsWrapper>
    </AlarmContentsLink>
  );
};

export default AlarmInfo;
