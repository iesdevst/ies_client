import { Button, Col, Flex, Image, Row } from 'antd';
import { lazy, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import OVW_LIB from '@/assets/imgs/ovw_lib.webp';
import OVW_STU from '@/assets/imgs/ovw_stu.webp';
import { Title } from '@/components';

const IesCtModal = lazy(() => import('@/pages/home/components/IesCtModal'));

interface IAbOverview {
  dark: boolean;
}

const AbOverview: React.FC<IAbOverview> = (props) => {
  const { dark } = props;
  const { t } = useTranslation('abOverview');
  const mb = useMediaQuery({ maxWidth: 1024 });
  const [ctOpen, setCtOpen] = useState(false);
  return (
    <>
      <div
        className={`${dark ? '!bg-gray-800' : '!bg-white'} py-18 !space-y-20`}
      >
        <Flex
          vertical={mb}
          justify='space-between'
          align='flex-start'
          className={`${!mb ? '!pl-10' : ''}`}
        >
          <div className={`${!mb ? 'flex-1 !flex justify-center' : '!w-full'}`}>
            <Flex
              vertical={!mb}
              gap={6}
              justify='space-evenly'
              align={!mb ? 'center' : 'end'}
            >
              <Col>
                <Title className='!m-0'>{t('title1')}</Title>
                <Title className='!m-0'>{t('title2')}</Title>
              </Col>
              <Button
                size='large'
                type='default'
                className={`!border-none !bg-black hover:!bg-gray-400 hover:!text-black !font-bold ${!mb ? 'w-full' : ''}`}
                onClick={() => setCtOpen(true)}
              >
                {t('contactBtn')}
              </Button>
            </Flex>
          </div>
          <div className={`${!mb ? 'flex-2' : ''}`}>
            <p
              className={`font-bold ${!mb ? 'w-5/6 !text-xl leading-9' : 'leading-5 px-3 mt-5'}`}
            >
              {t('mainDesc')}
            </p>
          </div>
        </Flex>
        <Row gutter={!mb ? [0, 0] : [0, 50]} align='middle' justify='center'>
          <Col xs={24} md={12} className={`${!mb ? '' : 'px-3'}`}>
            <Row justify='center' className='gap-y-3'>
              <Image
                src={OVW_STU}
                preview={false}
                className='!w-full !rounded-lg'
                loading='lazy'
                alt='abov'
              />
              <p className={`text-lg font-semibold ${!mb ? 'px-21' : ''}`}>
                {t('libDesc1')}
              </p>
            </Row>
          </Col>
          <Col xs={24} md={12} className={`${!mb ? '' : 'px-3'}`}>
            <Row justify='center' className='gap-y-3'>
              <Image
                src={OVW_LIB}
                preview={false}
                className='!w-full !rounded-lg'
                loading='lazy'
                alt='abov2'
              />
              <p className={`text-lg font-semibold ${!mb ? 'px-21' : ''}`}>
                {t('libDesc2')}
              </p>
            </Row>
          </Col>
        </Row>
      </div>
      <IesCtModal openCtM={ctOpen} closeCtM={() => setCtOpen(false)} />
    </>
  );
};

export default AbOverview;
