import { Button, Carousel, Col, Divider, Flex, Image, Row } from 'antd';
import type { CSSProperties, ReactNode } from 'react';
import { Text, Title } from '../AntTypography';
import styles from './iesCl.module.scss';

export type SubSecLayout =
  | 'systemCardSplit'
  | 'slideCus'
  | 'imageBackground'
  | 'vidPr'
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

interface ImgBgLayoutProps extends BasePageIesSecProps {
  layout: 'imageBackground';
  titleExtra?: string;
  imageSrc?: string;
  description?: string;
}

export type SubSectionProps =
  | SCSLayoutProps
  | SlideCusLayoutProps
  | VidPrLayoutProps
  | ImgBgLayoutProps
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

      case 'imageBackground':
        return renderImgBgLayout(props as ImgBgLayoutProps);

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
