import { ArrowUpOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Flex } from 'antd';
import React, { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { NewsFeatureLayoutProps } from '../types';
import { Text, Title } from '@/components/AntTypography';

const NewsFeat: React.FC<NewsFeatureLayoutProps> = (props) => {
  const {
    feature = true,
    butTit,
    featCard,
    bonusTit,
    moreBut,
    moreClass,
    dark,
    navigateGo,
    mb,
    title,
    className,
    children,
  } = props;
  const navigate = useNavigate();
  const handleNavigate = useCallback(
    (url: string) => navigate(url),
    [navigate],
  );

  const renderFeatureCards = useMemo(() => {
    if (!feature) return null;

    return featCard.map((item) => (
      <Card
        key={item.id}
        hoverable
        className={`${dark ? '!bg-gray-700' : '!bg-white'} rounded-2xl overflow-hidden shadow-lg !border-none !cursor-default`}
        cover={
          <img
            src={item.imgC}
            alt='Workshop'
            className='h-[200px] w-full object-cover'
            loading='lazy'
          />
        }
      >
        <div className='!px-5 !py-3'>
          {item.tit && (
            <Flex justify='space-between' align='center' className='!py-2'>
              <Title level={5} className='!text-blue-500 !m-0'>
                {item.tit}
              </Title>

              {item.butCard && (
                <div className='relative'>
                  <div
                    className={`${dark ? '!text-white' : '!text-black'} !bg-blue-600 px-5 py-1 font-semibold text-sm`}
                  >
                    {item.butCard}
                  </div>
                  <div
                    className={`${dark ? 'bg-gray-700' : 'bg-white'} absolute right-[-8px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45`}
                  />
                </div>
              )}
            </Flex>
          )}

          <Text
            className='font-semibold mb-6 !text-lg !block'
            color={dark ? 'white' : ''}
          >
            {item.des}
          </Text>
        </div>
      </Card>
    ));
  }, [feature, featCard, dark]);

  const renderNormalCards = useMemo(() => {
    if (feature) return null;

    return featCard.map((item) => (
      <Col key={item.id}>
        <img
          src={item.imgC}
          className='!h-65 w-full mb-3.5 rounded-lg'
          loading='lazy'
        />
        <Title level={4} className={`${dark ? '!text-white' : '!text-black'}`}>
          {item.tit}
        </Title>
        <p
          className={`mb-2 ${dark ? 'text-white' : ''} ${
            !mb ? '!text-lg' : '!text-sm'
          }`}
        >
          {item.des}
        </p>
        {item.navigo && (
          <Button
            type='text'
            className='!text-blue-600 !p-0 !font-bold !text-md !underline'
            onClick={() => handleNavigate(item.navigo!)}
          >
            {item.butCard} <ArrowUpOutlined className='!rotate-45' />
          </Button>
        )}
      </Col>
    ));
  }, [feature, featCard, dark, mb, handleNavigate]);

  return (
    <div className={`${className}`}>
      <Flex
        vertical={mb}
        justify='space-between'
        align='center'
        className={`${!feature ? '!mb-3.5' : ''}`}
      >
        <Title className={`${dark ? '!text-white' : ''}`}>{title}</Title>

        {butTit && navigateGo && (
          <div>
            <Button
              className={`!bg-transparent ${!mb ? '!pl-20' : ''}`}
              type='text'
              onClick={() => handleNavigate(navigateGo)}
            >
              <Title
                className={`${dark ? '!text-white' : '!text-black'} !m-0`}
                level={4}
              >
                {butTit}
              </Title>
              <div className='w-full h-full !bg-[#FBBF24] rounded-r-full flex items-center justify-center px-3'>
                <RightOutlined className='!text-red-500 !font-semibold ' />
              </div>
            </Button>
          </div>
        )}
      </Flex>
      {feature && children}
      <div className={`${moreClass}`}>
        {bonusTit && moreBut && (
          <Flex
            vertical={mb}
            justify='space-between'
            align='center'
            className='!mb-10'
          >
            <Title
              className={`!m-0 !font-bold ${dark ? '!text-white' : ''}`}
              level={3}
            >
              {bonusTit}
            </Title>
          </Flex>
        )}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {feature ? renderFeatureCards : renderNormalCards}
        </div>
      </div>
    </div>
  );
};

export default memo(NewsFeat);
