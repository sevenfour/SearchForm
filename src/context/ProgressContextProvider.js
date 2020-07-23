import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const ProgressContext = createContext();

export const useProgressProviderContext = () => {
  return useContext(ProgressContext);
};

const ProgressContextProvider = props => {

  const { children } = props;

  const [loading, setLoading] = useState(false);

  return (
    <ProgressContext.Provider
      value={{
        setLoading: setLoading,
        loading: loading,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

ProgressContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProgressContextProvider;
