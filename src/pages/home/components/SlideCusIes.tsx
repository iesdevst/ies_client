import { useMediaQuery } from 'react-responsive';
import AMSL from '@/assets/imgs/admiss_sl.png';
import PSHSL from '@/assets/imgs/ps_hou_sl.png';
import TPSL from '@/assets/imgs/training_prog_sl.png';
import VSSL from '@/assets/imgs/v_ad_s_slide.png';
import { IesClSection } from '@/components';

const SlideCusIes: React.FC = () => {
  const images = [TPSL, VSSL, PSHSL, AMSL];
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
