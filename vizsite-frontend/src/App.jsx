import React, { Suspense } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Provider as ReduxQueryProvider } from 'redux-query-react';
import store from 'store/store';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import createRoutes from 'routes';
import { AuthProvider } from 'lib/auth';
import theme from 'theme/theme';

export const getQueries = (state) => state.queries;

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <ReduxQueryProvider queriesSelector={getQueries}>

          <ChakraProvider theme={theme}>
            <Suspense fallback={<div>loading..</div>}>
              <Router>
                <Switch>
                  {createRoutes()}
                </Switch>
              </Router>
            </Suspense>
          </ChakraProvider>
        </ReduxQueryProvider>
      </Provider>
    </AuthProvider>
  );
}

export default App;
