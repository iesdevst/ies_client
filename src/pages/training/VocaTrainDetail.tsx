import { RightOutlined } from '@ant-design/icons';
import { Breadcrumb, Col, Image, Row, Tabs, type TabsProps } from 'antd';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams, useSearchParams } from 'react-router-dom';
import ProgRegisterForm from './components/ProgRegisterForm';
import { useTrainDetailData } from './hooks';
import styles from './iesTraining.module.scss';
import DTP from '@/assets/imgs/detail__train_paint.png';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES, TrainDetailTab } from '@/constants';

const ProgOvw = lazy(() => import('@/pages/training/components/ProgOvw'));
const AdmissInfo = lazy(() => import('@/pages/training/components/AdmissInfo'));
const TuiApply = lazy(() => import('@/pages/training/components/TuiApply'));

const VocaTrainDetail: React.FC = () => {
  const isMb = useMediaQuery({ maxWidth: 1024 });
  const [trainDtSearchPrs, setTrainDtSearchPrs] = useSearchParams();
  const [trainDtActKey, setTrainDtActKey] = useState<TrainDetailTab>();
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
        label: 'Program Overview',
        children: <ProgOvw ovwDt={detailTrainDt?.overview} />,
      },
      {
        key: TrainDetailTab.Admission,
        label: 'Admissions Info',
        children: <AdmissInfo admisInfoDt={detailTrainDt?.info} />,
      },
      {
        key: TrainDetailTab.Apply,
        label: 'Tuition & Apply',
        children: <TuiApply tuiApplyDt={detailTrainDt?.apply} />,
      },
      {
        key: TrainDetailTab.Register,
        label: 'Register Form',
        children: <ProgRegisterForm />,
      },
    ],
    [trainDtActKey],
  );

  const hdlChangeTab = useCallback(
    (key: string) => {
      trainDtSearchPrs.set('tab', key);
      setTrainDtSearchPrs(trainDtSearchPrs, { replace: true });
      setTrainDtActKey(key as TrainDetailTab);
    },
    [trainDtSearchPrs, setTrainDtSearchPrs],
  );

  useEffect(() => {
    const tab = trainDtSearchPrs.get('tab');
    if (tab) {
      setTrainDtActKey(tab as TrainDetailTab);
    } else {
      trainDtSearchPrs.set('tab', TrainDetailTab.Overview);
      setTrainDtSearchPrs(trainDtSearchPrs, { replace: true });
      setTrainDtActKey(TrainDetailTab.Overview);
    }
  }, [trainDtSearchPrs, setTrainDtSearchPrs]);

  return (
    <section className={`bg-white ${!isMb ? 'px-15 py-20' : 'pt-10 py-20'}`}>
      <Breadcrumb
        className={`!bg-[#eaeaea] !w-1/3 !ml-5.5 !py-3  !rounded-t-xl !border-t !border-x !border-[#dac7da]  ${styles.breadCrumbCus}`}
        separator={<RightOutlined className='!text-black' />}
        items={[
          {
            title: (
              <PrefetchLink
                to={ROUTES.ACADEMICS}
                style={{
                  color: 'black',
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                Intermediate Vocational
              </PrefetchLink>
            ),
          },
          {
            title: (
              <Text color='#C92CC9' className='!text-[16px] !font-semibold'>
                {detailTrainDt?.progTitle}
              </Text>
            ),
          },
        ]}
      />
      <div
        className={`!bg-[#eaeaea] !rounded-3xl !border !border-[#dac7da] ${!isMb ? 'p-20' : 'px-2 pt-10 py-20'}`}
      >
        {detailTrainDt && (
          <Row
            justify='center'
            align='middle'
            className={`${!isMb ? 'gap-x-30' : 'gap-y-12'}`}
          >
            <Col xs={24} md={10} className='!text-center'>
              <Title className='!m-0 !font-normal' level={5}>
                {detailTrainDt.program}
              </Title>

              <Title className='!m-0 !text-[#BE3691] !mt-0.5 !mb-5'>
                {detailTrainDt.progTitle}
              </Title>

              <Image src={DTP} preview={false} />
            </Col>

            <Col xs={24} md={10} className='!text-center'>
              <Image
                src={detailTrainDt.imgDetail}
                preview={false}
                className='!h-[30vh] !w-[600px] rounded-xl shadow-2xl'
              />
            </Col>
          </Row>
        )}
        <div className='!mt-10'>
          <Tabs
            activeKey={trainDtActKey}
            items={tabs}
            onChange={hdlChangeTab}
            className={styles.iesTrainDtTabs}
          />
        </div>
      </div>
    </section>
  );
};

export default VocaTrainDetail;
