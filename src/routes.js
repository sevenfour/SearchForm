import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import PublicLayout from 'layouts/PublicLayout';

export const allRoot = '*';

export const publicRoutes = {
  search: '/search'
};

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to={publicRoutes.search} />
  },
  {
    path: publicRoutes.search,
    component: PublicLayout,
    routes: [
      {
        path: publicRoutes.search,
        exact: true,
        component: lazy(() => import('./views/Search'))
      }
    ]
  }
];

export default routes;
