import HomeFilled from '@ant-design/icons/HomeFilled';
import RightOutlined from '@ant-design/icons/RightOutlined';
import { Row } from 'antd';
import Breadcrumb from 'antd/es/breadcrumb';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import type { NewsLstData } from '../hooks';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';
import type { DeviceType } from '@/hooks';
import { useUserStore } from '@/store';

interface INewsLst {
  device: DeviceType;
  newsLstdata: Array<NewsLstData>;
  totalItem: number;
}

export type NewsNavi = {
  id: string;
  authorN: string;
  newsDate: string;
};

const NewsLst: React.FC<INewsLst> = (props) => {
  const { device, newsLstdata, totalItem } = props;
  const { t } = useTranslation('newsLst');
  const { isDark } = useUserStore();

  const navigate = useNavigate();

  const handleNavigate = (navi: NewsNavi) => {
    const searchParams = new URLSearchParams({
      authorN: navi.authorN,
      newsDate: navi.newsDate,
    });
    navigate(`${ROUTES.NEWS_DETAILS}/${navi.id}?${searchParams.toString()}`);
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
  const imgMap = {
    mobile: '!w-full',
    tablet: '!w-full !h-60',
    tabletPro: '!w-[200px] !h-[200px]',
    desktop: '!w-[310px] !h-[200px]',
  };

  if (!newsLstdata || !totalItem) return;

  return (
    <section>
      <Breadcrumb
        className={breadcrumbClass}
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
                {t('news')}
              </Text>
            ),
          },
        ]}
      />

      <Title level={device === 'mobile' ? 5 : 3} className='!text-center'>
        {t('show')} {totalItem} {t('result')}
        {totalItem > 1 && t('s')}
      </Title>
      <Flex vertical className='!space-y-10 !w-full !pb-10 !pt-3'>
        {newsLstdata.map((newsLst) => (
          <Card
            key={newsLst.id}
            className={`${cardPadMap[device]} ${isDark ? '!bg-[#191f23]' : '!bg-gray-400'} cursor-pointer`}
            onClick={() =>
              handleNavigate({
                id: newsLst.id,
                authorN: newsLst.authorN,
                newsDate: newsLst.newsDate,
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
                src={newsLst.img}
                alt='iesnew'
                loading='lazy'
                className={`${imgMap[device]} object-cover rounded-xl shrink-0`}
              />
              <Col>
                {newsLst.typeTit && (
                  <Title
                    level={4}
                    className='!m-0 !mb-1 !uppercase !text-blue-500'
                  >
                    {newsLst.typeTit}
                  </Title>
                )}
                <Title
                  level={4}
                  style={{
                    whiteSpace: 'pre-line',
                  }}
                  className='!m-0'
                >
                  {newsLst.newsTit}
                </Title>
                <Text
                  className='!block !text-lg'
                  style={{
                    whiteSpace: 'pre-line',
                  }}
                  color={isDark ? 'white' : 'black'}
                >
                  {newsLst.desc}
                </Text>
                <Row justify='space-between' align='middle'>
                  <Title level={5} className='!m-0 !mt-3'>
                    {newsLst.authorN}
                  </Title>
                  <Title level={5} className='!m-0 !mt-3'>
                    {newsLst.newsDate}
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

export default NewsLst;
