import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { getAlaCardList, updateError } from '@modules/mypage';
import MyPageComponent from '@components/mypage/MyPageComponent';

const MyPageContainer = ({ history, nickname }) => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const { alacardStatus, alacardMessage, alacardData, alacardError, alacardLoading } = useSelector(
    ({ mypage, loading }) => ({
      alacardStatus: mypage.alacardStatus,
      alacardMessage: mypage.alacardMessage,
      alacardData: mypage.alacardData,
      alacardError: mypage.alacardError.data,
      alacardLoading: loading['mypage/GET_ALA_CARD_LIST'],
    }),
  );
  const token = cookies.get('token');
  const state = { alacardData, nickname, alacardError };

  // 화면 첫 진입 시, 알라카드 목록 받아오기 / 셀렉 뷰 링크 받아오기
  useEffect(() => {
    dispatch(getAlaCardList(nickname));
  }, []);

  useEffect(() => {
    if (alacardError) {
      alert('해당 유저가 존재하지 않습니다!');
      dispatch(updateError());
      history.push('/');
      if (token) {
        dispatch(getAlaCardList(nickname));
      }
    }
  }, [alacardError]);

  return <>{alacardLoading && !alacardError ? <MyPageComponent state={state} /> : <div>loading...</div>}</>;
};

export default withRouter(MyPageContainer);
