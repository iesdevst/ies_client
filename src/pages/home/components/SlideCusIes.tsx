import { useMediaQuery } from 'react-responsive';
import AMMBSL from '@/assets/imgs/admiss_mb_sl.png';
import AMSL from '@/assets/imgs/admiss_sl.png';
import PSMBSL from '@/assets/imgs/ps_hou_mb_sl.png';
import PSHSL from '@/assets/imgs/ps_hou_sl.png';
import TPMBSL from '@/assets/imgs/training_prog_mb_sl.png';
import TPSL from '@/assets/imgs/training_prog_sl.png';
import { IesClSection } from '@/components';

const SlideCusIes: React.FC = () => {
  const images = [TPSL, PSHSL, AMSL];
  const imagesMb = [AMMBSL, TPMBSL, PSMBSL];
  const isMb = useMediaQuery({ maxWidth: 767 });
  // const isTl = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  return (
    <IesClSection
      id='ies_slide'
      layout='slideCus'
      images={isMb ? imagesMb : images}
      className='!w-full !mb-20'
      mb={isMb}
    />
  );
};

export default SlideCusIes;
