import { Col, Image, Layout, List, Row, Space } from 'antd';
import MediaQuery from 'react-responsive';

import fb from '@/assets/imgs/fb_logo.png';
import LogoFooter from '@/assets/imgs/ies_logo_text.png';
import ins from '@/assets/imgs/ins_logo.jpg';
import tiktok from '@/assets/imgs/titk_logo.webp';
import ytb from '@/assets/imgs/ytb_logo.png';
import zalo from '@/assets/imgs/zl_logo.png';
import { Text, Title } from '@/components';

const { Footer } = Layout;

const FooterIes: React.FC = () => {
  const iconSize = 45;

  const aboutLst = [
    {
      key: 1,
      label: 'Effort & Perseverance',
    },
    {
      key: 2,
      label: 'Creativity',
    },
    { key: 3, label: 'Responsibility' },
    {
      key: 4,
      label:
        '98 Pham Van Chieu Street, Thong Tay Hoi Ward, Ho Chi Minh City, Vietnam',
    },
    {
      key: 5,
      label: 'Monday – Saturday: 8:00 AM – 12:00 PM, 1:00 PM – 5:00 PM',
    },
  ];

  const socialLinks = [
    { key: 1, href: 'https://zalo.me/0948987536', img: zalo, label: 'Zalo' },
    { key: 2, href: 'https://www.instagram.com', img: ins, label: 'Instagram' },

    { key: 3, href: 'https://facebook.com', img: fb, label: 'Facebook' },

    { key: 4, href: 'https://tiktok.com', img: tiktok, label: 'Tiktok' },

    { key: 5, href: 'https://youtube.com', img: ytb, label: 'Youtube' },
  ];

  const sAndF = [
    { key: 1, label: 'Hanoi Open University' },
    { key: 2, label: 'Applied Informatics' },
    { key: 3, label: 'Information Technology' },
    { key: 4, label: 'Office Administration' },
    { key: 5, label: 'Marketing' },
  ];

  return (
    <Footer
      className='!p-0'
      style={{
        background: 'linear-gradient(0deg, #ffffff, #f3f3f3)',
        textAlign: 'center',
        width: '100%',
        zIndex: 10,
      }}
    >
      <div className='bg-[#010433] py-3'>
        <MediaQuery minWidth={1025}>
          <div className='!flex justify-between !items-center w-[90%] mx-auto border-b border-[#797a97ad]'>
            <Row justify={'space-evenly'} align={'middle'} className='gap-x-15'>
              <Image
                src={LogoFooter}
                alt=''
                preview={false}
                className='!w-60 !h-35'
              />
              <Col>
                <Title className='m-0 !text-[#797a97] text-start' level={4}>
                  Email
                </Title>
                <Text color='white' className='!text-lg'>
                  tuyensinh@cnktdn.edu.vn
                </Text>
              </Col>
              <Col>
                <Title className='m-0 !text-[#797a97] text-start' level={4}>
                  Hotline
                </Title>
                <Text color='white' className='!text-lg'>
                  0901.309.866
                </Text>
              </Col>
            </Row>
            <Row justify={'space-between'} className='gap-x-40'>
              <Col className='!text-start'>
                <Title className='m-0 !text-[#797a97] text-start' level={4}>
                  Intermediate diploma
                </Title>
                <Text color='white' className='!text-lg'>
                  0901.309.866
                </Text>
              </Col>
              <Col className='!text-start'>
                <Title className='m-0 !text-[#797a97] text-start' level={4}>
                  University bridging program
                </Title>
                <Text color='white' className='!text-lg'>
                  0822.655.259 / 0969.249.588
                </Text>
              </Col>
            </Row>
          </div>
          <div className='!flex justify-between !items-start w-[90%] mx-auto mt-10'>
            <Col>
              <Title level={4} className='!m-0 !text-white text-start'>
                About IES
              </Title>
              <List
                dataSource={aboutLst}
                renderItem={(item) => (
                  <List.Item
                    className='!text-[#797a97]'
                    key={item.key}
                    style={{ borderBottom: 'none' }}
                  >
                    {item.label}
                  </List.Item>
                )}
              />
            </Col>

            <Col className='mr-25'>
              <Title level={4} className='!m-0 !text-white text-start'>
                Schools & Faculties
              </Title>
              <List
                dataSource={sAndF}
                renderItem={(item) => (
                  <List.Item
                    className='!text-[#797a97]'
                    key={item.key}
                    style={{ borderBottom: 'none' }}
                  >
                    {item.label}
                  </List.Item>
                )}
              />
            </Col>

            <Col className='mr-15'>
              <Title level={4} className='!m-0 !text-white text-start'>
                Social
              </Title>
              <List
                dataSource={socialLinks}
                renderItem={(item) => (
                  <List.Item key={item.key} style={{ borderBottom: 'none' }}>
                    <a
                      key={item.key}
                      href={item.href}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Row
                        justify={'space-between'}
                        align={'middle'}
                        className='gap-x-5'
                      >
                        <Image
                          src={item.img}
                          alt=''
                          width={iconSize}
                          height={iconSize}
                          className='p-[4px] rounded-full'
                          preview={false}
                        />
                        <Title level={5} className='m-0 !text-[#797a97]'>
                          {item.label}
                        </Title>
                      </Row>
                    </a>
                  </List.Item>
                )}
              />
            </Col>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1024}>
          <div className='px-4 py-4 text-center'>
            {/* Logo */}
            <Image src={LogoFooter} alt='' preview={false} width={140} />

            {/* Contact */}
            <div className='mt-3'>
              <Text color='white' className='block text-sm'>
                Email: tuyensinh@cnktdn.edu.vn
              </Text>
              <Text color='white' className='block text-sm'>
                Hotline: 0901.309.866
              </Text>
            </div>

            {/* Social */}
            <div className='mt-4'>
              <Space size='middle'>
                {socialLinks.map(({ href, img }, index) => (
                  <a
                    key={index}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src={img}
                      alt=''
                      width={32}
                      height={32}
                      className='rounded-full'
                      preview={false}
                    />
                  </a>
                ))}
              </Space>
            </div>

            {/* About */}
            <div className='mt-6 text-left'>
              <Title level={5} className='!text-white'>
                About IES
              </Title>
              {aboutLst.map((item) => (
                <Text key={item.key} className='block !text-[#797a97] text-sm'>
                  {item.label}
                </Text>
              ))}
            </div>

            {/* Schools */}
            <div className='mt-6 text-left'>
              <Title level={5} className='!text-white'>
                Schools & Faculties
              </Title>
              {sAndF.map((item) => (
                <Text key={item.key} className='block !text-[#797a97] text-sm'>
                  {item.label}
                </Text>
              ))}
            </div>
          </div>
        </MediaQuery>
      </div>
    </Footer>
  );
};

export default FooterIes;
