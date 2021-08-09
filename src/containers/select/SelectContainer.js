import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlaWordList } from '@modules/alaWord';
import SelectComponent from '@components/select/SelectComponent';

const SelectContainers = () => {
  const dispatch = useDispatch();
  const { alaWordStatus, alaWordData, alaWordError, alaWordLoading } = useSelector(({ alaWord, loading }) => ({
    alaWordStatus: alaWord.alaWordStatus,
    alaWordData: alaWord.alaWordData,
    alaWordError: alaWord.alaWordError,
    alaWordLoading: loading['alaWord/ALAWORD'],
  }));

  const onAlaWordIncrease = useCallback((payload) => dispatch(getAlaWordList(payload)), [dispatch]);

  const state = { alaWordData };
  useEffect(() => {
    dispatch(getAlaWordList({ nickname: '11t518s', offset: 0 }));
  }, []);
  return <>{alaWordLoading ? <SelectComponent /> : <div>loading...</div>}</>;
};

export default SelectContainers;
