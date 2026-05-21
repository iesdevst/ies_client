import { forwardRef, lazy, Suspense } from 'react';
import SlideCus from './components/SlideCus';
import styles from './iesCl.module.scss';
import type { SubSectionProps } from './types';

const SCS = lazy(() => import('@/components/SPS/components/SCS'));
const VidPr = lazy(() => import('@/components/SPS/components/VidPr'));
const Topic = lazy(() => import('@/components/SPS/components/Topic'));
const NewsFeat = lazy(() => import('@/components/SPS/components/NewsFeat'));
const Simple = lazy(() => import('@/components/SPS/components/Simple'));
const NaiPage = lazy(() => import('@/components/SPS/components/NaiPage'));

const layoutMap = {
  slideCus: SlideCus,
  topic: Topic,
  systemCardSplit: SCS,
  vidPr: VidPr,
  newsFeature: NewsFeat,
  naiPage: NaiPage,
  simple: Simple,
} as const;

const IesClSection = forwardRef<HTMLDivElement, SubSectionProps>(
  (props, ref) => {
    const { id, layout, style, height, bgImg, simpleFeat, className } = props;

    const Component = layoutMap[layout];

    return (
      <Suspense fallback={<div>Loading .....</div>}>
        {Component ? (
          <section
            ref={ref}
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
  },
);

export default IesClSection;
