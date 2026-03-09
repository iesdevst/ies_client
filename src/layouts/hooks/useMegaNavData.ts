import { ROUTES, type RoutePath } from '@/constants';

export const useMegaNavData = (): Array<MegaNavItem> => {
  return [
    {
      key: ROUTES.ABOUT,
      label: 'About',
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
      key: ROUTES.ACADEMIS,
      label: 'Academics',
      sections: [
        {
          title: 'IT & Office',
          links: [
            { label: 'Applied Informatics', route: '/' },
            { label: 'Office Administration', route: '/' },
          ],
        },
        {
          title: 'Hospitality & Services',
          links: [{ label: 'Hotel Management & Business', route: '/' }],
        },
        {
          title: 'Design & Creativity',
          links: [{ label: 'Fine Arts Design', route: '/' }],
        },
        {
          title: 'Business & Management',
          links: [
            { label: 'Business Administration', route: '/' },
            { label: 'Marketing', route: '/' },
            { label: 'Accounting', route: '/' },
          ],
        },
      ],
    },

    {
      key: ROUTES.ADMISSIONS,
      label: 'Admissions',
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

    {
      key: ROUTES.CAREEROP,
      label: 'Career Opportunities',
      sections: [
        {
          links: [
            { label: 'Job Openings', route: '/' },
            { label: 'Faculty Positions', route: '/' },
          ],
        },
      ],
    },

    {
      key: ROUTES.NEWS,
      label: 'News & Events',
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
  sections: Array<MegaNavSec>;
};
