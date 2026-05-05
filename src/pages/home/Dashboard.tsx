import { lazy } from 'react';
import { PageContainer } from '@/components';

const SlideCusIes = lazy(() => import('@/pages/home/components/SlideCusIes'));
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
      <VidPrIes />
      <TrainingSl />
      <NewAndEvent />
      <FieldOfStudy />
      <TrainPro />
      <InternCollab />
      <PartnerSl />
      <StuComment />
      <CareerGuid />
      <VaM />
      <ContactKey />
    </PageContainer>
  );
};

export default Dashboard;
