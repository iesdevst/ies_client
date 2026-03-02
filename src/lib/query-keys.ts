import {
  type BanksetDetailParams,
  type NotificationParams,
  type UrOrdDetailParams,
  type UrOrderParams,
  type UseQrUserVariables,
} from '@/api';
import type { BookingLstParams } from '@/api/booking/useBookingLst';
import type { MemLstIbParams } from '@/api/ib/useMemLstIB';

const queryKeys = {
  banksetDetail: (params: Nullable<BanksetDetailParams>) => [
    'banksetDetail',
    params,
  ],
  qrUserDetail: (params: Nullable<UseQrUserVariables>) => [
    'userQR',
    ...Object.values(params || {}),
  ],
  userDetails: (params: Nullable<unknown>) => [
    'userDetails',
    ...Object.values(params || {}),
  ],
  urOrderLst: (params: Nullable<UrOrderParams>) => [
    'urOrderlst',
    ...Object.values(params || {}),
  ],
  urOrdDetails: (params: Nullable<UrOrdDetailParams>) => [
    'urOrdDetail',
    ...Object.values(params || {}),
  ],
  notification: (params: Nullable<NotificationParams>) => [
    'notification',
    ...Object.values(params || {}),
  ],
  urBookingLst: (params: Nullable<BookingLstParams>) => [
    'urBookingLst',
    ...Object.values(params || {}),
  ],
  memLstIb: (params: Nullable<MemLstIbParams>) => [
    'memLstIb',
    ...Object.values(params || {}),
  ],
  ruleDate: (params: Nullable<unknown>) => [
    'ruleDate',
    ...Object.values(params || {}),
  ],
};

export const getParamsFromQueryKey: <T>(
  queryKey: readonly unknown[],
) => Nullable<T> = <T>(queryKey: readonly unknown[]) => {
  if (!Array.isArray(queryKey)) {
    return null;
  }
  const params = queryKey.at(1) as T;
  return params;
};

export default queryKeys;
