import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlaCardBg, updateCardInfo, uploadCardInfo } from '@modules/cardSetting';
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
    originCardInfo,
  } = useSelector(({ cardSetting, loading }) => ({
    alaCardBgStatus: cardSetting.alaCardBgStatus,
    alaCardBgSolid: cardSetting.alaCardBgSolid,
    alaCardBgGrad: cardSetting.alaCardBgGrad,
    alaCardBgPhoto: cardSetting.alaCardBgPhoto,
    alaCardBgError: cardSetting.alaCardBgError,
    alaCardBgLoading: loading['cardSetting/GET_ALA_CARD_BG'],

    updateCardInfoMessage: cardSetting.updateCardInfoMessage,
    updateCardInfoError: cardSetting.updateCardInfoError,

    originCardInfo: cardSetting.originCardInfo,
  }));
  const state = { alaCardBgPhoto, alaCardBgSolid, alaCardBgGrad, updateCardInfoMessage, originCardInfo };

  useEffect(() => {
    dispatch(getAlaCardBg());
  }, []);

  const onClickUpdateCardInfo = useCallback((payload) => dispatch(updateCardInfo(payload)), [dispatch]);
  const onClickUploadCardInfo = useCallback((payload) => dispatch(uploadCardInfo(payload)), [dispatch]);

  const apiCall = { onClickUpdateCardInfo, onClickUploadCardInfo };

  return <>{alaCardBgLoading ? <AlaCardSettingComponent state={state} apiCall={apiCall} /> : <div>loading...</div>}</>;
};

export default AlaCardSettingContainer;
