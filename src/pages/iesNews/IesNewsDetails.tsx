import { RightOutlined } from '@ant-design/icons';
import Breadcrumb from 'antd/es/breadcrumb';
import Flex from 'antd/es/flex';
import Image from 'antd/es/image';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

import ContactKey from '../home/components/ContactKey';
import { useNewsData } from './hooks';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';

const IesNewsDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('iesNewsDetails');
  const { data = [] } = useNewsData();

  const mb = useMediaQuery({ maxWidth: 767 });
  const tl = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const detailDt = useMemo(() => {
    if (!id) return null;
    return data.find((item) => String(item.id) === id) || null;
  }, [data, id]);

  const breadcrumbItems = useMemo(
    () => [
      {
        title: (
          <PrefetchLink
            to={ROUTES.NEWS}
            style={{
              color: 'black',
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            {t('newsP')}
          </PrefetchLink>
        ),
      },
      {
        title: (
          <Text color='#545969' className='!text-[16px] !font-bold'>
            {t('newsD')}
          </Text>
        ),
      },
    ],
    [t],
  );

  const paddingClass = mb ? '!px-4' : tl ? '!px-10' : '!px-20';

  const titleLevel = mb || tl ? 3 : 1;

  return (
    <section>
      <div className='!rounded-4xl !bg-[#dfe0e2] pt-10 pb-20 mx-5'>
        {/* BREADCRUMB */}
        <Breadcrumb
          className={`${
            mb ? '!ml-5 !mb-10' : tl ? '!ml-10 !mb-15' : '!ml-25 !py-15'
          }`}
          separator={<RightOutlined className='!text-black mx-6' />}
          items={breadcrumbItems}
        />

        {/* TITLE */}
        <Title
          level={mb || tl ? 3 : 5}
          className='!text-center italic !text-black'
        >
          {t('news')}
        </Title>

        {/* CONTENT */}
        {detailDt && (
          <Flex
            vertical
            justify='center'
            align='center'
            className={paddingClass}
            gap={40}
          >
            <Title level={titleLevel} className='!text-center !text-black'>
              {detailDt.newsTit}
            </Title>

            <Image
              src={detailDt.img}
              className='!rounded-2xl !w-full'
              loading='lazy'
              preview={false}
            />

            <Text
              className='!block !text-lg'
              style={{ whiteSpace: 'pre-line' }}
            >
              {detailDt.desc}
            </Text>

            {detailDt.linkTo && (
              <a
                href={detailDt.linkTo}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Text color='blue' className='!underline !text-lg'>
                  {t('readOri')}
                </Text>
              </a>
            )}
          </Flex>
        )}
      </div>

      <ContactKey />
    </section>
  );
};

export default IesNewsDetails;
