import { ArrowUpOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Image, Modal, Row } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import DLIB from '@/assets/imgs/dgt_lib.jpeg';
import DGTR from '@/assets/imgs/dgt_lib_right.jpg';
import { IesClSection, Text, Title } from '@/components';

const EduLibrary = () => {
  const [openCsModal, setOpenCsModal] = useState(false);
  const { t } = useTranslation('eduLibrary');
  const mb = useMediaQuery({ maxWidth: 767 });
  const tl = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <IesClSection
      id='edu-lib'
      layout='simple'
      divider={false}
      children={
        <section className={`${mb ? 'px-2' : tl ? '' : ''}`}>
          <Title className='!text-center !pt-15'>{t('title')}</Title>
          <div
            style={{
              backgroundImage: `url(${DLIB})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className={`rounded-3xl ${mb ? 'pt-10 my-10' : tl ? 'pt-25 mt-10' : 'mx-5 pt-80'}`}
          >
            {!mb ? (
              <Row
                gutter={mb || tl ? [0, 50] : [50, 50]}
                justify='center'
                align='bottom'
                className={` ${tl ? 'px-5' : 'px-30'} !pb-7`}
              >
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Flex
                    vertical
                    justify='flex-start'
                    align='flex-start'
                    gap={20}
                    className={`${tl ? '!px-7' : ''}`}
                  >
                    <Title
                      level={tl ? 3 : 1}
                      className={`${!tl ? '' : '!text-center !bg-[#275597] !rounded-full p-3 px-6 opacity-80'} !text-white !font-bold !m-0`}
                    >
                      {t('heading')}
                    </Title>
                    <Text
                      className={`!block !font-bold ${!tl ? '!text-lg' : ''}`}
                      color='white'
                    >
                      {t('desc')}
                    </Text>
                    <Button
                      className='!bg-white !text-black !rounded-2xl !font-bold !w-2/3 !block'
                      onClick={() => setOpenCsModal(true)}
                    >
                      {t('startBtn')}
                    </Button>
                  </Flex>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12}>
                  <Flex
                    justify='space-between'
                    align='center'
                    className=' !bg-white !p-3 !rounded-2xl'
                    gap={20}
                  >
                    <Image
                      src={DGTR}
                      preview={false}
                      className='!rounded-2xl'
                    />
                    <Col>
                      <Text
                        className={`!block !mb-2 ${!tl ? '!text-lg' : ''}`}
                        color='#464646'
                      >
                        {t('cardDesc')}
                      </Text>
                      <Button
                        type='text'
                        className='hover:!underline !font-bold !text-black !text-lg'
                        onClick={() => setOpenCsModal(true)}
                      >
                        {t('startBtn')}
                        <ArrowUpOutlined className='!rotate-45' />
                      </Button>
                    </Col>
                  </Flex>
                </Col>
              </Row>
            ) : (
              <Row
                gutter={mb || tl ? [0, 50] : [50, 50]}
                justify='center'
                className='!px-7'
              >
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  className='!bg-white py-3 !rounded-2xl'
                >
                  <Image
                    src={DGTR}
                    preview={false}
                    className='!rounded-2xl !w-2/3 ml-15'
                  />
                  <Col className='px-6'>
                    <Text className='!block mb-1.5' color='#464646'>
                      {t('cardDesc')}
                    </Text>
                    <Button
                      type='text'
                      className='hover:!underline !font-bold !text-black !text-lg'
                      onClick={() => setOpenCsModal(true)}
                    >
                      {t('startBtn')}
                      <ArrowUpOutlined className='!rotate-45' />
                    </Button>
                  </Col>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} className='mb-10'>
                  <Flex vertical justify='center' align='center' gap={45}>
                    <Title
                      level={4}
                      className='!text-white !font-bold !m-0 !text-center'
                    >
                      {t('headingBr1')}
                      <br /> {t('headingBr2')}
                    </Title>
                    <Text
                      className='!block !font-bold !text-sm !bg-[#275597] !rounded-full p-3 px-6 opacity-80'
                      color='white'
                    >
                      {t('desc')}
                    </Text>
                    <Button
                      className='!bg-white !text-black !rounded-2xl !font-bold !w-2/3 !block'
                      onClick={() => setOpenCsModal(true)}
                    >
                      {t('startBtn')}
                    </Button>
                  </Flex>
                </Col>
              </Row>
            )}

            <Modal
              title={t('comingSoonTitle')}
              open={openCsModal}
              onOk={() => setOpenCsModal(false)}
              onCancel={() => setOpenCsModal(false)}
              okText='OK'
              cancelText={t('cancel')}
            >
              <p>{t('comingSoonDesc')}</p>
            </Modal>
          </div>
        </section>
      }
      height={mb ? '20vh' : tl ? '60vh' : '100vh'}
    />
  );
};

export default EduLibrary;
