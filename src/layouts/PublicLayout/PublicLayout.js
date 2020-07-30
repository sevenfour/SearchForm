import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { renderRoutes } from 'react-router-config';

import { useProgressProviderContext } from 'context/ProgressContextProvider';

import Loading from 'components/Loading';

import styles from './PublicLayout.module.css';

const loader = (
  <div className={styles.loadingContainer}>
    <Loading overlay />
  </div>
);

const PublicLayout = props => {

  const { route } = props;

  const { loading } = useProgressProviderContext();

  return (
    <>
      <header />
      <main
        aria-busy={loading ? true : false}
        aria-live="polite"
        className={styles.container}
      >
        <Suspense fallback={loader}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
      <footer />
    </>
  );
};

PublicLayout.propTypes = {
  route: PropTypes.object
};

export default PublicLayout;
