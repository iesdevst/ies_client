import { useTranslation } from 'react-i18next';
import { ROUTES, type RoutePath } from '@/constants';

export const useMegaNavData = (): { data: Array<MegaNavItem> } => {
  const { t } = useTranslation('useMegaNavData');
  const data: Array<MegaNavItem> = [
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

    // {
    //   key: ROUTES.CAREEROP,
    //   label: 'Career Opportunities',
    //   overW: false,
    //   sections: [
    //     {
    //       links: [
    //         { label: 'Job Openings', route: '/' },
    //         { label: 'Faculty Positions', route: '/' },
    //       ],
    //     },
    //   ],
    // },

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

    // {
    //   key: ROUTES.PUBDIS,
    //   label: 'Public Disclosure',
    //   overW: false,
    //   sections: [
    //     {
    //       title: 'Quality Assessment',
    //       links: [
    //         { label: 'Quality Assurance System – 2025', route: '/' },
    //         { label: 'Quality Assurance System – 2026', route: '/' },
    //       ],
    //     },
    //     {
    //       title: 'Academic Plans',
    //       links: [
    //         { label: 'Full Program Training Plan 2025–2026', route: '/' },
    //         { label: 'Full Program Training Plan 2026–2027', route: '/' },
    //       ],
    //     },
    //   ],
    // },
  ];
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
