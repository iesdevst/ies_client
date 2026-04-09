import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import CTLK from '@/assets/imgs/ctlk.avif';
import CTTC from '@/assets/imgs/cttc.avif';
import CTTT from '@/assets/imgs/cttt.avif';
import { IesClSection } from '@/components';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const TrainPro: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { isDark } = useUserStore();
  const { t } = useTranslation('trainPro');
  const noFeatCdt = [
    {
      imgC: CTTC,
      tit: t('intermediate'),
      butCard: t('intermediateBtn'),
      des: t('intermediateDesc'),
      navigo: ROUTES.ADMISSIONSVOCA_ALL,
    },
    {
      imgC: CTTT,
      tit: t('shortTerm'),
      butCard: t('shortTermBtn'),
      des: t('shortTermDesc'),
      navigo: ROUTES.ADMISSIONS_SC_MIX_OVW,
    },
    {
      imgC: CTLK,
      tit: t('partnership'),
      butCard: t('partnershipBtn'),
      des: t('partnershipDesc'),
      navigo: ROUTES.PARTNERSHIP,
    },
  ];

  return (
    <IesClSection
      id='trainNoFeat'
      layout='newsFeature'
      title={t('sectionTitle')}
      feature={false}
      featCard={noFeatCdt}
      className={`mt-20 ${!mb ? 'px-10' : 'px-3'}`}
      mb={mb}
      height={!mb ? '' : '36vh'}
      dark={isDark}
    />
  );
};

export default TrainPro;
