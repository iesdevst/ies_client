export const AboutTab = {
  Aboverview: 'aboverview',
  Vision: 'vision',
  Corevalues: 'core-value',
};

export type AboutTab = (typeof AboutTab)[keyof typeof AboutTab];

export const HOME_SEGMENT = 'dashboard' as const;
export const ABOUT_SEGMENT = 'about-ies' as const;
export const ACADEMIS_SEGMENT = 'academics' as const;
export const ADMISSIONS_SEGMENT = 'admissions' as const;
export const CAREEROP_SEGMENT = 'careeop' as const;
export const NEWS_SEGMENT = 'news' as const;
export const PUBDIS_SEGMENT = 'disclosure' as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export const ROUTES = {
  ROOT: '/',
  DASHBOARD: `/${HOME_SEGMENT}`,
  ABOUT: `/${ABOUT_SEGMENT}`,
  ABOUT_OVERVIEW: `/${ABOUT_SEGMENT}?tab=${AboutTab.Aboverview}`,
  ABOUT_VISION: `/${ABOUT_SEGMENT}?tab=${AboutTab.Vision}`,
  ABOUT_COREVALUES: `/${ABOUT_SEGMENT}?tab=${AboutTab.Corevalues}`,
  ACADEMIS: `/${ACADEMIS_SEGMENT}`,
  ADMISSIONS: `/${ADMISSIONS_SEGMENT}`,
  CAREEROP: `/${CAREEROP_SEGMENT}`,
  NEWS: `/${NEWS_SEGMENT}`,
  PUBDIS: `/${PUBDIS_SEGMENT}`,
};
