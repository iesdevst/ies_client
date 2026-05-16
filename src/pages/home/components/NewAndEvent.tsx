import { Row } from 'antd';
import Col from 'antd/es/col';
import Image from 'antd/es/image';
import Typography from 'antd/es/typography';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import TSN from '@/assets/imgs/top_str_news.webp';
import { IesClSection, Text, Title } from '@/components';
import { ROUTES } from '@/constants';
import { useEventLstData, useNewsLstData } from '@/pages/iesNews/hooks';
import { useUserStore } from '@/store';

const { Paragraph } = Typography;

const NewAndEvent: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { isDark } = useUserStore();
  const { t } = useTranslation('newAndEvent');

  const { data: topNews } = useNewsLstData();
  const { data: featEvs } = useEventLstData();

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

  const leftBlock = useMemo(() => {
    return (
      <Col className={`${!mb ? 'pt-6 pb-16' : 'mt-6'}`}>
        <Image
          src={TSN}
          preview={false}
          loading='lazy'
          alt='newaaev'
          className='!rounded-xl'
        />

        <div className={!mb ? 'w-4/5' : ''}>
          <Title className='!text-blue-500' level={5}>
            {t('acadQA')}
          </Title>

          <Text className='!text-xl !font-bold' color={isDark ? 'white' : ''}>
            {t('profQuote')}
          </Text>
        </div>
      </Col>
    );
  }, [mb, isDark, t]);

  const rightList = useMemo(() => {
    return latestNews.map((item, index) => (
      <div
        key={item.id}
        className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mb-3.5 ${
          index !== 0 ? 'border-t border-gray-300 pt-7' : ''
        }`}
      >
        <Image
          src={item.img}
          preview={false}
          loading='lazy'
          className={`col-span-1 rounded-lg ${
            !mb ? '!w-46 !h-25' : '!w-full !h-full'
          }`}
          alt='nav'
        />

        <div className='col-span-3 pl-5 '>
          <Col className='flex flex-col'>
            {item.typeTit && (
              <Title level={4} className='!text-blue-500'>
                {item.typeTit}
              </Title>
            )}

            <Paragraph
              className={`${isDark ? '!text-white' : ''} !font-bold !text-md`}
              ellipsis={{ rows: 2 }}
            >
              {item.newsTit}
            </Paragraph>

            <Row justify='space-between' align='middle'>
              <Title level={5} className='!m-0'>
                {item.authorN}
              </Title>
              <Title level={5} className='!m-0'>
                {item.newsDate}
              </Title>
            </Row>
          </Col>
        </div>
      </div>
    ));
  }, [mb, isDark, latestNews]);

  return (
    <IesClSection
      id='newAe'
      layout='newsFeature'
      title={t('featNews')}
      feature
      mb={mb}
      dark={isDark}
      navigateGo={ROUTES.NEWS}
      className={`mt-15 ${!mb ? 'px-10' : 'px-2'}`}
      featCard={latestEv}
      butTit={t('viewAll')}
      children={
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-3.5'>
          {/* LEFT */}
          {leftBlock}

          {/* RIGHT */}
          <div className='pt-6'>{rightList}</div>
        </div>
      }
    />
  );
};

export default NewAndEvent;
