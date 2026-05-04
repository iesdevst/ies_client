import { MessageOutlined } from '@ant-design/icons';
import { Col, Flex, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useLearnTfData } from '../hooks';
import { Text, Title } from '@/components';

interface ILearningTranform {
  dark: boolean;
}

const LearningTranform: React.FC<ILearningTranform> = (props) => {
  const { dark } = props;
  const { t } = useTranslation('learningTranform');
  const { data } = useLearnTfData();
  const mb = useMediaQuery({ maxWidth: 1023 });
  return (
    <section className='px-5 mt-15 md:mt-0 lg:mt-0 md:px-15 lg:px-15'>
      <Title level={4} className='!font-bold !text-center !text-[#7680c4]'>
        {t('share')}
      </Title>
      <Flex vertical={mb} justify='space-between' align='center'>
        <div className={`${!mb ? '!text-start' : '!text-center mb-5'}`}>
          <Title className='!m-0 !uppercase'> {t('what')}</Title>
          <Title className='!m-0 !uppercase'> {t('stuS')}</Title>
        </div>
        <Text
          color={dark ? 'white' : ''}
          className='!inline-block !font-bold md:!text-lg lg:!text-lg !ml-6'
        >
          {t('learnTxt1')}
          <br />
          {t('learnTxt2')}
        </Text>
      </Flex>

      <Row gutter={[24, 24]} className='mt-10'>
        {data.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={12} lg={6}>
            <div
              className={`rounded-xl overflow-hidden h-full ${
                item.type === 'image'
                  ? ''
                  : dark
                    ? 'p-6 bg-gray-600'
                    : 'bg-gray-100 p-6'
              }`}
            >
              {item.type === 'image' ? (
                <img
                  src={item.img}
                  alt=''
                  className='w-full h-[400px] object-cover'
                  loading='lazy'
                />
              ) : (
                <Flex
                  vertical
                  justify='space-between'
                  align='flex-start'
                  className='!h-full'
                >
                  <MessageOutlined
                    className={`!text-2xl ${dark ? '!text-white' : ' !text-black'}`}
                  />

                  <Title
                    level={3}
                    className={`!font-semibold m-0 ${dark ? '!text-white' : ' !text-black'}`}
                    style={{
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {item.tit}
                  </Title>
                  <div>
                    <Text
                      color={dark ? 'white' : '#6a7282'}
                      className='!text-lg inline-block'
                    >
                      {item.desc}
                    </Text>
                  </div>
                  <Title level={5} className='font-medium '>
                    {item.author}
                  </Title>
                </Flex>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default LearningTranform;
