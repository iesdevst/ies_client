import { Col, Image, Layout, List, Row, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import MediaQuery from 'react-responsive';

import fb from '@/assets/imgs/fb_logo.png';
import LogoFooter from '@/assets/imgs/ies_logo_dark.png';
import zalo from '@/assets/imgs/zl_logo.png';
import { Text, Title } from '@/components';

const { Footer } = Layout;

const FooterIes: React.FC = () => {
  const iconSize = 45;
  const { t } = useTranslation('footerIes');
  const aboutLst = [
    {
      key: 1,
      label: t('effort'),
    },
    {
      key: 2,
      label: t('creativity'),
    },
    { key: 3, label: t('responsibility') },
    {
      key: 4,
      label: t('address'),
    },
    {
      key: 5,
      label: t('workingTime'),
    },
  ];

  const socialLinks = [
    { key: 1, href: 'https://zalo.me/0901309866', img: zalo, label: 'Zalo' },
    {
      key: 2,
      href: 'https://www.facebook.com/iescollege.edu.vn',
      img: fb,
      label: 'Facebook',
    },
  ];

  const sAndF = [
    { key: 1, label: t('hnou') },
    { key: 2, label: t('appliedInfo') },
    { key: 3, label: t('it') },
    { key: 4, label: t('officeAdmin') },
    { key: 5, label: t('marketing') },
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
                  info@iescollege.edu.vn
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
                  {t('studentAffairs')}
                </Title>
                <Text color='white' className='!text-lg'>
                  0912.584.800
                </Text>
              </Col>
              <Col className='!text-start'>
                <Title className='m-0 !text-[#797a97] text-start' level={4}>
                  {t('admissions')}
                </Title>
                <Text color='white' className='!text-lg'>
                  0901.309.866
                </Text>
              </Col>
            </Row>
          </div>
          <div className='!flex justify-between !items-start w-[90%] mx-auto mt-10'>
            <Col>
              <Title level={4} className='!m-0 !text-white text-start'>
                {t('about')}
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
                {t('schools')}
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
                {t('social')}
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
                Email: info@iescollege.edu.vn
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
                {t('about')}
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
                {t('schools')}
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
