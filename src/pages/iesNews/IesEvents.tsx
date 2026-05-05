import HomeFilled from '@ant-design/icons/HomeFilled';
import RightOutlined from '@ant-design/icons/RightOutlined';

import Breadcrumb from 'antd/es/breadcrumb';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import Image from 'antd/es/image';
import Pagination from 'antd/es/pagination';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { useEventLstData } from './hooks';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const PAGE_SIZE = 3;

const IesEvents: React.FC = () => {
  const { t } = useTranslation('iesEvents');
  const { data } = useEventLstData();

  const mb = useMediaQuery({ maxWidth: 767 });
  const { isDark } = useUserStore();

  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return data.slice(start, start + PAGE_SIZE);
  }, [data, currentPage]);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [currentPage]);

  const handleNavigate = (id: string) => {
    navigate(`${ROUTES.EVENTS_DETAILS}/${id}`);
  };

  return (
    <section ref={sectionRef}>
      {/* BREADCRUMB */}
      <Breadcrumb
        className={mb ? '!ml-5 !py-6' : '!ml-25 !py-15'}
        separator={
          <RightOutlined className={isDark ? '!text-white px-6' : 'px-6'} />
        }
        items={[
          {
            title: (
              <PrefetchLink
                to={ROUTES.DASHBOARD}
                style={{
                  color: isDark ? 'white' : 'black',
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                <HomeFilled className='text-xl' />
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

      {/* TITLE */}
      <Title level={mb ? 3 : 5} className='text-center'>
        {t('cta')} {t('events')}
      </Title>

      {/* LIST */}
      <div className='w-full py-10 space-y-10'>
        {currentData.map((ev) => (
          <Card
            key={ev.id}
            className={[
              mb ? '!mx-3 !p-5' : '!w-5/6 !ml-15 !py-5 !px-10',
              'bg-gray-400 cursor-pointer',
            ].join(' ')}
            onClick={() => handleNavigate(ev.id)}
          >
            <Flex
              align='center'
              justify='flex-start'
              vertical={mb}
              gap={mb ? 30 : 100}
            >
              <Image
                src={ev.img}
                preview={false}
                className='w-[400px] h-[240px] rounded-xl object-cover'
                loading='lazy'
              />

              <Col>
                <Title level={4} style={{ whiteSpace: 'pre-line' }}>
                  {ev.eventTit}
                </Title>

                <Text
                  className='block text-lg'
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {ev.desc}
                </Text>
              </Col>
            </Flex>
          </Card>
        ))}
      </div>

      {/* PAGINATION */}
      <Flex justify='center' className='pb-10'>
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={data.length}
          onChange={setCurrentPage}
        />
      </Flex>
    </section>
  );
};

export default IesEvents;
