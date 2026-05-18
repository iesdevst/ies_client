import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useMethodPrData, useTopicData } from './hooks';
import VAM from '@/assets/imgs/ies_vam.webp';
import TPI from '@/assets/imgs/topic_img.webp';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const VaM: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { isDark } = useUserStore();
  const { t } = useTranslation('vaM');

  const { data: topicDt } = useTopicData();
  const { data: methodPr } = useMethodPrData();

  return (
    <IesClSection
      id='vAm'
      layout='topic'
      mb={mb}
      dark={isDark}
      topImaTit={TPI}
      topTitBut={t('topImageBtn')}
      topicCt={topicDt}
      botTit={t('bottomTitle')}
      lstBut='Explore More'
      botBut={t('listBtn')}
      methodLst={methodPr}
      navigateGo={ROUTES.ACADEMICS}
      aboutTogo={ROUTES.ABOUT_OVERVIEW}
      topicI={VAM}
      className={`py-15 ${isDark ? '!bg-[#253933]' : '!bg-[#f2f5ff]'} ${!mb ? 'px-20 mt-20' : 'px-5 mt-10'}`}
    />
  );
};

export default VaM;
