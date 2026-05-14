import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import BRSTUN from '@/assets/imgs/cnhs_news.webp';
import EVAI from '@/assets/imgs/events_ai.webp';
import EVTS1 from '@/assets/imgs/evts_p1.webp';
import KTDT from '@/assets/imgs/ktdt_nfc.webp';
import KTO from '@/assets/imgs/kto_nfc.webp';
import TKDH from '@/assets/imgs/tkdh_nfc.webp';
import LTS from '@/assets/imgs/top_str_lts.webp';

export const useTopSn = (): { data: Array<TopSn> } => {
  const { t } = useTranslation('newAndEvent');
  const data = useMemo<Array<TopSn>>(
    () => [
      {
        id: '1',
        sti: EVAI,
        tit: t('workshop'),
        specTit: t('workshopTit'),
      },
      {
        id: '2',
        sti: BRSTUN,
        tit: t('eduCoop1'),
        specTit: t('eduCoopTit'),
      },
      {
        id: '3',
        sti: LTS,
        tit: t('admissions'),
        specTit: t('admissTit'),
      },
      {
        id: '4',
        sti: EVTS1,
        tit: t('eduCoop2'),
        specTit: t('eduCoopTit'),
      },
    ],
    [t],
  );
  return { data };
};

export type TopSn = {
  id: string;
  sti: string;
  tit: string;
  specTit: string;
};

export const useFeatCdt = (): { data: Array<FeatCdt> } => {
  const { t } = useTranslation('newAndEvent');
  const data = useMemo<Array<FeatCdt>>(
    () => [
      {
        id: '1',
        imgC: KTDT,
        tit: t('elecEng'),
        butCard: '20-03-2026',
        des: t('elecDesc'),
      },
      {
        id: '2',
        imgC: KTO,
        tit: t('autoEng'),
        butCard: '01-03-2026',
        des: t('autoDesc'),
      },
      {
        id: '3',
        imgC: TKDH,
        tit: t('graphicD'),
        butCard: '09-02-2026',
        des: t('graphicDesc'),
      },
    ],
    [t],
  );
  return { data };
};

export type FeatCdt = {
  id: string;
  imgC: string;
  tit: string;
  butCard: string;
  des: string;
};
