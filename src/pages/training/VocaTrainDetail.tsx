import { Col, Flex, Image, Tabs, type TabsProps } from 'antd';
import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTrainDetailData } from './hooks';
import AIFD from '@/assets/imgs/apinf_detail.png';
import DTP from '@/assets/imgs/detail__train_paint.png';
import { Title } from '@/components';
import { TrainDetailTab } from '@/constants';

const ProgOvw = lazy(() => import('@/pages/training/components/ProgOvw'));
const AdmissInfo = lazy(() => import('@/pages/training/components/AdmissInfo'));
const TuiApply = lazy(() => import('@/pages/training/components/TuiApply'));

const VocaTrainDetail: React.FC = () => {
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
    <section className='bg-white px-8 py-20'>
      <div className='!bg-[#F4F4F4] !rounded-3xl p-10'>
        {detailTrainDt && (
          <Flex justify='center' align='center' gap={300}>
            <Col className='!text-center'>
              <Title className='!m-0 !font-normal' level={5}>
                {detailTrainDt.program}
              </Title>
              <Title className='!m-0 !text-[#BE3691] !mt-0.5 !mb-5'>
                {detailTrainDt.progTitle}
              </Title>
              <Image src={DTP} preview={false} />
            </Col>

            <div>
              <Image src={AIFD} preview={false} />
            </div>
          </Flex>
        )}
        <div className='!mt-10'>
          <Tabs
            activeKey={trainDtActKey}
            items={tabs}
            onChange={hdlChangeTab}
          />
        </div>
      </div>
    </section>
  );
};

export default VocaTrainDetail;
