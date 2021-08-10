import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('@pages/MainPage'));
const SelectPage = loadable(() => import('@pages/SelectPage'));
const TempPage = loadable(() => import('@pages/TempPage'));
const MyPage = loadable(() => import('@pages/MyPage'));
const AlaCardPage = loadable(() => import('@pages/AlaCardPage'));

const Router = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/:nickname/select" component={SelectPage} exact />
      <Route path="/:nickname" component={TempPage} exact />
      <Switch>
        <Route path="/alacard" component={AlaCardPage} exact />
        <Route path="/:nickname" component={MyPage} exact />
      </Switch>
    </>
  );
};

export default Router;
