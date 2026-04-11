import {
  FormOutlined,
  InfoCircleOutlined,
  ProfileOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { Col, Image, Row, Tabs, Tooltip, type TabsProps } from 'antd';
import { lazy, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import { useShortCrsData } from '../hooks';
import styles from '../iesTraining.module.scss';
import DTP from '@/assets/imgs/short_course_paint.png';
import { Title } from '@/components';
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
            level={4}
            className={`${stActKey === TrainDetailTab.Overview ? '!text-white' : '!text-black'} !m-0`}
          >
            {t('progOvw')}
          </Title>
        ) : (
          <Tooltip title={t('progOvw')}>
            <ProfileOutlined
              className={`${stActKey === TrainDetailTab.Overview ? '!text-white' : '!text-black'} !text-lg`}
            />
          </Tooltip>
        ),
        children: <ProgOvw ovwScDt={shortCrsDt?.overview} dark={isDark} />,
      },
      {
        key: TrainDetailTab.Admission,
        label: !isMb ? (
          <Title
            level={4}
            className={`${stActKey === TrainDetailTab.Admission ? '!text-white' : '!text-black'} !m-0`}
          >
            {t('admissIf')}
          </Title>
        ) : (
          <Tooltip title={t('admissIf')}>
            <InfoCircleOutlined
              className={`${stActKey === TrainDetailTab.Admission ? '!text-white' : '!text-black'} !text-lg`}
            />
          </Tooltip>
        ),
        children: <AdmissInfo admisScInfoDt={shortCrsDt?.info} dark={isDark} />,
      },
      {
        key: TrainDetailTab.Apply,
        label: !isMb ? (
          <Title
            level={4}
            className={`${stActKey === TrainDetailTab.Apply ? '!text-white' : '!text-black'} !m-0`}
          >
            {t('tui')}
          </Title>
        ) : (
          <Tooltip title={t('tui')}>
            <WalletOutlined
              className={`${stActKey === TrainDetailTab.Apply ? '!text-white' : '!text-black'} !text-lg`}
            />
          </Tooltip>
        ),
        children: <TuiApply tuiApplyScDt={shortCrsDt?.apply} dark={isDark} />,
      },
      {
        key: TrainDetailTab.Register,
        label: !isMb ? (
          <Title
            level={4}
            className={`${stActKey === TrainDetailTab.Register ? '!text-white' : '!text-black'} !m-0`}
          >
            {t('form')}
          </Title>
        ) : (
          <Tooltip title={t('form')}>
            <FormOutlined
              className={`${stActKey === TrainDetailTab.Register ? '!text-white' : '!text-black'} !text-lg`}
            />
          </Tooltip>
        ),
        children: <StRegisForm dark={isDark} />,
      },
    ],
    [stActKey, isMb, shortCrsDt, isDark],
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
    <section className={`${isMb || isTl ? 'pt-10 py-20' : 'px-15 py-20 '}`}>
      <div
        className={`${isDark ? '!bg-gray-800' : '!bg-[#eaeaea]'} !rounded-3xl !border !border-[#dac7da] ${isMb || isTl ? 'px-2 pt-10 py-20' : 'p-20'}`}
      >
        {shortCrsDt && (
          <Row
            justify='center'
            align='middle'
            className={`${isMb || isTl ? 'gap-y-12' : 'gap-x-30'}`}
          >
            <Col xs={24} md={10} className='!text-center'>
              <Title className='!m-0 !font-normal' level={5}>
                {t('shortT')}
              </Title>

              <Title className='!m-0 !text-[#6472cf] !mt-0.5 !mb-5'>
                {shortCrsDt.shortCrsTit}
              </Title>

              <Image src={DTP} preview={false} className='!h-20 !w-80' />
            </Col>

            <Col xs={24} md={10} className='!text-center'>
              <Image
                src={shortCrsDt.imgDetail}
                preview={false}
                className='!h-[30vh] !w-[600px] rounded-xl shadow-2xl'
              />
            </Col>
          </Row>
        )}
        <div className='!mt-10'>
          <Tabs
            activeKey={stActKey}
            onChange={hdlChangeTab}
            items={tabs}
            className={styles.iesShortSrcnDtTabs}
            type='card'
            centered={isMb}
          />
        </div>
      </div>
    </section>
  );
};

export default ShortCrsDetail;
