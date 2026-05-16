import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import DVKS from '@/assets/imgs/dv_ks.svg';
import KDQL from '@/assets/imgs/kd_qly.svg';
import THVP from '@/assets/imgs/th_vp.svg';
import TKST from '@/assets/imgs/tk_st.svg';

export const useFieldProData = (): { data: Array<FieldPro> } => {
  const { t } = useTranslation('fieldOfStudy');
  const data = useMemo<Array<FieldPro>>(
    () => [
      {
        id: '1',
        icon: THVP,
        tit: t('itOffice'),
        fieldLst: [
          {
            key: '1',
            fie: t('appliedInfo'),
          },
          {
            key: '2',
            fie: t('it'),
          },
        ],
      },
      {
        id: '2',
        icon: DVKS,
        tit: t('hospServ'),
        fieldLst: [
          {
            key: '1',
            fie: t('hotelMng'),
          },
        ],
      },
      {
        id: '3',
        icon: TKST,
        tit: t('designCreat'),
        fieldLst: [
          {
            key: '1',
            fie: t('fineArts'),
          },
        ],
      },
      {
        id: '4',
        icon: KDQL,
        tit: t('busiMng'),
        fieldLst: [
          {
            key: '1',
            fie: t('busiAdmin'),
          },
          {
            key: '2',
            fie: t('marketing'),
          },
          {
            key: '3',
            fie: t('accounting'),
          },
        ],
      },
    ],
    [t],
  );
  return { data };
};

export type FieldPro = {
  id: string;
  icon: string;
  tit: string;
  fieldLst: Array<FieldLst>;
};

export type FieldLst = {
  key: string;
  fie: string;
};
