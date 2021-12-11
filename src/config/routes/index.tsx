import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../../components/Header';

const Login = lazy(() => import('../../screen/Login'));
const Home = lazy(() => import(/* webpackPrefetch: true */ '../../screen/Home'));
// const NotFound = lazy(() => import('../../screen/NotFound'));
const Campaign = lazy(() => import(/* webpackPrefetch: true */ '../../screen/Campaign'));

export const ROUTE_PATHS = {
  DEFAULT: '/',
  LOGIN: '/login',
  NOT_FOUND: '404',
  HOME: '/home',
  CAMPAIGN: '/campaign',
};

const routes = [
  {
    path: ROUTE_PATHS.DEFAULT,
    element: (
      <>
        <Header/>
        <Home/>
      </>
    ),
    children: [
      // { path: '/', element: <Navigate to='/<your default view>' /> },
      // [hygen] Add routes
    ],
  },
  {
    path: ROUTE_PATHS.LOGIN,
    element: (
      <>
        <Login />
      </>
    ),
    children: [
    ],
  },
  // {
  //   path: ROUTE_PATHS.NOT_FOUND,
  //   element: (
  //     <>
  //       <NotFound />
  //     </>
  //   ),
  // },
  { path: '*',
      element: <Navigate to={ROUTE_PATHS.NOT_FOUND} />
  },
  {
    path: ROUTE_PATHS.CAMPAIGN,
    element: (
      <>
        <Header/>
        <Campaign />
      </>
    ),
    children: [
    ],
  },
];

export default routes;
