import { lazy, Suspense } from 'react';
import IesIntro from './components/IesIntro';
import { PageContainer } from '@/components';
import { LazySec } from '@/hooks';

const VidPrIes = lazy(() => import('@/pages/home/components/VidPrIes'));
const NewAndEvent = lazy(() => import('@/pages/home/components/NewAndEvent'));
const FieldOfStudy = lazy(() => import('@/pages/home/components/FieldOfStudy'));
const StatIes = lazy(() => import('@/pages/home/components/StatIes'));
const SlideCusIes = lazy(() => import('@/pages/home/components/SlideCusIes'));
const TrainPro = lazy(() => import('@/pages/home/components/TrainPro'));
const InternCollab = lazy(() => import('@/pages/home/components/InternCollab'));
const StuComment = lazy(() => import('@/pages/home/components/StuComment'));
const CareerGuid = lazy(() => import('@/pages/home/components/CareerGuid'));
const VaM = lazy(() => import('@/pages/home/components/VaM'));
const ContactKey = lazy(() => import('@/pages/home/components/ContactKey'));

const Dashboard: React.FC = () => {
  return (
    <PageContainer>
      <IesIntro />
      <Suspense fallback={null}>
        <VidPrIes />
      </Suspense>
      <Suspense fallback={null}>
        <LazySec Component={FieldOfStudy} />
      </Suspense>
      <Suspense fallback={null}>
        <StatIes />
      </Suspense>
      <Suspense fallback={null}>
        <LazySec Component={SlideCusIes} />
      </Suspense>
      <Suspense fallback={null}>
        <LazySec Component={NewAndEvent} />
      </Suspense>
      <Suspense fallback={null}>
        <LazySec Component={InternCollab} />
      </Suspense>
      <Suspense fallback={null}>
        <LazySec Component={TrainPro} />
      </Suspense>
      <Suspense fallback={null}>
        <LazySec Component={StuComment} />
      </Suspense>
      <Suspense fallback={null}>
        <LazySec Component={CareerGuid} />
      </Suspense>
      <Suspense fallback={null}>
        <LazySec Component={VaM} />
      </Suspense>
      <Suspense fallback={null}>
        <LazySec Component={ContactKey} />
      </Suspense>
    </PageContainer>
  );
};

export default Dashboard;
