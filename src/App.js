import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import ProgressContextProvider from 'context/ProgressContextProvider';

import routes from 'routes';

const App = () => {
  return (
    <Router>
      <ProgressContextProvider>
        {renderRoutes(routes)}
      </ProgressContextProvider>
    </Router>
  );
};

export default App;
