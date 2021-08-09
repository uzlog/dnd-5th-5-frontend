import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlaCardList } from '@modules/mypage';
import AlaCardListComponent from '@components/alacard/AlaCardListComponent';

const AlaCardListContainer = () => {
  const dispatch = useDispatch();
  const { alacardData, alacardLoading } = useSelector(({ mypage, loading }) => ({
    alacardData: mypage.alacardData,
    alacardLoading: loading['mypage/GET_ALA_CARD_LIST'],
  }));
  const state = { alacardData };

  useEffect(() => {
    dispatch(getAlaCardList(sessionStorage.getItem('nickname')));
  }, []);

  return <>{alacardLoading ? <AlaCardListComponent state={state} /> : <div>loading...</div>}</>;
};

export default AlaCardListContainer;
