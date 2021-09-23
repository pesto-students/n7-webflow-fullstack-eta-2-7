import React, { Suspense } from 'react';
import './App.css';
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

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Suspense fallback={<div>loading..</div>}>
          <Router>
            <Switch>
              {createRoutes()}
            </Switch>
          </Router>
        </Suspense>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
