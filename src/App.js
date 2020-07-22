import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

import Loading from './components/Loading';

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        {renderRoutes(routes)}
      </Router>
    </Suspense>
  );
};

export default App;
