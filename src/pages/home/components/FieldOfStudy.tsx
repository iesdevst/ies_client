import RightOutlined from '@ant-design/icons/RightOutlined';
import Button from 'antd/es/button';
import Col from 'antd/es/col';
import List from 'antd/es/list';
import Row from 'antd/es/row';
import { lazy, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useFieldProData } from '../hooks';
import FBL from '@/assets/imgs/field_bot_left.avif';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const FieldOfStudy: React.FC = () => {
  const navigate = useNavigate();
  const { device } = useDevice();
  const { isDark } = useUserStore();
  const { t } = useTranslation('fieldOfStudy');

  const { data } = useFieldProData();

  const mb = device === 'mobile';
  const tl = device === 'tablet';
  const dk = device === 'desktop';

  const handleNavigate = useCallback(() => {
    navigate(ROUTES.ADMISSIONSVOCA_ALL);
  }, [navigate]);

  return (
    <IesClSection
      id='fieldOfSt'
      layout='simple'
      divider={false}
      children={
        <div
          className={` mt-15 ${isDark ? '!bg-gray-700' : 'bg-[#f5f6fc]'} ${mb ? 'py-10' : 'pt-15'}`}
        >
          <Row>
            {/* LEFT */}
            <Col xs={24} md={10} lg={8}>
              <div className={`${dk ? 'px-10' : 'px-5'}`}>
                <Title
                  className={`${isDark ? '!text-white' : ''} !text-center`}
                >
                  {t('sectionTitle')}
                </Title>

                <Text color={isDark ? 'white' : ''} className='!text-lg !block'>
                  {t('sectionDesc')}
                </Text>

                <Button
                  className='!bg-transparent !p-0 !my-8'
                  type='text'
                  onClick={handleNavigate}
                >
                  <Title
                    className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
                    level={4}
                  >
                    {t('exploreBtn')}
                  </Title>

                  <div className='w-full h-full !bg-[#E8622A] rounded-r-full flex items-center justify-center px-3'>
                    <RightOutlined className='!text-blue-200 !font-semibold' />
                  </div>
                </Button>
              </div>

              {!mb && (
                <div>
                  <img
                    src={FBL}
                    className='!rotate-[90deg] !w-60 !h-60'
                    alt='fieldzx'
                  />
                </div>
              )}
            </Col>

            {/* RIGHT */}
            <Col xs={24} md={14} lg={16} className={`${dk ? 'px-10' : ''}`}>
              <Row justify='start' align='top'>
                {data.map((item, index) => (
                  <Col
                    key={index}
                    className={`${dk ? 'px-7' : mb ? 'pl-5' : tl ? 'pl-25' : 'pl-10'} !mb-7`}
                  >
                    <Row align='middle' className='gap-x-1.5'>
                      <div>
                        <img
                          src={item.icon}
                          alt='fieldkk'
                          className={`${mb ? '!w-7 !h-7' : '!w-9 !h-9'}`}
                        />
                      </div>

                      <Title
                        level={3}
                        className={`${isDark ? '!text-white' : '!text-black'} !m-0`}
                      >
                        {item.tit}
                      </Title>
                    </Row>

                    <List
                      dataSource={item.fieldLst}
                      renderItem={(item) => (
                        <List.Item
                          className={`!p-0 !pb-1.5 !border-none ${dk ? '!pl-10' : mb ? '!pl-7' : '!pl-8'}`}
                          key={item.key}
                        >
                          <Text
                            color={isDark ? 'white' : 'black'}
                            className='!text-lg !block'
                          >
                            {item.fie}
                          </Text>
                        </List.Item>
                      )}
                      className='!mt-3 !ml-2.5'
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      }
    />
  );
};

export default FieldOfStudy;
