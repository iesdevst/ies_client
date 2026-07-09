import ApartmentOutlined from '@ant-design/icons/ApartmentOutlined';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import FormOutlined from '@ant-design/icons/FormOutlined';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import ProfileOutlined from '@ant-design/icons/ProfileOutlined';
import ReadOutlined from '@ant-design/icons/ReadOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import TrophyOutlined from '@ant-design/icons/TrophyOutlined';
import WalletOutlined from '@ant-design/icons/WalletOutlined';

import Breadcrumb from 'antd/es/breadcrumb';
import Button from 'antd/es/button';
import Image from 'antd/es/image';
import type { TabsProps } from 'antd/es/tabs';
import Tabs from 'antd/es/tabs';
import Tooltip from 'antd/es/tooltip';
import { lazy, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTrainDetailData } from './hooks';
import styles from './iesTraining.module.scss';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES, TrainDetailTab } from '@/constants';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';
import { ProgTypeEnum } from '@/utils';

const PROG_BADGE_MAP: Record<ProgTypeEnum, { abbr: string; color: string }> = {
  [ProgTypeEnum.IT]: { abbr: 'IT', color: '#7c3aed' },
  [ProgTypeEnum.AppInfo]: { abbr: 'TH', color: '#0ea5e9' },
  [ProgTypeEnum.Indus]: { abbr: 'ĐC', color: '#f59e0b' },
  [ProgTypeEnum.Office]: { abbr: 'VP', color: '#10b981' },
  [ProgTypeEnum.Hospi]: { abbr: 'KS', color: '#ec4899' },
  [ProgTypeEnum.Mkt]: { abbr: 'MK', color: '#f97316' },
  [ProgTypeEnum.Business]: { abbr: 'KD', color: '#6366f1' },
  [ProgTypeEnum.CompuDs]: { abbr: 'TK', color: '#14b8a6' },
  [ProgTypeEnum.Accounting]: { abbr: 'KT', color: '#8b5cf6' },
};

const ProgOvw = lazy(() => import('@/pages/training/components/ProgOvw'));
const AdmissInfo = lazy(() => import('@/pages/training/components/AdmissInfo'));
const TuiApply = lazy(() => import('@/pages/training/components/TuiApply'));
const IvRegisterForm = lazy(
  () => import('@/pages/training/components/IvRegisterForm'),
);

