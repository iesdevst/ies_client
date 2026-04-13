import { ArrowUpOutlined, LinkOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Image, Row } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import {
  Link,
  useLocation,
  useNavigate,
  type LinkProps,
} from 'react-router-dom';
import CUSB from '@/assets/imgs/contact_us_sc_but.jpeg';
import OUP from '@/assets/imgs/open_uni_partnership.png';
import PNSB from '@/assets/imgs/policy_note_sc_but.jpeg';
import SESB from '@/assets/imgs/skip_exam_sc_but.jpeg';
import SSB from '@/assets/imgs/stat_sc_but.jpeg';
import SVSB from '@/assets/imgs/stu_void_sc_but.jpg';
import WSB from '@/assets/imgs/why_choose_sc_but.jpg';
import { IesClSection, Text, Title } from '@/components';
import { ROUTES } from '@/constants';

const ManualLink: React.FC<LinkProps> = (props) => {
  const { ...linkProps } = props || {};
  return <Link {...linkProps} />;
};

interface IPartnershipIntro {
  openRegisInSec: () => void;
  dark: boolean;
}

const PartnershipIntro: React.FC<IPartnershipIntro> = (props) => {
  const { openRegisInSec, dark } = props;
  const mb = useMediaQuery({ maxWidth: 767 });
  const { t } = useTranslation('partnershipIntro');
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const navigate = useNavigate();
  const location = useLocation();

  const hdlScrollSec = useCallback(
    (id: string) => {
      if (location.pathname === ROUTES.PARTNERSHIP) {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        navigate(ROUTES.PARTNERSHIP, { state: { scrollToId: id } });
      }
    },
    [location.pathname, navigate],
  );

  const srcollData = [
    {
      label: t('why'),
      img: WSB,
      to: `${ROUTES.PARTNERSHIP}#why-choose-hou`,
      idTo: 'why-choose-hou',
    },
    {
      label: t('policy'),
      img: PNSB,
      to: `${ROUTES.PARTNERSHIP}#policyNote`,
      idTo: 'policyNote',
    },
    {
      label: t('skip'),
      img: SESB,
      to: `${ROUTES.PARTNERSHIP}#skip-exam`,
      idTo: 'skip-exam',
    },
    {
      label: t('stu'),
      img: SVSB,
      to: `${ROUTES.PARTNERSHIP}#stu-void`,
      idTo: 'stu-void',
    },
    {
      label: t('stat'),
      img: SSB,
      to: `${ROUTES.PARTNERSHIP}#partnership-prog`,
      idTo: 'partnership-prog',
    },
    {
      label: t('consult'),
      img: CUSB,
      to: `${ROUTES.PARTNERSHIP}#partnership-regis`,
      idTo: 'partnership-regis',
    },
  ];

  return (
    <IesClSection
      id='partnership-intro'
      layout='simple'
      divider={false}
      children={
        <section>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ${mb ? '!pt-6' : isTablet ? 'p-7' : '!py-15 !px-20'}`}
          >
            <Flex
              vertical
              justify='flex-start'
              align='flex-start'
              gap={!mb ? 20 : 10}
              className={`${!mb ? '!mr-3' : '!pl-3 !mb-6'}`}
            >
              <Row justify={'center'} align={'middle'} className='gap-x-2'>
                <LinkOutlined className='!text-[#1667d9]' />
                <Title className='!m-0 !text-[#1667d9]' level={5}>
                  {t('adm')}
                </Title>
              </Row>
              <div>
                <Title className={`!m-0 ${!mb ? '!text-5xl' : '!text-2xl'}`}>
                  {t('uni')}
                </Title>
              </div>
              <Col>
                <Text
                  color={dark ? 'white' : ''}
                  className={`!block ${!mb ? '!text-lg' : '!text-md'}`}
                >
                  {t('noCampus')}
                </Text>

                <Text
                  color={dark ? 'white' : ''}
                  className={`!block ${!mb ? '!text-lg' : '!text-md'}`}
                >
                  {t('qDream')}
                </Text>
              </Col>
              <Row
                justify={!mb ? 'start' : isTablet ? 'center' : 'space-between'}
                align={'bottom'}
                className={`!w-full ${!mb ? '!gap-x-10 ' : 'px-2'}`}
              >
                <Image
                  src={OUP}
                  preview={false}
                  className={`${dark ? 'bg-white p-1 !rounded-xl' : ''} ${mb ? '!w-12 !h-12' : isTablet ? '!w-15  !h-15' : '!w-20 !h-20'}`}
                />
                <Button
                  type='default'
                  className={`!border-[#1667d9] !text-[#1667d9] !font-bold !bg-white !rounded-full ${mb ? '!px-8 !py-4' : isTablet ? '!px-15 !py-4' : '!py-6 !px-20'}`}
                  size={!mb ? 'large' : 'small'}
                  onClick={openRegisInSec}
                >
                  {t('reg')}
                </Button>
              </Row>
            </Flex>
            <Row gutter={!mb ? [16, 20] : [0, 25]}>
              {srcollData.map((scroll) => (
                <Col
                  key={scroll.idTo}
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  className={`${!mb ? '' : 'px-3'}`}
                >
                  <Flex
                    justify='center'
                    align='stretch'
                    className='!w-full !h-full'
                  >
                    <ManualLink
                      to={scroll.to}
                      style={{
                        backgroundImage: `url(${scroll.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                      type='text'
                      className={`!rounded-xl !w-full !h-full !flex !items-center !justify-center ${!mb ? '' : 'py-6'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        hdlScrollSec(scroll.idTo);
                      }}
                    >
                      <Text
                        className='!font-bold hover:!underline !bg-white !px-2 py-1 !opacity-80 !rounded-xl'
                        color='#0e70eb'
                      >
                        {scroll.label}{' '}
                        <ArrowUpOutlined className='!rotate-45' />
                      </Text>
                    </ManualLink>
                  </Flex>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      }
      className={`${dark ? '!bg-[#212223]' : 'bg-white'}`}
      height={mb || isTablet ? '25vh' : ''}
    />
  );
};

export default PartnershipIntro;
