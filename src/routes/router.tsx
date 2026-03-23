import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RouteErrorBoundary } from './RouteErrorBoundary';
import { ROUTES } from '@/constants';
import IesClientLayout from '@/layouts/IesClientLayout';

const Dashboard = lazy(() => import('@/pages/home/Dashboard'));
const About = lazy(() => import('@/pages/about/AboutIes'));
const AcademicsVoca = lazy(() => import('@/pages/training/IesVocaTraining'));
const VoCaTrainDetail = lazy(() => import('@/pages/training/VocaTrainDetail'));
const ShortCourse = lazy(() => import('@/pages/training/ShortCourse'));

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
          { path: ROUTES.ACADEMICS, element: <AcademicsVoca /> },
          {
            path: `${ROUTES.DEMICS_DETAIL}/:progType`,
            element: <VoCaTrainDetail />,
          },
          {
            path: `${ROUTES.ADMISSIONS_SC}`,
            element: <ShortCourse />,
          },
        ],
      },
      { path: '*', element: <div>Not Found Page</div> },
    ],
  },
]);
