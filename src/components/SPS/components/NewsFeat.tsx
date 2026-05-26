import ArrowUpOutlined from '@ant-design/icons/es/icons/ArrowUpOutlined';
import RightOutlined from '@ant-design/icons/es/icons/RightOutlined';
import Button from 'antd/es/button';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import React, { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { NewsFeatureLayoutProps } from '../types';
import { Title } from '@/components/AntTypography';
import { ROUTES } from '@/constants';
import type { EvsNavi } from '@/pages/iesNews/components/EvsLst';

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

  const hdlNavigate = useCallback(
    (navi: EvsNavi) => {
      const searchParams = new URLSearchParams({
        authorN: navi.authorN,
        evDate: navi.evDate,
      });
      navigate(
        `${ROUTES.EVENTS_DETAILS}/${navi.id}?${searchParams.toString()}`,
      );
    },
    [navigate],
  );

  const renderFeatureCards = useMemo(() => {
    if (!feature) return null;

    return featCard.map((item) => (
      <Card
        key={item.id}
        hoverable
        className={`${dark ? '!bg-gray-700' : '!bg-white'} rounded-2xl overflow-hidden shadow-lg !border-none !cursor-pointer`}
        cover={
          <img
            src={item.img}
            alt='Workshop'
            className='h-[200px] w-full object-cover'
            loading='lazy'
          />
        }
        onClick={() =>
          hdlNavigate({
            id: item.id,
            authorN: item.authorN!,
            evDate: item.evDate!,
          })
        }
      >
        <div>
          {(item.tit || item.highlight) && (
            <div className='!pb-5'>
              <Flex
                justify='space-between'
                align='center'
                className={`${dark ? '!text-white' : '!text-black'} !bg-[#6d82bc] !px-5 !py-1`}
              >
                <Title level={5} className='!text-white !m-0'>
                  {bonusTit}
                </Title>
                <Title level={5} className='!text-white !m-0'>
                  {item.butCard || item.evDate}
                </Title>
              </Flex>
              <Title level={5} className='!text-center !mt-4'>
                {item.tit || item.highlight}
              </Title>
            </div>
          )}
        </div>
      </Card>
    ));
  }, [feature, featCard, dark, bonusTit, hdlNavigate]);

  const renderNormalCards = useMemo(() => {
    if (feature) return null;

    return featCard.map((item) => (
      <Col key={item.id}>
        <img
          src={item.img}
          className='!h-65 w-full mb-3.5 rounded-lg'
          loading='lazy'
          alt='cardf'
        />
        <Title level={4} className={`${dark ? '!text-white' : '!text-black'}`}>
          {item.tit}
        </Title>
        <p
          className={`mb-2 ${dark ? 'text-white' : ''} ${!mb ? '!text-lg' : '!text-sm'}`}
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
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8'>
          {feature ? renderFeatureCards : renderNormalCards}
        </div>
      </div>
    </div>
  );
};

export default memo(NewsFeat);
