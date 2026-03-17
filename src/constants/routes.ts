export const AboutTab = {
  Aboverview: 'aboverview',
  Vision: 'vision',
  Corevalues: 'core-value',
};

export type AboutTab = (typeof AboutTab)[keyof typeof AboutTab];

export const AcademicsTab = {
  AllCour: 'all-courses',
  ItOffice: 'it-office',
  Hospitality: 'hospitality',
  Design: 'design',
  Business: 'business',
};

export type AcademicsTab = (typeof AcademicsTab)[keyof typeof AcademicsTab];

export const HOME_SEGMENT = 'dashboard' as const;
export const ABOUT_SEGMENT = 'about-ies' as const;
export const ACADEMICS_SEGMENT = 'academics' as const;
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
  ACADEMICS: `/${ACADEMICS_SEGMENT}`,
  ACADEMICS_ALL: `/${ACADEMICS_SEGMENT}?tab=${AcademicsTab.AllCour}`,
  ACADEMICS_IT: `/${ACADEMICS_SEGMENT}?tab=${AcademicsTab.ItOffice}`,
  ACADEMICS_HOSPI: `/${ACADEMICS_SEGMENT}?tab=${AcademicsTab.Hospitality}`,
  ACADEMICS_BUSI: `/${ACADEMICS_SEGMENT}?tab=${AcademicsTab.Business}`,
  ACADEMICS_DESIGN: `/${ACADEMICS_SEGMENT}?tab=${AcademicsTab.Design}`,
  ADMISSIONS: `/${ADMISSIONS_SEGMENT}`,
  CAREEROP: `/${CAREEROP_SEGMENT}`,
  NEWS: `/${NEWS_SEGMENT}`,
  PUBDIS: `/${PUBDIS_SEGMENT}`,
};
