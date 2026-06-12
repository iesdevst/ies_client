import ApartmentOutlined from '@ant-design/icons/ApartmentOutlined';
import FormOutlined from '@ant-design/icons/FormOutlined';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import ProfileOutlined from '@ant-design/icons/ProfileOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import WalletOutlined from '@ant-design/icons/WalletOutlined';

import Breadcrumb from 'antd/es/breadcrumb';
import Button from 'antd/es/button';
import Image from 'antd/es/image';
import type { TabsProps } from 'antd/es/tabs';
import Tabs from 'antd/es/tabs';
import Tooltip from 'antd/es/tooltip';
import { lazy, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTrainDetailData } from './hooks';
import styles from './iesTraining.module.scss';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES, TrainDetailTab } from '@/constants';
import { useUserStore } from '@/store';

const ProgOvw = lazy(() => import('@/pages/training/components/ProgOvw'));
const AdmissInfo = lazy(() => import('@/pages/training/components/AdmissInfo'));
const TuiApply = lazy(() => import('@/pages/training/components/TuiApply'));
const IvRegisterForm = lazy(
  () => import('@/pages/training/components/IvRegisterForm'),
);

const VocaTrainDetail: React.FC = () => {
  const isMb = useMediaQuery({ maxWidth: 768 });
  const isTl = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
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
            className={`flex ${isMb ? 'flex-col gap-6' : 'flex-row items-center gap-16'} mt-8 mb-10`}
          >
            {/* Left: text content */}
            <div
              className={`${isMb ? 'w-full' : 'flex-1'} flex flex-col gap-4`}
            >
              <Text
                color='#E8622A'
                className='text-xs! font-semibold! uppercase! tracking-widest! block!'
              >
                IES COLLEGE
              </Text>

              <Text
                color='white'
                className='text-xs! uppercase! tracking-widest! block!'
              >
                {detailTrainDt.program}
              </Text>

              <Title
                level={isMb ? 2 : 1}
                className='text-white! m-0! leading-tight!'
              >
                {detailTrainDt.progTitle}
              </Title>

              <div
                className={`flex ${isMb ? 'flex-col' : 'flex-row'} gap-3 mt-3`}
              >
                <Button
                  type='primary'
                  size='large'
                  className='bg-[#E8622A]! border-[#E8622A]! rounded-full! font-semibold! px-8! hover:bg-[#c4511e]! hover:border-[#c4511e]!'
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

            {/* Right: program image (desktop + tablet only) */}
            {!isMb && (
              <div className='flex-1 flex justify-center'>
                <Image
                  src={detailTrainDt.imgDetail}
                  preview={false}
                  loading='lazy'
                  alt={detailTrainDt.progTitle}
                  className={`rounded-2xl! shadow-2xl! object-cover! w-full! ${isTl ? 'max-h-70!' : 'max-h-95!'}`}
                />
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
          centered
          destroyOnHidden
        />
      </div>
    </div>
  );
};

export default VocaTrainDetail;
