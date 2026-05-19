import { lazy, Suspense } from 'react';
import LazySec from './components/LazySec';
import SlideCusIes from './components/SlideCusIes';
import { PageContainer } from '@/components';

const VidPrIes = lazy(() => import('@/pages/home/components/VidPrIes'));
const TrainingSl = lazy(() => import('@/pages/home/components/TrainingSl'));
const NewAndEvent = lazy(() => import('@/pages/home/components/NewAndEvent'));
const FieldOfStudy = lazy(() => import('@/pages/home/components/FieldOfStudy'));
const TrainPro = lazy(() => import('@/pages/home/components/TrainPro'));
const InternCollab = lazy(() => import('@/pages/home/components/InternCollab'));
const PartnerSl = lazy(() => import('@/pages/home/components/PartnerSl'));
const StuComment = lazy(() => import('@/pages/home/components/StuComment'));
const CareerGuid = lazy(() => import('@/pages/home/components/CareerGuid'));
const VaM = lazy(() => import('@/pages/home/components/VaM'));
const ContactKey = lazy(() => import('@/pages/home/components/ContactKey'));

const Dashboard: React.FC = () => {
  return (
    <PageContainer>
      <SlideCusIes />

      <Suspense fallback={null}>
        <VidPrIes />
      </Suspense>

      {/* BELOW THE FOLD */}
      <Suspense fallback={null}>
        <LazySec Component={TrainingSl} />
      </Suspense>

      <Suspense fallback={null}>
        <LazySec Component={NewAndEvent} />
      </Suspense>

      <Suspense fallback={null}>
        <LazySec Component={FieldOfStudy} />
      </Suspense>

      <Suspense fallback={null}>
        <LazySec Component={TrainPro} />
      </Suspense>

      <Suspense fallback={null}>
        <LazySec Component={InternCollab} />
      </Suspense>

      <Suspense fallback={null}>
        <LazySec Component={PartnerSl} />
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
