import { Button, Col, Divider, Flex, Row } from 'antd';
import type { CSSProperties, ReactNode } from 'react';
import { Text, Title } from '../AntTypography';
import styles from './iesCl.module.scss';

export type SubSecLayout =
  | 'systemCardSplit'
  | 'productSl'
  | 'imageBackground'
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

interface PrdSlLayoutProps extends BasePageIesSecProps {
  layout: 'productSl';
}

interface SimpleLayoutProps extends BasePageIesSecProps {
  layout: 'simple';
  divider: boolean;
}

interface ImgBgLayoutProps extends BasePageIesSecProps {
  layout: 'imageBackground';
  titleExtra?: string;
  imageSrc?: string;
  description?: string;
}

export type SubSectionProps =
  | SCSLayoutProps
  | PrdSlLayoutProps
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

  const renderPrdSlLayout = (props: PrdSlLayoutProps) => {
    const {} = props;

    return (
      <div className={`${className} rounded-lg`}>
        {title && (
          <Title level={2} className='!text-white !font-bold !text-center'>
            {title}
          </Title>
        )}
        {children}
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
      case 'productSl':
        return renderPrdSlLayout(props as PrdSlLayoutProps);

      case 'systemCardSplit':
        return renderSCSLayout(props as SCSLayoutProps);

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
