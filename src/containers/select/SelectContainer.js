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

  const state = { alaWordData };
  return (
    <>
      <SelectComponent />
    </>
  );
};

export default SelectContainers;
