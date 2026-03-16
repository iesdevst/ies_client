import { useMediaQuery } from 'react-responsive';
import sc_view_sl from '@/assets/imgs/dh_mo_ts_slide.png';
import graduate_sl from '@/assets/imgs/graduate_sl.png';
import tsl10_sl from '@/assets/imgs/ies_tsl10_slide.png';
import study_sl from '@/assets/imgs/study_slide.png';
import { IesClSection } from '@/components';

const SlideCusIes: React.FC = () => {
  const images = [study_sl, tsl10_sl, sc_view_sl, graduate_sl];
  const isMb = useMediaQuery({ maxWidth: 1024 });
  return (
    <IesClSection
      id='ies_slide'
      layout='slideCus'
      images={images}
      className='!w-full !mb-20'
      mb={isMb}
    />
  );
};

export default SlideCusIes;
