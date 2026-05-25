import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { useCrDownData, useCrUpData } from '../hooks';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const CareerGuid: React.FC = () => {
  const { device } = useDevice();
  const { isDark } = useUserStore();
  const { t } = useTranslation('careerGuid');

  const mb = device === 'mobile';
  const tl = device === 'tablet';
  const tlpr = device === 'tabletPro';
  const dk = device === 'desktop';

  const topicCard = [t('topic1'), t('topic2'), t('topic3')];

  const { data: upCard } = useCrUpData();
  const { data: downCard } = useCrDownData();

  return (
    <IesClSection
      id='carerrGuid'
      layout='cardGird'
      dark={isDark}
      mb={mb}
      tl={tl}
      tlpro={tlpr}
      dk={dk}
      upCard={upCard}
      downCard={downCard}
      title={t('secTit')}
      butTxt={t('more')}
      topicTxt={topicCard}
      className={`${dk ? 'px-5' : 'px-1.5'}`}
    />
  );
};

export default CareerGuid;
