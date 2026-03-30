import { RightOutlined } from '@ant-design/icons';
import { Breadcrumb, Flex, Image } from 'antd';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ContactKey from '../home/components/ContactKey';
import { useEventsData } from './hooks';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';

const IesEventsDetails = () => {
  const { id } = useParams();
  const { data } = useEventsData();

  const detailDt = useMemo(() => {
    if (!data || !id) return;
    return data.find((item) => String(item.id) === String(id));
  }, [data, id]);
  return (
    <section className='bg-white'>
      <div className='!rounded-4xl !bg-[#dfe0e2] pt-10 py-20 mx-5'>
        <Breadcrumb
          className={` !ml-25 !py-15  `}
          separator={<RightOutlined className='!text-black mx-6' />}
          items={[
            {
              title: (
                <PrefetchLink
                  to={ROUTES.EVENTS}
                  style={{
                    color: 'black',
                    fontWeight: 700,
                    fontSize: '15px',
                  }}
                >
                  Events Page
                </PrefetchLink>
              ),
            },
            {
              title: (
                <Text color='#545969' className='!text-[16px] !font-bold'>
                  Event Details
                </Text>
              ),
            },
          ]}
        />
        <Title level={5} className='!text-center'>
          Event
        </Title>
        {detailDt && (
          <section>
            <Flex
              vertical
              justify='center'
              align='center'
              className='!px-20'
              gap={40}
            >
              <Title> {detailDt.eventTit}</Title>
              <Image src={detailDt.img} className='!rounded-2xl !w-full' />
              <Text
                className='!block !text-lg'
                style={{
                  whiteSpace: 'pre-line',
                }}
              >
                {detailDt.desc}
              </Text>
            </Flex>
          </section>
        )}
      </div>
      <ContactKey />
    </section>
  );
};

export default IesEventsDetails;
