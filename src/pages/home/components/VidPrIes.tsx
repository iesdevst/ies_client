import { useMediaQuery } from 'react-responsive';
import { IesClSection } from '@/components';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const VidPrIes: React.FC = () => {
  const isMb = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const miniScreen = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const { isDark } = useUserStore();
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
      bottomTit='Know more about us'
      desVid='At IES College, we are focused on not just providing knowledge and skills that could birth a fulfilling future career, but also on nurturing an effective research mindset that recognizes potential in all things and can transform every small step into a launching ground for impactful innovations.'
      titVid={`A launching ground for inspirational
impacts`}
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
