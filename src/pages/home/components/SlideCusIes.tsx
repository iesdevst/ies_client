import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import ADDKSC from '@/assets/imgs/addmis_dk_screen.png';
import AMSL from '@/assets/imgs/admiss_sl.png';
import PSHSL from '@/assets/imgs/ps_hou_sl.png';
import TPSL from '@/assets/imgs/training_prog_sl.png';
import TSMBSC from '@/assets/imgs/ts_mb_screen.png';
import { IesClSection } from '@/components';

const SlideCusIes: React.FC = () => {
  const isMb = useMediaQuery({ maxWidth: 767 });
  // const isTl = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const images = useMemo(() => [ADDKSC, TPSL, PSHSL, AMSL], []);

  const imagesMb = useMemo(() => [TSMBSC], []);

  const finalImages = useMemo(
    () => (isMb ? imagesMb : images),
    [isMb, images, imagesMb],
  );
  return (
    <IesClSection
      id='ies_slide'
      layout='slideCus'
      images={finalImages}
      className={`!w-full ${isMb ? '!mb-10' : '!mb-20'}`}
      mb={isMb}
    />
  );
};

export default SlideCusIes;
