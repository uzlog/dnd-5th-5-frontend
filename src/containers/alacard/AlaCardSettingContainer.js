import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cardSetting, { getAlaCardBg } from '@modules/cardSetting';
import AlaCardSettingComponent from '@components/alacard/AlaCardSettingComponent';

const AlaCardSettingContainer = () => {
  const dispatch = useDispatch();
  const { alaCardBgStatus, alaCardBgSolid, alaCardBgGrad, alaCardBgPhoto, alaCardBgError, alaCardBgLoading } =
    useSelector(({ cardSetting, loading }) => ({
      alaCardBgStatus: cardSetting.alaCardBgStatus,
      alaCardBgSolid: cardSetting.alaCardBgSolid,
      alaCardBgGrad: cardSetting.alaCardBgGrad,
      alaCardBgPhoto: cardSetting.alaCardBgPhoto,
      alaCardBgError: cardSetting.alaCardBgError,
      alaCardBgLoading: loading['cardSetting/GET_ALA_CARD_BG'],
    }));
  const state = { alaCardBgPhoto, alaCardBgSolid, alaCardBgGrad };

  useEffect(() => {
    dispatch(getAlaCardBg());
  }, []);

  return <>{alaCardBgLoading ? <AlaCardSettingComponent state={state} /> : <div>loading...</div>}</>;
};

export default AlaCardSettingContainer;
