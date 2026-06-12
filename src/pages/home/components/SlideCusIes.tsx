import { useTranslation } from 'react-i18next';
import ADMSL from '@/assets/imgs/addmis_slide.webp';
import NPS from '@/assets/imgs/nine_plus_slide.webp';
import PSHOU from '@/assets/imgs/ps_hou_sl.webp';
import TS from '@/assets/imgs/trainings_slide.webp';
import { IesClSection } from '@/components';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const SlideCusIes: React.FC = () => {
  const { t } = useTranslation('slideCusIes');
  const { device } = useDevice();
  const { isDark } = useUserStore();
  const images = [ADMSL, NPS, TS, PSHOU];

  const mb = device === 'mobile';
  const tl = device === 'tablet';
  const tlpr = device === 'tabletPro';

  return (
    <IesClSection
      id='ies_slide'
      layout='slideCus'
      title='IES SPOTLIGHT'
      textsl={t('spotlight')}
      nowtext={t('now')}
      images={images}
      className={`!w-full ${mb ? '!mb-10' : '!mb-25'} !mt-10`}
      mb={mb}
      tl={tl}
      tlpr={tlpr}
      dark={isDark}
    />
  );
};

export default SlideCusIes;
