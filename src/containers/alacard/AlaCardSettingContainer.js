import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlaCardBg, updateCardInfo } from '@modules/cardSetting';
import AlaCardSettingComponent from '@components/alacard/AlaCardSettingComponent';

const AlaCardSettingContainer = () => {
  const dispatch = useDispatch();
  const {
    alaCardBgStatus,
    alaCardBgSolid,
    alaCardBgGrad,
    alaCardBgPhoto,
    alaCardBgError,
    alaCardBgLoading,
    updateCardInfoMessage,
    updateCardInfoError,
  } = useSelector(({ cardSetting, loading }) => ({
    alaCardBgStatus: cardSetting.alaCardBgStatus,
    alaCardBgSolid: cardSetting.alaCardBgSolid,
    alaCardBgGrad: cardSetting.alaCardBgGrad,
    alaCardBgPhoto: cardSetting.alaCardBgPhoto,
    alaCardBgError: cardSetting.alaCardBgError,
    alaCardBgLoading: loading['cardSetting/GET_ALA_CARD_BG'],

    updateCardInfoMessage: cardSetting.updateCardInfoMessage,
    updateCardInfoError: cardSetting.updateCardInfoError,
  }));
  const state = { alaCardBgPhoto, alaCardBgSolid, alaCardBgGrad, updateCardInfoMessage };

  useEffect(() => {
    dispatch(getAlaCardBg());
  }, []);

  const onClickUpdateCardInfo = useCallback((payload) => dispatch(updateCardInfo(payload)), [dispatch]);

  return (
    <>
      {alaCardBgLoading ? (
        <AlaCardSettingComponent state={state} onClickUpdateCardInfo={onClickUpdateCardInfo} />
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default AlaCardSettingContainer;
