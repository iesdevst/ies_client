import { useMediaQuery } from 'react-responsive';
import { IesClSection } from '@/components';

const VidPrIes: React.FC = () => {
  const isMb = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const miniScreen = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  return (
    <IesClSection
      id='vidPr'
      layout='vidPr'
      bottomTit='Know more about us'
      desVid='At Van Lang, we are focused on not just providing knowledge and skills that could birth a fulfilling future career, but also on nurturing an effective research mindset that recognizes potential in all things and can transform every small step into a launching ground for impactful innovations.'
      titVid={`A launching ground for inspirational
impacts`}
      vidLink='https://www.youtube.com/embed/8G1vC-hJjjc?si=Q_cV53WSlXUtmrA7'
      mb={isMb}
      height={`${!isMb ? '70vh' : '30vh'}`}
      tabletVid={isTablet}
      miniSc={miniScreen}
    />
  );
};

export default VidPrIes;
