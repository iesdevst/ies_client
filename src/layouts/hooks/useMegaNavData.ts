import { ROUTES, type RoutePath } from '@/constants';

export const useMegaNavData = (): { data: Array<MegaNavItem> } => {
  const data: Array<MegaNavItem> = [
    {
      key: ROUTES.ABOUT,
      label: 'About',
      overW: true,
      sections: [
        {
          links: [
            { label: 'Vision & Mission', route: ROUTES.ABOUT_VISION },
            { label: 'Core Values', route: ROUTES.ABOUT_COREVALUES },
          ],
        },
      ],
    },

    {
      key: ROUTES.ADMISSIONS,
      label: 'Admissions',
      overW: false,
      sections: [
        {
          title: 'Short-term Training Programs',
          links: [
            { label: 'Short-term Training Page', route: ROUTES.ADMISSIONS_SC },
          ],
        },
        {
          title: 'Intermediate Vocational Training Programs',
          links: [
            { label: 'All Courses', route: ROUTES.ADMISSIONSVOCA_ALL },
            { label: 'IT & Office', route: ROUTES.ADMISSIONSVOCA_IT },
            {
              label: 'Hospitality & Services',
              route: ROUTES.ADMISSIONSVOCA_HOSPI,
            },
            {
              label: 'Design & Creativity',
              route: ROUTES.ADMISSIONSVOCA_DESIGN,
            },
            {
              label: 'Business & Management',
              route: ROUTES.ADMISSIONSVOCA_BUSI,
            },
          ],
        },
        {
          title: 'Partnership Training',
          links: [
            { label: 'Ha Noi Open University', route: ROUTES.PARTNERSHIP },
          ],
        },
      ],
    },

    {
      key: ROUTES.ADMISSIONS,
      label: 'Academics',
      overW: false,
      sections: [
        {
          title: 'IES',
          links: [
            { label: 'Vocational College Admissions', route: '/' },
            { label: '10th Grade Admissions', route: '/' },
          ],
        },
        {
          title: 'Educational Partnerships',
          links: [
            { label: 'Hanoi Open University Admissions', route: '/' },
            {
              label: 'HCM City University of Technology Admissions',
              route: '/',
            },
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
      label: 'News & Events',
      overW: false,
      sections: [
        {
          title: 'IES news',
          links: [{ label: 'Latest News', route: '/' }],
        },
        {
          title: 'IES events',
          links: [{ label: 'Events', route: '/' }],
        },
      ],
    },

    {
      key: ROUTES.PUBDIS,
      label: 'Public Disclosure',
      overW: false,
      sections: [
        {
          title: 'Quality Assessment',
          links: [
            { label: 'Quality Assurance System – 2025', route: '/' },
            { label: 'Quality Assurance System – 2026', route: '/' },
          ],
        },
        {
          title: 'Academic Plans',
          links: [
            { label: 'Full Program Training Plan 2025–2026', route: '/' },
            { label: 'Full Program Training Plan 2026–2027', route: '/' },
          ],
        },
      ],
    },
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
