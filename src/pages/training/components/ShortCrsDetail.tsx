import { Col, Image, Row, Tabs, type TabsProps } from 'antd';
import { lazy, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useShortCrsData } from '../hooks';
import styles from '../iesTraining.module.scss';
import ProgRegisterForm from './ProgRegisterForm';
import DTP from '@/assets/imgs/short_course_paint.png';
import { Title } from '@/components';
import type { ShortCrsTypeEnum } from '@/utils';

const ProgOvw = lazy(() => import('@/pages/training/components/ProgOvw'));
const AdmissInfo = lazy(() => import('@/pages/training/components/AdmissInfo'));
const TuiApply = lazy(() => import('@/pages/training/components/TuiApply'));

type ShortCrsDetailAct = 'ovwsc' | 'admsc' | 'tuisc' | 'rfsc';

interface IShortCrsDetailProps {
  scType: ShortCrsTypeEnum;
}

const ShortCrsDetail: React.FC<IShortCrsDetailProps> = (props) => {
  const { scType } = props;
  const isMb = useMediaQuery({ maxWidth: 1024 });
  const [scActKey, setScActKey] = useState<ShortCrsDetailAct>('ovwsc');
  const { data } = useShortCrsData();

  const shortCrsDt = useMemo(() => {
    if (!data) return;
    return data.find((crs) => crs.shortCrsType === scType);
  }, [data, scType]);

  const tabs: TabsProps['items'] = useMemo(
    () => [
      {
        key: 'ovwsc',
        label: 'Program Overview',
        children: <ProgOvw ovwScDt={shortCrsDt?.overview} />,
      },
      {
        key: 'admsc',
        label: 'Admissions Info',
        children: <AdmissInfo admisScInfoDt={shortCrsDt?.info} />,
      },
      {
        key: 'tuisc',
        label: 'Tuition & Apply',
        children: <TuiApply tuiApplyScDt={shortCrsDt?.apply} />,
      },
      {
        key: 'rfsc',
        label: 'Register Form',
        children: <ProgRegisterForm shortCrc={true} />,
      },
    ],
    [],
  );

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
            activeKey={scActKey}
            onChange={(key) => setScActKey(key as ShortCrsDetailAct)}
            items={tabs}
            className={styles.iesShortSrcnDtTabs}
          />
        </div>
      </div>
    </section>
  );
};

export default ShortCrsDetail;
