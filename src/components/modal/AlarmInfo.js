import React from 'react';
import getTime from '@hooks/useGetTime';
import { AlarmContentsLink, AlarmAvatar, AlarmInnerContentsWrapper, AlarmTitle, AlarmMessage } from './style';

const AlarmInfo = ({ data }) => {
  console.log(data.addInfo.redirectUrl);
  return (
    <AlarmContentsLink to={{ pathname: data.addInfo.redirectUrl }} target="_blank">
      <AlarmAvatar />
      <AlarmInnerContentsWrapper>
        <AlarmTitle>공지사항 | {getTime(data.createdAt)}</AlarmTitle>
        <AlarmMessage>{data.string}</AlarmMessage>
      </AlarmInnerContentsWrapper>
    </AlarmContentsLink>
  );
};

export default AlarmInfo;
