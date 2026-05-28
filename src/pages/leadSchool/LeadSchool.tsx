import { lazy, Suspense } from 'react';
import IntroLc from './components/IntroLc';
import { PageContainer } from '@/components';
import { LazySec } from '@/hooks';

const Leadership = lazy(
  () => import('@/pages/leadSchool/components/Leadership'),
);
const OurLead = lazy(() => import('@/pages/leadSchool/components/OurLead'));
const ContactKey = lazy(() => import('@/pages/home/components/ContactKey'));

const LeadSchool = () => {
  return (
    <PageContainer>
      <IntroLc />

      <Suspense fallback={null}>
        <LazySec Component={Leadership} />
      </Suspense>
      <Suspense fallback={null}>
        <LazySec Component={OurLead} />
      </Suspense>
      <Suspense fallback={null}>
        <LazySec Component={ContactKey} />
      </Suspense>
    </PageContainer>
  );
};

export default LeadSchool;
