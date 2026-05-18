import { lazy, useMemo } from 'react';
import ADDKSC from '@/assets/imgs/addmis_dk_screen.webp';

import TSMBSC from '@/assets/imgs/ts_mb_screen.webp';
import { useDevice } from '@/hooks';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const SlideCusIes: React.FC = () => {
  const { device } = useDevice();

  const images = useMemo(() => [ADDKSC], []);

  const imagesMb = useMemo(() => [TSMBSC], []);

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
