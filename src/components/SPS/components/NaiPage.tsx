import { Col, Divider, Flex, Image, List, Row } from 'antd';
import type { NaiPageLayoutProps } from '../types';
import fb from '@/assets/imgs/fb_logo.webp';
import NAITIT from '@/assets/imgs/nai_tit.png';
import zalo from '@/assets/imgs/zl_logo.webp';
import { Text, Title } from '@/components/AntTypography';

const NaiPage: React.FC<NaiPageLayoutProps> = (props) => {
  const {
    newsTit,
    decs,
    decs2,
    imgBonus,
    img,
    linkTo,
    mb,
    nOe,
    readOri,
    paddingClass,
    titleLv,
    tl,
    recentNews,
    recentEv,
    children,
  } = props;

  return (
    <section>
      <div
        className={`${mb ? 'pt-3 !px-3.5' : tl ? 'pt-5 !px-7' : 'mx-5 px-12 pt-10'} !rounded-4xl !bg-[#bfcce6] pb-20`}
      >
        <div
          className={`${mb ? '!space-y-3 !py-3' : tl ? '!space-y-5 !pb-10 !pt-5' : '!space-y-7 !pb-12 !pt-5'}`}
        >
          <Flex justify={mb ? 'center' : 'space-between'} align='center'>
            <Col>
              <Row
                justify={mb || tl ? 'space-between' : 'center'}
                align={'middle'}
              >
                <Title
                  level={mb || tl ? 3 : 5}
                  className={`${mb ? '' : '!w-1/2'} !text-center italic !text-black`}
                >
                  {nOe}
                </Title>
                {mb && (
                  <img
                    src={NAITIT}
                    alt='naititmb'
                    width={60}
                    className='!rounded-xl'
                  />
                )}
              </Row>
              <Title
                level={titleLv}
                className={`${mb ? '' : '!w-3/4'} !text-start !text-black !m-0 `}
              >
                {newsTit}
              </Title>
            </Col>
            {!mb && (
              <img
                src={NAITIT}
                alt='naitit'
                width={tl ? 105 : 200}
                className='!rounded-xl'
              />
            )}
          </Flex>
          <Flex justify='space-between' align='center'>
            <Row
              justify={'space-between'}
              align={'middle'}
              className='space-x-10'
            >
              <Col>
                <Title level={5} className='!m-0'>
                  Tac gia
                </Title>
                <Title level={5} className='!m-0'>
                  Date
                </Title>
              </Col>

              <Col>
                <Text className='!block'>art</Text>
                <Text className='!block'>10/05/2026</Text>
              </Col>
            </Row>
            <Col className={mb ? '' : '!mr-30'}>
              <Title level={5} className='!m-0'>
                Share to
              </Title>
              <Row>
                <Image
                  src={fb}
                  alt=''
                  width={35}
                  height={35}
                  className='p-[4px] rounded-full'
                  preview={false}
                  loading='lazy'
                />
                <Image
                  src={zalo}
                  alt=''
                  width={35}
                  height={35}
                  className='p-[4px] rounded-full'
                  preview={false}
                  loading='lazy'
                />
              </Row>
            </Col>
          </Flex>
        </div>
        {/* // CONTENT */}
        <div className='!w-full !space-y-15'>
          <div className='text-center'>
            <Image
              src={img}
              preview={false}
              alt='news1'
              loading='lazy'
              className={`${mb || tl ? '' : '!w-[1300px] !h-[450px]'} !rounded-2xl`}
            />
          </div>
          <Row gutter={[40, 40]}>
            {/* LEFT CONTENT */}
            <Col xs={24} lg={16}>
              <Flex
                vertical
                justify='center'
                align='center'
                className={paddingClass}
                gap={40}
              >
                <Text
                  className='!block !text-lg'
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {decs}
                </Text>
                {imgBonus &&
                  imgBonus.map((item) => (
                    <Image
                      src={item}
                      preview={false}
                      alt='imgbonus'
                      loading='lazy'
                      className='!rounded-2xl'
                    />
                  ))}

                {decs2 && (
                  <Text
                    className='!block !text-lg'
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {decs2}
                  </Text>
                )}

                {linkTo && (
                  <a href={linkTo} target='blank' rel='noopener noreferrer'>
                    <Text color='blue' className='!underline !text-lg'>
                      {readOri}
                    </Text>
                  </a>
                )}
              </Flex>
            </Col>
            {/* RIGHT SIDEBAR */}
            <Col xs={24} lg={8}>
              <Flex vertical gap={32}>
                {/* RECENT NEWS */}
                <div>
                  <Title level={4}>Tin tức gần đây</Title>

                  <List
                    itemLayout='horizontal'
                    dataSource={recentNews}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Image
                              src={item.img}
                              width={150}
                              height={82}
                              preview={false}
                              alt='newslst'
                              className='!rounded-lg'
                            />
                          }
                          title={
                            item.typeTit ? (
                              <Title
                                level={4}
                                className='uppercase !text-red-500'
                              >
                                {item.typeTit}
                              </Title>
                            ) : null
                          }
                          description={<Title level={5}>{item.newsTit}</Title>}
                        />
                      </List.Item>
                    )}
                  />
                </div>

                <Divider />

                {/* RECENT EVENTS */}
                <div>
                  <Title level={4}>Sự kiện gần đây</Title>

                  <List
                    itemLayout='horizontal'
                    dataSource={recentEv}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Image
                              src={item.img}
                              width={150}
                              height={82}
                              preview={false}
                              alt='evslst'
                              className='!rounded-lg'
                            />
                          }
                          title={<Title level={5}>{item.eventTit}</Title>}
                          description={<Text>{item.evDate}</Text>}
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </Flex>
            </Col>
          </Row>
        </div>
        {children && (
          <>
            <Divider />
            {children}
          </>
        )}
      </div>
    </section>
  );
};

export default NaiPage;
