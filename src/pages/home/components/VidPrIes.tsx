import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IesClSection } from '@/components';
import { ROUTES } from '@/constants';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const VidPrIes: React.FC = () => {
  const { device } = useDevice();

  const { isDark } = useUserStore();
  const { t } = useTranslation('vidPrIes');

  const scHeight = useMemo(() => {
    if (device === 'mobile') return '30vh';
    if (device === 'tablet') return '25vh';
    if (device === 'tabletPro') return '70vh';
    return '70vh';
  }, [device]);

  return (
    <IesClSection
      id='vidPr'
      layout='vidPr'
      dark={isDark}
      bottomTit={t('knowM')}
      desVid={t('atIes')}
      titVid={t('alaunching')}
      vidLink='https://www.youtube.com/embed/yJCZCz-b_yQ?si=vk_80q-TugnhePQJ'
      mb={device === 'mobile'}
      navigateGo={ROUTES.ABOUT_OVERVIEW}
      height={scHeight}
      tabletVid={device === 'tablet'}
      miniSc={device === 'tabletPro'}
      className='pb-10'
    />
  );
};

export default VidPrIes;
