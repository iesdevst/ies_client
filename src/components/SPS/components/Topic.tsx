import RightOutlined from '@ant-design/icons/es/icons/RightOutlined';
import Button from 'antd/es/button';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import Row from 'antd/es/row';
import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { TopicLayoutProps } from '../types';
import { Title } from '@/components/AntTypography';

const Topic: React.FC<TopicLayoutProps> = (props) => {
  const {
    topicI,
    topicCt,
    topImaTit,
    topTitBut,
    botBut,
    botTit,
    lstBut,
    methodLst,
    dark,
    navigateGo,
    aboutTogo,
    mb,
  } = props;
  const navigate = useNavigate();
  const handleNavigate = useCallback(
    (url: string) => navigate(url),
    [navigate],
  );
  return (
    <div className='!space-y-5'>
      <Flex
        vertical={mb}
        justify='space-between'
        align={!mb ? 'end' : 'center'}
        gap={!mb ? 0 : 20}
      >
        <img
          src={topImaTit}
          className={`${!mb ? '!w-150' : ''} ${dark ? 'rounded-xl' : ''}`}
          loading='lazy'
        />

        {topTitBut && aboutTogo && (
          <div>
            <Button
              className={`!bg-transparent ${!mb ? '!pl-20' : ''}`}
              type='text'
              onClick={() => handleNavigate(aboutTogo)}
            >
              <Title
                className={`!m-0 ${dark ? '!text-white' : '!text-black'}`}
                level={4}
              >
                {topTitBut}
              </Title>
              <div className='w-full h-full !bg-[#FBBF24] rounded-r-full flex items-center justify-center px-3'>
                <RightOutlined className='!text-red-500 !font-semibold ' />
              </div>
            </Button>
          </div>
        )}
      </Flex>
      <Flex vertical={mb} align='center'>
        <div className='flex-2 flex justify-end mr-2.5'>
          <img
            src={topicI}
            className={`${!mb ? '!h-130 !w-130' : ''}`}
            loading='lazy'
          />
        </div>

        <div className='pt-10 flex-3 space-y-9'>
          {topicCt.map((item) => (
            <Col
              key={item.id}
              className={`${item.bgColor} py-7 px-6 rounded-xl`}
            >
              <Title level={4} className='!text-[#ffe2a9]'>
                {item.tit}
              </Title>
              <p
                className='!text-white !text-xl whitespace-pre-line'
                style={{
                  fontWeight: '450',
                }}
              >
                {item.des}
              </p>
            </Col>
          ))}
        </div>
      </Flex>
      <div className='mt-15 !space-y-10'>
        <Flex vertical={mb} justify='space-between' align='center'>
          <Title
            level={!mb ? 1 : 2}
            className={`${!mb ? '!m-0' : ''} ${dark ? '!text-white' : ''}`}
          >
            {botTit}
          </Title>

          {botBut && navigateGo && (
            <div>
              <Button
                className='!bg-transparent !p-0'
                type='text'
                onClick={() => handleNavigate(navigateGo)}
              >
                <Title
                  className={`!m-0 ${dark ? '!text-white' : '!text-black'}`}
                  level={4}
                >
                  {botBut}
                </Title>
                <div className='w-full h-full !bg-[#FBBF24] rounded-r-full flex items-center justify-center px-3'>
                  <RightOutlined className='!text-red-500 !font-semibold' />
                </div>
              </Button>
            </div>
          )}
        </Flex>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {methodLst.map((item) => (
            <Row
              key={item.id}
              justify={'start'}
              align={'top'}
              className='gap-x-5'
            >
              <div>
                <img
                  src={item.thodAv}
                  className={`${!mb ? '!w-15 !h-17' : '!w-8 !h-8'}`}
                  loading='lazy'
                />
              </div>
              <Col>
                <Title
                  level={!mb ? 4 : 5}
                  className={`${dark ? '!text-white' : ''} ${!mb ? '!m-0 !mb-2.5' : '!m-0'}`}
                >
                  {item.meTit}
                </Title>
                <Button
                  type='text'
                  className='!text-blue-500 !font-bold !text-lg !p-0'
                  onClick={() => handleNavigate(item.methodGo)}
                >
                  {lstBut}
                </Button>
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Topic);
