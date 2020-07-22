import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { renderRoutes } from 'react-router-config';

import Loading from '../../components/Loading';

import styles from './PublicLayout.module.css';

const PublicLayout = props => {

  const { route } = props;

  const loader = (
    <div className={styles.loadingContainer}>
      <Loading />
    </div>
  );

  return (
    <>
      <header />
      <main>
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
