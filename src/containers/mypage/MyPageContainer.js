import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAlaCardList } from '@modules/mypage';
import MyPageComponent from '@components/mypage/MyPageComponent';

const MyPageContainer = () => {
  const dispatch = useDispatch();
  const { alacardStatus, alacardMessage, alacardData, alacardLoading } = useSelector(({ mypage, loading }) => ({
    alacardStatus: mypage.alacardStatus,
    alacardMessage: mypage.alacardMessage,
    alacardData: mypage.alacardData,
    alacardLoading: loading['mypage/GET_ALA_CARD_LIST'],
  }));
  const state = { alacardData };

  // 화면 첫 진입 시, 알라카드 목록 받아오기
  useEffect(() => {
    dispatch(getAlaCardList());
  }, []);
  return <>{alacardLoading ? <MyPageComponent state={state} /> : <div>loading...</div>}</>;
};

export default MyPageContainer;
