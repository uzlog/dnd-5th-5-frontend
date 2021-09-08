import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlaCardList } from '@modules/mypage';
import { uploadCardInfo } from '@modules/cardSetting';
import AlaCardListComponent from '@components/alacard/AlaCardListComponent';
import AlaCardListSkeleton from '@components/alacard/AlaCardListSkeleton';

const AlaCardListContainer = () => {
  const dispatch = useDispatch();
  const { nickname, alacardData, alacardLoading } = useSelector(({ member, mypage, loading }) => ({
    nickname: member.nickname,
    alacardData: mypage.alacardData,
    alacardLoading: loading['mypage/GET_ALA_CARD_LIST'],
  }));
  const state = { alacardData, nickname };

  const onClickUploadCardInfo = useCallback((payload) => dispatch(uploadCardInfo(payload)), [dispatch]);

  useEffect(() => {
    dispatch(getAlaCardList(sessionStorage.getItem('nickname')));
  }, []);

  return (
    <>
      {alacardLoading ? (
        <AlaCardListComponent state={state} onClickUploadCardInfo={onClickUploadCardInfo} />
      ) : (
        <AlaCardListSkeleton />
      )}
    </>
  );
};

export default AlaCardListContainer;
