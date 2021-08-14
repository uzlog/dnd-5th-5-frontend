import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlaCardList } from '@modules/mypage';
import { uploadCardInfo } from '@modules/cardSetting';
import AlaCardListComponent from '@components/alacard/AlaCardListComponent';

const AlaCardListContainer = () => {
  const dispatch = useDispatch();
  const { alacardData, alacardLoading } = useSelector(({ mypage, loading }) => ({
    alacardData: mypage.alacardData,
    alacardLoading: loading['mypage/GET_ALA_CARD_LIST'],
  }));
  const state = { alacardData };

  const onClickUploadCardInfo = useCallback((payload) => dispatch(uploadCardInfo(payload)), [dispatch]);

  useEffect(() => {
    dispatch(getAlaCardList(sessionStorage.getItem('nickname')));
  }, []);

  return (
    <>
      {alacardLoading ? (
        <AlaCardListComponent state={state} onClickUploadCardInfo={onClickUploadCardInfo} />
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default AlaCardListContainer;
