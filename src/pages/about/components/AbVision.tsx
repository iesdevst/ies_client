import { EyeFilled, FileTextFilled } from '@ant-design/icons';
import { Button, Col, Flex, List, Row } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import AB_VS_CR from '@/assets/imgs/about_vision_crs.png';
import AB_VS_MB_CR from '@/assets/imgs/about_vision_mb_crs.png';
import { Text, Title } from '@/components';
import IesCtModal from '@/pages/home/components/IesCtModal';

interface IAbVision {
  dark: boolean;
}

const AbVision: React.FC<IAbVision> = (props) => {
  const { dark } = props;
  const { t } = useTranslation('abVision');
  const mb = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const [ctOpen, setCtOpen] = useState(false);

  const mission = [t('miss1'), t('miss2'), t('miss3'), t('miss4'), t('miss5')];

  return (
    <>
      <div>
        <div className='!w-full !h-full'>
          <img
            src={mb || tablet ? AB_VS_MB_CR : AB_VS_CR}
            className='!w-full'
            style={{
              objectFit: 'fill',
              height: '65vh',
            }}
          />
        </div>

        <div className={`${mb || tablet ? '!pt-10' : '!space-y-17 !pt-17'}`}>
          <Flex vertical={mb || tablet} justify='center' align='center'>
            <Col className={`${mb || tablet ? '' : 'flex-2'}`}>
              <Row
                className={`gap-x-2.5 ${mb || tablet ? '' : '!w-1/2'}`}
                justify={'center'}
                align={'middle'}
              >
                <Title
                  className={`${dark ? '!text-white' : '!text-black'} !m-0`}
                >
                  {t('heading1')}
                </Title>
                <Title className='!m-0 !text-[#199BB2]'> {t('heading2')}</Title>
              </Row>
              <Row justify={'center'} align={'middle'}>
                <Text
                  color={dark ? 'white' : ''}
                  className={`${mb ? 'my-2' : tablet ? '!text-2xl my-5' : '!text-2xl !font-semibold !w-5/6 ml-5 mt-5'}`}
                >
                  {t('subDesc')}
                  <br />
                  {t('subDesc2')}
                </Text>
              </Row>
            </Col>
            <div
              className={`${mb || tablet ? '!w-full !px-20' : 'flex-1 flex justify-center'}`}
            >
              <Button
                type='default'
                className={`!border-none !bg-[#5EA61F] !rounded-3xl !px-7 !py-6 !font-semibold !text-lg hover:!bg-[#b1e087] hover:!text-black ${mb || tablet ? '!w-full' : ''}`}
                onClick={() => setCtOpen(true)}
              >
                {t('contactBtn')}
              </Button>
            </div>
          </Flex>

          <Flex
            vertical={mb}
            justify='center'
            className={`${mb ? '!mt-5 !w-full' : tablet ? '!mt-8' : '!mt-10'}`}
          >
            <div
              className={`!bg-[#4F79B8] !rounded-2xl !text-white !overflow-hidden  ${mb ? '!w-full ' : tablet ? '!w-5/6' : '!w-5/6'}`}
            >
              <Row className={`${!mb ? '' : '!gap-y-6'}`}>
                {/* VISION */}
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  className={`${!mb ? 'border-r border-white !pb-10 !pt-10 px-8' : 'px-3 pt-7'}`}
                >
                  <Row
                    className='!border-b !border-white !border-b pb-5 gap-x-4 mb-5'
                    justify={'start'}
                    align={'middle'}
                  >
                    <EyeFilled className='!text-2xl !text-white !bg-[#5EA61F] px-1 py-1 rounded-md' />
                    <Title level={3} className='!text-white !m-0'>
                      {t('visionTitle')}
                    </Title>
                  </Row>

                  <Text
                    className={`!text-white !w-full italic ${!mb ? '!text-xl !leading-9' : ''}`}
                  >
                    {t('visionDesc')}
                  </Text>
                </Col>

                {/* MISSION */}
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  className={`${!mb ? '!px-8 !pb-15 !pt-10' : 'px-3 pb-10'}`}
                >
                  <Row
                    className='!border-b !border-white !border-b pb-5 gap-x-4 mb-5'
                    justify={'start'}
                    align={'middle'}
                  >
                    <FileTextFilled className='!text-2xl !text-[#5EA61F] rounded-md' />
                    <Title level={3} className='!text-white !m-0'>
                      {t('missionTitle')}
                    </Title>
                  </Row>

                  <List
                    dataSource={mission}
                    renderItem={(item) => (
                      <List.Item className='!border-none !p-0'>
                        <Text
                          className={`!text-white !w-full italic ${!mb ? '!text-xl !leading-8.5' : ''}`}
                        >
                          {item}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </div>
          </Flex>
        </div>
      </div>
      <IesCtModal openCtM={ctOpen} closeCtM={() => setCtOpen(false)} />
    </>
  );
};

export default AbVision;
