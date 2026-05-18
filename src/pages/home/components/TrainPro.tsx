import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useTrainProData } from './hooks';
import { useUserStore } from '@/store';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const TrainPro: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { isDark } = useUserStore();
  const { t } = useTranslation('trainPro');
  const { data: noFeatCdt } = useTrainProData();

  return (
    <IesClSection
      id='trainNoFeat'
      layout='newsFeature'
      title={t('sectionTitle')}
      feature={false}
      featCard={noFeatCdt}
      className={`mt-20 ${!mb ? 'px-10' : 'px-3'}`}
      mb={mb}
      height={!mb ? '' : '36vh'}
      dark={isDark}
    />
  );
};

export default TrainPro;
