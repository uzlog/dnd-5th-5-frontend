import React from 'react';
import { AlarmAvatar, AlarmInnerContentsWrapper, AlarmTitle, AlarmMessage, StyledLink } from './style';

const AlarmInfo = ({ data }) => {
  return (
    <>
      <AlarmAvatar />
      <AlarmInnerContentsWrapper>
        <AlarmTitle>공지사항</AlarmTitle>
        <AlarmMessage>{data.string}</AlarmMessage>
        <StyledLink pathname={data.addInfo.redirectUrl} target="_blank">
          확인하러 GO!!
        </StyledLink>
      </AlarmInnerContentsWrapper>
    </>
  );
};

export default AlarmInfo;
