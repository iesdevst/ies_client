import { Col, Image, Typography } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import { useFeatCdt, useTopSn } from './hooks';
import TSN from '@/assets/imgs/top_str_news.jpg';
import { IesClSection, Text, Title } from '@/components';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const { Paragraph } = Typography;

const NewAndEvent: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { isDark } = useUserStore();
  const { t } = useTranslation('newAndEvent');

  const { data: topSn } = useTopSn();
  const { data: featCdt } = useFeatCdt();

  const renderChildren = useMemo(
    () => (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-3.5'>
        <div>
          <Col className={`${!mb ? 'pt-6 pb-16' : 'mt-6'}`}>
            <Image src={TSN} preview={false} loading='lazy' />
            <div className={`${!mb ? 'w-4/5' : ''}`}>
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
        </div>

        <div className='pt-6'>
          {topSn.map((item, index) => (
            <div
              className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mb-3.5 ${
                index === 0 ? '' : ' !border-t border-gray-300 pt-7'
              }`}
              key={item.id}
            >
              <Image
                src={item.sti}
                className={`col-span-1 rounded-lg ${
                  !mb ? '!w-46 !h-25 ' : '!w-full !h-full'
                }`}
                preview={false}
                loading='lazy'
              />

              <div className='col-span-3 pl-5 pt-2.5'>
                <Col className='flex flex-col col-span-2'>
                  {item.specTit && (
                    <Title level={4} className='!text-blue-500'>
                      {item.specTit}
                    </Title>
                  )}
                  <Paragraph
                    className={`${isDark ? '!text-white' : ''} !font-bold !text-md`}
                    ellipsis={{ rows: 2 }}
                  >
                    {item.tit}
                  </Paragraph>
                </Col>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    [mb, isDark, t, topSn],
  );

  return (
    <IesClSection
      id='newAe'
      layout='newsFeature'
      title={t('featNews')}
      feature={true}
      mb={mb}
      navigateGo={ROUTES.NEWS}
      className={`mt-15 ${!mb ? 'px-10' : 'px-2'}`}
      featCard={featCdt}
      butTit={t('viewAll')}
      children={renderChildren}
      dark={isDark}
    />
  );
};

export default NewAndEvent;
