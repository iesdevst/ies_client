import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import KeyOutlined from '@ant-design/icons/KeyOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import RocketOutlined from '@ant-design/icons/RocketOutlined';
import SafetyCertificateOutlined from '@ant-design/icons/SafetyCertificateOutlined';
import TagsOutlined from '@ant-design/icons/TagsOutlined';

import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import Row from 'antd/es/row';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import WCHB from '@/assets/imgs/why_choose_hou_bg.webp';
import { IesClSection, Text, Title } from '@/components';

const WhyChooseHou: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { t } = useTranslation('whyChooseHou');
  const whyChooseDt = useMemo(
    () => [
      {
        title: t('i1t'),
        description: t('i1d'),
        icon: <SafetyCertificateOutlined />,
      },
      {
        title: t('i2t'),
        description: t('i2d'),
        icon: <TagsOutlined />,
      },
      {
        title: t('i3t'),
        description: t('i3d'),
        icon: <MessageOutlined />,
      },
      {
        title: t('i4t'),
        description: t('i4d'),
        icon: <ClockCircleOutlined />,
      },
      {
        title: t('i5t'),
        description: t('i5d'),
        icon: <RocketOutlined />,
      },
      {
        title: t('i6t'),
        description: t('i6d'),
        icon: <KeyOutlined />,
      },
    ],
    [t],
  );
  return (
    <IesClSection
      id='why-choose-hou'
      layout='simple'
      divider={false}
      children={
        <section className='relative w-full h-full py-20'>
          <div className='absolute inset-0 bg-[#3e3e49]/90 z-0'></div>
          <Flex
            justify='center'
            align='center'
            className='!w-full relative z-20'
          >
            <div className='!w-5/6 aspect-video'>
              <iframe
                className='w-full !h-4/5 rounded-xl shadow-lg'
                src='https://www.youtube.com/embed/Knf4xQJVl0Q?si=EnYd3WsqIPDxYftz'
                title='YouTube video'
                allowFullScreen
              />
            </div>
          </Flex>
          <div className='relative'>
            <div className='text-center space-y-8 mb-10'>
              <Text
                className='!inline-block !bg-[#5e41e4] !pt-3 !pb-2 !px-5 rounded-2xl !text-lg !font-bold'
                color='white'
              >
                {t('tag')}
              </Text>
              <Title
                level={!mb ? 1 : 2}
                className='!m-0 !text-white !uppercase'
              >
                {t('t1')}
              </Title>
              <Title
                level={!mb ? 1 : 2}
                className='!m-0 !text-white !uppercase'
              >
                {t('t2')}
              </Title>
            </div>
            <Row gutter={!mb ? [24, 24] : [0, 0]} className='!gap-y-10'>
              {whyChooseDt.map((item, index) => (
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  key={index}
                  className={`${!mb ? '!px-22' : 'px-5'}`}
                >
                  <Text color='white' className='!text-4xl'>
                    {item.icon}
                  </Text>
                  <Title level={3} className='!text-white !m-0 !my-2.5'>
                    {item.title}
                  </Title>
                  <Text color='white' className='!text-sm'>
                    {item.description}
                  </Text>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      }
      style={{
        backgroundImage: `url(${WCHB})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
      className='mt-20'
    />
  );
};

export default WhyChooseHou;
