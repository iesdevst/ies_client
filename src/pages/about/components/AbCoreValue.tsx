import { ArrowUpOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button, Flex, List } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { Text, Title } from '@/components';

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

const AbCoreValue = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });

  return (
    <div
      className={`!bg-[#4B1B1B] rounded-3xl ${!mb ? 'px-35 mt-10 mb-25 mx-7 pt-20 pb-25' : 'mx-3 mt-10 pb-10'}`}
    >
      <Flex
        vertical={mb}
        className={`border-b border-[#EEB585] ${!mb ? ' !pb-8' : '!py-6'}`}
        justify='space-between'
        align='center'
        gap={!mb ? 0 : 10}
      >
        <Title level={!mb ? 1 : 3} className='!text-[#EEB585] !m-0'>
          Values of Our Team
        </Title>

        <div>
          <Button
            size={!mb ? 'large' : 'small'}
            type='default'
            className={`!bg-[#EEB585] !text-black !font-bold hover:!bg-[#916a4a] hover:!text-white ${!mb ? '!px-8 !py-6 !text-lg' : '!px-4 !py-4'}`}
          >
            Contact Us for Details
            <ArrowUpOutlined className='rotate-45 !font-bold' />
          </Button>
        </div>
      </Flex>

      <List
        dataSource={coreVals}
        renderItem={(item) => (
          <List.Item className={`${!mb ? '!border-none !px-0' : '!px-3'}`}>
            <Flex align='flex-start' gap={!mb ? 10 : 6}>
              <CheckCircleOutlined className='!text-[#f5cfa8] !mt-2' />

              <div>
                <Title className='!text-[#f5cfa8] uppercase' level={4}>
                  {item.title}
                </Title>

                <Text
                  className={`!block !text-white ${!mb ? 'pr-10' : 'pr-3'} !text-xs md:!text-2xl lg:!text-2xl`}
                >
                  {item.desc}
                </Text>
              </div>
            </Flex>
          </List.Item>
        )}
        className={`${!mb ? '!mt-10' : '!mt-3'}`}
      />
    </div>
  );
};

export default AbCoreValue;
