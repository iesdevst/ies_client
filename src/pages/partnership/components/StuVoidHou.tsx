import { Col, Flex, Image, Row } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import HTDSV from '@/assets/imgs/htd_stu_void.webp';
import LDVSV from '@/assets/imgs/ldv_stu_void.webp';
import NMHSV from '@/assets/imgs/nmh_stu_void.webp';
import HOUAVT from '@/assets/imgs/open_uni_partnership.webp';
import { IesClSection, Text, Title } from '@/components';

const StuVoidHou: React.FC = () => {
  const { t } = useTranslation('stuVoidHou');
  const mb = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const stuVoidDt = useMemo(
    () => [
      {
        img: HTDSV,
        decs: t('s1d'),
        author: t('s1a'),
        role: t('s1r'),
      },
      {
        img: LDVSV,
        decs: t('s2d'),
        author: t('s2a'),
        role: t('s2r'),
      },
      {
        img: NMHSV,
        decs: t('s3d'),
        author: t('s3a'),
        role: t('s3r'),
      },
    ],
    [t],
  );

  return (
    <IesClSection
      id='stu-void'
      layout='simple'
      divider={false}
      children={
        <section
          className={`bg-gray-700 ${mb ? 'px-6 py-20' : isTablet ? 'px-10 py-30' : 'p-30'}`}
        >
          <Flex justify='space-between' align='center' className='!w-full'>
            <Image
              src={HOUAVT}
              preview={false}
              className={`!bg-white !rounded-2xl !py-0.5 ${mb || isTablet ? '!w-20 !h-20' : '!w-45 !h-45 '}`}
              loading='lazy'
              alt='stuvoid'
            />
            <div className='text-center'>
              <Title level={!mb ? 1 : 5} className='!m-0 !text-white'>
                {t('t')}
              </Title>
              <Title level={!mb ? 3 : 4} className='!m-0 italic !text-white'>
                {t('sub')}
              </Title>
            </div>
          </Flex>
          <div className='text-center my-15 '>
            <Title
              level={4}
              className='!font-black !text-white rounded-4xl bg-gray-500 p-2'
            >
              {t('listen')}
            </Title>
          </div>

          <Row justify='center' gutter={[24, 24]} className='!gap-x-15'>
            {stuVoidDt.map((stuV, index) => (
              <Col
                key={index}
                xs={24}
                sm={24}
                md={24}
                lg={6}
                className='bg-gradient-to-br from-blue-400 to-gray-600 rounded-4xl py-5 text-white'
              >
                <Flex vertical justify='center' align='center' gap={25}>
                  <Image
                    src={stuV.img}
                    preview={false}
                    className='!rounded-sm !h-20 !w-20'
                    loading='lazy'
                    alt='stv2'
                  />
                  <Text color='white' className='!block !font-bold px-1.5 '>
                    {stuV.decs}
                  </Text>
                  <div className='!text-center'>
                    <Title level={4} className='!text-white !m-0'>
                      {stuV.author}
                    </Title>
                    <Text color='white'>{stuV.role}</Text>
                  </div>
                </Flex>
              </Col>
            ))}
          </Row>
        </section>
      }
    />
  );
};

export default StuVoidHou;
