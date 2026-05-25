import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import CTTC from '@/assets/imgs/imidate.webp';
import CTLK from '@/assets/imgs/ps_imi.webp';
import CTTT from '@/assets/imgs/short_imi.webp';
import { ROUTES } from '@/constants';

export const useTrainProData = (): { data: Array<NoFeatCdt> } => {
  const { t } = useTranslation('trainPro');
  const data = useMemo<Array<NoFeatCdt>>(
    () => [
      {
        id: '1',
        img: CTTC,
        tit: t('intermediate'),
        butCard: t('intermediateBtn'),
        des: t('intermediateDesc'),
        navigo: ROUTES.ADMISSIONSVOCA_ALL,
      },
      {
        id: '2',
        img: CTTT,
        tit: t('shortTerm'),
        butCard: t('shortTermBtn'),
        des: t('shortTermDesc'),
        navigo: ROUTES.ADMISSIONS_SC_MIX_OVW,
      },
      {
        id: '3',
        img: CTLK,
        tit: t('partnership'),
        butCard: t('partnershipBtn'),
        des: t('partnershipDesc'),
        navigo: ROUTES.PARTNERSHIP,
      },
    ],
    [t],
  );
  return { data };
};

export type NoFeatCdt = {
  id: string;
  img: string;
  tit: string;
  butCard: string;
  des: string;
  navigo: string;
};
