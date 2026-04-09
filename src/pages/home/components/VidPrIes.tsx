import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { IesClSection } from '@/components';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const VidPrIes: React.FC = () => {
  const isMb = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const miniScreen = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const { isDark } = useUserStore();
  const { t } = useTranslation('vidPrIes');
  const getScH = () => {
    if (isMb) return '30vh';
    if (isTablet) return '25vh';
    if (miniScreen) return '70vh';
    return '70vh';
  };
  return (
    <IesClSection
      id='vidPr'
      layout='vidPr'
      dark={isDark}
      bottomTit={t('knowM')}
      desVid={t('atIes')}
      titVid={t('alaunching')}
      vidLink='https://www.youtube.com/embed/8G1vC-hJjjc?si=Q_cV53WSlXUtmrA7'
      mb={isMb}
      navigateGo={ROUTES.ABOUT_OVERVIEW}
      height={getScH()}
      tabletVid={isTablet}
      miniSc={miniScreen}
      className='pb-10'
    />
  );
};

export default VidPrIes;
