import React from 'react';
import { Route } from 'react-router-dom';

const createRoutes = () => {
  const Editor = React.lazy(() => import('features/wesbsiteBuilder/WebsiteBuilder'));
  return (
    <>
      <Route exact path="/app/editor" component={Editor} />
    </>
  );
};

export default createRoutes;
