import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import ProgressContextProvider from './context/ProgressContextProvider';

import routes from './routes';

import Loading from './components/Loading';

const App = () => {
  return (
    <Suspense fallback={<Loading overlay />}>
      <Router>
        <ProgressContextProvider>
          {renderRoutes(routes)}
        </ProgressContextProvider>
      </Router>
    </Suspense>
  );
};

export default App;