const VocaTrainDetail: React.FC = () => {
  const { isMobile: isMb, isTablet: isTl } = useDevice();
  const { isDark } = useUserStore();
  const { t } = useTranslation('vocaTrainDetail');
  const [trainDtSearchPrs, setTrainDtSearchPrs] = useSearchParams();
  const trainDtActKey = trainDtSearchPrs.get('tab') || TrainDetailTab.Overview;
  const { data } = useTrainDetailData();
  const { progType } = useParams();

  const detailTrainDt = useMemo(() => {
    if (!data) return;
    return data.find((detail) => detail.industryType === progType);
  }, [data, progType]);

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: TrainDetailTab.Overview,
        label: !isMb ? (
          <Title
            level={5}
            className={`${trainDtActKey === TrainDetailTab.Overview ? 'text-[#E8622A]!' : 'text-white!'} m-0!`}
          >
            {t('progOvw')}
          </Title>
        ) : (
          <Tooltip title={t('progOvw')}>
            <ProfileOutlined
              className={`${trainDtActKey === TrainDetailTab.Overview ? 'text-[#E8622A]!' : 'text-white!'} text-base!`}
            />
          </Tooltip>
        ),
        children: <ProgOvw ovwDt={detailTrainDt?.overview} dark={isDark} />,
      },
      {
        key: TrainDetailTab.Admission,
        label: !isMb ? (
          <Title
            level={5}
            className={`${trainDtActKey === TrainDetailTab.Admission ? 'text-[#E8622A]!' : 'text-white!'} m-0!`}
          >
            {t('admissIf')}
          </Title>
        ) : (
          <Tooltip title={t('admissIf')}>
            <InfoCircleOutlined
              className={`${trainDtActKey === TrainDetailTab.Admission ? 'text-[#E8622A]!' : 'text-white!'} text-base!`}
            />
          </Tooltip>
        ),
        children: (
          <AdmissInfo admisInfoDt={detailTrainDt?.info} dark={isDark} />
        ),
      },
      {
        key: TrainDetailTab.Apply,
        label: !isMb ? (
          <Title
            level={5}
            className={`${trainDtActKey === TrainDetailTab.Apply ? 'text-[#E8622A]!' : 'text-white!'} m-0!`}
          >
            {t('tui')}
          </Title>
        ) : (
          <Tooltip title={t('tui')}>
            <WalletOutlined
              className={`${trainDtActKey === TrainDetailTab.Apply ? 'text-[#E8622A]!' : 'text-white!'} text-base!`}
            />
          </Tooltip>
        ),
        children: <TuiApply tuiApplyDt={detailTrainDt?.apply} dark={isDark} />,
      },
      {
        key: TrainDetailTab.Register,
        label: !isMb ? (
          <Title
            level={5}
            className={`${trainDtActKey === TrainDetailTab.Register ? 'text-[#E8622A]!' : 'text-white!'} m-0!`}
          >
            {t('form')}
          </Title>
        ) : (
          <Tooltip title={t('form')}>
            <FormOutlined
              className={`${trainDtActKey === TrainDetailTab.Register ? 'text-[#E8622A]!' : 'text-white!'} text-base!`}
            />
          </Tooltip>
        ),
        children: <IvRegisterForm dark={isDark} />,
      },
    ],
    [detailTrainDt, trainDtActKey, isMb, isDark, t],
  );

  const progBadge = useMemo(
    () =>
      detailTrainDt
        ? PROG_BADGE_MAP[detailTrainDt.industryType]
        : { abbr: 'IES', color: '#E8622A' },
    [detailTrainDt],
  );

  const hdlChangeTab = useCallback(
    (key: string) => {
      setTrainDtSearchPrs({ tab: key }, { replace: true });
    },
    [setTrainDtSearchPrs],
  );

  return (
    <div
      className='pt-10! py-20!  min-h-screen'
      style={{
        background: isDark
          ? 'linear-gradient(to bottom right,#121a33,#2a1b66,#12243f)'
          : 'linear-gradient(135deg, #1E4D8C 0%, #0EA5C8 100%)',
      }}
    >
      <div
        className={`${isMb ? 'px-4 pt-6' : isTl ? 'px-8 pt-10' : 'px-16 pt-12'}`}
      >
        {/* Breadcrumb */}
        <Breadcrumb
          className={styles.vocaDetailBreadcrumb}
          separator={<RightOutlined className='text-white/40!' />}
          items={[
            {
              title: (
                <PrefetchLink to={ROUTES.ADMISSIONS}>
                  {!isMb ? (
                    <Text
                      color='rgba(255,255,255,0.6)'
                      className='font-bold! text-lg!'
                    >
                      {t('iv')}
                    </Text>
                  ) : (
                    <ApartmentOutlined className='text-lg! text-white/60!' />
                  )}
                </PrefetchLink>
              ),
            },
            {
              title: (
                <Text
                  color='#E8622A'
                  className='text-lg! font-semibold! block!'
                >
                  {t('progDt')}
                </Text>
              ),
            },
          ]}
        />

        {/* Hero: text left + image right */}
        {detailTrainDt && (
          <div
            className={`flex ${isMb ? 'flex-col gap-6 items-center!' : 'flex-row items-center gap-16'} mt-8 mb-10`}
          >
            {/* Left: text content */}
            <div className='w-full flex flex-col gap-4 items-center!'>
              {/* Tagline */}
              <div className='flex items-center gap-2'>
                <div className='w-5 h-px bg-white/40' />
                <Text
                  color='rgba(255,255,255,0.5)'
                  className='text-xs! uppercase! tracking-widest! block!'
                >
                  {t('tagline')}
                </Text>
              </div>

              {/* Title */}
              <Title
                level={isMb || isTl ? 2 : 1}
                className='text-white! m-0! leading-tight!'
              >
                {detailTrainDt.progTitle}
              </Title>

              {/* English subtitle */}
              <Text
                color='rgba(255,255,255,0.45)'
                className='text-xs! uppercase! tracking-widest! block! -mt-2!'
              >
                {detailTrainDt.engTitle} · IES COLLEGE
              </Text>

              {/* Info badges */}
              <div className='flex flex-wrap gap-2 items-center! justify-center'>
                <div className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15'>
                  <ClockCircleOutlined className='text-white/60! text-xs!' />
                  <Text
                    color='rgba(255,255,255,0.8)'
                    className='text-xs! block!'
                  >
                    {t('duration')}
                  </Text>
                </div>
                <div className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15'>
                  <TrophyOutlined className='text-white/60! text-xs!' />
                  <Text
                    color='rgba(255,255,255,0.8)'
                    className='text-xs! block!'
                  >
                    {t('degreePre')}{' '}
                    <span className='font-semibold text-white'>
                      {t('degreeType')}
                    </span>
                  </Text>
                </div>
                <div className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15'>
                  <ReadOutlined className='text-white/60! text-xs!' />
                  <Text
                    color='rgba(255,255,255,0.8)'
                    className='text-xs! block!'
                  >
                    {t('trainMethod')}
                  </Text>
                </div>
              </div>

              {/* Buttons */}
              <div
                className={`flex ${isMb ? 'flex-col' : 'flex-row w-1/2!'} gap-3 mt-1`}
              >
                <Button
                  type='primary'
                  size='large'
                  className='w-full! bg-[#E8622A]! border-[#E8622A]! rounded-full! font-semibold! px-8! hover:bg-[#c4511e]! hover:border-[#c4511e]!'
                  onClick={() => hdlChangeTab(TrainDetailTab.Register)}
                >
                  {t('registerBtn')} →
                </Button>
              </div>
              {/* Short description */}
              {/* <Text
                color='rgba(255,255,255,0.75)'
                className='text-md! leading-relaxed! block!'
              >
                {detailTrainDt.shortDesc}
              </Text> */}
            </div>

            {/* Right: program card (desktop + tablet only) */}
            {!isMb && (
              <div className='flex justify-center w-full!'>
                <div
                  className='w-full  rounded-2xl overflow-hidden border border-white/10'
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {/* Card header */}
                  <div className='flex items-center justify-between p-5'>
                    <div
                      className='w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0'
                      style={{ background: progBadge.color }}
                    >
                      {progBadge.abbr}
                    </div>
                    <div className='text-right'>
                      <Text
                        color='rgba(255,255,255,0.9)'
                        className='text-lg! font-bold! tracking-widest! uppercase! block!'
                      >
                        IES COLLEGE
                      </Text>
                      <Text
                        color='rgba(255,255,255,0.45)'
                        className='text-xs! tracking-widest! uppercase! block! mt-0.5!'
                      >
                        {detailTrainDt.program}
                      </Text>
                    </div>
                  </div>

                  {/* Card image */}
                  <div className='px-4'>
                    <div className='w-full aspect-16/4 overflow-hidden rounded-xl'>
                      <Image
                        src={detailTrainDt.imgDetail}
                        preview={false}
                        loading='lazy'
                        alt={detailTrainDt.progTitle}
                        wrapperClassName='w-full! h-full! block!'
                        className='w-full! h-full! object-cover!'
                      />
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className='px-5 pb-5 pt-4 flex flex-col gap-3.5'>
                    <div className='w-full h-px bg-white/10' />

                    <div className='flex justify-between items-center'>
                      <Text
                        color='rgba(255,255,255,0.45)'
                        className='text-lg! block!'
                      >
                        {t('codeLabel')}
                      </Text>
                      <Text
                        color='rgba(255,255,255,0.9)'
                        className='text-lg! font-semibold! block!'
                      >
                        {detailTrainDt.industryCode}
                      </Text>
                    </div>

                    <div className='flex justify-between items-center'>
                      <Text
                        color='rgba(255,255,255,0.45)'
                        className='text-lg! block!'
                      >
                        {t('formLabel')}
                      </Text>
                      <Text
                        color='rgba(255,255,255,0.9)'
                        className='text-lg! font-semibold! block!'
                      >
                        {t('fullTime')}
                      </Text>
                    </div>

                    <div className='flex justify-between items-center'>
                      <Text
                        color='rgba(255,255,255,0.45)'
                        className='text-lg! block!'
                      >
                        {t('statusLabel')}
                      </Text>
                      <span className='px-2.5 py-0.5 rounded-full text-lg font-medium border border-[#4ade80]/30 bg-[#4ade80]/10 text-[#4ade80]'>
                        {t('recruiting')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tabs navigation + content */}
        <Tabs
          activeKey={trainDtActKey}
          items={tabs}
          onChange={hdlChangeTab}
          className={`${styles.vocaDetailTabs}`}
          destroyOnHidden
        />
      </div>
    </div>
  );
};

export default VocaTrainDetail;
