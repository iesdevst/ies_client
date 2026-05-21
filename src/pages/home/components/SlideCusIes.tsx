import { useMemo } from 'react';
import ADDKSC from '@/assets/imgs/addmis_dk_screen.webp';
import PSHOU from '@/assets/imgs/ps_hou_sl.webp';
import PSHOUMB from '@/assets/imgs/ps_hou_sl_mb.webp';
import TSMBSC from '@/assets/imgs/ts_mb_screen.webp';
import { IesClSection } from '@/components';
import { useDevice } from '@/hooks';

const SlideCusIes: React.FC = () => {
  const { device } = useDevice();

  const images = useMemo(() => [ADDKSC, PSHOU], []);
  const imagesMb = useMemo(() => [TSMBSC, PSHOUMB], []);

  const finalImages = useMemo(
    () => (device === 'mobile' ? imagesMb : images),
    [device, images, imagesMb],
  );

  return (
    <IesClSection
      id='ies_slide'
      layout='slideCus'
      images={finalImages}
      className={`!w-full ${device === 'mobile' ? '!mb-10' : '!mb-20'}`}
      mb={device === 'mobile'}
    />
  );
};

export default SlideCusIes;
