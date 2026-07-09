import { useTranslation } from 'react-i18next';
import IMGW from '@/assets/imgs/vid_wait.webp';
import { IesClSection } from '@/components';
import { ROUTES } from '@/constants';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const VidPrIes: React.FC = () => {
  const { device } = useDevice();
  const { isDark } = useUserStore();
  const { t } = useTranslation('vidPrIes');

  const tl = device === 'tablet';
  const tlpr = device === 'tabletPro';
  const dk = device === 'desktop';

  return (
    <IesClSection
      id='vidPr'
      layout='vidPr'
      dark={isDark}
      bottomTit={t('knowM')}
      desVid={t('atIes')}
      titVid={t('alaunching')}
      vidLink='https://www.youtube.com/embed/yJCZCz-b_yQ?si=vk_80q-TugnhePQJ'
      imgWait={IMGW}
      mb={device === 'mobile'}
      navigateGo={ROUTES.ABOUT_OVERVIEW}
      tl={tl}
      tlpr={tlpr}
      dk={dk}
      className={!dk ? 'px-3' : 'pr-15'}
    />
  );
};

export default VidPrIes;
