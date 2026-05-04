import { lazy, Suspense } from 'react';
import type { SubSectionProps } from './types';

const SlideCus = lazy(() => import('@/components/SPS/components/SlideCus'));
const SCS = lazy(() => import('@/components/SPS/components/SCS'));
const VidPr = lazy(() => import('@/components/SPS/components/VidPr'));
const TrainSl = lazy(() => import('@/components/SPS/components/TrainSl'));
const Topic = lazy(() => import('@/components/SPS/components/Topic'));
const NewsFeat = lazy(() => import('@/components/SPS/components/NewsFeat'));
const Simple = lazy(() => import('@/components/SPS/components/Simple'));

const layoutMap = {
  slideCus: SlideCus,
  topic: Topic,
  systemCardSplit: SCS,
  vidPr: VidPr,
  trainingSl: TrainSl,
  newsFeature: NewsFeat,
  simple: Simple,
} as const;

const IesClSection: React.FC<SubSectionProps> = (props) => {
  const { layout } = props;

  const Component = layoutMap[layout];

  return (
    <Suspense fallback={<div>Loading .....</div>}>
      {Component ? <Component {...(props as any)} /> : null}
    </Suspense>
  );
};

export default IesClSection;
