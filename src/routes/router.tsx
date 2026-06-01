import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RouteErrorBoundary } from './RouteErrorBoundary';
import { ROUTES } from '@/constants';

const Dashboard = lazy(() => import('@/pages/home/Dashboard'));
const About = lazy(() => import('@/pages/about/AboutIes'));
const AdmissionsVoca = lazy(() => import('@/pages/training/IesVocaTraining'));
const VoCaTrainDetail = lazy(() => import('@/pages/training/VocaTrainDetail'));
const ShortCourse = lazy(() => import('@/pages/training/ShortCourse'));
const Partnership = lazy(() => import('@/pages/partnership/Partnership'));
const Academics = lazy(() => import('@/pages/education/Academics'));
const EduLibrary = lazy(() => import('@/pages/education/EduLibrary'));
const NewsPage = lazy(() => import('@/pages/iesNews/NewsPage'));
const IesNewsDetails = lazy(() => import('@/pages/iesNews/IesNewsDetails'));
const EvsPage = lazy(() => import('@/pages/iesNews/EvsPage'));
const IesEventsDetails = lazy(() => import('@/pages/iesNews/IesEventsDetail'));
const IesClientLayout = lazy(() => import('@/layouts/IesClientLayout'));
const LeadSchool = lazy(() => import('@/pages/leadSchool/LeadSchool'));
const IesOffLayout = lazy(() => import('@/layouts/IesOffLayout'));
const TrainingPlan = lazy(() => import('@/pages/eduPublic/TrainingPlan'));
const Degress = lazy(() => import('@/pages/eduPublic/Degress'));
const LegalDoc = lazy(() => import('@/pages/eduPublic/LegalDoc'));
const TrainDocs = lazy(() => import('@/pages/eduPublic/TrainDocs'));
const WaitingPage = lazy(() => import('@/hooks/WaitingPage'));
const StuForm = lazy(() => import('@/pages/eduPublic/StuForm'));
const Handbook = lazy(() => import('@/pages/eduPublic/Handbook'));
const StuRegulation = lazy(() => import('@/pages/eduPublic/StuRegulation'));

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
          { path: ROUTES.ADMISSIONS, element: <AdmissionsVoca /> },
          {
            path: `${ROUTES.DEMICS_DETAIL}/:progType`,
            element: <VoCaTrainDetail />,
          },
          {
            path: `${ROUTES.ADMISSIONS_SC}`,
            element: <ShortCourse />,
          },
          {
            path: `${ROUTES.PARTNERSHIP}`,
            element: <Partnership />,
          },
          {
            path: `${ROUTES.ACADEMICS}`,
            element: <Academics />,
          },
          {
            path: `${ROUTES.DGTLIB}`,
            element: <EduLibrary />,
          },
          {
            path: `${ROUTES.NEWS}`,
            element: <NewsPage />,
          },
          {
            path: `${ROUTES.NEWS_DETAILS}/:id`,
            element: <IesNewsDetails />,
          },
          {
            path: `${ROUTES.EVENTS}`,
            element: <EvsPage />,
          },
          {
            path: `${ROUTES.EVENTS_DETAILS}/:id`,
            element: <IesEventsDetails />,
          },
          { path: `${ROUTES.LEAD_SCHOOL}`, element: <LeadSchool /> },
          {
            path: ROUTES.EDU_DISC,
            element: <IesOffLayout />,
            children: [
              {
                index: true,
                element: <Navigate to={ROUTES.TRAININGPL} replace />,
              },
              { path: ROUTES.TRAININGPL, element: <TrainingPlan /> },
              { path: ROUTES.DEGRESS, element: <Degress /> },
              { path: ROUTES.LEGALDOC, element: <LegalDoc /> },
              { path: ROUTES.QUALITY, element: <WaitingPage /> },
              { path: ROUTES.VOCATIONAL, element: <WaitingPage /> },

              { path: ROUTES.TRAINDOCS, element: <TrainDocs /> },
              { path: ROUTES.TRAINFORM, element: <WaitingPage /> },

              { path: ROUTES.REGUSTU, element: <StuRegulation /> },
              { path: ROUTES.HANDBOOK, element: <Handbook /> },
              { path: ROUTES.STUFORM, element: <StuForm /> },
              { path: ROUTES.ACTSTU, element: <WaitingPage /> },
              { path: ROUTES.STUINFO, element: <WaitingPage /> },
            ],
          },
        ],
      },
      { path: '*', element: <div>Not Found Page</div> },
    ],
  },
]);
