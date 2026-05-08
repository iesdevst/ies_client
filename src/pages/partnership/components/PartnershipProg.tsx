import BankOutlined from '@ant-design/icons/BankOutlined';
import BookOutlined from '@ant-design/icons/BookOutlined';
import CalculatorOutlined from '@ant-design/icons/CalculatorOutlined';
import DollarOutlined from '@ant-design/icons/DollarOutlined';
import GlobalOutlined from '@ant-design/icons/GlobalOutlined';
import LaptopOutlined from '@ant-design/icons/LaptopOutlined';
import ShopOutlined from '@ant-design/icons/ShopOutlined';
import TeamOutlined from '@ant-design/icons/TeamOutlined';

import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import { IesClSection, Text, Title } from '@/components';

interface Props {
  dark: boolean;
}

const PartnershipProg: React.FC<Props> = ({ dark }) => {
  const { t } = useTranslation('partnershipProg');

  const mb = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // ⚡ memo nhẹ (ok giữ vì có i18n)
  const stats = [
    { num: '20.000+', desc: t('s1d') },
    { num: '169+', desc: t('s2d') },
    { num: '98%', desc: t('s3d') },
    { num: '96%', desc: t('s4d') },
  ];

  const majors = [
    {
      group: t('g1'),
      items: [
        { label: t('g1i1'), icon: <ShopOutlined /> },
        { label: t('g1i2'), icon: <TeamOutlined /> },
        { label: t('g1i3'), icon: <CalculatorOutlined /> },
        { label: t('g1i4'), icon: <DollarOutlined /> },
      ],
    },
    {
      group: t('g2'),
      items: [{ label: t('g2i1'), icon: <LaptopOutlined /> }],
    },
    {
      group: t('g3'),
      items: [
        { label: t('g3i1'), icon: <BankOutlined /> },
        { label: t('g3i2'), icon: <BookOutlined /> },
      ],
    },
    {
      group: t('g4'),
      items: [
        { label: t('g4i1'), icon: <GlobalOutlined /> },
        { label: t('g4i2'), icon: <GlobalOutlined /> },
      ],
    },
    {
      group: t('g5'),
      items: [
        { label: t('g5i1'), icon: <GlobalOutlined /> },
        { label: t('g5i2'), icon: <ShopOutlined /> },
      ],
    },
  ];

  return (
    <IesClSection
      id='partnership-prog'
      layout='simple'
      divider={false}
      children={
        <section className={`py-20 ${dark ? 'text-white' : ''}`}>
          {/* STATS */}
          <div className='text-center mb-10'>
            <Title level={mb ? 4 : 3}>{t('st')}</Title>

            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 ${
                tablet ? 'px-10' : mb ? 'px-4' : 'px-20'
              }`}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className='w-36 h-36 mx-auto rounded-full bg-[#5990cb] flex flex-col items-center justify-center text-white'
                >
                  <Title level={2} className='!m-0 !text-white'>
                    {s.num}
                  </Title>
                  <Text color='white'>{s.desc}</Text>
                </div>
              ))}
            </div>
          </div>

          {/* MAJORS */}
          <div className={`${mb || tablet ? 'px-4' : 'px-20'}`}>
            <Title level={3} className='text-center mb-10'>
              {t('pt')}
            </Title>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {majors.map((group, idx) => (
                <div key={idx}>
                  <Title level={4} className='!text-[#5990cb] !font-bold'>
                    {group.group}
                  </Title>

                  <div className='space-y-2 mt-2'>
                    {group.items.map((item, i) => (
                      <div key={i} className='flex items-center gap-2'>
                        <span className='text-[#5990cb]'>{item.icon}</span>
                        <Text color={dark ? 'white' : ''}>{item.label}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
};

export default PartnershipProg;
