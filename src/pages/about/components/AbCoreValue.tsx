import { ArrowUpOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button, Flex, List } from 'antd';
import { Text, Title } from '@/components';

const AbCoreValue = () => {
  const coreVals = [
    {
      title: 'PASSION',
      desc: 'A strong passion for the field of education is always a crucial factor in fulfilling the mission and goals of IESCollege.',
    },
    {
      title: 'RESPONSIBILITY',
      desc: 'Understanding and maintaining a strong sense of responsibility toward students, partners, and society is an essential principle guiding IESCollege’s operations',
    },
    {
      title: 'CREATIVITY',
      desc: 'While honoring and preserving traditional values, IESCollege continuously encourages creativity, innovation, improvement, and development among its staff to create sustainable value for the organization and the community.',
    },
    {
      title: 'EFFORT & PERSEVERANCE',
      desc: 'Dedication to achieving set goals, courage in facing challenges, and persistence in overcoming difficulties are the keys to success.',
    },
    {
      title: 'UNITY & SHARING',
      desc: 'Under the shared home of IESCollege, every individual and the collective are responsible for all activities. Members always stand together, share challenges and responsibilities, and celebrate success for the growth of the organization, the community, and the prosperity of the nation.',
    },
    {
      title: 'TRAINING QUALITY',
      desc: 'With its mission, IESCollege is committed to providing high-quality education that meets the needs of society. This is the most accurate measure of the value of all IESCollege’s activities.',
    },
  ];

  return (
    <div className='px-35 !bg-[#4B1B1B] mt-10 mb-25 mx-7 rounded-3xl pt-20 pb-25'>
      <Flex
        className='border-b border-[#EEB585] !pb-8'
        justify='space-between'
        align='center'
      >
        <Title className='!text-[#EEB585] !m-0'>Values of Our Team</Title>

        <div>
          <Button
            size='large'
            type='default'
            className='!bg-[#EEB585] !text-black !text-lg !font-bold !px-8 !py-6  hover:!bg-[#916a4a] hover:!text-white'
          >
            Contact Us for Details
            <ArrowUpOutlined className='rotate-45 !font-bold' />
          </Button>
        </div>
      </Flex>

      <List
        dataSource={coreVals}
        renderItem={(item) => (
          <List.Item className='!border-none !px-0'>
            <Flex align='flex-start' gap={10}>
              <CheckCircleOutlined className='!text-[#f5cfa8] !mt-2' />

              <div>
                <Title className='!text-[#f5cfa8] uppercase !m-0' level={4}>
                  {item.title}
                </Title>

                <Text className='!block !text-white !text-xl pr-10'>
                  {item.desc}
                </Text>
              </div>
            </Flex>
          </List.Item>
        )}
        className='!mt-10'
      />
    </div>
  );
};

export default AbCoreValue;
