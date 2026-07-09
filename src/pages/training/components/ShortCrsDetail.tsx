import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import FormOutlined from '@ant-design/icons/FormOutlined';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import ProfileOutlined from '@ant-design/icons/ProfileOutlined';
import ReadOutlined from '@ant-design/icons/ReadOutlined';
import TrophyOutlined from '@ant-design/icons/TrophyOutlined';
import WalletOutlined from '@ant-design/icons/WalletOutlined';

import Button from 'antd/es/button';
import Image from 'antd/es/image';
import type { TabsProps } from 'antd/es/tabs';
import Tabs from 'antd/es/tabs';
import Tooltip from 'antd/es/tooltip';
import { lazy, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useShortCrsData } from '../hooks';
import styles from '../iesTraining.module.scss';
import { Text, Title } from '@/components';
import { TrainDetailTab } from '@/constants';
import { useDevice } from '@/hooks';
import { ShortCrsTypeEnum } from '@/utils';

const ProgOvw = lazy(() => import('@/pages/training/components/ProgOvw'));
const AdmissInfo = lazy(() => import('@/pages/training/components/AdmissInfo'));
const TuiApply = lazy(() => import('@/pages/training/components/TuiApply'));
const StRegisForm = lazy(
  () => import('@/pages/training/components/StRegisForm'),
);

const SC_BADGE_MAP: Record<ShortCrsTypeEnum, { abbr: string; color: string }> =
  {
    [ShortCrsTypeEnum.Mixology]: { abbr: 'PC', color: '#8b5cf6' },
    [ShortCrsTypeEnum.Cooking]: { abbr: 'NA', color: '#f97316' },
    [ShortCrsTypeEnum.Baking]: { abbr: 'LB', color: '#ec4899' },
    [ShortCrsTypeEnum.UsingAi]: { abbr: 'AI', color: '#0ea5e9' },
  };

interface IShortCrsDetailProps {
  scType: ShortCrsTypeEnum;
  dark: boolean;
}

