import Button from 'antd/es/button';
import Col from 'antd/es/col';
import Row from 'antd/es/row';
import { motion } from 'framer-motion';
import { lazy, Suspense, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useBoaData } from '../hooks';
import BOA_BG from '@/assets/imgs/boa_bg.webp';
import { IesClSection, Text, Title } from '@/components';
import { LazySec, useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const ContactKey = lazy(() => import('@/pages/home/components/ContactKey'));
const BoaMemberCard = lazy(
  () => import('@/pages/about/components/BoaMemberCard'),
);
const BoaSpotlight = lazy(
  () => import('@/pages/about/components/BoaSpotlight'),
);

const BoA: React.FC = () => {
  const { t } = useTranslation('boa');
  const { isDark } = useUserStore();
  const { boardOfTrustees, adminBoard, foundingBoard } = useBoaData();
  const { device } = useDevice();
  const dk = device === 'desktop';
  const px = dk ? 'px-20' : 'px-5';

  const scrollTo = useCallback((id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const sectionGo = useMemo(
    () => [
      { label: t('botTitle'), id: 'boa-bot' },
      { label: t('abTitle'), id: 'boa-ab' },
      { label: t('fbTitle'), id: 'boa-fb' },
    ],
    [t],
  );

  return (
    <IesClSection id='boa' layout='simple' divider={false}>
      {/* ── Hero header ── */}
      <div
        className={`relative ${px} pt-70! pb-30!`}
        style={{
          backgroundImage: [
            'linear-gradient(to bottom, transparent 55%, rgba(5, 4, 20, 0.95) 100%)',
            'linear-gradient(135deg, rgba(12, 10, 30, 0.92) 0%, rgba(71, 70, 105, 0.78) 60%, rgba(30, 20, 60, 0.90) 100%)',
            `url(${BOA_BG})`,
          ].join(', '),
          backgroundSize: 'cover, cover, cover',
          backgroundPosition: 'center, center, center',
          borderBottom: '1px solid rgba(255,255,255,0.10)',
        }}
      >

        {/* Content — z-10 above overlay */}
        <motion.div
          className='relative z-10'
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text
            color='#a8a6d2'
            className='text-lg! font-semibold! uppercase! tracking-widest! block! mb-4!'
          >
            IES — {t('sectionTitle')}
          </Text>
          <Title
            level={dk ? 1 : 2}
            className='m-0! leading-tight! text-white!'
            style={{ maxWidth: 640 }}
          >
            {t('sectionTitle')}
          </Title>
          <Text
            color='rgba(255,255,255,0.72)'
            className='block! text-lg! leading-8! max-w-2xl! mt-5'
          >
            {t('intro')}
          </Text>

          {/* Section anchor links */}
          <div className='flex flex-wrap gap-3 mt-8'>
            {sectionGo.map(({ label, id }) => (
              <Button
                type='default'
                key={id}
                onClick={() => scrollTo(id)}
                className={`
                  rounded-full! h-auto! shadow-none! cursor-pointer
                  px-6! py-2.5! text-lg! font-medium! tracking-wider!
                  transition-all! duration-300! ease-in-out!
                  hover:shadow-lg! hover:-translate-y-px!
                  border! border-white/40! bg-transparent! text-white!
                  hover:bg-white! hover:text-[#474669]! hover:border-white!
                `}
              >
                {label}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Board of Trustees ── */}
      <section
        id='boa-bot'
        className={`${isDark ? 'bg-gray-900' : 'bg-[#fdfaf6]'} ${px} py-16`}
      >
        <Title
          level={1}
          className={`m-0! mb-10! ${isDark ? 'text-white!' : 'text-gray-900!'}`}
        >
          {t('botTitle')}
        </Title>
        <BoaSpotlight
          section={boardOfTrustees}
          dark={isDark}
          accentLine='#474669'
        />
      </section>

      {/* ── Quote ── */}
      <div className='bg-[#111827] py-20 px-6'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='max-w-2xl mx-auto text-center space-y-4'
        >
          <Text
            color='white'
            className={`italic! leading-10! font-light! block! ${dk ? 'text-2xl!' : 'text-lg!'}`}
          >
            {t('quote')}
          </Text>
          <Text color='#6b7280' className='text-lg! font-medium! block!'>
            {t('quoteAuthor')}
          </Text>
        </motion.div>
      </div>

      {/* ── Admin Board ── */}
      <section
        id='boa-ab'
        className={`${isDark ? 'bg-gray-800' : 'bg-[#ede8de]'} ${px} py-16`}
      >
        <Text
          color='#474669'
          className='text-xs! font-semibold! uppercase! tracking-widest! block! mb-2!'
        >
          {t('abTitle')}
        </Text>
        <Title
          level={2}
          className={`m-0! mb-10! ${isDark ? 'text-white!' : 'text-gray-900!'}`}
        >
          {t('abTitle')}
        </Title>

        <Suspense fallback={false}>
          <BoaSpotlight
            section={adminBoard}
            dark={isDark}
            accentLine='#166534'
          />
        </Suspense>
      </section>

      {/* ── Founding Board ── */}
      <section
        id='boa-fb'
        className={`${isDark ? 'bg-gray-900' : 'bg-[#f5f0e8]'} ${px} py-16`}
      >
        <Text
          color='#474669'
          className='text-xs! font-semibold! uppercase! tracking-widest! block! mb-2!'
        >
          {t('fbTitle')}
        </Text>
        <Title
          level={2}
          className={`m-0! mb-10! ${isDark ? 'text-white!' : 'text-gray-900!'}`}
        >
          {t('fbTitle')}
        </Title>
        <Row gutter={[24, 32]}>
          {foundingBoard.map((m) => (
            <Col key={m.id} xs={12} sm={8} md={6} lg={4}>
              <Suspense fallback={false}>
                <BoaMemberCard member={m} dark={isDark} />
              </Suspense>
            </Col>
          ))}
        </Row>
      </section>

      <Suspense fallback={null}>
        <LazySec Component={ContactKey} />
      </Suspense>
    </IesClSection>
  );
};

export default BoA;
