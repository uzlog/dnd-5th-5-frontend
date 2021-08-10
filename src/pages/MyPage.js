import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import useResponsive from '../hooks/useResponsive';
import MyPageContainer from '@containers/mypage/MyPageContainer';
import LeftSide from '@components/common/LeftSide';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const MyPage = ({ history }) => {
  const nickname = history.location.pathname.split('/')[1];
  const viewSize = useResponsive();
  return (
    <Wrapper>
      {viewSize > 1023 ? <LeftSide /> : <></>}
      <MyPageContainer nickname={nickname} />
    </Wrapper>
  );
};

export default withRouter(MyPage);
