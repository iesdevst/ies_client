import { lazy } from 'react';
import { PageContainer } from '@/components';
import { useUserStore } from '@/store';

const LearningTranform = lazy(
  () => import('@/pages/training/components/LearningTranform'),
);
const ShortCrsIntro = lazy(
  () => import('@/pages/training/components/ShortCrsIntro'),
);
const ShortCrsTabLst = lazy(
  () => import('@/pages/training/components/ShortCrsTabLst'),
);
const ContactKey = lazy(() => import('@/pages/home/components/ContactKey'));

const ShortCourse = () => {
  const { isDark } = useUserStore();
  return (
    <PageContainer>
      <ShortCrsIntro />
      <LearningTranform dark={isDark} />
      <ShortCrsTabLst dark={isDark} />
      <ContactKey />
    </PageContainer>
  );
};

export default ShortCourse;
