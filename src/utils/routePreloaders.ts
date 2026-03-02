import { ROUTES } from '@/constants';

export const routePreloaders: Record<string, () => Promise<unknown>> = {
  [ROUTES.DASHBOARD]: () => import('@/pages/home/Dashboard'),
};
