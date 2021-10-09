import PrivateRoute from 'lib/PrivateRoute';
import React from 'react';
import { Route } from 'react-router-dom';

const createRoutes = () => {
  const Login = React.lazy(() => import('features/auth/login'));
  const Features = React.lazy(() => import('features/index'));
  const Hirearchy = React.lazy(() => import('features-poc/hirearchy'));
  const ImageUpload = React.lazy(() => import('features-poc/image-upload'));

  return (
    <>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/hirearchy" component={Hirearchy} />
      <Route path="/image-upload" component={ImageUpload} />
      <PrivateRoute path="/app" component={Features} />
    </>
  );
};

export default createRoutes;
