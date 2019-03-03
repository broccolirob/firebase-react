import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';

const RedirectAuthRoute = ({ component: Component, ...rest }) => {
  const user = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Redirect
            to={{
              pathname: `/${user.uid}`,
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default RedirectAuthRoute;
