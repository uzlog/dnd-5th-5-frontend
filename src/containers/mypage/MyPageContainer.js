import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlaCardList, getSelectViewLink } from '@modules/mypage';
import MyPageComponent from '@components/mypage/MyPageComponent';

const MyPageContainer = ({ nickname }) => {
  const dispatch = useDispatch();
  const { alacardStatus, alacardMessage, alacardData, alacardLoading } = useSelector(({ mypage, loading }) => ({
    alacardStatus: mypage.alacardStatus,
    alacardMessage: mypage.alacardMessage,
    alacardData: mypage.alacardData,
    alacardLoading: loading['mypage/GET_ALA_CARD_LIST'],
  }));
  const state = { alacardData, nickname };

  // 화면 첫 진입 시, 알라카드 목록 받아오기 / 셀렉 뷰 링크 받아오기
  useEffect(() => {
    dispatch(getAlaCardList(nickname));
  }, []);
  return <>{alacardLoading ? <MyPageComponent state={state} /> : <div>loading...</div>}</>;
};

export default MyPageContainer;
