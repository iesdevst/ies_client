export const AboutTab = {
  Aboverview: 'aboverview',
  Vision: 'vision',
  Corevalues: 'core-value',
};

export type AboutTab = (typeof AboutTab)[keyof typeof AboutTab];

export const AdmissionVocaTab = {
  AllCour: 'all-courses',
  ItOffice: 'it-office',
  Hospitality: 'hospitality',
  Design: 'design',
  Business: 'business',
};

export type AdmissionVocaTab =
  (typeof AdmissionVocaTab)[keyof typeof AdmissionVocaTab];

export const TrainDetailTab = {
  Overview: 'overview',
  Admission: 'admission',
  Apply: 'apply',
  Register: 'register',
};

export type TrainDetailTab =
  (typeof TrainDetailTab)[keyof typeof TrainDetailTab];

export const ShortCrsTab = {
  Mixology: 'mixology',
  Cooking: 'cooking',
  Baking: 'baking',
  UsingAi: 'using-ai',
};

export type ShortCrsTab = (typeof ShortCrsTab)[keyof typeof ShortCrsTab];

export const HOME_SEGMENT = 'dashboard' as const;
export const ABOUT_SEGMENT = 'about-ies' as const;
export const ACADEMICS_SEGMENT = 'academics' as const;
export const DGTLIB_SEGMENT = 'edulibrary' as const;
export const ADMISSIONS_SEGMENT = 'admissions' as const;
export const DEMIC_DETAIL_SEGMENT = 'demics-detail' as const;
export const ADMISSIONS_SHORT_SEGMENT = 'admissions-short-course' as const;
export const PARTNERSHIP_SEGMENT = 'partnership' as const;
export const NEWS_SEGMENT = 'news' as const;
export const NEWS_DETAILS_SEGMENT = 'news-details' as const;
export const EVENTS_SEGMENT = 'events' as const;
export const EVENTS_DETAILS_SEGMENT = 'events-details' as const;
export const PUBDIS_SEGMENT = 'disclosure' as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export const ROUTES = {
  ROOT: '/',
  DASHBOARD: `/${HOME_SEGMENT}`,
  ABOUT: `/${ABOUT_SEGMENT}`,
  ABOUT_OVERVIEW: `/${ABOUT_SEGMENT}?tab=${AboutTab.Aboverview}`,
  ABOUT_VISION: `/${ABOUT_SEGMENT}?tab=${AboutTab.Vision}`,
  ABOUT_COREVALUES: `/${ABOUT_SEGMENT}?tab=${AboutTab.Corevalues}`,
  ADMISSIONS: `/${ADMISSIONS_SEGMENT}`,
  ADMISSIONSVOCA_ALL: `/${ADMISSIONS_SEGMENT}?tab=${AdmissionVocaTab.AllCour}`,
  ADMISSIONSVOCA_IT: `/${ADMISSIONS_SEGMENT}?tab=${AdmissionVocaTab.ItOffice}`,
  ADMISSIONSVOCA_HOSPI: `/${ADMISSIONS_SEGMENT}?tab=${AdmissionVocaTab.Hospitality}`,
  ADMISSIONSVOCA_BUSI: `/${ADMISSIONS_SEGMENT}?tab=${AdmissionVocaTab.Business}`,
  ADMISSIONSVOCA_DESIGN: `/${ADMISSIONS_SEGMENT}?tab=${AdmissionVocaTab.Design}`,
  DEMICS_DETAIL: `/${DEMIC_DETAIL_SEGMENT}`,
  DEMICS_DETAIL_OVW: `/${DEMIC_DETAIL_SEGMENT}?tab=${TrainDetailTab.Overview}`,
  DEMICS_DETAIL_ADMISS: `/${DEMIC_DETAIL_SEGMENT}?tab=${TrainDetailTab.Admission}`,
  DEMICS_DETAIL_APPLY: `/${DEMIC_DETAIL_SEGMENT}?tab=${TrainDetailTab.Apply}`,
  DEMICS_DETAIL_REGISTER: `/${DEMIC_DETAIL_SEGMENT}?tab=${TrainDetailTab.Register}`,
  ADMISSIONS_SC: `/${ADMISSIONS_SHORT_SEGMENT}`,
  ADMISSIONS_SC_MIX: `/${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Mixology}`,
  ADMISSIONS_SC_COOK: `/${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Cooking}`,
  ADMISSIONS_SC_BAKING: `/${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Baking}`,
  ADMISSIONS_SC_UAI: `/${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.UsingAi}`,

  ADMISSIONS_SC_MIX_OVW: `/${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Mixology}&subTab=${TrainDetailTab.Overview}`,
  ADMISSIONS_SC_MIX_ADMISS: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Mixology}&subTab=${TrainDetailTab.Admission}`,
  ADMISSIONS_SC_MIX_APPLY: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Mixology}&subTab=${TrainDetailTab.Apply}`,
  ADMISSIONS_SC_MIX_REGISTER: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Mixology}&subTab=${TrainDetailTab.Register}`,

  ADMISSIONS_SC_COOK_OVW: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Cooking}&subTab=${TrainDetailTab.Overview}`,
  ADMISSIONS_SC_COOK_ADMISS: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Cooking}&subTab=${TrainDetailTab.Admission}`,
  ADMISSIONS_SC_COOK_APPLY: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Cooking}&subTab=${TrainDetailTab.Apply}`,
  ADMISSIONS_SC_COOK_REGISTER: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Cooking}&subTab=${TrainDetailTab.Register}`,

  ADMISSIONS_SC_BAKING_OVW: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Baking}&subTab=${TrainDetailTab.Overview}`,
  ADMISSIONS_SC_BAKING_ADMISS: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Baking}&subTab=${TrainDetailTab.Admission}`,
  ADMISSIONS_SC_BAKING_APPLY: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Baking}&subTab=${TrainDetailTab.Apply}`,
  ADMISSIONS_SC_BAKING_REGISTER: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.Baking}&subTab=${TrainDetailTab.Register}`,

  ADMISSIONS_SC_UAI_OVW: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.UsingAi}&subTab=${TrainDetailTab.Overview}`,
  ADMISSIONS_SC_UAI_ADMISS: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.UsingAi}&subTab=${TrainDetailTab.Admission}`,
  ADMISSIONS_SC_UAI_APPLY: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.UsingAi}&subTab=${TrainDetailTab.Apply}`,
  ADMISSIONS_SC_UAI_REGISTER: `${ADMISSIONS_SHORT_SEGMENT}?tab=${ShortCrsTab.UsingAi}&subTab=${TrainDetailTab.Register}`,

  ACADEMICS: `/${ACADEMICS_SEGMENT}`,
  DGTLIB: `/${DGTLIB_SEGMENT}`,
  PARTNERSHIP: `/${PARTNERSHIP_SEGMENT}`,
  NEWS: `/${NEWS_SEGMENT}`,
  NEWS_DETAILS: `/${NEWS_DETAILS_SEGMENT}`,
  EVENTS: `/${EVENTS_SEGMENT}`,
  EVENTS_DETAILS: `/${EVENTS_DETAILS_SEGMENT}`,
  PUBDIS: `/${PUBDIS_SEGMENT}`,
};
