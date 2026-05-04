import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import CNTT from '@/assets/imgs/cntt_hn.png';
import CC from '@/assets/imgs/ctm_hn_card.jpg';
import KTDN from '@/assets/imgs/ktdn_hn.png';
import MKT from '@/assets/imgs/mkt_hn.png';
import MC from '@/assets/imgs/mtk_hn_card.webp';
import QLDN from '@/assets/imgs/qldn_hn.png';
import QLKS from '@/assets/imgs/qlks_hn.jpg';
import { default as TC, default as THDU } from '@/assets/imgs/thud_hn.png';
import TKVP from '@/assets/imgs/tkvp_hn.png';
import VTK from '@/assets/imgs/vtk_hn.png';

export const useCgSlideData = (): { data: Array<CgSlide> } => {
  const { t } = useTranslation('careerGuid');
  const data = useMemo<Array<CgSlide>>(
    () => [
      { id: '1', cTit: t('slide1'), cImg: THDU },
      { id: '2', cTit: t('slide2'), cImg: CNTT },
      { id: '3', cTit: t('slide3'), cImg: TKVP },
      { id: '4', cTit: t('slide4'), cImg: QLKS },
      { id: '5', cTit: t('slide5'), cImg: MKT },
      { id: '6', cTit: t('slide6'), cImg: QLDN },
      { id: '7', cTit: t('slide7'), cImg: VTK },
      { id: '8', cTit: t('slide8'), cImg: KTDN },
    ],
    [t],
  );
  return { data };
};

export type CgSlide = {
  id: string;
  cTit: string;
  cImg: string;
};

export const useCgCardData = (): { data: Array<CgCard> } => {
  const { t } = useTranslation('careerGuid');
  const data = useMemo<Array<CgCard>>(
    () => [
      {
        id: '1',
        imgC: MC,
        des: t('card1'),
      },
      { id: '2', imgC: CC, des: t('card2') },
      {
        id: '3',
        imgC: TC,
        des: t('card3'),
      },
    ],
    [t],
  );
  return { data };
};

export type CgCard = {
  id: string;
  imgC: string;
  des: string;
};
