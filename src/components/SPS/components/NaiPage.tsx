import RightOutlined from '@ant-design/icons/es/icons/RightOutlined';
import Button from 'antd/es/button';
import Col from 'antd/es/col';
import Divider from 'antd/es/divider';
import Flex from 'antd/es/flex';
import Image from 'antd/es/image';
import List from 'antd/es/list';
import Row from 'antd/es/row';
import { useNavigate } from 'react-router-dom';
import type { NaiPageLayoutProps } from '../types';
import FB from '@/assets/imgs/fb_logo.webp';
import LINKEDIN from '@/assets/imgs/linkedin_logo.webp';
import NAITIT from '@/assets/imgs/nai_tit.png';
import X from '@/assets/imgs/x_logo.webp';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';
import type { EvsNavi } from '@/pages/iesNews/components/EvsLst';
import type { NewsNavi } from '@/pages/iesNews/components/NewsLst';

type SocialPlat = 'facebook' | 'linkedin' | 'x';

type SocialShareType = {
  key: SocialPlat;
  icon: string;
  alt: string;
};

const NaiPage: React.FC<NaiPageLayoutProps> = (props) => {
  const {
    newsTit,
    ato,
    date,
    decs,
    decs2,
    imgBonus,
    img,
    linkTo,
    urlForShare,
    mb,
    nOe,
    readOri,
    aut,
    time,
    share,
    lstNews,
    lstEvs,
    seeNews,
    seeEvs,
    paddingClass,
    titleLv,
    tl,
    recentNews,
    recentEv,
    children,
    dark,
  } = props;

  const navigate = useNavigate();

  const socialShare: Array<SocialShareType> = [
    {
      key: 'facebook',
      icon: FB,
      alt: 'facebook-share',
    },
    {
      key: 'x',
      icon: X,
      alt: 'x-share',
    },
    {
      key: 'linkedin',
      icon: LINKEDIN,
      alt: 'linkin-share',
    },
  ] as const;

  const handleShare = async (platform: SocialPlat) => {
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlForShare)}`,
      x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlForShare)}&text=${encodeURIComponent(newsTit || '')}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(urlForShare)}`,
    };

    // mobile native share first
    if (mb && tl && navigator.share) {
      await navigator.share({
        title: newsTit,
        url: urlForShare,
      });
      return;
    }

    window.open(shareUrls[platform], '_blank');
  };

  const hdlNaviEvs = (navi: EvsNavi) => {
    const searchParams = new URLSearchParams({
      authorN: navi.authorN,
      evDate: navi.evDate,
    });
    navigate(`${ROUTES.EVENTS_DETAILS}/${navi.id}?${searchParams.toString()}`);
  };

  const hdlNaviNews = (navi: NewsNavi) => {
    const searchParams = new URLSearchParams({
      authorN: navi.authorN,
      newsDate: navi.newsDate,
    });
    navigate(`${ROUTES.NEWS_DETAILS}/${navi.id}?${searchParams.toString()}`);
  };

  return (
    <section>
      <div
        className={`${mb ? 'pt-3 !px-3.5' : tl ? 'pt-5 !px-7' : 'mx-5 px-12 pt-10'} ${dark ? '!bg-[#324e65]' : '!bg-[#bfcce6]'} !rounded-4xl pb-20`}
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
                  className={`${mb ? '' : '!w-1/2'} !text-center italic`}
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
                className={`${mb ? '' : '!w-3/4'} !text-start !m-0 `}
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
                <Title level={5} className='!m-0 !uppercase'>
                  {aut}
                </Title>
                <Title level={5} className='!m-0 !uppercase'>
                  {time}
                </Title>
              </Col>

              <Col>
                <Text className='!block' color={dark ? 'white' : 'black'}>
                  {ato}
                </Text>
                <Text className='!block' color={dark ? 'white' : 'black'}>
                  {date}
                </Text>
              </Col>
            </Row>
            <Col className={mb ? '' : '!mr-30'}>
              <Title level={5} className='!m-0 !mb-1.5 !uppercase'>
                {share}
              </Title>
              <Row gutter={12}>
                {socialShare.map((item) => (
                  <Col key={item.key}>
                    <Button
                      type='text'
                      onClick={() => handleShare(item.key)}
                      className='cursor-pointer !p-0'
                    >
                      <Image
                        src={item.icon}
                        alt={item.alt}
                        width={38}
                        height={38}
                        className='p-0.5 rounded-full hover:scale-105 transition-all'
                        preview={false}
                        loading='lazy'
                      />
                    </Button>
                  </Col>
                ))}
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
                align='flex-start'
                className={paddingClass}
                gap={40}
              >
                <Text
                  className='!block !text-lg'
                  style={{ whiteSpace: 'pre-line' }}
                  color={dark ? 'white' : 'black'}
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
                    color={dark ? 'white' : 'black'}
                  >
                    {decs2}
                  </Text>
                )}

                {linkTo && (
                  <a href={linkTo} target='blank' rel='noopener noreferrer'>
                    <Text
                      color={dark ? '#b1e0f7' : '#2B6CB0'}
                      className='!underline !text-lg'
                    >
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
                  <Title level={4}>{lstNews}</Title>

                  <List
                    itemLayout='horizontal'
                    dataSource={recentNews}
                    renderItem={(item) => (
                      <List.Item
                        className='cursor-pointer'
                        onClick={() =>
                          hdlNaviNews({
                            id: item.id,
                            authorN: item.authorN,
                            newsDate: item.newsDate,
                          })
                        }
                      >
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

                  <Button type='text' onClick={() => navigate(ROUTES.NEWS)}>
                    <Title
                      className={`!m-0 ${dark ? '!text-white' : '!text-black'}`}
                      level={4}
                    >
                      {seeNews}
                    </Title>
                    <div className='w-full h-full !bg-blue-500 rounded-r-full flex items-center justify-center px-3'>
                      <RightOutlined className='!text-white !font-semibold' />
                    </div>
                  </Button>
                </div>

                <Divider />

                {/* RECENT EVENTS */}
                <div>
                  <Title level={4}>{lstEvs}</Title>

                  <List
                    itemLayout='horizontal'
                    dataSource={recentEv}
                    renderItem={(item) => (
                      <List.Item
                        className='cursor-pointer'
                        onClick={() =>
                          hdlNaviEvs({
                            id: item.id,
                            authorN: item.authorN,
                            evDate: item.evDate,
                          })
                        }
                      >
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
                          description={
                            <Text color={dark ? 'white' : 'black'}>
                              {item.evDate}
                            </Text>
                          }
                        />
                      </List.Item>
                    )}
                  />
                  <Button type='text' onClick={() => navigate(ROUTES.EVENTS)}>
                    <Title
                      className={`!m-0 ${dark ? '!text-white' : '!text-black'}`}
                      level={4}
                    >
                      {seeEvs}
                    </Title>
                    <div className='w-full h-full !bg-blue-500 rounded-r-full flex items-center justify-center px-3'>
                      <RightOutlined className='!text-white !font-semibold' />
                    </div>
                  </Button>
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
