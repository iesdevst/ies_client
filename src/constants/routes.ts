export const HOME_SEGMENT = 'dashboard' as const;
export const ABOUT_SEGMENT = 'about-ies' as const;

export const ROUTES = {
  ROOT: '/',
  DASHBOARD: `/${HOME_SEGMENT}`,
  ABOUT: `/${ABOUT_SEGMENT}`,
};
