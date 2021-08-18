import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const { memberData, hadError } = useSelector(({ member, mypage }) => ({
    memberData: member.data,
    hadError: mypage.hadError,
  }));
  const { nickname } = memberData;
  sessionStorage.setItem('nickname', nickname);
  localStorage.setItem('nickname', nickname);
  const localNickname = localStorage.getItem('nickname');
  const sessionNickname = sessionStorage.getItem('nickname');

  return (
    <>
      {hadError && !token ? (
        <Route {...rest} render={(props) => <Component {...props} />} />
      ) : (
        <Route
          {...rest}
          render={(props) =>
            token && nickname ? (
              <Redirect
                to={{
                  pathname: `/${nickname || localNickname || sessionNickname}`,
                  state: { from: props.location },
                }}
              />
            ) : (
              <Component {...props} />
            )
          }
        />
      )}
    </>
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     token && localNickname ? (
    //       <Redirect
    //         to={{
    //           pathname: `/${nickname || localStorage.getItem('nickname')}`,
    //           state: { from: props.location },
    //         }}
    //       />
    //     ) : (
    //       <Component {...props} />
    //     )
    //   }
    // />
  );
};

export default PrivateRoute;
