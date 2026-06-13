import FormOutlined from '@ant-design/icons/FormOutlined';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import ProfileOutlined from '@ant-design/icons/ProfileOutlined';
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
import type { ShortCrsTypeEnum } from '@/utils';

const ProgOvw = lazy(() => import('@/pages/training/components/ProgOvw'));
const AdmissInfo = lazy(() => import('@/pages/training/components/AdmissInfo'));
const TuiApply = lazy(() => import('@/pages/training/components/TuiApply'));
const StRegisForm = lazy(
  () => import('@/pages/training/components/StRegisForm'),
);

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
      className='pb-20 pt-10 mt-10  rounded-2xl overflow-hidden'
      style={{
        background: dark
          ? 'linear-gradient(to bottom right, #0a0e1a,#1d1147,#0a1628)'
          : 'linear-gradient(135deg, #0EA5C8 0%, #1E4D8C 100%)',
      }}
    >
      <div
        className={`${mb ? 'px-4 pt-6' : tl ? 'px-8 pt-10' : 'px-16 pt-12'}`}
      >
        {/* Hero: text left + image right */}
        {shortCrsDt && (
          <div
            className={`flex ${mb ? 'flex-col gap-6' : 'flex-row items-center gap-16'} mb-10`}
          >
            {/* Left: text content */}
            <div className={`${mb ? 'w-full' : 'flex-1'} flex flex-col gap-4`}>
              <Text
                color='#a78bfa'
                className='text-xs! font-semibold! uppercase! tracking-widest! block!'
              >
                IES COLLEGE
              </Text>

              <Text
                color='rgba(255,255,255,0.45)'
                className='text-xs! uppercase! tracking-widest! block!'
              >
                {t('shortT')}
              </Text>

              <Title
                level={mb ? 2 : 1}
                className='text-white! m-0! leading-tight!'
              >
                {shortCrsDt.shortCrsTit}
              </Title>

              <div
                className={`flex ${mb ? 'flex-col' : 'flex-row'} gap-3 mt-3`}
              >
                <Button
                  type='primary'
                  size='large'
                  className='bg-[#2B6CB0]! border-[#2B6CB0]! rounded-full! font-semibold! px-8! hover:bg-[#1E4D8C]! hover:border-[#1E4D8C]!'
                  onClick={() => hdlChangeTab(TrainDetailTab.Register)}
                >
                  {t('registerBtn')}
                </Button>
                {/* <Button
                  size='large'
                  icon={<DownloadOutlined />}
                  className='rounded-full! border-white/30! text-white! bg-transparent! font-medium! hover:border-white/60! hover:text-white!'
                >
                  {t('downloadBtn')}
                </Button> */}
              </div>
            </div>

            {/* Right: course image (desktop + tablet only) */}
            {!mb && (
              <div className='flex-1 flex justify-center'>
                <Image
                  src={shortCrsDt.imgDetail}
                  preview={false}
                  loading='lazy'
                  alt={shortCrsDt.shortCrsTit}
                  className={`rounded-2xl! shadow-2xl! object-cover! w-full! ${tl ? 'max-h-70!' : 'max-h-95!'}`}
                />
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
          // centered
          destroyOnHidden
        />
      </div>
    </div>
  );
};

export default ShortCrsDetail;
