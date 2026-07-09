import { IES_BLUE, IES_NAVY, IES_ORANGE, IES_SKY } from '@/constants';

export type NewsEventCategory =
  | 'admissions'
  | 'career'
  | 'training'
  | 'workshop'
  | 'partnership';

export const NEWS_EVENT_CATEGORY_META: Record<
  NewsEventCategory,
  { label: string; color: string }
> = {
  admissions: { label: 'Tuyển sinh', color: IES_ORANGE },
  career: { label: 'Hướng nghiệp', color: IES_SKY },
  training: { label: 'Đào tạo', color: IES_BLUE },
  workshop: { label: 'Workshop', color: IES_BLUE },
  partnership: { label: 'Hợp tác', color: IES_NAVY },
};
