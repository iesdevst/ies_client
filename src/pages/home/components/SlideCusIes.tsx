import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import ADDKSC from '@/assets/imgs/addmis_dk_screen.webp';

import TSMBSC from '@/assets/imgs/ts_mb_screen.webp';
import { IesClSection } from '@/components';

const SlideCusIes: React.FC = () => {
  const isMb = useMediaQuery({ maxWidth: 767 });
  // const isTl = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const images = useMemo(() => [ADDKSC], []);

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
