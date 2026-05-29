import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ROUTES, type RoutePath } from '@/constants';

export const useMegaNavData = (): { data: Array<MegaNavItem> } => {
  const { t } = useTranslation('useMegaNavData');
  const data = useMemo<Array<MegaNavItem>>(
    () => [
      {
        key: ROUTES.ABOUT,
        label: t('about'),
        overW: true,
        sections: [
          {
            links: [
              { label: t('vAm'), route: ROUTES.ABOUT_VISION },
              { label: t('values'), route: ROUTES.ABOUT_COREVALUES },
            ],
          },
        ],
      },

      {
        key: ROUTES.ADMISSIONS,
        label: t('admiss'),
        overW: false,
        sections: [
          {
            title: t('shortTt'),
            links: [
              {
                label: t('shortTl'),
                route: ROUTES.ADMISSIONS_SC_MIX_OVW,
              },
            ],
          },
          {
            title: t('ivTit'),
            links: [
              { label: t('allc'), route: ROUTES.ADMISSIONSVOCA_ALL },
              { label: t('it'), route: ROUTES.ADMISSIONSVOCA_IT },
              {
                label: t('hos'),
                route: ROUTES.ADMISSIONSVOCA_HOSPI,
              },
              {
                label: t('ds'),
                route: ROUTES.ADMISSIONSVOCA_DESIGN,
              },
              {
                label: t('busi'),
                route: ROUTES.ADMISSIONSVOCA_BUSI,
              },
            ],
          },
          {
            title: t('partTr'),
            links: [{ label: t('hnLabel'), route: ROUTES.PARTNERSHIP }],
          },
        ],
      },

      {
        key: ROUTES.ACADEMICS,
        label: t('acade'),
        overW: false,
        sections: [
          {
            title: t('iesAca'),
            links: [
              { label: t('acadeL'), route: ROUTES.ACADEMICS },

              { label: t('digiLib'), route: ROUTES.DGTLIB },
            ],
          },
        ],
      },
      {
        key: ROUTES.NEWS,
        label: t('newAe'),
        overW: false,
        sections: [
          {
            title: t('iesNs'),
            links: [{ label: t('ltNs'), route: ROUTES.NEWS }],
          },
          {
            title: t('iesEv'),
            links: [{ label: t('evs'), route: ROUTES.EVENTS }],
          },
        ],
      },

      {
        key: ROUTES.EDU_DISC,
        label: 'Educational disclosure',
        overW: false,
        sections: [
          {
            links: [
              { label: 'Training Plan', route: ROUTES.TRAININGPL },
              { label: 'Degress', route: ROUTES.DEGRESS },
            ],
          },
        ],
      },
    ],
    [t],
  );
  return { data };
};

export type MegaNavLink = {
  label: string;
  route: RoutePath;
};

export type MegaNavSec = {
  title?: string;
  links: Array<MegaNavLink>;
};

export type MegaNavItem = {
  key: RoutePath;
  label: string;
  overW: boolean;
  sections: Array<MegaNavSec>;
};
