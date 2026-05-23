import { lazy } from 'react';
import { useCrDownData, useCrUpData } from '../hooks';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const CareerGuid: React.FC = () => {
  const { device } = useDevice();
  const { isDark } = useUserStore();
  // const { t } = useTranslation('careerGuid');

  const mb = device === 'mobile';
  const tl = device === 'tablet';
  const tlpr = device === 'tabletPro';
  const dk = device === 'desktop';

  const topicCard = [
    'Cung cấp thông tin học tập và cơ hội phát triển nghề nghiệp.',
    'Hỗ trợ học viên khám phá kỹ năng và định hướng nghề nghiệp số.',
    'Tăng lượng học viên, phụ huynh được tư vấn và giảm thời gian chờ 25%.',
  ];

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
      butTxt='Learn More'
      topicTxt={topicCard}
    />
  );
};

export default CareerGuid;
