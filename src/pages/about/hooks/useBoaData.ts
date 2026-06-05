import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import HIEP from '@/assets/imgs/hiep_tht.webp';
import NHH from '@/assets/imgs/nhh_hdt.webp';
import THUY from '@/assets/imgs/thuy_hp.webp';
import VTL from '@/assets/imgs/vtl_teach.webp';

export type BoaMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  desc?: string;
};

export type BoaBoardSection = {
  featured: BoaMember;
  members: Array<BoaMember>;
};

export const useBoaData = (): {
  boardOfTrustees: BoaBoardSection;
  adminBoard: BoaBoardSection;
  foundingBoard: BoaMember[];
} => {
  const { t } = useTranslation('boa');

  const boardOfTrustees = useMemo<BoaBoardSection>(
    () => ({
      featured: {
        id: 'bot-feat',
        name: t('botFeatName'),
        role: t('botFeatRole'),
        image: HIEP,
        desc: t('botFeatDesc'),
      },
      members: [
        { id: 'bot-1', name: t('botM1Name'), role: t('botM1Role'), image: THUY },
        { id: 'bot-2', name: t('botM2Name'), role: t('botM2Role'), image: NHH },
        { id: 'bot-3', name: t('botM3Name'), role: t('botM3Role'), image: VTL },
      ],
    }),
    [t],
  );

  const adminBoard = useMemo<BoaBoardSection>(
    () => ({
      featured: {
        id: 'ab-feat',
        name: t('abFeatName'),
        role: t('abFeatRole'),
        image: HIEP,
        desc: t('abFeatDesc'),
      },
      members: [
        { id: 'ab-1', name: t('abM1Name'), role: t('abM1Role'), image: THUY },
      ],
    }),
    [t],
  );

  const foundingBoard = useMemo<Array<BoaMember>>(
    () => [
      { id: 'fb-1', name: t('fbM1Name'), role: t('fbM1Role'), image: HIEP },
      { id: 'fb-2', name: t('fbM2Name'), role: t('fbM2Role'), image: THUY },
    ],
    [t],
  );

  return { boardOfTrustees, adminBoard, foundingBoard };
};
