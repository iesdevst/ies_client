import { RightOutlined } from '@ant-design/icons';
import { Button, Card, Carousel, Col, Divider, Flex, Image, Row } from 'antd';
import type { CSSProperties, ReactNode } from 'react';
import { Text, Title } from '../AntTypography';
import styles from './iesCl.module.scss';
export type SubSecLayout =
  | 'systemCardSplit'
  | 'slideCus'
  | 'imageBackground'
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
}

interface SCSLayoutProps extends BasePageIesSecProps {
  layout: 'systemCardSplit';
  fstTit?: string;
  titleSplit?: string;
  butSplit?: string;
  splitFeat?: React.ReactNode;
  desSplit?: string;
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
}

interface TrainingSlProps extends BasePageIesSecProps {
  layout: 'traningSl';
  trainTit: string;
  trainDes: string;
  trainImgSl: Array<{ icon: string; title: string }>;
  statisTit: string;
  statistics: Array<{ num: string; des: string }>;
}

interface ImgBgLayoutProps extends BasePageIesSecProps {
  layout: 'imageBackground';
  titleExtra?: string;
  imageSrc?: string;
  description?: string;
}

interface NewsFeatureLayoutProps extends BasePageIesSecProps {
  layout: 'newsFeature';
  feature: boolean;
  butTit?: string;
  featCard: Array<{ imgC: string; tit: string; butCard: string; des: string }>;
}

export type SubSectionProps =
  | SCSLayoutProps
  | SlideCusLayoutProps
  | VidPrLayoutProps
  | TrainingSlProps
  | ImgBgLayoutProps
  | NewsFeatureLayoutProps
  | SimpleLayoutProps;

