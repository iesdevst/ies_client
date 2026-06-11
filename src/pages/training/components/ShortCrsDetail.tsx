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
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import { useShortCrsData } from '../hooks';
import styles from '../iesTraining.module.scss';
import { Text, Title } from '@/components';
import { TrainDetailTab } from '@/constants';
import { useUserStore } from '@/store';
import type { ShortCrsTypeEnum } from '@/utils';

const ProgOvw = lazy(() => import('@/pages/training/components/ProgOvw'));
const AdmissInfo = lazy(() => import('@/pages/training/components/AdmissInfo'));
const TuiApply = lazy(() => import('@/pages/training/components/TuiApply'));
const StRegisForm = lazy(
  () => import('@/pages/training/components/StRegisForm'),
);

interface IShortCrsDetailProps {
  scType: ShortCrsTypeEnum;
}

const ShortCrsDetail: React.FC<IShortCrsDetailProps> = (props) => {
  const { scType } = props;
  const { isDark } = useUserStore();
  const { t } = useTranslation('shortCrsDetail');
  const isMb = useMediaQuery({ maxWidth: 768 });
  const isTl = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const [stSearchPrs, setStSearchPrs] = useSearchParams();
  const stActKey = stSearchPrs.get('subTab') || TrainDetailTab.Overview;

  const { data } = useShortCrsData();

  const shortCrsDt = useMemo(() => {
    if (!data) return;
    return data.find((crs) => crs.shortCrsType === scType);
  }, [data, scType]);

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: TrainDetailTab.Overview,
        label: !isMb ? (
          <Title
            level={5}
            className={`${stActKey === TrainDetailTab.Overview ? 'text-[#6472cf]!' : 'text-white!'} m-0!`}
          >
            {t('progOvw')}
          </Title>
        ) : (
          <Tooltip title={t('progOvw')}>
            <ProfileOutlined
              className={`${stActKey === TrainDetailTab.Overview ? 'text-[#6472cf]!' : 'text-white!'} text-base!`}
            />
          </Tooltip>
        ),
        children: <ProgOvw ovwScDt={shortCrsDt?.overview} dark={isDark} />,
      },
      {
        key: TrainDetailTab.Admission,
        label: !isMb ? (
          <Title
            level={5}
            className={`${stActKey === TrainDetailTab.Admission ? 'text-[#6472cf]!' : 'text-white!'} m-0!`}
          >
            {t('admissIf')}
          </Title>
        ) : (
          <Tooltip title={t('admissIf')}>
            <InfoCircleOutlined
              className={`${stActKey === TrainDetailTab.Admission ? 'text-[#6472cf]!' : 'text-white!'} text-base!`}
            />
          </Tooltip>
        ),
        children: <AdmissInfo admisScInfoDt={shortCrsDt?.info} dark={isDark} />,
      },
      {
        key: TrainDetailTab.Apply,
        label: !isMb ? (
          <Title
            level={5}
            className={`${stActKey === TrainDetailTab.Apply ? 'text-[#6472cf]!' : 'text-white!'} m-0!`}
          >
            {t('tui')}
          </Title>
        ) : (
          <Tooltip title={t('tui')}>
            <WalletOutlined
              className={`${stActKey === TrainDetailTab.Apply ? 'text-[#6472cf]!' : 'text-white!'} text-base!`}
            />
          </Tooltip>
        ),
        children: <TuiApply tuiApplyScDt={shortCrsDt?.apply} dark={isDark} />,
      },
      {
        key: TrainDetailTab.Register,
        label: !isMb ? (
          <Title
            level={5}
            className={`${stActKey === TrainDetailTab.Register ? 'text-[#6472cf]!' : 'text-white!'} m-0!`}
          >
            {t('form')}
          </Title>
        ) : (
          <Tooltip title={t('form')}>
            <FormOutlined
              className={`${stActKey === TrainDetailTab.Register ? 'text-[#6472cf]!' : 'text-white!'} text-base!`}
            />
          </Tooltip>
        ),
        children: <StRegisForm dark={isDark} />,
      },
    ],
    [stActKey, isMb, shortCrsDt, isDark, t],
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
    <div className='pb-20 pt-10 mt-10 bg-linear-to-br from-[#0a0e1a] via-[#1d1147] to-[#0a1628] rounded-2xl overflow-hidden'>
      <div
        className={`${isMb ? 'px-4 pt-6' : isTl ? 'px-8 pt-10' : 'px-16 pt-12'}`}
      >
        {/* Hero: text left + image right */}
        {shortCrsDt && (
          <div
            className={`flex ${isMb ? 'flex-col gap-6' : 'flex-row items-center gap-16'} mb-10`}
          >
            {/* Left: text content */}
            <div
              className={`${isMb ? 'w-full' : 'flex-1'} flex flex-col gap-4`}
            >
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
                level={isMb ? 2 : 1}
                className='text-white! m-0! leading-tight!'
              >
                {shortCrsDt.shortCrsTit}
              </Title>

              <div
                className={`flex ${isMb ? 'flex-col' : 'flex-row'} gap-3 mt-3`}
              >
                <Button
                  type='primary'
                  size='large'
                  className='bg-[#6472cf]! border-[#6472cf]! rounded-full! font-semibold! px-8! hover:bg-[#4f5eaf]! hover:border-[#4f5eaf]!'
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
            {!isMb && (
              <div className='flex-1 flex justify-center'>
                <Image
                  src={shortCrsDt.imgDetail}
                  preview={false}
                  loading='lazy'
                  alt={shortCrsDt.shortCrsTit}
                  className={`rounded-2xl! shadow-2xl! object-cover! w-full! ${isTl ? 'max-h-70!' : 'max-h-95!'}`}
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
          className={styles.vocaScDetailTabs}
          centered
          destroyOnHidden
        />
      </div>
    </div>
  );
};

export default ShortCrsDetail;
