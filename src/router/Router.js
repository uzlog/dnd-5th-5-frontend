import React from 'react';
import { Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('@pages/MainPage'));
const TempPage = loadable(() => import('@pages/TempPage'));

const Router = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/mypage/:nickname" component={TempPage} exact />
    </>
  );
};

export default Router;