export const IesClSection: React.FC<SubSectionProps> = (props) => {
  const {
    id,
    dark,
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

  const renderSlideCusLayout = (props: SlideCusLayoutProps) => {
    const { images } = props;

    return (
      <div className={`${className}`}>
        <Carousel
          pauseOnHover={false}
          autoplay
          effect='fade'
          dots
          arrows
          className={styles.dotCustom}
        >
          {images.map((img, index) => (
            <div key={index} className='!w-full'>
              <img
                src={img}
                style={{
                  objectFit: 'cover',
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
    const { fstTit, titleSplit, splitFeat, desSplit, reverse, butSplit } =
      props;
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
              <Flex justify='end'>
                <Col
                  className={`flex flex-col ${!mb ? '!w-2/3 mb-12' : '!w-full px-5'} gap-y-2`}
                >
                  <Row align={'middle'} className='gap-x-0.5'>
                    <Title level={4} className='!m-0 !text-purple-500 !mr-0.5'>
                      {fstTit}
                    </Title>
                    <Title level={4} className='!font-bold !m-0 !text-white'>
                      {titleSplit}
                    </Title>
                  </Row>
                  <Text defaultFontSize={14} className='!text-white'>
                    {desSplit}
                  </Text>
                  <div className={`${!mb ? '' : 'text-center my-5'}`}>
                    <Button className='!bg-transparent !px-14 !py-3 !text-white !text-xs !border !border-white w-2/12 !rounded-2xl'>
                      {butSplit}
                    </Button>
                  </div>
                </Col>
              </Flex>
              {splitFeat}
            </>
          ) : (
            <>
              {splitFeat}
              <Col
                className={`flex flex-col ${!mb ? '!w-2/3' : '!w-full px-5'} gap-y-2`}
              >
                <Row align={'middle'} className='gap-x-0.5'>
                  <Title level={4} className='!m-0 !text-purple-500 !mr-0.5'>
                    {fstTit}
                  </Title>
                  <Title level={4} className='!font-bold !m-0 !text-white'>
                    {titleSplit}
                  </Title>
                </Row>
                <Text defaultFontSize={14} className='!text-white'>
                  {desSplit}
                </Text>
                <div className={`${!mb ? '' : 'text-center my-7'}`}>
                  <Button className='!bg-transparent !px-14 !py-3 !text-white !text-xs !border !border-white w-2/12 !rounded-2xl'>
                    {butSplit}
                  </Button>
                </div>
              </Col>
            </>
          )}
        </Flex>
      </Col>
    );
  };
  const renderImgBgLayout = (props: ImgBgLayoutProps) => {
    const { imageSrc, titleExtra, description } = props;

    return (
      <div
        data-testid='image-bg-container'
        className={`${className} relative w-full`}
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: dark ? 'white' : 'black',
          ...style,
        }}
      >
        <div className='relative z-10 w-[90%] max-w-[700px] px-4 text-center'>
          {titleExtra && (
            <h2 className='text-base md:text-xl font-bold uppercase'>
              {titleExtra}
            </h2>
          )}
          {title && (
            <h2 className='text-lg md:text-2xl font-bold mb-6 md:mb-12'>
              {title}
            </h2>
          )}
          {description && (
            <p className='text-sm md:text-base text-white mb-4'>
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  };

  const renderVidPrLayout = (props: VidPrLayoutProps) => {
    const { desVid, titVid, bottomTit, vidLink } = props;

    return (
      <Flex
        className='!w-full items-stretch'
        align='end'
        justify='space-between'
      >
        {/* LEFT - VIDEO */}
        {vidLink && (
          <div className='!flex-[2] !pl-20'>
            <div className='w-full aspect-video !pb-7'>
              <iframe
                className='w-full !h-full rounded-xl shadow-lg'
                src={vidLink}
                title='YouTube video'
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div className='flex-[1.5] relative mb-10'>
          <Col className='relative pr-18 '>
            <div className='absolute right-20 bottom-60 z-20 w-full'>
              <Row
                className='bg-[#2b2f6b] pb-4'
                justify={'space-between'}
                align={'middle'}
              >
                <Title
                  level={3}
                  className='!m-0 !mt-6 !ml-10 !text-[#ffd58a] whitespace-pre-line'
                >
                  {titVid}
                </Title>
                <Image
                  src='https://www.vlu.edu.vn/images/section-1-pattern.svg'
                  preview={false}
                  className='!h-25'
                />
              </Row>
            </div>

            <div className='pl-17 py-7'>
              <Text className='mb-8 !text-lg !text-start' color='#2d334d'>
                {desVid}
              </Text>
            </div>

            <Row justify={'end'} align={'middle'} className='!gap-x-4'>
              <Title level={4} className='!m-0'>
                {bottomTit}
              </Title>

              <Button
                shape='circle'
                className='!bg-red-600 !border-none !text-white flex items-center justify-center'
              >
                〉
              </Button>
            </Row>
          </Col>
        </div>
      </Flex>
    );
  };

  const renderTrainSlLayout = (props: TrainingSlProps) => {
    const { trainDes, trainImgSl, trainTit, statistics, statisTit } = props;
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
            justify='flex-start'
            align='center'
            gap={100}
            className='!px-22'
          >
            <Title className='!m-0 !text-white'>{trainTit}</Title>
            <Text className='!text-lg mt-2' color='white'>
              {trainDes}
            </Text>
          </Flex>
          <Carousel
            autoplay={false}
            effect={!mb ? 'fade' : 'scrollx'}
            dots={true}
            arrows={false}
            slidesPerRow={mb ? 1 : 3}
            className={`${styles.dotTrainCustom} dot-train my-15 px-20`}
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
            <div className='flex-[3] !text-start '>
              <Button className='!bg-transparent !pl-20' type='text'>
                <Title className='!m-0 !text-white' level={4}>
                  {statisTit}
                </Title>
                <div className='w-full h-full !bg-[#FBBF24] rounded-r-full flex items-center justify-center px-3'>
                  <RightOutlined className='!text-red-500 !font-semibold ' />
                </div>
              </Button>
            </div>

            <div className='flex-[4] !py-20 bg-gradient-to-r from-blue-900 to-blue-800'>
              <Row className='gap-x-15 pl-20'>
                {statistics.map((item, index) => (
                  <Col key={index}>
                    <Title className='!m-0 !mb-3 !font-bold !text-5xl !text-[#FBBF24]'>
                      {item.num}
                    </Title>
                    <Text
                      className='whitespace-pre-line !text-lg '
                      color='white'
                    >
                      {item.des}
                    </Text>
                  </Col>
                ))}
              </Row>
            </div>
          </Flex>
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

  const renderNewsFeatLayout = (props: NewsFeatureLayoutProps) => {
    const { feature = false, butTit, featCard } = props;

    return (
      <div className={`${className}`}>
        <Flex justify='space-between' align='center'>
          <Title>{title}</Title>

          {butTit && (
            <div>
              <Button className='!bg-transparent !pl-20' type='text'>
                <Title className='!m-0 !text-black' level={4}>
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

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {featCard.map((item, index) => (
            <Card
              key={index}
              hoverable
              className='rounded-2xl overflow-hidden shadow-lg !border-none !bg-white'
              cover={
                <img
                  src={item.imgC}
                  alt='Workshop'
                  className='h-[200px] w-full object-cover'
                />
              }
            >
              <div className='!px-5 !py-3'>
                <Flex justify='space-between' align='center' className='!py-2'>
                  <Title level={5} className='!text-blue-500 !m-0'>
                    {item.tit}
                  </Title>

                  <div className='relative'>
                    <div className='bg-blue-600 text-white px-5 py-1 font-semibold text-sm'>
                      {item.butCard}
                    </div>
                    <div className='absolute right-[-8px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45'></div>
                  </div>
                </Flex>

                <Text className='font-semibold mb-6 !text-lg'>{item.des}</Text>
              </div>
            </Card>
          ))}
        </div>
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

      case 'imageBackground':
        return renderImgBgLayout(props as ImgBgLayoutProps);

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
