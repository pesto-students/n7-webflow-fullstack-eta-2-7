import React from 'react';
import { Switch } from 'react-router-dom';
import createRoutes from './routes';
import Layout from './layout/Layout';

export default function Features() {
  return (
    <div>
      <Layout>
        <Switch>
          {createRoutes()}
        </Switch>
      </Layout>
    </div>
  );
}
