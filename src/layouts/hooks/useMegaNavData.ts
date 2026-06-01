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
              { label: t('bgh'), route: ROUTES.LEAD_SCHOOL },
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
              { label: t('regulations'), route: ROUTES.TRAINDOCS },
              { label: t('trainForm'), route: ROUTES.TRAINFORM },

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
        label: t('ckgd'),
        overW: false,
        sections: [
          {
            links: [
              { label: t('khdt'), route: ROUTES.TRAININGPL },
              { label: t('degress'), route: ROUTES.DEGRESS },
              { label: t('legal'), route: ROUTES.LEGALDOC },
              { label: t('quality'), route: ROUTES.QUALITY },
              { label: t('vocadoc'), route: ROUTES.VOCATIONAL },
            ],
          },
        ],
      },
      {
        key: ROUTES.REGUSTU,
        label: t('stu'),
        overW: false,
        sections: [
          {
            links: [
              { label: t('stuRegu'), route: ROUTES.REGUSTU },
              { label: t('stuAct'), route: ROUTES.ACTSTU },
              { label: t('handbook'), route: ROUTES.HANDBOOK },
              { label: t('stuForm'), route: ROUTES.STUFORM },
              { label: t('stuInfo'), route: ROUTES.STUINFO },
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
