import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalUser } from '@modules/main';
import MainComponent from '@components/main/MainComponent';
const MainContainer = () => {
  const dispatch = useDispatch();
  const { getTotalUserData, getTotalUserLoading } = useSelector(({ main, loading }) => ({
    getTotalUserData: main.getTotalUserData,
    getTotalUserLoading: loading['main/GET_TOTAL_USER'],
  }));
  const state = { getTotalUserData };

  useEffect(() => {
    if (getTotalUserData === 0) {
      dispatch(getTotalUser());
    }
  }, []);

  return <>{getTotalUserLoading ? <MainComponent state={state} /> : <div>loading...</div>}</>;
};

export default MainContainer;
