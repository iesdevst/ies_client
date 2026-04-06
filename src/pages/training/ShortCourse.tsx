import ContactKey from '../home/components/ContactKey';
import LearningTranform from './components/LearningTranform';
import ShortCrsIntro from './components/ShortCrsIntro';
import ShortCrsTabLst from './components/ShortCrsTabLst';
import { PageContainer } from '@/components';
import { useUserStore } from '@/store';

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
