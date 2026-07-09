import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';
import Button from 'antd/es/button';
import Flex from 'antd/es/flex';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { VidPrLayoutProps } from '../types';
import { Text, Title } from '@/components/AntTypography';

const VidPr: React.FC<VidPrLayoutProps> = (props) => {
  const {
    desVid,
    titVid,
    bottomTit,
    vidLink,
    tl,
    tlpr,
    dark,
    navigateGo,
    mb,
    dk,
    imgWait,
  } = props;

  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement | null>(null);
  const [play, setPlay] = useState(false);

  const pxClass = useMemo(() => {
    if (mb) return '!px-5';
    if (tl) return '!px-10';
    if (tlpr) return '!px-5';
    return '!px-5';
  }, [mb, tl, tlpr]);

  const imgSize = useMemo(() => {
    if (mb) return 'w-14 h-14';
    if (tl) return 'w-25 h-25';
    if (tlpr) return 'w-30 h-35';
    return 'w-20 h-20';
  }, [mb, tl, tlpr]);

  const handleNavigate = useCallback(() => {
    if (navigateGo) navigate(navigateGo);
  }, [navigate, navigateGo]);

  return (
    <Flex vertical={!dk} justify='space-between'>
      {/* VIDEO */}
      {vidLink && dk && (
        <div
          ref={ref}
          className={`${mb || tl ? 'w-full px-7' : 'flex-[2] pl-20'}`}
        >
          <div className='relative w-full aspect-video'>
            {!play ? (
              <img
                src={imgWait}
                className='w-full h-full object-cover rounded-xl cursor-pointer'
                onClick={() => setPlay(true)}
                alt='vidpr'
              />
            ) : (
              <iframe
                src={vidLink}
                className='w-full h-full rounded-xl'
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className={`${dk && 'flex-[1.5] pl-15'}`}>
        {/* HEADER */}
        <Flex
          justify='space-between'
          align='center'
          gap={tlpr ? 100 : dk ? 75 : 6}
          className={`bg-[#2b2f6b] !py-3 rounded-xl ${pxClass}`}
        >
          <Title
            level={dk ? 3 : tl ? 1 : tlpr ? 1 : 5}
            className='!m-0 !text-[#ffd58a]'
          >
            {titVid}
          </Title>

          <img
            src='https://www.vlu.edu.vn/images/section-1-pattern.svg'
            className={imgSize}
            loading='lazy'
            alt='vidprzz'
          />
        </Flex>

        {vidLink && !dk && (
          <div ref={ref} className={`${tlpr ? 'my-12' : 'my-7'} w-full`}>
            <div className='relative w-full aspect-video'>
              {!play ? (
                <img
                  src={imgWait}
                  className='w-full h-full object-cover rounded-xl cursor-pointer'
                  onClick={() => setPlay(true)}
                  alt='vidpr'
                />
              ) : (
                <iframe
                  src={vidLink}
                  className='w-full h-full rounded-xl'
                  allowFullScreen
                />
              )}
            </div>
          </div>
        )}

        <div className={`${dk && 'mt-10'}`}>
          {/* DESCRIPTION */}
          <Text
            color={dark ? 'white' : '#2d334d'}
            className='!block !text-start mb-5 !text-lg'
          >
            {desVid}
          </Text>

          {/* BUTTON */}
          {bottomTit && navigateGo && (
            <Button
              type='text'
              onClick={handleNavigate}
              className='cursor-pointer !p-0 !gap-x-5'
            >
              <Text color={dark ? 'white' : ''} className='block !text-lg'>
                {bottomTit}
              </Text>

              <Text
                color='white'
                className={`!block !bg-red-600 rounded-full px-3.5 pb-0.5 ${tl || tlpr ? '!text-xl' : ''}`}
              >
                <ArrowRightOutlined />
              </Text>
            </Button>
          )}
        </div>
      </div>
    </Flex>
  );
};

export default memo(VidPr);
