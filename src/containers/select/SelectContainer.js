import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlaWord } from '@modules/alaWord';
import SelectComponent from '@components/select/SelectComponent';

const SelectContainers = () => {
  const dispatch = useDispatch();
  const { alaWordStatus, alaWordData, alaWordError, alaWordLoading } = useSelector(({ alaWord, loading }) => ({
    alaWordStatus: alaWord.alaWordStatus,
    alaWordData: alaWord.alaWordData,
    alaWordError: alaWord.alaWordError,
    alaWordLoading: loading['alaWord/ALAWORD'],
  }));

  const state = { alaWordData };
  // const nickname = Storage.getItem(nickname);
  const nickname = 'babo';

  useEffect(() => {
    dispatch(getAlaWord({ nickname }));
  }, []);
  return <>{alaWordLoading ? <SelectComponent state={state} /> : <div>loading...</div>}</>;
};

export default SelectContainers;
