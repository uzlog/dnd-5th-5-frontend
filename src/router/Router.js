import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import PrivateRoute from './PrivateRoute';
import SettingRoute from './SettingRoute';

const profileSettingsPage = loadable(() => import('@pages/ProfileSettingsPage'));
const MainPage = loadable(() => import('@pages/MainPage'));
const SelectPage = loadable(() => import('@pages/SelectPage'));
const MyPage = loadable(() => import('@pages/MyPage'));
const AlaCardPage = loadable(() => import('@pages/AlaCardPage'));
const CardSettingPage = loadable(() => import('@pages/CardSettingPage'));

const Router = () => {
  return (
    <>
      <PrivateRoute path="/" component={MainPage} exact />
      <Route path="/:nickname/select" component={SelectPage} exact />
      <SettingRoute path="/:nickname/settings" component={profileSettingsPage} exact />
      <SettingRoute path="/:nickname/alacard/settings" component={CardSettingPage} exact />
      <Switch>
        <Route path="/:nickname/alacard" component={AlaCardPage} exact />
        <Route path="/:nickname" component={MyPage} exact />
      </Switch>
    </>
  );
};

export default Router;
