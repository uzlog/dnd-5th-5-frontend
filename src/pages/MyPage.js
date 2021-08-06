import React from 'react';
import { withRouter } from 'react-router';
import MyPageContainer from '@containers/mypage/MyPageContainer';

const MyPage = ({ history }) => {
  const nickname = history.location.pathname.split('/')[1];
  return <MyPageContainer nickname={nickname} />;
};

export default withRouter(MyPage);
