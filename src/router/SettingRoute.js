import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter, Redirect, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import useOwner from '@hooks/useOwner';

const SettingRoute = ({ history, component: Component, ...rest }) => {
  const cookies = new Cookies();
  const { nickname } = useSelector(({ member }) => ({
    nickname: member.nickname,
  }));
  const token = cookies.get('token');
  const sessionNickname = sessionStorage.getItem('nickname');
  const urlNickname = history.location.pathname.split('/')[1];
  const isOwned = (nickname || sessionNickname) === urlNickname;

  return (
    <Route
      {...rest}
      render={(props) =>
        (token && !isOwned) || token === undefined ? (
          <Redirect
            to={{
              pathname: `/`,
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default withRouter(SettingRoute);
