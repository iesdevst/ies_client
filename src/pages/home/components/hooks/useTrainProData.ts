import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import CTLK from '@/assets/imgs/ctlk.avif';
import CTTC from '@/assets/imgs/cttc.avif';
import CTTT from '@/assets/imgs/cttt.avif';
import { ROUTES } from '@/constants';

export const useTrainProData = (): { data: Array<NoFeatCdt> } => {
  const { t } = useTranslation('trainPro');
  const data = useMemo<Array<NoFeatCdt>>(
    () => [
      {
        id: '1',
        imgC: CTTC,
        tit: t('intermediate'),
        butCard: t('intermediateBtn'),
        des: t('intermediateDesc'),
        navigo: ROUTES.ADMISSIONSVOCA_ALL,
      },
      {
        id: '2',
        imgC: CTTT,
        tit: t('shortTerm'),
        butCard: t('shortTermBtn'),
        des: t('shortTermDesc'),
        navigo: ROUTES.ADMISSIONS_SC_MIX_OVW,
      },
      {
        id: '3',
        imgC: CTLK,
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
  imgC: string;
  tit: string;
  butCard: string;
  des: string;
  navigo: string;
};
