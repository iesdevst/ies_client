import type { CSSProperties, ReactNode } from 'react';
import type { CardDown, CardUp, MethodPr, Topic } from '@/pages/home/hooks';
import type { EventLstData, NewsLstData } from '@/pages/iesNews/hooks';

export type SubSecLayout =
  | 'systemCardSplit'
  | 'slideCus'
  | 'topic'
  | 'cardGird'
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
  ref?: HTMLDivElement;
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
  images: Array<string>;
  tl?: boolean;
  tlpr?: boolean;
  dk?: boolean;
  textsl?: string;
  nowtext?: string;
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
  tl?: boolean;
  tlpr?: boolean;
  dk?: boolean;
  imgWait: string;
}

/* ===== Card 2 Grid ===== */

export interface CardGirdProps extends BasePageIesSecProps {
  layout: 'cardGird';
  upCard: Array<CardUp>;
  downCard: Array<CardDown>;
  topicTxt: Array<string>;
  routeTo?: string;
  tl?: boolean;
  tlpro?: boolean;
  dk?: boolean;
  butTxt: string;
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
  topicCt: Array<Topic>;
  methodLst: Array<MethodPr>;
}

/* ===== News ===== */
export interface NewsFeatureLayoutProps extends BasePageIesSecProps {
  layout: 'newsFeature';
  feature: boolean;
  butTit?: string;
  featCard: Array<{
    id: string;
    img: string;
    tit?: string;
    butCard?: string;
    des?: string;
    navigo?: string;
    eventTit?: string;
    evDate?: string;
    highlight?: string;
    authorN?: string;
  }>;
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
  ato: string;
  date: string;
  decs2?: string;
  imgBonus?: Array<string>;
  urlForShare: string;
  nOe: string;
  readOri: string;
  aut: string;
  time: string;
  share: string;
  lstNews: string;
  lstEvs: string;
  seeNews: string;
  seeEvs: string;
  paddingClass: string;
  titleLv: 1 | 2 | 3 | 4 | 5 | undefined;
  recentNews: Array<NewsLstData>;
  recentEv: Array<EventLstData>;
}

export type SubSectionProps =
  | SCSLayoutProps
  | SlideCusLayoutProps
  | VidPrLayoutProps
  | CardGirdProps
  | TopicLayoutProps
  | NewsFeatureLayoutProps
  | NaiPageLayoutProps
  | SimpleLayoutProps;
