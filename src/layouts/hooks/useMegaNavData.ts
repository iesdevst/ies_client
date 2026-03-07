import { ROUTES } from '@/constants';

export const useMegaNavData = () => {
  return [
    {
      key: ROUTES.ABOUT,
      label: 'About',
      sections: [
        {
          title: 'Overview',
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
          title: 'Programs',
          links: [
            { label: 'Undergraduate', route: '/' },
            { label: 'Postgraduate', route: '/' },
            { label: 'Online Programs', route: '/' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Library', route: '/' },
            { label: 'Research', route: '/' },
            { label: 'Academic Calendar', route: '/' },
          ],
        },
      ],
    },

    {
      key: ROUTES.ADMISSIONS,
      label: 'Admissions',
      sections: [
        {
          title: 'Apply',
          links: [
            { label: 'How to Apply', route: '/' },
            { label: 'Requirements', route: '/' },
            { label: 'Tuition Fees', route: '/' },
          ],
        },
        {
          title: 'Support',
          links: [
            { label: 'Scholarships', route: '/' },
            { label: 'International Students', route: '/' },
          ],
        },
      ],
    },

    {
      key: ROUTES.CAREEROP,
      label: 'Career Opportunities',
      sections: [
        {
          title: 'Careers',
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
          title: 'Updates',
          links: [
            { label: 'Latest News', route: '/' },
            { label: 'Events', route: '/' },
            { label: 'Press Releases', route: '/' },
          ],
        },
      ],
    },

    {
      key: ROUTES.PUBDIS,
      label: 'Public Disclosure',
      sections: [
        {
          title: 'Information',
          links: [
            { label: 'Reports', route: '/' },
            { label: 'Policies', route: '/' },
          ],
        },
      ],
    },
  ];
};
