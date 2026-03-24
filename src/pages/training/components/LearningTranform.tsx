import { MessageOutlined } from '@ant-design/icons';
import { Flex } from 'antd';

import { useLearnTfData } from '../hooks';
import { Text, Title } from '@/components';

const LearningTranform = () => {
  const { data } = useLearnTfData();
  return (
    <section className='px-15 mb-20'>
      <Title level={4} className='!font-bold !text-center !text-[#7680c4]'>
        Shared Experiences
      </Title>
      <Flex justify='space-between' align='center'>
        <div className='!text-start'>
          <Title className='!m-0 !uppercase'>What Our</Title>
          <Title className='!m-0 !uppercase'>Students Say</Title>
        </div>
        <Text className='!inline-block !font-bold !text-lg'>
          Discover real experiences and feedback from our learners <br />
          as they progress through our short-term training programs.
        </Text>
      </Flex>
      <div className='grid grid-cols-4 gap-6 mt-10 '>
        {data.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl overflow-hidden ${
              item.type === 'image' ? '' : 'bg-gray-100 p-6'
            }`}
          >
            {item.type === 'image' ? (
              <img
                src={item.img}
                alt=''
                className='w-full h-100 object-cover'
              />
            ) : (
              <Flex
                vertical
                justify='space-between'
                align='flex-start'
                className='!h-full'
              >
                <MessageOutlined className='!text-2xl' />

                <Title
                  level={3}
                  className='!font-semibold m-0'
                  style={{
                    whiteSpace: 'pre-line',
                  }}
                >
                  {item.tit}
                </Title>
                <div>
                  <Text className='text-gray-500 !text-lg inline-block'>
                    {item.desc}
                  </Text>
                </div>
                <Title level={5} className='font-medium '>
                  {item.author}
                </Title>
              </Flex>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningTranform;
