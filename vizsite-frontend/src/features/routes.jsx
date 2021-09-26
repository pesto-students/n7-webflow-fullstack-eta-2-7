import React from 'react';
import { Route } from 'react-router-dom';

const createRoutes = () => {
  const Editor = React.lazy(() => import('features/wesbsiteBuilder/WebsiteBuilder'));
  const Projects = React.lazy(() => import('features/projects/Projects'));
  const CreateProject = React.lazy(() => import('features/projects/CreateProject'));

  return (
    <>
      <Route exact path="/app/editor/:id" component={Editor} />
      <Route exact path="/app/projects" component={Projects} />
      <Route exact path="/app/projects/new" component={CreateProject} />
    </>
  );
};

export default createRoutes;
