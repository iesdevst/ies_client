import { RightOutlined } from '@ant-design/icons';
import { Button, Carousel, Col, Flex } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../iesCl.module.scss';
import type { TrainingSlProps } from '../types';
import { Text, Title } from '@/components/AntTypography';

const TrainSl: React.FC<TrainingSlProps> = (props) => {
  const {
    trainDes,
    trainImgSl,
    trainTit,
    statistics,
    statisTit,
    navigateGo,
    mb,
  } = props;
  const navigate = useNavigate();
  return (
    <div className='!w-full !h-full'>
      <div
        className="
    relative 
    z-0
    before:content-[''] 
    before:absolute 
    before:top-50
    before:left-0
    before:w-1/6
    before:h-4/5
    before:bg-[#1951a1] 
    before:-z-10
  "
      >
        <Flex
          vertical={mb}
          justify={!mb ? 'flex-start' : ''}
          align={!mb ? 'center' : 'start'}
          gap={!mb ? 100 : 10}
          className={`${!mb ? '!px-22' : '!pl-3'}`}
        >
          <Title className='!m-0 !text-white'>{trainTit}</Title>
          <Text className='!text-lg mt-2' color='white'>
            {trainDes}
          </Text>

          {mb && (
            <div className='!text-start'>
              {navigateGo && (
                <Button
                  className='!bg-transparent !p-0'
                  type='text'
                  onClick={() => navigate(navigateGo)}
                >
                  <Title className='!m-0 !text-white' level={4}>
                    {statisTit}
                  </Title>
                  <div className='w-full h-full !bg-[#FBBF24] rounded-r-full flex items-center justify-center px-3'>
                    <RightOutlined className='!text-red-500 !font-semibold ' />
                  </div>
                </Button>
              )}
            </div>
          )}
        </Flex>
        <Carousel
          autoplay
          pauseOnHover={false}
          effect={!mb ? 'fade' : 'scrollx'}
          dots={!mb ? true : false}
          arrows={false}
          slidesPerRow={mb ? 1 : 3}
          className={`${styles.dotTrainCustom} dot-train my-15 ${!mb ? 'px-20' : 'pl-11'}`}
        >
          {trainImgSl.map((item, index) => (
            <div key={index} className='!pr-10'>
              <div className='relative rounded-xl overflow-hidden'>
                <img
                  src={item.icon}
                  style={{
                    width: '100%',
                    height: '30vh',
                    objectFit: 'cover',
                  }}
                  className='!rounded-xl '
                  loading='lazy'
                />
                <div className='absolute bottom-0 left-0 pl-6 pb-2'>
                  <Title
                    className='!font-bold !m-0 !text-white'
                    key={index}
                    level={4}
                  >
                    {item.title}
                  </Title>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div>
        <Flex
          justify='space-between'
          align='center'
          className='relative z-10 bg-[#1951a1]'
        >
          {!mb && (
            <div className='flex-[3] !text-start '>
              {navigateGo && (
                <Button
                  className='!bg-transparent !pl-20'
                  type='text'
                  onClick={() => navigate(navigateGo)}
                >
                  <Title className='!m-0 !text-white' level={4}>
                    {statisTit}
                  </Title>
                  <div className='w-full h-full !bg-[#FBBF24] rounded-r-full flex items-center justify-center px-3'>
                    <RightOutlined className='!text-red-500 !font-semibold ' />
                  </div>
                </Button>
              )}
            </div>
          )}

          <div className='flex-[4] !py-20 bg-gradient-to-r from-blue-900 to-blue-800'>
            <Flex
              vertical={mb}
              className={`${mb ? '!px-5 gap-y-8' : '!gap-x-30 !pl-20'}`}
              align={mb ? 'center' : ''}
            >
              {statistics.map((item, index) => (
                <Col key={index} className={mb ? '!text-center' : ''}>
                  <Title className='!m-0 !mb-5 !font-bold !text-5xl !text-[#FBBF24]'>
                    {item.num}
                  </Title>
                  <Text
                    className={`${!mb ? 'whitespace-pre-line !text-lg' : '!text-2xl'} `}
                    color='white'
                  >
                    {item.des}
                  </Text>
                </Col>
              ))}
            </Flex>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default TrainSl;
