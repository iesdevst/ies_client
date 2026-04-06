import {
  ArrowRightOutlined,
  ArrowUpOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Button, Card, Carousel, Col, Divider, Flex, Image, Row } from 'antd';
import type { CSSProperties, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Title } from '../AntTypography';
import styles from './iesCl.module.scss';
export type SubSecLayout =
  | 'systemCardSplit'
  | 'slideCus'
  | 'topic'
  | 'trainingSl'
  | 'vidPr'
  | 'newsFeature'
  | 'simple';

interface BasePageIesSecProps {
  id: string;
  className?: string;
  style?: CSSProperties;
  dark?: boolean;
  children?: ReactNode;
  height?: string;
  bgImg?: string | { src: string } | { default: string };
  simpleFeat?: boolean;
  title?: string;
  mb?: boolean;
  navigateGo?: string;
}

interface SCSLayoutProps extends BasePageIesSecProps {
  layout: 'systemCardSplit';
  splitFeat?: React.ReactNode;
  reverse?: boolean;
}

interface SlideCusLayoutProps extends BasePageIesSecProps {
  layout: 'slideCus';
  images: Array<string>;
}

interface SimpleLayoutProps extends BasePageIesSecProps {
  layout: 'simple';
  divider: boolean;
}

interface VidPrLayoutProps extends BasePageIesSecProps {
  layout: 'vidPr';
  vidLink?: string;
  titVid: string;
  desVid: string;
  bottomTit: string;
  tabletVid?: boolean;
  miniSc?: boolean;
}

interface TrainingSlProps extends BasePageIesSecProps {
  layout: 'traningSl';
  trainTit: string;
  trainDes: string;
  trainImgSl: Array<{ icon: string; title: string }>;
  statisTit: string;
  statistics: Array<{ num: string; des: string }>;
}

interface TopicLayoutProps extends BasePageIesSecProps {
  layout: 'topic';
  topImaTit: string;
  topTitBut?: string;
  botBut?: string;
  botTit?: string;
  lstBut: string;
  topicI: string;
  aboutTogo: string;
  topicCt: Array<{ tit: string; des: string; bgColor: string }>;
  methodLst: Array<{ thodAv: string; meTit: string; methodGo: string }>;
}

interface NewsFeatureLayoutProps extends BasePageIesSecProps {
  layout: 'newsFeature';
  feature: boolean;
  butTit?: string;
  featCard: Array<{
    imgC: string;
    tit?: string;
    butCard?: string;
    des?: string;
    navigo?: string;
  }>;
  bonusTit?: string;
  moreBut?: string;
  moreClass?: string;
}

export type SubSectionProps =
  | SCSLayoutProps
  | SlideCusLayoutProps
  | VidPrLayoutProps
  | TrainingSlProps
  | TopicLayoutProps
  | NewsFeatureLayoutProps
  | SimpleLayoutProps;

