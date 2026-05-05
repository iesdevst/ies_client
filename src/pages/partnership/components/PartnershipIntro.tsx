import { ArrowUpOutlined, LinkOutlined } from '@ant-design/icons';
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

const ManualLink = (props: LinkProps) => <Link {...props} />;

interface Props {
  openRegisInSec: () => void;
  dark: boolean;
}

const PartnershipIntro: React.FC<Props> = ({ openRegisInSec, dark }) => {
  const mb = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const { t } = useTranslation('partnershipIntro');
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = useCallback(
    (id: string) => {
      if (location.pathname === ROUTES.PARTNERSHIP) {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        navigate(ROUTES.PARTNERSHIP, { state: { scrollToId: id } });
      }
    },
    [location.pathname, navigate],
  );

  const items = [
    { label: t('why'), img: WSB, id: 'why-choose-hou' },
    { label: t('policy'), img: PNSB, id: 'policyNote' },
    { label: t('skip'), img: SESB, id: 'skip-exam' },
    { label: t('stu'), img: SVSB, id: 'stu-void' },
    { label: t('stat'), img: SSB, id: 'partnership-prog' },
    { label: t('consult'), img: CUSB, id: 'partnership-regis' },
  ];

  return (
    <IesClSection
      id='partnership-intro'
      layout='simple'
      divider={false}
      className={dark ? '!bg-[#212223]' : 'bg-white'}
      height={mb || tablet ? '25vh' : ''}
      children={
        <section>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ${
              mb ? 'pt-6' : tablet ? 'p-7' : 'py-15 px-20'
            }`}
          >
            {/* LEFT */}
            <div className={`flex flex-col gap-4 ${mb ? 'pl-3 mb-6' : 'mr-3'}`}>
              <div className='flex items-center gap-2'>
                <LinkOutlined className='text-[#1667d9]' />
                <Title level={5} className='!m-0 !text-[#1667d9]'>
                  {t('adm')}
                </Title>
              </div>

              <Title className={`!m-0 ${mb ? '!text-2xl' : '!text-5xl'}`}>
                {t('uni')}
              </Title>

              <div>
                <Text
                  color={dark ? 'white' : ''}
                  className={mb ? '!text-md' : '!text-lg'}
                >
                  {t('noCampus')}
                </Text>
                <Text
                  color={dark ? 'white' : ''}
                  className={mb ? '!text-md' : '!text-lg'}
                >
                  {t('qDream')}
                </Text>
              </div>

              <div className='flex items-end justify-between w-full gap-4'>
                <img
                  src={OUP}
                  className={`${
                    dark ? 'bg-white p-1 rounded-xl' : ''
                  } ${mb ? 'w-12 h-12' : tablet ? 'w-15 h-15' : 'w-20 h-20'}`}
                />

                <button
                  onClick={openRegisInSec}
                  className={`border border-[#1667d9] text-[#1667d9] font-bold bg-white rounded-full ${
                    mb ? 'px-6 py-2' : tablet ? 'px-10 py-3' : 'px-16 py-4'
                  }`}
                >
                  {t('reg')}
                </button>
              </div>
            </div>

            {/* RIGHT GRID */}
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
              {items.map((item) => (
                <ManualLink
                  key={item.id}
                  to={`${ROUTES.PARTNERSHIP}#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.id);
                  }}
                  className='relative h-24 rounded-xl flex items-center justify-center overflow-hidden'
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <span className='bg-white/80 text-[#0e70eb] px-2 py-1 rounded-lg font-bold'>
                    {item.label} <ArrowUpOutlined className='rotate-45' />
                  </span>
                </ManualLink>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
};

export default PartnershipIntro;
