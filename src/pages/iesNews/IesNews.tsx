import { HomeFilled, RightOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Col, Flex, Image, Pagination } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useNewsLstData } from './hooks';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const PAGE_SIZE = 3;

const IesNews = () => {
  const mb = useMediaQuery({ maxWidth: 767 });
  const { isDark } = useUserStore();
  const { data } = useNewsLstData();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentData = data.slice(startIndex, startIndex + PAGE_SIZE);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [currentPage]);
  return (
    <section ref={sectionRef}>
      <Breadcrumb
        className={`${!mb ? '!ml-25 !py-15 ' : '!ml-5 !py-6'}`}
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
                News
              </Text>
            ),
          },
        ]}
      />

      <Title level={!mb ? 5 : 3} className='!text-center'>
        Category Archives: News
      </Title>
      <Flex vertical className='!space-y-10 !w-full !py-10'>
        {currentData.map((newsLst) => (
          <Card
            key={newsLst.id}
            className={`${!mb ? '!w-5/6 !ml-15 !py-5 !px-10' : '!p-5 !mx-3'} !bg-gray-400 cursor-pointer`}
            onClick={() => navigate(`${ROUTES.NEWS_DETAILS}/${newsLst.id}`)}
          >
            <Flex
              justify='flex-start'
              align='center'
              gap={!mb ? 100 : 30}
              vertical={mb}
            >
              <Image
                src={newsLst.img}
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
                  {newsLst.newsTit}
                </Title>
                <Text
                  className='!block !text-lg'
                  style={{
                    whiteSpace: 'pre-line',
                  }}
                >
                  {newsLst.desc}
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

export default IesNews;
