import React from 'react';
import { Route } from 'react-router-dom';

const createRoutes = () => {
  const Login = React.lazy(() => import('features-poc/auth/login'));
  const Features = React.lazy(() => import('features/index'));
  const Hirearchy = React.lazy(() => import('features-poc/hirearchy'));
  const ImageUpload = React.lazy(() => import('features-poc/image-upload'));

  return (
    <>
      <Route path="/login" component={Login} />
      <Route path="/hirearchy" component={Hirearchy} />
      <Route path="/image-upload" component={ImageUpload} />
      <Route path="/app" component={Features} />
    </>
  );
};

export default createRoutes;
