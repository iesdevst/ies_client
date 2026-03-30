import { HomeFilled, RightOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Col, Flex, Image, Pagination } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEventLstData } from './hooks';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';

const PAGE_SIZE = 3;

const IesEvents = () => {
  const { data } = useEventLstData();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // Cắt dữ liệu theo trang
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentData = data.slice(startIndex, startIndex + PAGE_SIZE);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [currentPage]);
  return (
    <section ref={sectionRef} className='!bg-white'>
      <Breadcrumb
        className='!ml-25 !py-15 '
        separator={<RightOutlined className='!text-black px-6' />}
        items={[
          {
            title: (
              <PrefetchLink
                to={ROUTES.DASHBOARD}
                style={{
                  color: 'black',
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
              <Text color='#545969' className='!text-[16px] !font-bold'>
                Events
              </Text>
            ),
          },
        ]}
      />

      <Title className='!text-center'>Category Archives: Events</Title>
      <Flex vertical className='!space-y-10 !w-full !py-10'>
        {currentData.map((evLst) => (
          <Card
            key={evLst.id}
            className='!py-5 !px-10 !bg-gray-400 !w-5/6 !ml-15 cursor-pointer'
            onClick={() => navigate(`${ROUTES.EVENTS_DETAILS}/${evLst.id}`)}
          >
            <Flex justify='flex-start' align='center' gap={100}>
              <Image
                src={evLst.img}
                preview={false}
                className='!w-100 !h-60 !rounded-xl'
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
                >
                  {evLst.desc}
                </Text>
              </Col>
            </Flex>
          </Card>
        ))}
      </Flex>

      <Flex justify='center' className='!pb-10'>
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={data.length}
          onChange={(page) => setCurrentPage(page)}
        />
      </Flex>
    </section>
  );
};

export default IesEvents;