export const IesClSection: React.FC<SubSectionProps> = (props) => {
  const {
    id,
    // dark,
    mb,
    children,
    style,
    layout,
    title,
    bgImg,
    height,
    simpleFeat = false,
    className,
  } = props || {};

  const navigate = useNavigate();

  const renderSlideCusLayout = (props: SlideCusLayoutProps) => {
    const { images } = props;

    return (
      <div className={`${className}`}>
        <Carousel
          pauseOnHover={true}
          autoplay
          effect={`${!mb ? 'fade' : 'scrollx'}`}
          dots={!mb}
          arrows={false}
          className={styles.dotCustom}
        >
          {images.map((img, index) => (
            <div key={index} className='!w-full'>
              <img
                src={img}
                style={{
                  objectFit: !mb ? 'fill' : 'revert-layer',
                  zIndex: -1,
                }}
                className='relative !w-full !h-[87.7vh]'
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  };
  const renderSCSLayout = (props: SCSLayoutProps) => {
    const { splitFeat, reverse } = props;
    return (
      <Col className='w-full'>
        {title && (
          <Col
            className={`flex flex-col items-center justify-center ${mb ? 'mb-5' : ' mb-15'}`}
          >
            <Title className='!text-white'>{title}</Title>
          </Col>
        )}
        <Flex
          vertical={mb}
          className={`${reverse ? styles.splitCustomContainer : styles.splitFalseCusContainer}`}
        >
          {!reverse ? (
            <>
              {children}
              {splitFeat}
            </>
          ) : (
            <>
              {splitFeat}
              {children}
            </>
          )}
        </Flex>
      </Col>
    );
  };
  const renderTopicLayout = (props: TopicLayoutProps) => {
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
    } = props;

    return (
      <div className='!space-y-5'>
        <Flex
          vertical={mb}
          justify='space-between'
          align={!mb ? 'end' : 'center'}
          gap={!mb ? 0 : 20}
        >
          <Image
            src={topImaTit}
            className={`${!mb ? '!w-150' : ''} ${dark ? 'rounded-xl' : ''}`}
            preview={false}
          />

          {topTitBut && aboutTogo && (
            <div>
              <Button
                className={`!bg-transparent ${!mb ? '!pl-20' : ''}`}
                type='text'
                onClick={() => navigate(aboutTogo)}
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
            <Image
              src={topicI}
              preview={false}
              className={`${!mb ? '!h-130 !w-130' : ''}`}
            />
          </div>

          <div className='pt-10 flex-3 space-y-9'>
            {topicCt.map((item, index) => (
              <Col
                key={index}
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
                  onClick={() => navigate(navigateGo)}
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
            {methodLst.map((item, index) => (
              <Row
                key={index}
                justify={'start'}
                align={'top'}
                className='gap-x-5'
              >
                <div>
                  <Image
                    src={item.thodAv}
                    preview={false}
                    className={`${!mb ? '!w-15 !h-17' : '!w-8 !h-8'}`}
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
                    onClick={() => navigate(item.methodGo)}
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

  const renderVidPrLayout = (props: VidPrLayoutProps) => {
    const {
      desVid,
      titVid,
      bottomTit,
      vidLink,
      tabletVid,
      miniSc,
      dark,
      navigateGo,
    } = props;

    const getPositionClass = () => {
      if (mb) return 'left-8 bottom-0 w-full';
      if (tabletVid) return 'left-76 bottom-0 w-[60%]';
      if (miniSc) return 'left-175 top-6';
      return 'left-220 top-10';
    };
    const getImgH = () => {
      if (mb) return 'h-15';
      if (tabletVid) return 'h-20';
      if (miniSc) return 'h-20';
      return 'h-25';
    };
    const getTxtHdl = () => {
      if (mb) return '!mt-8';
      if (tabletVid) return '!mt-10 !text-2xl px-20';
      if (miniSc) return '!mt-10';
      return '!mt-20 !text-lg';
    };

    return (
      <Flex
        vertical={mb || tabletVid}
        className='!w-full items-stretch'
        align={'center'}
        justify='space-between'
      >
        {/* LEFT - VIDEO */}
        {vidLink && (
          <div
            className={`relative ${mb || tabletVid ? '' : '!flex-[2] !pl-20'}`}
          >
            <div className='!w-full aspect-video !pb-7'>
              <iframe
                className={`!h-full ${!tabletVid ? '!w-full' : '!w-[750px]'} rounded-xl shadow-lg !block`}
                src={vidLink}
                title='YouTube video'
                allowFullScreen
              />
            </div>

            <div className={`absolute z-20 w-2/3 ${getPositionClass()}`}>
              <div
                className={`relative bg-[#2b2f6b] flex items-center justify-start ${!mb ? 'px-6 py-4' : 'py-1.5 px-2'}`}
              >
                <Title
                  level={mb || tabletVid ? 5 : miniSc ? 5 : 2}
                  className='!m-0 !text-[#ffd58a] whitespace-pre-line'
                >
                  {titVid}
                </Title>

                <img
                  src='https://www.vlu.edu.vn/images/section-1-pattern.svg'
                  alt='pattern'
                  className={`absolute right-2 ${getImgH()}`}
                />
              </div>
            </div>
          </div>
        )}

        <div className='flex-[1.5]'>
          <Col>
            <div className='px-5'>
              <Text
                className={`!mb-8 !text-start !block ${getTxtHdl()}`}
                color={dark ? 'white' : '#2d334d'}
              >
                {desVid}
              </Text>
            </div>

            {bottomTit && navigateGo && (
              <Row justify={'center'} align={'middle'}>
                <Button
                  shape='circle'
                  type='text'
                  className='flex items-center hover:!bg-transparent'
                  onClick={() => navigate(navigateGo)}
                >
                  <Title
                    level={4}
                    className={`${dark ? '!text-white' : ''} !m-0`}
                  >
                    {bottomTit}
                  </Title>
                  <ArrowRightOutlined className='!bg-red-600 !border-none !text-white !rounded-full p-2' />
                </Button>
              </Row>
            )}
          </Col>
        </div>
      </Flex>
    );
  };

  const renderTrainSlLayout = (props: TrainingSlProps) => {
    const {
      trainDes,
      trainImgSl,
      trainTit,
      statistics,
      statisTit,
      navigateGo,
    } = props;
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
                className={`${!mb ? '!gap-x-15 !pl-20' : '!px-5 gap-y-5'}`}
              >
                {statistics.map((item, index) => (
                  <Col key={index}>
                    <Title className='!m-0 !mb-3 !font-bold !text-5xl !text-[#FBBF24]'>
                      {item.num}
                    </Title>
                    <Text
                      className={`${!mb ? 'whitespace-pre-line' : ''} !text-lg `}
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

  const renderNewsFeatLayout = (props: NewsFeatureLayoutProps) => {
    const {
      feature = true,
      butTit,
      featCard,
      bonusTit,
      moreBut,
      moreClass,
      dark,
      navigateGo,
    } = props;

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
                onClick={() => navigate(navigateGo)}
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
            {feature ? (
              <>
                {featCard.map((item, index) => (
                  <Card
                    key={index}
                    hoverable
                    className={`${dark ? '!bg-gray-700' : '!bg-white'} rounded-2xl overflow-hidden shadow-lg !border-none !cursor-default`}
                    cover={
                      <img
                        src={item.imgC}
                        alt='Workshop'
                        className='h-[200px] w-full object-cover'
                      />
                    }
                  >
                    <div className='!px-5 !py-3'>
                      {item.tit && (
                        <Flex
                          justify='space-between'
                          align='center'
                          className='!py-2'
                        >
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
                              ></div>
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
                ))}
              </>
            ) : (
              <>
                {featCard.map((item, index) => (
                  <Col key={index}>
                    <img
                      src={item.imgC}
                      className='!h-65 w-full mb-3.5 rounded-lg'
                    />
                    <Title
                      level={4}
                      className={`${dark ? '!text-white' : '!text-black'}`}
                    >
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
                        onClick={() => navigate(item.navigo!)}
                      >
                        {item.butCard}{' '}
                        <ArrowUpOutlined className='!rotate-45' />
                      </Button>
                    )}
                  </Col>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSimpleLayout = (props: SimpleLayoutProps) => {
    const { divider } = props;
    return (
      <div className={`${className}  mx-auto `}>
        {children}
        {divider && (
          <div>
            <Divider />
          </div>
        )}
      </div>
    );
  };

  const renderSec = () => {
    switch (layout) {
      case 'slideCus':
        return renderSlideCusLayout(props as SlideCusLayoutProps);

      case 'systemCardSplit':
        return renderSCSLayout(props as SCSLayoutProps);

      case 'vidPr':
        return renderVidPrLayout(props as VidPrLayoutProps);

      case 'traningSl':
        return renderTrainSlLayout(props as TrainingSlProps);

      case 'topic':
        return renderTopicLayout(props as TopicLayoutProps);

      case 'newsFeature':
        return renderNewsFeatLayout(props as NewsFeatureLayoutProps);

      case 'simple':
        return renderSimpleLayout(props as SimpleLayoutProps);
      default:
        return null;
    }
  };

  return (
    <section
      id={id}
      className={
        !simpleFeat
          ? `${styles.pageSection} ${styles[`${layout}Layout`]} ${className}`
          : undefined
      }
      style={{
        backgroundImage: bgImg
          ? `url(${
              typeof bgImg === 'string'
                ? bgImg
                : (bgImg as any).src || (bgImg as any).default
            })`
          : 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: !height ? '65vh' : height,
        ...style,
      }}
    >
      {renderSec()}
    </section>
  );
};

export default IesClSection;
