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
  const urlNickname = history.location.pathname.split('/')[1];
  // const userInfo = { nickname, urlNickname };
  // const isOwned = useOwner(userInfo);
  const isOwned = nickname === urlNickname;

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
