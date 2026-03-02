import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RouteErrorBoundary } from './RouteErrorBoundary';
import { ROUTES } from '@/constants';
import IesClientLayout from '@/layouts/IesClientLayout';

const Dashboard = lazy(() => import('@/pages/home/Dashboard'));
const About = lazy(() => import('@/pages/about/AboutIes'));

export const router = createBrowserRouter([
  {
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <Navigate to={ROUTES.DASHBOARD} replace />,
      },
      {
        element: <IesClientLayout />,
        children: [
          { path: ROUTES.DASHBOARD, element: <Dashboard /> },
          { path: ROUTES.ABOUT, element: <About /> },
        ],
      },
      { path: '*', element: <div>Not Found Page</div> },
    ],
  },
]);