const ShortCrsDetail: React.FC<IShortCrsDetailProps> = (props) => {
  const { scType, dark } = props;
  const { t } = useTranslation('shortCrsDetail');
  const [stSearchPrs, setStSearchPrs] = useSearchParams();
  const stActKey = stSearchPrs.get('subTab') || TrainDetailTab.Overview;

  const { isMobile: mb, isTablet: tl } = useDevice();

  const { data } = useShortCrsData();

  const shortCrsDt = useMemo(() => {
    if (!data) return;
    return data.find((crs) => crs.shortCrsType === scType);
  }, [data, scType]);

  const crsBadge = useMemo(
    () =>
      shortCrsDt
        ? SC_BADGE_MAP[shortCrsDt.shortCrsType]
        : { abbr: 'IES', color: '#E8622A' },
    [shortCrsDt],
  );

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: TrainDetailTab.Overview,
        label: !mb ? (
          <Title
            level={5}
            className={`${stActKey === TrainDetailTab.Overview ? 'text-white!' : 'text-gray-400!'} m-0!`}
          >
            {t('progOvw')}
          </Title>
        ) : (
          <Tooltip title={t('progOvw')}>
            <ProfileOutlined
              className={`${stActKey === TrainDetailTab.Overview ? 'text-white!' : 'text-gray-400!'} text-base!`}
            />
          </Tooltip>
        ),
        children: <ProgOvw ovwScDt={shortCrsDt?.overview} dark={dark} />,
      },
      {
        key: TrainDetailTab.Admission,
        label: !mb ? (
          <Title
            level={5}
            className={`${stActKey === TrainDetailTab.Admission ? 'text-white!' : 'text-gray-400!'} m-0!`}
          >
            {t('admissIf')}
          </Title>
        ) : (
          <Tooltip title={t('admissIf')}>
            <InfoCircleOutlined
              className={`${stActKey === TrainDetailTab.Admission ? 'text-white!' : 'text-gray-400!'} text-base!`}
            />
          </Tooltip>
        ),
        children: <AdmissInfo admisScInfoDt={shortCrsDt?.info} dark={dark} />,
      },
      {
        key: TrainDetailTab.Apply,
        label: !mb ? (
          <Title
            level={5}
            className={`${stActKey === TrainDetailTab.Apply ? 'text-white!' : 'text-gray-400!'} m-0!`}
          >
            {t('tui')}
          </Title>
        ) : (
          <Tooltip title={t('tui')}>
            <WalletOutlined
              className={`${stActKey === TrainDetailTab.Apply ? 'text-white!' : 'text-gray-400!'} text-base!`}
            />
          </Tooltip>
        ),
        children: <TuiApply tuiApplyScDt={shortCrsDt?.apply} dark={dark} />,
      },
      {
        key: TrainDetailTab.Register,
        label: !mb ? (
          <Title
            level={5}
            className={`${stActKey === TrainDetailTab.Register ? 'text-white!' : 'text-gray-400!'} m-0!`}
          >
            {t('form')}
          </Title>
        ) : (
          <Tooltip title={t('form')}>
            <FormOutlined
              className={`${stActKey === TrainDetailTab.Register ? 'text-white!' : 'text-gray-400!'} text-base!`}
            />
          </Tooltip>
        ),
        children: <StRegisForm dark={dark} />,
      },
    ],
    [stActKey, mb, shortCrsDt, dark, t],
  );

  const hdlChangeTab = useCallback(
    (key: string) => {
      setStSearchPrs((prev) => {
        const params = new URLSearchParams(prev);
        params.set('subTab', key);
        return params;
      });
    },
    [setStSearchPrs],
  );

  return (
    <div
      className='pb-20 pt-10 mt-10 rounded-2xl overflow-hidden'
      style={{
        background: dark
          ? 'linear-gradient(to bottom right, #0a0e1a,#1d1147,#0a1628)'
          : 'linear-gradient(135deg, #0EA5C8 0%, #1E4D8C 100%)',
      }}
    >
      <div
        className={`${mb ? 'px-4 pt-6' : tl ? 'px-8 pt-10' : 'px-16 pt-12'}`}
      >
        {/* Hero: text left + card right */}
        {shortCrsDt && (
          <div
            className={`flex ${mb ? 'flex-col gap-6 items-center!' : 'flex-row items-center gap-16'} mb-10`}
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
                level={mb || tl ? 2 : 1}
                className='text-white! m-0! leading-tight!'
              >
                {shortCrsDt.shortCrsTit}
              </Title>

              {/* English subtitle */}
              <Text
                color='rgba(255,255,255,0.45)'
                className='text-xs! uppercase! tracking-widest! block! -mt-2!'
              >
                {shortCrsDt.engTitle} · IES COLLEGE
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

              {/* Button */}
              <div
                className={`flex ${mb ? 'flex-col' : 'flex-row w-1/2!'} gap-3 mt-1`}
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
            </div>

            {/* Right: course card (desktop + tablet only) */}
            {!mb && (
              <div className='flex justify-center w-full!'>
                <div
                  className='w-full rounded-2xl overflow-hidden border border-white/10'
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {/* Card header */}
                  <div className='flex items-center justify-between p-5'>
                    <div
                      className='w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0'
                      style={{ background: crsBadge.color }}
                    >
                      {crsBadge.abbr}
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
                        {t('shortT')}
                      </Text>
                    </div>
                  </div>

                  {/* Card image */}
                  <div className='px-4'>
                    <div className='w-full aspect-16/4 overflow-hidden rounded-xl'>
                      <Image
                        src={shortCrsDt.imgDetail}
                        preview={false}
                        loading='lazy'
                        alt={shortCrsDt.shortCrsTit}
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
                        {t('scDurLabel')}
                      </Text>
                      <Text
                        color='rgba(255,255,255,0.9)'
                        className='text-lg! font-semibold! block!'
                      >
                        {t('duration')}
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
                        {t('scFormValue')}
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
          activeKey={stActKey}
          onChange={hdlChangeTab}
          items={tabs}
          className={styles.iesShortSrcnDtTabs}
          destroyOnHidden
        />
      </div>
    </div>
  );
};

export default ShortCrsDetail;
