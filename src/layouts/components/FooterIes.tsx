import Flex from 'antd/es/flex';
import Image from 'antd/es/image';
import { Footer } from 'antd/es/layout/layout';
import List from 'antd/es/list';
import Row from 'antd/es/row';
import Space from 'antd/es/space';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { socialLinks } from '../hooks';
import LogoFooter from '@/assets/imgs/ies_logo_horizo_dark.webp';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';
import { useDevice } from '@/hooks';

const FooterIes: React.FC = () => {
  const iconSize = 45;
  const { isDesktop: dk, isMobile: mb } = useDevice();
  const { t } = useTranslation('footerIes');
  const aboutLst = [
    { key: 1, label: t('news'), href: ROUTES.NEWS },
    { key: 2, label: t('events'), href: ROUTES.EVENTS },
    { key: 4, label: t('intro'), href: ROUTES.ABOUT },
  ];

  const sAndF = [
    { key: 1, label: t('hnou') },
    { key: 2, label: t('appliedInfo') },
    { key: 3, label: t('it') },
    { key: 4, label: t('officeAdmin') },
    { key: 5, label: t('marketing') },
  ];

  const quickLst = [
    { key: 1, label: t('eduDisc'), href: ROUTES.EDU_DISC },
    { key: 2, label: t('student'), href: ROUTES.REGUSTU },
    { key: 3, label: t('training'), href: ROUTES.ACADEMICS },
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
        {dk ? (
          <div>
            <div className='w-[90%] mx-auto pt-6'>
              {/* ── Top: Logo + 4 contacts ── */}
              <div className='grid grid-cols-[auto_1fr_1fr_1fr_1fr] items-start gap-x-10 pb-6'>
                <Image
                  src={LogoFooter}
                  alt=''
                  preview={false}
                  className='!w-auto !h-23'
                  loading='lazy'
                />
                <div className='text-start'>
                  <Title className='m-0 text-[#797a97]! text-start' level={4}>
                    Email
                  </Title>
                  <Text color='white' className='text-lg!'>
                    info@iescollege.edu.vn
                  </Text>
                </div>
                <div className='text-start'>
                  <Title className='m-0 text-[#797a97]! text-start' level={4}>
                    Hotline
                  </Title>
                  <Text color='white' className='text-lg!'>
                    0901.309.866
                  </Text>
                </div>
                <div className='text-start'>
                  <Title className='m-0 text-[#797a97]! text-start' level={4}>
                    {t('studentAffairs')}
                  </Title>
                  <Text color='white' className='text-lg!'>
                    0912.584.800
                  </Text>
                </div>
                <div className='text-start'>
                  <Title className='m-0 text-[#797a97]! text-start' level={4}>
                    {t('admissions')}
                  </Title>
                  <Text color='white' className='text-lg!'>
                    0901.309.866
                  </Text>
                </div>

                {/* ── Separator: spans all 5 cols ── */}
                <div className='col-span-5 h-px bg-[#797a97ad] my-6' />

                <div>
                  <Title level={4} className='m-0! text-white! text-start'>
                    {t('about')}
                  </Title>
                  <List
                    dataSource={aboutLst}
                    renderItem={(item) => (
                      <List.Item
                        className='text-[#797a97]! text-lg!'
                        key={item.key}
                        style={{ borderBottom: 'none' }}
                      >
                        <Link
                          to={item.href}
                          className='text-[#797a97]! hover:text-white! transition-colors!'
                        >
                          {item.label}
                        </Link>
                      </List.Item>
                    )}
                  />
                </div>
                <div>
                  <Title level={4} className='m-0! text-white! text-start'>
                    {t('quickAccess')}
                  </Title>
                  <List
                    dataSource={quickLst}
                    renderItem={(item) => (
                      <List.Item
                        className='text-[#797a97]! text-lg!'
                        key={item.key}
                        style={{ borderBottom: 'none' }}
                      >
                        <Link
                          to={item.href}
                          className='text-[#797a97]! hover:text-white! transition-colors!'
                        >
                          {item.label}
                        </Link>
                      </List.Item>
                    )}
                  />
                </div>

                <div>
                  <Title level={4} className='m-0! text-white! text-start'>
                    {t('schools')}
                  </Title>
                  <List
                    dataSource={sAndF}
                    renderItem={(item) => (
                      <List.Item
                        className='text-[#797a97]! text-lg!'
                        key={item.key}
                        style={{ borderBottom: 'none' }}
                      >
                        {item.label}
                      </List.Item>
                    )}
                  />
                </div>

                <div>
                  <Title level={4} className='m-0! text-white! text-start'>
                    {t('social')}
                  </Title>
                  <List
                    dataSource={socialLinks}
                    renderItem={(item) => (
                      <List.Item
                        key={item.key}
                        style={{ borderBottom: 'none' }}
                      >
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
                              className='p-1 rounded-full'
                              preview={false}
                              loading='lazy'
                            />
                            <Title level={4} className='m-0 text-[#797a97]!'>
                              {item.label}
                            </Title>
                          </Row>
                        </a>
                      </List.Item>
                    )}
                  />
                </div>
              </div>

              {/* ── Separator ── */}
            </div>
            <Flex
              justify='space-between'
              align='center'
              className='w-[90%]! mx-auto! mb-5! pt-6! border-t border-[#797a97ad]'
            >
              <Title level={4} className='text-[#797a97]! m-0!'>
                © 2022 IES College. All rights reserved.
              </Title>
              <div>
                <Text color='#797a97' className='!text-lg'>
                  {t('workingTime')}
                </Text>
                <Text color='#797a97' className='!text-lg !block'>
                  {t('address')}
                </Text>
              </div>
            </Flex>
          </div>
        ) : (
          <div className='px-5 py-6'>
            {/* Logo + contacts */}
            <div
              className={`${mb ? 'flex-col' : 'flex gap-x-20 justify-center! items-center!'} pb-5 border-b border-[#797a97ad]`}
            >
              <div>
                <Image
                  src={LogoFooter}
                  alt=''
                  preview={false}
                  className='w-auto! h-30!'
                  loading='lazy'
                />
              </div>
              <div className='space-y-1'>
                <Text color='white' className='block! text-lg!'>
                  info@iescollege.edu.vn
                </Text>
                <Text color='white' className='block! text-lg!'>
                  Hotline: 0901.309.866
                </Text>
              </div>
            </div>

            {/* Link columns — 2-col grid */}
            <div
              className={`grid gap-y-6 mt-5 ${mb ? 'grid-cols-2 ml-5' : 'grid-cols-4 ml-10'}`}
            >
              <div className='text-start'>
                <Title level={5} className='text-white! m-0! mb-2!'>
                  {t('about')}
                </Title>
                {aboutLst.map((item) => (
                  <Link
                    key={item.key}
                    to={item.href}
                    className='block! text-[#797a97]! text-sm! hover:text-white! transition-colors!'
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className='text-start'>
                <Title level={5} className='text-white! m-0! mb-2!'>
                  {t('quickAccess')}
                </Title>
                {quickLst.map((item) => (
                  <Link
                    key={item.key}
                    to={item.href}
                    className='block! text-[#797a97]! text-sm! hover:text-white! transition-colors!'
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className='text-start'>
                <Title level={5} className='text-white! m-0! mb-2!'>
                  {t('schools')}
                </Title>
                {sAndF.map((item) => (
                  <Text
                    key={item.key}
                    color='#797a97'
                    className='block! text-sm!'
                  >
                    {item.label}
                  </Text>
                ))}
              </div>

              <div className='text-start'>
                <Title level={5} className='text-white! m-0! mb-2!'>
                  {t('social')}
                </Title>
                <Space direction='vertical' size={8}>
                  {socialLinks.map(({ key, href, img, label }) => (
                    <a
                      key={key}
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-x-2'
                    >
                      <Image
                        src={img}
                        alt={label}
                        width={28}
                        height={28}
                        className='rounded-full p-0.5!'
                        preview={false}
                        loading='lazy'
                      />
                      <Text color='#797a97' className='text-sm!'>
                        {label}
                      </Text>
                    </a>
                  ))}
                </Space>
              </div>
            </div>

            {/* Copyright */}
            <div className='mt-6 pt-4 border-t border-[#797a97ad]'>
              <Text color='#797a97' className='block! text-lg!'>
                © 2026 IES College. All rights reserved.
              </Text>
              <Text color='#797a97' className='block! text-lg! mt-1!'>
                {t('address')}
              </Text>
            </div>
          </div>
        )}
      </div>
    </Footer>
  );
};

export default FooterIes;
