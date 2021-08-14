import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('@pages/MainPage'));
const SelectPage = loadable(() => import('@pages/SelectPage'));
const MyPage = loadable(() => import('@pages/MyPage'));
const AlaCardPage = loadable(() => import('@pages/AlaCardPage'));
const CardSettingPage = loadable(() => import('@pages/CardSettingPage'));

const Router = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/:nickname/select" component={SelectPage} exact />
      <Switch>
        <Route path="/alacard" component={AlaCardPage} exact />
        <Route path="/alacard/setting" component={CardSettingPage} exact />
        <Route path="/:nickname" component={MyPage} exact />
      </Switch>
    </>
  );
};

export default Router;
