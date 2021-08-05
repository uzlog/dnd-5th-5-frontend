import React from 'react';
import { Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('@pages/MainPage'));
const SelectPage = loadable(() => import('@pages/SelectPage'));

const Router = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/select" component={SelectPage} exact />
    </>
  );
};

export default Router;
