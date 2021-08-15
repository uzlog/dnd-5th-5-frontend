import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const cookies = new Cookies();
  const token = cookies.get('token');

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Redirect
            to={{
              pathname: `/${sessionStorage.getItem('nickname')}`,
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
