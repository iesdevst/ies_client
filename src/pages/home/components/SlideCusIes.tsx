import { useTranslation } from 'react-i18next';
import ADDKSC from '@/assets/imgs/addmis_dk_screen.webp';
import PSHOU from '@/assets/imgs/ps_hou_sl.webp';
// import PSHOUMB from '@/assets/imgs/ps_hou_sl_mb.webp';
// import TSMBSC from '@/assets/imgs/ts_mb_screen.webp';
import { IesClSection } from '@/components';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const SlideCusIes: React.FC = () => {
  const { t } = useTranslation('slideCusIes');
  const { device } = useDevice();
  const { isDark } = useUserStore();
  const images = [ADDKSC, PSHOU];

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
      className={`!w-full ${mb ? '!mb-10' : '!mb-20'} !mt-10`}
      mb={mb}
      tl={tl}
      tlpr={tlpr}
      dark={isDark}
      height={mb ? '55vh' : tl ? '45vh' : tlpr ? '45vh' : '80vh'}
    />
  );
};

export default SlideCusIes;
