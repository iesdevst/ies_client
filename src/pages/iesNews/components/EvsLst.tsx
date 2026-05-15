import HomeFilled from '@ant-design/icons/HomeFilled';
import RightOutlined from '@ant-design/icons/RightOutlined';
import { Row } from 'antd';
import Breadcrumb from 'antd/es/breadcrumb';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import type { EventLstData } from '../hooks';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

interface IEvsLst {
  evLstData: Array<EventLstData>;
  totalItem: number;
}

export type EvsNavi = {
  id: string;
  authorN: string;
  evsDate: string;
};

const EvsLst: React.FC<IEvsLst> = (props) => {
  const { evLstData, totalItem } = props;
  const { t } = useTranslation('iesEvents');
  const mb = useMediaQuery({ maxWidth: 767 });
  const { isDark } = useUserStore();
  const navigate = useNavigate();

  const handleNavigate = (navi: EvsNavi) => {
    const searchParams = new URLSearchParams({
      authorN: navi.authorN,
      evsDate: navi.evsDate,
    });
    navigate(`${ROUTES.EVENTS_DETAILS}/${navi.id}?${searchParams.toString()}`);
  };

  if (!evLstData || !totalItem) return;

  return (
    <section>
      <Breadcrumb
        className={`${!mb ? '' : '!ml-5 !py-6'}`}
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
                color={isDark ? '#74abf9' : '#545969'}
                className='!text-[16px] !font-bold'
              >
                {t('events')}
              </Text>
            ),
          },
        ]}
      />

      {totalItem > 0 && (
        <Title level={!mb ? 5 : 3} className='!text-center'>
          Hiển thị {totalItem} kết quả tìm kiếm
        </Title>
      )}
      <Flex vertical className='!space-y-10 !w-full !pt-3'>
        {evLstData.map((evLst) => (
          <Card
            key={evLst.id}
            className={`${!mb ? '!py-5 !px-10' : '!p-5 !mx-3'} ${isDark ? '!bg-[#191f23]' : '!bg-gray-400'} cursor-pointer`}
            onClick={() =>
              handleNavigate({
                id: evLst.id,
                authorN: evLst.authorN,
                evsDate: evLst.evDate,
              })
            }
          >
            <Flex
              justify='flex-start'
              align='flex-start'
              gap={!mb ? 100 : 30}
              vertical={mb}
            >
              <img
                src={evLst.img}
                alt='iesev'
                loading='lazy'
                className='!w-[310px] !h-[200px] object-cover rounded-xl shrink-0'
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
                  <Title level={5}>{evLst.authorN}</Title>
                  <Title level={5}>{evLst.evDate}</Title>
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
