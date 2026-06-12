import HomeFilled from '@ant-design/icons/HomeFilled';
import RightOutlined from '@ant-design/icons/RightOutlined';
import Breadcrumb from 'antd/es/breadcrumb';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import Row from 'antd/es/row';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import type { EventLstData } from '../hooks';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';
import type { DeviceType } from '@/hooks';
import { useUserStore } from '@/store';

interface IEvsLst {
  device: DeviceType;
  evLstData: Array<EventLstData>;
  totalItem: number;
}

export type EvsNavi = {
  id: string;
  authorN: string;
  evDate: string;
};

const EvsLst: React.FC<IEvsLst> = (props) => {
  const { device, evLstData, totalItem } = props;
  const { t } = useTranslation('evsLst');
  const { isDark } = useUserStore();
  const navigate = useNavigate();

  const handleNavigate = (navi: EvsNavi) => {
    const searchParams = new URLSearchParams({
      authorN: navi.authorN,
      evDate: navi.evDate,
    });
    navigate(`${ROUTES.EVENTS_DETAILS}/${navi.id}?${searchParams.toString()}`);
  };

  const breadcrumbClass = device === 'mobile' ? '!ml-5 !py-6' : '';

  const cardPadMap = {
    mobile: '!p-5 !mx-3',
    tablet: '!py-5 !px-4',
    tabletPro: '!pt-5 !pb-3 !px-4',
    desktop: '!py-5 !px-10',
  };

  const flexGap = {
    mobile: 30,
    tablet: 20,
    tabletPro: 35,
    desktop: 100,
  };

  const rsTitLv = {
    mobile: 5,
    tablet: 4,
    tabletPro: 4,
    desktop: 3,
  } as const;
  const imgMap = {
    mobile: '!w-full',
    tablet: '!w-full !h-60',
    tabletPro: '!w-[200px] !h-[200px]',
    desktop: '!w-[310px] !h-[200px]',
  };

  if (!evLstData || !totalItem) return;

  return (
    <section>
      <Breadcrumb
        className={`${breadcrumbClass}`}
        separator={
          <RightOutlined
            className={`${isDark ? '!text-white' : '!text-black'} px-6`}
          />
        }
        items={[
          {
            title: (
              <PrefetchLink
                to={ROUTES.DASHBOARD}
                style={{
                  color: isDark ? 'white' : 'black',
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                <HomeFilled className='!mb-3 !text-xl' />
              </PrefetchLink>
            ),
          },
          {
            title: (
              <Text
                color={isDark ? '#74abf9' : '#1E4D8C'}
                className='!text-[16px] !font-bold'
              >
                {t('events')}
              </Text>
            ),
          },
        ]}
      />

      {totalItem > 0 && (
        <Title level={rsTitLv[device]} className='!text-center !mt-1.5'>
          {t('show')} {totalItem} {t('result')}
          {totalItem > 1 && t('s')}
        </Title>
      )}
      <Flex vertical className='!space-y-10 !w-full !pt-3'>
        {evLstData.map((evLst) => (
          <Card
            key={evLst.id}
            className={`${cardPadMap[device]} ${isDark ? '!bg-[#191f23]' : '!bg-gray-400'} cursor-pointer`}
            onClick={() =>
              handleNavigate({
                id: evLst.id,
                authorN: evLst.authorN,
                evDate: evLst.evDate,
              })
            }
          >
            <Flex
              justify='flex-start'
              align='flex-start'
              gap={flexGap[device]}
              vertical={device === 'mobile' || device === 'tablet'}
            >
              <img
                src={evLst.img}
                alt='iesev'
                loading='lazy'
                className={`${imgMap[device]} object-cover rounded-xl shrink-0`}
              />
              <Col>
                <Title
                  level={4}
                  style={{
                    whiteSpace: 'pre-line',
                  }}
                >
                  {evLst.eventTit}
                </Title>
                <Text
                  className='!block !text-lg'
                  style={{
                    whiteSpace: 'pre-line',
                  }}
                  color={isDark ? 'white' : 'black'}
                >
                  {evLst.desc}
                </Text>
                <Row justify='space-between' align='middle'>
                  <Title level={5} className='!m-0 !mt-3'>
                    {evLst.authorN}
                  </Title>
                  <Title level={5} className='!m-0 !mt-3'>
                    {evLst.evDate}
                  </Title>
                </Row>
              </Col>
            </Flex>
          </Card>
        ))}
      </Flex>
    </section>
  );
};

export default EvsLst;
