export const AboutTab = {
  Aboverview: 'aboverview',
  Vision: 'vision',
  Corevalues: 'core-value',
};

export type AboutTab = (typeof AboutTab)[keyof typeof AboutTab];

export const AcademicsVocaTab = {
  AllCour: 'all-courses',
  ItOffice: 'it-office',
  Hospitality: 'hospitality',
  Design: 'design',
  Business: 'business',
};

export type AcademicsVocaTab =
  (typeof AcademicsVocaTab)[keyof typeof AcademicsVocaTab];

export const TrainDetailTab = {
  Overview: 'overview',
  Admission: 'admission',
  Apply: 'apply',
  Register: 'register',
};

export type TrainDetailTab =
  (typeof TrainDetailTab)[keyof typeof TrainDetailTab];

export const HOME_SEGMENT = 'dashboard' as const;
export const ABOUT_SEGMENT = 'about-ies' as const;
export const ACADEMICS_SEGMENT = 'academics' as const;
export const DEMIC_DETAIL_SEGMENT = 'demics-detail' as const;
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
  ACADEMICSVOCA_ALL: `/${ACADEMICS_SEGMENT}?tab=${AcademicsVocaTab.AllCour}`,
  ACADEMICSVOCA_IT: `/${ACADEMICS_SEGMENT}?tab=${AcademicsVocaTab.ItOffice}`,
  ACADEMICSVOCA_HOSPI: `/${ACADEMICS_SEGMENT}?tab=${AcademicsVocaTab.Hospitality}`,
  ACADEMICSVOCA_BUSI: `/${ACADEMICS_SEGMENT}?tab=${AcademicsVocaTab.Business}`,
  ACADEMICSVOCA_DESIGN: `/${ACADEMICS_SEGMENT}?tab=${AcademicsVocaTab.Design}`,
  DEMICS_DETAIL: `/${DEMIC_DETAIL_SEGMENT}`,
  DEMICS_DETAIL_OVW: `/${DEMIC_DETAIL_SEGMENT}?tab=${TrainDetailTab.Overview}`,
  DEMICS_DETAIL_ADMISS: `/${DEMIC_DETAIL_SEGMENT}?tab=${TrainDetailTab.Admission}`,
  DEMICS_DETAIL_APPLY: `/${DEMIC_DETAIL_SEGMENT}?tab=${TrainDetailTab.Apply}`,
  DEMICS_DETAIL_REGISTER: `/${DEMIC_DETAIL_SEGMENT}?tab=${TrainDetailTab.Register}`,
  ADMISSIONS: `/${ADMISSIONS_SEGMENT}`,
  CAREEROP: `/${CAREEROP_SEGMENT}`,
  NEWS: `/${NEWS_SEGMENT}`,
  PUBDIS: `/${PUBDIS_SEGMENT}`,
};
