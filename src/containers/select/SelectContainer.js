import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlaWordList } from '@modules/alaWord';
import SelectComponent from '@components/select/SelectComponent';
import { withRouter, useParams } from 'react-router-dom';

const SelectContainers = () => {
  const dispatch = useDispatch();
  const { alaWordStatus, alaWordData, alaWordError, getAlaWordLoading } = useSelector(({ alaWord, loading }) => ({
    alaWordStatus: alaWord.alaWordStatus,
    alaWordData: alaWord.alaWordData,
    alaWordError: alaWord.alaWordError,
    getAlaWordLoading: loading['alaWord/ALAWORD'],
  }));

  const owner = useParams().nickname;

  useEffect(() => {
    if (alaWordData) dispatch(getAlaWordList({ nickname: owner, offset: 0 }));
  }, []);

  const getMoreAlaWordList = useCallback((payload) => dispatch(getAlaWordList(payload)), [dispatch]);
  const state = { alaWordData, getMoreAlaWordList, owner };

  return <>{getAlaWordLoading ? <SelectComponent state={state} /> : <div>로딩중 기다리고</div>}</>;
};

export default withRouter(SelectContainers);
