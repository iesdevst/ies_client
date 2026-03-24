import { Col, Image, Row, Tabs, type TabsProps } from 'antd';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import { useShortCrsData } from '../hooks';
import styles from '../iesTraining.module.scss';
import DTP from '@/assets/imgs/short_course_paint.png';
import { Title } from '@/components';
import { TrainDetailTab } from '@/constants';
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
  const isMb = useMediaQuery({ maxWidth: 1024 });
  const [stSearchPrs, setStSearchPrs] = useSearchParams();
  const [stActKey, setStActKey] = useState<TrainDetailTab>();
  const { data } = useShortCrsData();

  const shortCrsDt = useMemo(() => {
    if (!data) return;
    return data.find((crs) => crs.shortCrsType === scType);
  }, [data, scType]);

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: TrainDetailTab.Overview,
        label: 'Program Overview',
        children: <ProgOvw ovwScDt={shortCrsDt?.overview} />,
      },
      {
        key: TrainDetailTab.Admission,
        label: 'Admissions Info',
        children: <AdmissInfo admisScInfoDt={shortCrsDt?.info} />,
      },
      {
        key: TrainDetailTab.Apply,
        label: 'Tuition & Apply',
        children: <TuiApply tuiApplyScDt={shortCrsDt?.apply} />,
      },
      {
        key: TrainDetailTab.Register,
        label: 'Register Form',
        children: <StRegisForm />,
      },
    ],
    [shortCrsDt],
  );

  const hdlChangeTab = useCallback(
    (key: string) => {
      stSearchPrs.set('subTab', key);
      setStSearchPrs(stSearchPrs, { replace: false });
      setStActKey(key as TrainDetailTab);
    },
    [stSearchPrs, setStSearchPrs],
  );

  useEffect(() => {
    const tab = stSearchPrs.get('subTab');
    if (tab) {
      setStActKey(tab as TrainDetailTab);
    } else {
      stSearchPrs.set('subTab', TrainDetailTab.Overview);
      setStSearchPrs(stSearchPrs, { replace: false });
      setStActKey(TrainDetailTab.Overview);
    }
  }, [stSearchPrs, setStSearchPrs]);

  return (
    <section className={`${!isMb ? 'px-15 py-20' : 'pt-10 py-20'}`}>
      <div
        className={`!bg-[#eaeaea] !rounded-3xl !border !border-[#dac7da] ${!isMb ? 'p-20' : 'px-2 pt-10 py-20'}`}
      >
        {shortCrsDt && (
          <Row
            justify='center'
            align='middle'
            className={`${!isMb ? 'gap-x-30' : 'gap-y-12'}`}
          >
            <Col xs={24} md={10} className='!text-center'>
              <Title className='!m-0 !font-normal' level={5}>
                Short-term Training
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
          />
        </div>
      </div>
    </section>
  );
};

export default ShortCrsDetail;
