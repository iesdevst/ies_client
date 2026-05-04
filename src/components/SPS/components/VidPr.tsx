import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Image, Row } from 'antd';
import React, {
  memo,
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import type { VidPrLayoutProps } from '../types';
import { Text, Title } from '@/components/AntTypography';

const VidPr: React.FC<VidPrLayoutProps> = (props) => {
  const {
    desVid,
    titVid,
    bottomTit,
    vidLink,
    tabletVid,
    miniSc,
    dark,
    navigateGo,
    mb,
  } = props;

  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
      },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const pxClass = useMemo(() => {
    if (mb || miniSc) return '';
    if (tabletVid) return '!px-10';
    return '!px-4';
  }, [mb, miniSc, tabletVid]);

  const imgSize = useMemo(() => {
    if (mb) return '!w-14 !h-14';
    if (tabletVid) return '!w-18 !h-18';
    if (miniSc) return '!w-13 !h-13';
    return '!w-15 !h-15';
  }, [mb, tabletVid, miniSc]);

  const textClass = useMemo(() => {
    if (mb) return '!mt-8 pl-2';
    if (tabletVid) return '!mt-10 !text-2xl !px-2';
    return '!mt-10 !text-lg px-2';
  }, [mb, tabletVid]);

  const handleNavigate = useCallback(() => {
    if (navigateGo) navigate(navigateGo);
  }, [navigate, navigateGo]);

  return (
    <Flex
      vertical={mb || tabletVid}
      className='!w-full items-stretch'
      align='flex-start'
      justify='space-between'
    >
      {/* VIDEO */}
      {vidLink && (
        <div
          ref={ref}
          className={`${mb || tabletVid ? '!w-full px-7' : '!flex-[2] !pl-20'}`}
        >
          <div className='!w-full aspect-video !pb-7'>
            {visible && (
              <iframe
                className='!h-full !w-full rounded-xl shadow-lg !block'
                src={vidLink}
                title='YouTube video'
                allowFullScreen
                loading='lazy'
              />
            )}
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className='flex-[1.5] !mt-5'>
        <Col className='px-5'>
          <Row
            className={`!bg-[#2b2f6b] !py-3 !rounded-xl ${pxClass}`}
            justify={mb || miniSc ? 'space-around' : 'space-between'}
            align='middle'
          >
            <Title
              level={mb || miniSc ? 5 : 4}
              className={`!m-0 !text-[#ffd58a] ${
                mb || miniSc ? '!whitespace-pre-line' : ''
              }`}
            >
              {titVid}
            </Title>

            <Image
              src='https://www.vlu.edu.vn/images/section-1-pattern.svg'
              preview={false}
              className={imgSize}
              loading='lazy'
            />
          </Row>

          <Text
            className={`!mb-8 !text-start !block ${textClass}`}
            color={dark ? 'white' : '#2d334d'}
          >
            {desVid}
          </Text>

          {bottomTit && navigateGo && (
            <Row justify={mb || tabletVid ? 'center' : 'start'} align='middle'>
              <Button
                shape='circle'
                type='text'
                className='flex items-center hover:!bg-transparent'
                onClick={handleNavigate}
              >
                <Title
                  level={4}
                  className={`${dark ? '!text-white' : ''} !m-0`}
                >
                  {bottomTit}
                </Title>
                <ArrowRightOutlined className='!bg-red-600 !text-white !rounded-full p-2' />
              </Button>
            </Row>
          )}
        </Col>
      </div>
    </Flex>
  );
};

export default memo(VidPr);
