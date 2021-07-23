import React from 'react';
import { Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('@pages/MainPage'));

const Router = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
    </>
  );
};

export default Router;
