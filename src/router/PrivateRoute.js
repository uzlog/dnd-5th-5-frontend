import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const { memberData } = useSelector(({ member }) => ({
    memberData: member.data,
  }));
  const { nickname } = memberData;

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Redirect
            to={{
              pathname: `/${nickname || localStorage.getItem('nickname')}`,
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

export default PrivateRoute;
