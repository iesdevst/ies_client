import Col from 'antd/es/col';
import Row from 'antd/es/row';
import Typography from 'antd/es/typography';

import { lazy, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';
import TSN from '@/assets/imgs/top_str_news.webp';
import TSNMB from '@/assets/imgs/top_str_news_mb.webp';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';
import { useDevice } from '@/hooks';
import type { NewsNavi } from '@/pages/iesNews/components/NewsLst';
import { useEventLstData, useNewsLstData } from '@/pages/iesNews/hooks';
import { useUserStore } from '@/store';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const { Paragraph } = Typography;

const NewAndEvent: React.FC = () => {
  const { device } = useDevice();
  const { isDark } = useUserStore();
  const { t } = useTranslation('newAndEvent');
  const navigate = useNavigate();

  const mb = device === 'mobile';
  const tl = device === 'tablet';

  const { data: topNews } = useNewsLstData();
  const { data: featEvs } = useEventLstData();

  const hdlNavigate = (navi: NewsNavi) => {
    const searchParams = new URLSearchParams({
      authorN: navi.authorN,
      newsDate: navi.newsDate,
    });
    navigate(`${ROUTES.NEWS_DETAILS}/${navi.id}?${searchParams.toString()}`);
  };

  const latestNews = useMemo(() => {
    return [...topNews]
      .sort(
        (a, b) =>
          new Date(b.newsDate).getTime() - new Date(a.newsDate).getTime(),
      )
      .slice(0, 4);
  }, [topNews]);

  const latestEv = useMemo(() => {
    return [...featEvs]
      .sort(
        (a, b) => new Date(b.evDate).getTime() - new Date(a.evDate).getTime(),
      )
      .slice(0, 3);
  }, [featEvs]);

  return (
    <IesClSection
      id='newAe'
      layout='newsFeature'
      title={t('featNews')}
      bonusTit={t('evTit')}
      feature
      mb={mb}
      dark={isDark}
      navigateGo={ROUTES.NEWS}
      className={`!my-30 ${mb ? 'px-2' : 'px-10'}`}
      featCard={latestEv}
      butTit={t('viewAll')}
      children={
        <Row gutter={[32, 32]} className='!mb-20'>
          {/* LEFT */}
          <Col
            xs={24}
            md={24}
            lg={12}
            className={`${mb ? 'mt-6' : 'pb-16'} !cursor-pointer`}
            onClick={() =>
              hdlNavigate({
                id: '6',
                authorN: 'Ngân Anh',
                newsDate: '2026-04-30',
              })
            }
          >
            <img
              src={mb ? TSNMB : TSN}
              loading='lazy'
              alt='newaaev'
              className='!rounded-xl !w-full !h-full'
            />

            <div className={`${mb ? '' : 'w-4/5'} mt-3`}>
              <Title className='!text-blue-500' level={5}>
                {t('acadQA')}
              </Title>

              <Text
                className='!text-xl !font-bold'
                color={isDark ? 'white' : ''}
              >
                {t('profQuote')}
              </Text>
            </div>
          </Col>

          {/* RIGHT */}
          <Col
            xs={24}
            md={24}
            lg={12}
            className={`${mb ? '!mt-25' : tl ? '!mt-15' : ''}`}
          >
            {latestNews.map((item, index) => (
              <Row
                key={item.id}
                gutter={[16, 16]}
                className={`mb-3.5 !cursor-pointer ${
                  index !== 0 ? 'border-t border-gray-300 pt-7' : ''
                }`}
                onClick={() =>
                  hdlNavigate({
                    id: item.id,
                    authorN: item.authorN,
                    newsDate: item.newsDate,
                  })
                }
              >
                <Col xs={24} md={6}>
                  <img
                    src={item.img}
                    loading='lazy'
                    className={`rounded-lg ${mb ? '!w-full' : '!w-46 !h-25'}`}
                    alt='nav'
                  />
                </Col>

                <Col xs={24} md={18}>
                  <div className='flex flex-col'>
                    {item.typeTit && (
                      <Title level={3} className='!text-blue-500'>
                        {item.typeTit}
                      </Title>
                    )}

                    <Paragraph
                      className={`${
                        isDark ? '!text-white' : ''
                      } !font-bold !text-lg`}
                      ellipsis={{ rows: 2 }}
                    >
                      {item.newsTit}
                    </Paragraph>

                    <Row justify='space-between' align='middle'>
                      <Title level={4} className='!m-0'>
                        {item.authorN}
                      </Title>

                      <Title level={5} className='!m-0'>
                        {item.newsDate}
                      </Title>
                    </Row>
                  </div>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      }
    />
  );
};

export default NewAndEvent;
