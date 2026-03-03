import bird_sl from '@/assets/imgs/bird_slide.jpg';
import meeting_sl from '@/assets/imgs/meeting_slide.jpg';
import sc_view_sl from '@/assets/imgs/sc_view_slide.jpg';
import study_sl from '@/assets/imgs/study_slide.jpg';
import { IesClSection } from '@/components';

const SlideCusIes: React.FC = () => {
  const images = [bird_sl, meeting_sl, sc_view_sl, study_sl];
  return (
    <IesClSection
      id='ies_slide'
      layout='slideCus'
      images={images}
      className='!w-full !mb-20'
    />
  );
};

export default SlideCusIes;
