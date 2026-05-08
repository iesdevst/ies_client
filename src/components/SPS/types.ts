import type { CSSProperties, ReactNode } from 'react';

export type SubSecLayout =
  | 'systemCardSplit'
  | 'slideCus'
  | 'topic'
  | 'trainingSl'
  | 'vidPr'
  | 'newsFeature'
  | 'nailPage'
  | 'simple';

export interface BasePageIesSecProps {
  id: string;
  className?: string;
  style?: CSSProperties;
  dark?: boolean;
  children?: ReactNode;
  height?: string;
  bgImg?: string | { src: string } | { default: string };
  simpleFeat?: boolean;
  title?: string;
  mb?: boolean;
  navigateGo?: string;
}

/* ===== SystemCardSplit ===== */
export interface SCSLayoutProps extends BasePageIesSecProps {
  layout: 'systemCardSplit';
  splitFeat?: ReactNode;
  reverse?: boolean;
}

/* ===== Slide ===== */
export interface SlideCusLayoutProps extends BasePageIesSecProps {
  layout: 'slideCus';
  images: string[];
}

/* ===== Simple ===== */
export interface SimpleLayoutProps extends BasePageIesSecProps {
  layout: 'simple';
  divider: boolean;
}

/* ===== Vid ===== */
export interface VidPrLayoutProps extends BasePageIesSecProps {
  layout: 'vidPr';
  vidLink?: string;
  titVid: string;
  desVid: string;
  bottomTit: string;
  tabletVid?: boolean;
  miniSc?: boolean;
}

/* ===== Training ===== */
export interface TrainingSlProps extends BasePageIesSecProps {
  layout: 'trainingSl';
  trainTit: string;
  trainDes: string;
  trainImgSl: { icon: string; title: string }[];
  statisTit: string;
  statistics: { num: string; des: string }[];
}

/* ===== Topic ===== */
export interface TopicLayoutProps extends BasePageIesSecProps {
  layout: 'topic';
  topImaTit: string;
  topTitBut?: string;
  botBut?: string;
  botTit?: string;
  lstBut: string;
  topicI: string;
  aboutTogo: string;
  topicCt: { id: string; tit: string; des: string; bgColor: string }[];
  methodLst: { id: string; thodAv: string; meTit: string; methodGo: string }[];
}

/* ===== News ===== */
export interface NewsFeatureLayoutProps extends BasePageIesSecProps {
  layout: 'newsFeature';
  feature: boolean;
  butTit?: string;
  featCard: {
    id: string;
    imgC: string;
    tit?: string;
    butCard?: string;
    des?: string;
    navigo?: string;
  }[];
  bonusTit?: string;
  moreBut?: string;
  moreClass?: string;
}

/* ===== Event & News Pagwe ===== */

export interface NaiPageLayoutProps extends BasePageIesSecProps {
  layout: 'naiPage';
  tl: boolean;
  newsTit: string;
  decs: string;
  img: string;
  linkTo?: string;
  art?: string;
  img2?: string;
  nOe: string;
  readOri: string;
  paddingClass: string;
  titleLv: 1 | 2 | 3 | 4 | 5 | undefined;
}

export type SubSectionProps =
  | SCSLayoutProps
  | SlideCusLayoutProps
  | VidPrLayoutProps
  | TrainingSlProps
  | TopicLayoutProps
  | NewsFeatureLayoutProps
  | NaiPageLayoutProps
  | SimpleLayoutProps;
