import { lazy, Suspense } from 'react';
import styles from './iesCl.module.scss';
import type { SubSectionProps } from './types';

const SlideCus = lazy(() => import('@/components/SPS/components/SlideCus'));
const SCS = lazy(() => import('@/components/SPS/components/SCS'));
const VidPr = lazy(() => import('@/components/SPS/components/VidPr'));
const TrainSl = lazy(() => import('@/components/SPS/components/TrainSl'));
const Topic = lazy(() => import('@/components/SPS/components/Topic'));
const NewsFeat = lazy(() => import('@/components/SPS/components/NewsFeat'));
const Simple = lazy(() => import('@/components/SPS/components/Simple'));
const NaiPage = lazy(() => import('@/components/SPS/components/NaiPage'));

const layoutMap = {
  slideCus: SlideCus,
  topic: Topic,
  systemCardSplit: SCS,
  vidPr: VidPr,
  trainingSl: TrainSl,
  newsFeature: NewsFeat,
  naiPage: NaiPage,
  simple: Simple,
} as const;

const IesClSection: React.FC<SubSectionProps> = (props) => {
  const { id, layout, style, height, bgImg, simpleFeat, className } = props;

  const Component = layoutMap[layout];

  return (
    <Suspense fallback={<div>Loading .....</div>}>
      {Component ? (
        <section
          id={id}
          className={
            !simpleFeat
              ? `${styles.pageSection} ${styles[`${layout}Layout`]} ${className}`
              : undefined
          }
          style={{
            backgroundImage: bgImg
              ? `url(${
                  typeof bgImg === 'string'
                    ? bgImg
                    : (bgImg as any).src || (bgImg as any).default
                })`
              : 'transparent',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            minHeight: !height ? '65vh' : height,
            ...style,
          }}
        >
          <Component {...(props as any)} />
        </section>
      ) : null}
    </Suspense>
  );
};

export default IesClSection;
