import {
  ClockCircleOutlined,
  DownOutlined,
  SafetyCertificateOutlined,
  UpOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Card, Col, Flex, Image, Row } from 'antd';
import { useMemo, useState } from 'react';
import { useTrainingData } from '../hooks';
import { Text, Title } from '@/components';

interface IProgLstCard {
  slugName?: string;
}

const ProgLstCard: React.FC<IProgLstCard> = (props) => {
  const { slugName } = props || {};
  const { data } = useTrainingData();
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});
  const toggleExpand = (key: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const trainings = useMemo(() => {
    const programs = slugName
      ? data.filter((item) => item.slug === slugName)
      : data;

    return programs.flatMap((prog) =>
      prog.trainings.map((train) => ({
        ...train,
        progTit: prog.title,
      })),
    );
  }, [data, slugName]);

  return (
    <section className='p-15'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {trainings.map((train) => {
          const key = `${train.train}-${train.progTit}`;
          return (
            <Card
              key={key}
              className='!h-full !bg-white !border-gray-300 shadow-md hover:!shadow-xl transition !p-6 !rounded-2xl'
            >
              <Row justify={'start'} align={'middle'} className='gap-x-6'>
                <div>
                  <Image
                    src={train.trainPic}
                    preview={false}
                    className='!w-18 !h-18 rounded-lg'
                  />
                </div>
                <Col>
                  <Title level={5} className='!m-0 !font-normal !text-gray-500'>
                    {train.progTit}
                  </Title>
                  <Title level={4} className='!m-0'>
                    {train.train}
                  </Title>
                </Col>
              </Row>
              <div
                style={{
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: expandedMap[key] ? 'unset' : 4,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                <Text className='!font-semibold !mt-3 !block'>
                  {train.desc}
                </Text>
              </div>
              <div className='!text-end !pr-3'>
                <Button
                  type='text'
                  onClick={() => toggleExpand(key)}
                  className='!text-blue-500 underline !p-0'
                  style={{ fontSize: 14 }}
                >
                  {expandedMap[key] ? (
                    <>
                      Less <UpOutlined />
                    </>
                  ) : (
                    <>
                      More <DownOutlined />
                    </>
                  )}
                </Button>
              </div>
              <Flex
                justify='space-around'
                align='center'
                className='!mb-2.5 !mt-5'
              >
                <Row justify={'center'} align={'middle'} className='gap-x-1.5'>
                  <UserOutlined className='!text-black' />
                  <Text className='mt-1 !font-semibold'>IES Teacher</Text>
                </Row>
                <Row justify={'center'} align={'middle'} className='gap-x-1.5'>
                  <ClockCircleOutlined className='!text-black' />
                  <Text className='!font-semibold'>12 month</Text>
                </Row>
                <Row justify={'center'} align={'middle'} className='gap-x-1.5'>
                  <SafetyCertificateOutlined className='!text-black' />
                  <Text className='!font-semibold'>Certificate</Text>
                </Row>
              </Flex>
              <div>
                <Button
                  type='default'
                  className='!bg-[#2974D7] !w-full !border-none !rounded-2xl hover:!bg-[#6aa1e8]'
                >
                  Explore Program
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ProgLstCard;
