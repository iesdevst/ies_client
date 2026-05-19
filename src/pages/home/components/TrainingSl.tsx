import { lazy, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useStaticDt, useTrainImgDt } from '../hooks';
import type { TrainingSlProps } from '@/components/SPS/types';
import { ROUTES } from '@/constants';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const TrainingSl: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { t } = useTranslation('trainingSl');

  const { data: trainIsl } = useTrainImgDt();
  const { data: trainStatic } = useStaticDt();

  const sectionProps = useMemo<TrainingSlProps>(
    () => ({
      id: 'trainSl',
      layout: 'trainingSl' as const,
      trainDes: t('years30'),
      trainTit: t('iesAt'),
      trainImgSl: trainIsl,
      statisTit: t('explore'),
      statistics: trainStatic,
      className: '!h-full !mt-5 !bg-[#3e72b2] pt-18',
      mb,
      navigateGo: ROUTES.ADMISSIONSVOCA_ALL,
    }),
    [t, trainIsl, trainStatic, mb],
  );

  return <IesClSection {...sectionProps} />;
};

export default TrainingSl;
