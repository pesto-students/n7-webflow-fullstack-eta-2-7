import { Spinner } from '@chakra-ui/react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './auth';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user, authLoading } = React.useContext(AuthContext);

  if (authLoading) {
    return <Route component={Spinner} />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (user
        ? (<Component {...props} />)
        : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        ))}
    />
  );

  // write react router dom private route
  // check if user is logged in
  // if not, redirect to login page
  // if logged in, render component
}
