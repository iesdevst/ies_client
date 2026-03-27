import { ArrowUpOutlined, LinkOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Image, Row } from 'antd';
import { useCallback } from 'react';
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

const srcollData = [
  {
    label: 'Why Educore',
    img: WSB,
    to: `${ROUTES.PARTNERSHIP}#why-choose-hou`,
    idTo: 'why-choose-hou',
  },
  {
    label: 'Policy Note',
    img: PNSB,
    to: `${ROUTES.PARTNERSHIP}#policyNote`,
    idTo: 'policyNote',
  },
  {
    label: 'Skip Exam',
    img: SESB,
    to: `${ROUTES.PARTNERSHIP}#skip-exam`,
    idTo: 'skip-exam',
  },
  {
    label: 'Student Void',
    img: SVSB,
    to: `${ROUTES.PARTNERSHIP}#stu-void`,
    idTo: 'stu-void',
  },
  {
    label: 'Us Stat',
    img: SSB,
    to: `${ROUTES.PARTNERSHIP}#partnership-prog`,
    idTo: 'partnership-prog',
  },
  {
    label: 'Consult With Us',
    img: CUSB,
    to: `${ROUTES.PARTNERSHIP}#partnership-regis`,
    idTo: 'partnership-regis',
  },
];

interface IPartnershipIntro {
  openRegisInSec: () => void;
}

const PartnershipIntro: React.FC<IPartnershipIntro> = (props) => {
  const { openRegisInSec } = props;
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
  return (
    <IesClSection
      id='partnership-intro'
      layout='simple'
      divider={false}
      children={
        <section>
          <div className='grid grid-cols-2 !py-15 !px-20'>
            <Flex vertical justify='flex-start' align='flex-start' gap={20}>
              <Row justify={'center'} align={'middle'} className='gap-x-2'>
                <LinkOutlined className='!text-[#1667d9]' />
                <Title className='!m-0 !text-[#1667d9]' level={5}>
                  Admissions Partnership
                </Title>
              </Row>
              <div>
                <Title className='!m-0 !text-5xl'>HANOI OPEN UNIVERSITY</Title>
                <Title className='!m-0 !text-5xl'>
                  E-LEARNING TRAINING CENTER
                </Title>
              </div>
              <Col>
                <Text className='!text-lg'>
                  No need to go to campus — still get a university degree
                </Text>
                <br />
                <Text className='!text-lg'>
                  Is a university degree holding back your dreams?
                </Text>
              </Col>
              <Row justify={'center'} align={'bottom'} className='gap-x-10'>
                <Image src={OUP} preview={false} className='!w-20 !h-20' />
                <Button
                  type='default'
                  className='!border-[#1667d9] !text-[#1667d9] !bg-white !rounded-full !py-6 !px-20'
                  size='large'
                  onClick={openRegisInSec}
                >
                  Register Now
                </Button>
              </Row>
            </Flex>
            <div className='grid grid-cols-3 gap-y-5'>
              {srcollData.map((scroll) => (
                <Flex
                  key={scroll.idTo}
                  justify='end'
                  align='flex-start'
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
                    className='!rounded-xl !w-2/3 !h-full !flex !items-center !justify-center !block'
                    onClick={(e) => {
                      e.preventDefault();
                      hdlScrollSec(scroll.idTo);
                    }}
                  >
                    <Text
                      className='!font-bold !inline-block hover:!underline !bg-white !px-1 !opacity-80 !rounded-xl'
                      color='#0e70eb'
                    >
                      {scroll.label} <ArrowUpOutlined className='!rotate-45' />
                    </Text>
                  </ManualLink>
                </Flex>
              ))}
            </div>
          </div>
        </section>
      }
      className='bg-white'
    />
  );
};

export default PartnershipIntro;
