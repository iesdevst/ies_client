import { Row, Col, Image, Flex } from 'antd';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import IRL from '@/assets/imgs/ies_logo_notext.png';
import SRSL from '@/assets/imgs/short_term_left_slide.jpeg';
import SRSLMB from '@/assets/imgs/short_term_left_slide_mb.jpeg';
import { Title } from '@/components';

const ShortCrsIntro = () => {
  const mb = useMediaQuery({ maxWidth: 767 });
  const { t } = useTranslation('shortCrsIntro');
  return (
    <section>
      {!mb ? (
        <Row gutter={[0, 0]} align='stretch'>
          <Col xs={24} md={12}>
            <div className='h-full'>
              <img
                src={SRSL}
                className='w-full object-cover blur-[2px] !h-3/4'
              />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <Flex
              vertical
              justify='space-between'
              align='center'
              className='!bg-[#7680c4] !text-center !py-10 opacity-85 !rounded-l-xs !h-3/4'
            >
              <Image
                src={IRL}
                preview={false}
                className='!w-20 !h-15 !bg-white rounded-xl opacity-80'
              />

              <div>
                <Title level={5} className='!uppercase !font-bold'>
                  {t('shortTitleTop')}
                </Title>
                <Title level={2} className='!m-0 !uppercase !font-bold '>
                  {t('shortTitleMain1')}
                </Title>
                <Title level={2} className='!m-0 !uppercase  !font-bold'>
                  {t('shortTitleMain2')}
                </Title>
              </div>

              <div>
                <Title level={5} className='!m-0 !uppercase !font-bold'>
                  {t('shortDesc1')}
                </Title>
                <Title level={5} className='!m-0 !uppercase !font-bold'>
                  {t('shortDesc2')}
                </Title>
              </div>
            </Flex>
          </Col>
        </Row>
      ) : (
        <Row gutter={[0, 0]} align='stretch'>
          <Col xs={24} md={12}>
            <Flex
              vertical
              justify='space-between'
              align='center'
              className='!bg-[#7680c4] !text-center !py-5 opacity-85 !rounded-l-xs !h-full'
            >
              <div>
                <Row
                  justify={'center'}
                  align={'middle'}
                  className='mr-6 gap-x-2 mb-2'
                >
                  <Image src={IRL} preview={false} className='!w-7 !h-7' />
                  <Title
                    level={5}
                    className='!uppercase !font-bold !m-0 !italic !text-white'
                  >
                    {t('shortTitleTop')}
                  </Title>
                </Row>
                <Title level={3} className='!m-0 !uppercase !font-bold '>
                  {t('shortTitleMain1')}
                </Title>
                <Title level={3} className='!m-0 !mb-3 !uppercase  !font-bold'>
                  {t('shortTitleMain2')}
                </Title>
              </div>

              <div>
                <Title level={5} className='!m-0 !uppercase !font-bold'>
                  {t('shortDesc1')}
                </Title>
                <Title level={5} className='!m-0 !uppercase !font-bold'>
                  {t('shortDesc2')}
                </Title>
              </div>
            </Flex>
          </Col>

          <Col xs={24} md={12}>
            <div>
              <img src={SRSLMB} className='w-full object-cover blur-[2px]' />
            </div>
          </Col>
        </Row>
      )}
    </section>
  );
};

export default ShortCrsIntro;
