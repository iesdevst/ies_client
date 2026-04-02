import {
  ApartmentOutlined,
  FormOutlined,
  InfoCircleOutlined,
  ProfileOutlined,
  RightOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import {
  Breadcrumb,
  Col,
  Image,
  Row,
  Tabs,
  Tooltip,
  type TabsProps,
} from 'antd';
import { lazy, useCallback, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTrainDetailData } from './hooks';
import styles from './iesTraining.module.scss';
import DTP from '@/assets/imgs/detail__train_paint.png';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES, TrainDetailTab } from '@/constants';

const ProgOvw = lazy(() => import('@/pages/training/components/ProgOvw'));
const AdmissInfo = lazy(() => import('@/pages/training/components/AdmissInfo'));
const TuiApply = lazy(() => import('@/pages/training/components/TuiApply'));
const IvRegisterForm = lazy(
  () => import('@/pages/training/components/IvRegisterForm'),
);

const VocaTrainDetail: React.FC = () => {
  const isMb = useMediaQuery({ maxWidth: 768 });
  const isTl = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

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
            level={4}
            className={`${trainDtActKey === TrainDetailTab.Overview ? '!text-white' : '!text-black'} !m-0`}
          >
            Program Overview
          </Title>
        ) : (
          <Tooltip title='Program Overview'>
            <ProfileOutlined
              className={`${trainDtActKey === TrainDetailTab.Overview ? '!text-white' : '!text-black'} !text-lg`}
            />
          </Tooltip>
        ),
        children: <ProgOvw ovwDt={detailTrainDt?.overview} />,
      },
      {
        key: TrainDetailTab.Admission,
        label: !isMb ? (
          <Title
            level={4}
            className={`${trainDtActKey === TrainDetailTab.Admission ? '!text-white' : '!text-black'} !m-0`}
          >
            Admissions Info
          </Title>
        ) : (
          <Tooltip title='Admissions Info'>
            <InfoCircleOutlined
              className={`${trainDtActKey === TrainDetailTab.Admission ? '!text-white' : '!text-black'} !text-lg`}
            />
          </Tooltip>
        ),
        children: <AdmissInfo admisInfoDt={detailTrainDt?.info} />,
      },
      {
        key: TrainDetailTab.Apply,
        label: !isMb ? (
          <Title
            level={4}
            className={`${trainDtActKey === TrainDetailTab.Apply ? '!text-white' : '!text-black'} !m-0`}
          >
            Tuition & Apply
          </Title>
        ) : (
          <Tooltip title='Tuition & Apply'>
            <WalletOutlined
              className={`${trainDtActKey === TrainDetailTab.Apply ? '!text-white' : '!text-black'} !text-lg`}
            />
          </Tooltip>
        ),
        children: <TuiApply tuiApplyDt={detailTrainDt?.apply} />,
      },
      {
        key: TrainDetailTab.Register,
        label: !isMb ? (
          <Title
            level={4}
            className={`${trainDtActKey === TrainDetailTab.Register ? '!text-white' : '!text-black'} !m-0`}
          >
            Register Form
          </Title>
        ) : (
          <Tooltip title='Register Form'>
            <FormOutlined
              className={`${trainDtActKey === TrainDetailTab.Register ? '!text-white' : '!text-black'} !text-lg`}
            />
          </Tooltip>
        ),
        children: <IvRegisterForm />,
      },
    ],
    [detailTrainDt, trainDtActKey, isMb],
  );

  const hdlChangeTab = useCallback(
    (key: string) => {
      setTrainDtSearchPrs({ tab: key }, { replace: true });
    },
    [setTrainDtSearchPrs],
  );

  return (
    <section
      className={`bg-white ${isMb || isTl ? 'pt-10 py-20' : 'px-15 py-20'}`}
    >
      <Breadcrumb
        className={`!bg-[#eaeaea] !rounded-t-xl !border-t !border-x !border-[#dac7da] ${isMb ? 'w-2/3 !py-1.5 !ml-5' : isTl ? 'w-2/3 !py-1.5 !ml-5' : 'w-1/3 !ml-5.5 !py-3'}  ${styles.breadCrumbCus}`}
        separator={
          <RightOutlined
            className={`!text-black  ${isMb ? 'px-3' : isTl ? 'px-15' : 'px-20'}`}
          />
        }
        items={[
          {
            title: (
              <PrefetchLink
                to={ROUTES.ADMISSIONS}
                style={{
                  color: 'black',
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                {!isMb ? (
                  'Intermediate Vocational'
                ) : (
                  <ApartmentOutlined className='!text-xl' />
                )}
              </PrefetchLink>
            ),
          },
          {
            title: (
              <Text color='#C92CC9' className='!text-[16px] !font-semibold'>
                Program Details
              </Text>
            ),
          },
        ]}
      />
      <div
        className={`!bg-[#eaeaea] !rounded-3xl !border !border-[#dac7da] ${isMb || isTl ? 'px-2 pt-10 py-20' : 'p-20'}`}
      >
        {detailTrainDt && (
          <Row
            justify='center'
            align='middle'
            className={`${isMb || isTl ? 'gap-y-12' : 'gap-x-30'}`}
          >
            <Col xs={24} md={12} className='!text-center'>
              <Title className='!m-0 !font-normal' level={5}>
                {detailTrainDt.program}
              </Title>

              <Title
                level={isMb || isTl ? 3 : 1}
                className='!m-0 !text-[#BE3691] !mt-0.5 !mb-5'
              >
                {detailTrainDt.progTitle}
              </Title>

              <Image src={DTP} preview={false} />
            </Col>

            <Col xs={24} md={12} className='!text-center'>
              <Image
                src={detailTrainDt.imgDetail}
                preview={false}
                className={`${isMb ? '!h-[20vh] !w-[600px]' : isTl ? '!h-[20vh] !w-[350px]' : '!h-[30vh] !w-[600px]'} rounded-xl shadow-2xl`}
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
            centered={isMb}
          />
        </div>
      </div>
    </section>
  );
};

export default VocaTrainDetail;
