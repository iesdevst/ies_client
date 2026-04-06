import {
  ClockCircleOutlined,
  DownOutlined,
  SafetyCertificateOutlined,
  UpOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Card, Col, Flex, Image, Row } from 'antd';
import { useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useTrainingData } from '../hooks';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';
import { ProgramSlugEnum } from '@/utils';

interface IProgLstCard {
  slugName: ProgramSlugEnum;
  dark: boolean;
}

const ProgLstCard: React.FC<IProgLstCard> = (props) => {
  const mb = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const { slugName, dark } = props || {};
  const { data } = useTrainingData();
  const navigate = useNavigate();
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});
  const toggleExpand = (key: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const trainings = useMemo(() => {
    const programs =
      slugName !== ProgramSlugEnum.All
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
    <section className='p-5 md:p-8 lg:p-15'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {trainings.map((train) => {
          const key = `${train.train}-${train.progTit}`;
          return (
            <Card
              key={key}
              className={`!h-full shadow-md hover:!shadow-xl transition !p-5 !rounded-2xl ${dark ? '' : '!border-gray-300'}`}
            >
              <Flex vertical={mb || tablet} align='center' className='gap-x-6'>
                <div>
                  <Image
                    src={train.trainPic}
                    preview={false}
                    className={`rounded-lg ${mb || tablet ? '!w-full !h-26' : '!w-18 !h-18'}`}
                  />
                </div>
                <Col>
                  <Title
                    level={5}
                    className={`!m-0 !font-normal !text-gray-500 ${mb || tablet ? '!text-center' : ''}`}
                  >
                    {train.progTit}
                  </Title>
                  <Title
                    level={mb || tablet ? 5 : 4}
                    className={`!m-0 ${mb || tablet ? '!text-center' : ''}`}
                  >
                    {train.train}
                  </Title>
                </Col>
              </Flex>
              <div
                style={{
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: expandedMap[key] ? 'unset' : 4,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                <Text
                  color={dark ? 'white' : 'black'}
                  className='!font-semibold !mt-3 !block'
                >
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
                gap={tablet ? 10 : 0}
              >
                <Row justify={'center'} align={'middle'} className='gap-x-1.5'>
                  <UserOutlined
                    className={`${dark ? '!text-white' : '!text-black'}`}
                  />
                  <Text className='!font-semibold' color={dark ? 'white' : ''}>
                    IES Teacher
                  </Text>
                </Row>
                <Row justify={'center'} align={'middle'} className='gap-x-1.5'>
                  <ClockCircleOutlined
                    className={`${dark ? '!text-white' : '!text-black'}`}
                  />
                  <Text color={dark ? 'white' : ''} className='!font-semibold'>
                    12 month
                  </Text>
                </Row>
                <Row justify={'center'} align={'middle'} className='gap-x-1.5'>
                  <SafetyCertificateOutlined
                    className={`${dark ? '!text-white' : '!text-black'}`}
                  />
                  <Text color={dark ? 'white' : ''} className='!font-semibold'>
                    Certificate
                  </Text>
                </Row>
              </Flex>
              <div>
                <Button
                  type='default'
                  className='!bg-[#2974D7] !w-full !border-none !rounded-2xl hover:!bg-[#6aa1e8] hover:!text-black'
                  onClick={() =>
                    navigate(`${ROUTES.DEMICS_DETAIL}/${train.progType}`)
                  }
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
